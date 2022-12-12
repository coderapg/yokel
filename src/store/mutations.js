// 公共mutations
import { ADD_CART } from './mutations-type'

export default {
  [ADD_CART] (state, { data, callback }) {
    const cartListItem = state.cartList.find(item => item.idx === data.idx)
    if (cartListItem) {
      // 如果之前有值的话
      cartListItem.counter += 1
    } else {
      data.counter = 1
      state.cartList.push(data)
    }
    callback && callback()
  }
}
