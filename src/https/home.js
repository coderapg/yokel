// home请求相关接口封装
import { request } from './request'

export function getHomeMultidata () {
  return request({
    url: '/home/multidata'
  })
}
