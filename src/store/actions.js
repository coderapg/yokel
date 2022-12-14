// 公共actions
import { DISPATCH_CART, ADD_COUNT, PUSH_CART } from '@/store/mutations-type'

export default {
  [DISPATCH_CART] (context, { data, callback }) {
    const cartListItem = context.state.cartList.find(item => item.idx === data.idx)
    if (cartListItem) {
      // 有值，那么cartListItem.count += 1
      context.commit(ADD_COUNT, cartListItem)
    } else {
      // 没有值，直接push到cartList中
      context.commit(PUSH_CART, data)
    }
    callback && callback()
  }
}
