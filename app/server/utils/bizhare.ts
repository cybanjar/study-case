export function getBizhareUrl(
  path: string
) {
  const config = useRuntimeConfig()

  return `${config.apiBaseUrl}${path}`
}
