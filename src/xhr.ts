import { AxiosRequestConfig } from './types'

export default function(config: AxiosRequestConfig): void {
  let { method = 'get', data = null, url } = config
  let request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
