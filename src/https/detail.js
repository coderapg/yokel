import { request } from './request'
/**
 * 详情页相关接口请求
 */
export function getDetailMultidata (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
