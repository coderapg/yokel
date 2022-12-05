// home请求相关接口封装
import { request } from './request'

// 请求首页多条数据(banner、recommend)
export function getHomeMultidata () {
  return request({
    url: '/home/multidata'
  })
}

// 请求首页标签页数据
export function getHomeTabsData (type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
