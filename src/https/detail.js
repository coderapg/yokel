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

// 抽取数据-商品信息
export class WaresInfo {
  constructor (itemInfo, columns, services) {
    this.columns = columns
    this.desc = itemInfo.desc
    this.discount = itemInfo.discountDesc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.realPrice = itemInfo.lowNowPrice
    this.services = services
    this.title = itemInfo.title
  }
}

// 抽离数据-商家信息
export class SellerInfo {
  constructor (info, idx) {
    this.allGoodsUrl = info.allGoodsUrl
    this.cFans = info.cFans
    this.cGoods = info.cGoods
    this.cSells = info.cSells
    this.idx = idx
    this.level = info.level
    this.name = info.name
    this.score = info.score
    this.shopId = info.shopId
    this.shopLogo = info.shopLogo
    this.shopUrl = info.shopUrl
    this.userId = info.userId
  }
}
