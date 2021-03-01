import got from 'got'
import { NowRequest, NowResponse } from '@vercel/node'
import { fastgit, magisk } from '../docs/.vuepress/utils'

interface Manifest {
  app: App
  magisk: Magisk
  uninstaller: Uninstaller
  stub: Stub
}

interface App extends Stub {
  version: string
  note: string
}

interface Magisk extends App {
  md5: string
}

interface Stub extends Uninstaller {
  versionCode: string
}

interface Uninstaller {
  link: string
}

const mirrors = {
  fastgit,
}

export default async (
  { query: { channel, mirror } }: NowRequest,
  res: NowResponse
) => {
  if (Array.isArray(mirror) || !(mirror in mirrors))
    return res.status(400).send('请指定有效的镜像！')

  const manifest = await got(
    `https://raw.githubusercontent.com/topjohnwu/magisk_files/${
      channel === 'beta'
        ? 'master/beta'
        : channel === 'canary'
        ? 'canary/canary'
        : 'master/stable'
    }.json`
  ).json<Manifest>()

  if (channel === 'canary') {
    for (const key of ['magisk', 'app', 'stub'])
      manifest[key].link = mirrors[mirror](
        `https://raw.githubusercontent.com/topjohnwu/magisk_files/canary/${manifest[key].link}`
      )

    // Uninstaller was removed so we grab it from the latest beta
    // https://github.com/topjohnwu/magisk_files/commit/b7b0125befe5d4f630a21c060652b4910b29f35b#diff-0f61e17d2d47cd7ed4cbc52c4578d76c6dc4c087a979b6fa5a58b27ed0e45e5c
    manifest['uninstaller'].link = mirrors[mirror](
      (
        await got(
          'https://raw.githubusercontent.com/topjohnwu/magisk_files/master/stable.json'
        ).json<Manifest>()
      ).uninstaller.link
    )

    for (const key of ['magisk', 'app'])
      manifest[key].note = mirrors[mirror](
        `https://raw.githubusercontent.com/topjohnwu/magisk_files/canary/${manifest[key].note}`
      )
  } else {
    for (const key of Object.keys(manifest))
      manifest[key].link = mirrors[mirror](manifest[key].link)

    for (const key of ['magisk', 'app'])
      manifest[key].note = mirrors[mirror](magisk(manifest[key].note))
  }

  res.json(manifest)
}
