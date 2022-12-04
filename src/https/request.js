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
  }, error => {
    console.log('请求发送时错误', error)
  })
  // 添加响应拦截器
  instance.interceptors.response.use(response => {
    return response.data
  }, error => {
    console.log('接收响应时错误', error)
  })
  // 发送真正的网络请求
  // instance本身就是一个promise对象，可以直接return出去
  return instance(config)
}
