// 公共mutations
import { PUSH_CART, ADD_COUNT } from '@/store/mutations-type'

export default {
  [PUSH_CART] (state, payload) {
    payload.count = 1
    state.cartList.push(payload)
  },
  [ADD_COUNT] (state, payload) {
    payload.count += 1
  }
}
