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

// 抽离数据-商品参数信息
export class GoodsParam {
  constructor (info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : ''
    this.infos = info.set
    this.sizes = rule.tables
  }
}

// 详情页获取推荐数据
export function recommendingCommodities (iid) {
  return request({
    url: '/recommend',
    params: {
      iid
    }
  })
}

// 抽取数据-添加到store中的数据
export class ShopOrderItem {
  constructor (detailWaresInfo, sellerInfo, goodsInfo) {
    this.desc = detailWaresInfo.desc
    this.newPrice = detailWaresInfo.newPrice
    this.oldPrice = detailWaresInfo.oldPrice
    this.realPrice = detailWaresInfo.realPrice
    this.servicesArr = detailWaresInfo.services && detailWaresInfo.services.length > 0 ? detailWaresInfo.services.map(item => item.name) : []
    this.title = detailWaresInfo.title
    this.allGoodsUrl = sellerInfo.allGoodsUrl
    this.idx = sellerInfo.idx
    this.name = sellerInfo.name
    this.shopId = sellerInfo.shopId
    this.shopLogo = sellerInfo.shopLogo
    this.shopUrl = sellerInfo.shopUrl
    this.userId = sellerInfo.userId
    this.wearImg = goodsInfo.detailImage[0].list[0]
    this.isChecked = true
  }
}
