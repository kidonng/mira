export function jsdelivr(rawUrl) {
  const url = new URL(rawUrl)
  url.host = 'cdn.jsdelivr.net'
  url.pathname = `/gh${url.pathname.replace(/\/(blob|raw)\//, '@')}`

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
