// Based on https://github.com/FastGitORG/fgit-deno/blob/3db775ade15b91429705e277dcd010e3206d8315/index.ts
import isUrl from 'is-url-superb'

const GITHUB = 'github.com'
const GITHUB_ARCHIVE = 'codeload.github.com'
const GITHUB_RAW = 'raw.githubusercontent.com'
const FASTGIT = 'hub.fastgit.org'
// Deprecrated: codeload.fastgit.org
const FASTGIT_ARCHIVE = 'archive.fastgit.org'
const FASTGIT_RAW = 'raw.fastgit.org'
const FASTGIT_RELEASES = 'download.fastgit.org'

export function fastgit(raw) {
  if (!isUrl(raw)) return raw

  const url = new URL(raw)
  const { hostname, pathname } = url
  const path = pathname.split('/')
  const type = path[3]

  switch (hostname) {
    case GITHUB:
      switch (type) {
        case 'archive':
          url.hostname = FASTGIT_ARCHIVE
          break
        case 'releases':
          url.hostname = FASTGIT_RELEASES
          break
        default:
          url.hostname = FASTGIT
      }
      break
    case GITHUB_ARCHIVE:
      path[3] = 'archive'
      path[4] += '.zip'

      url.hostname = FASTGIT_ARCHIVE
      url.pathname = path.join('/')
      break
    case GITHUB_RAW:
      url.hostname = FASTGIT_RAW
  }

  return url.toString()
}

// `topjohnwu.github.io` is `docs` folder of Magisk repo published under GitHub Pages
export const magisk = (raw) =>
  raw.replace(
    'topjohnwu.github.io/Magisk',
    'github.com/topjohnwu/Magisk/raw/master/docs'
  )

export function jsdelivr(raw) {
  const url = new URL(raw)
  url.host = 'cdn.jsdelivr.net'
  url.pathname = `/gh${url.pathname.replace('/raw/', '@')}`

  return url.toString()
}

export function save(content, filename) {
  const blob = new Blob([content])
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = filename

  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

export function copy(event, selector) {
  const target = selector ? event.target.closest(selector) : event.target
  navigator.clipboard
    .writeText(target.textContent)
    .then(() => alert('复制成功！'))
}
