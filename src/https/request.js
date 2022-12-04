import axios from 'axios'

export function request (config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })
  // 添加请求拦截器
  instance.interceptors.request.use(request => {
    return request
  })
  // 添加响应拦截器
  instance.interceptors.response.use(response => {
    return response
  })
  // instance本身就是一个promise对象，可以直接return出去
  return instance(config)
}
