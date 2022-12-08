// 公共的方法/类
// 防抖函数
export function debounce (fun, delay = 200) {
  let timer = null
  return function () {
    const args = arguments
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fun.apply(this, args)
    }, delay)
  }
}

// 抽取数据
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
