<template>
  <div id="cart">
    <cart-nav-bar />
    <scroll class="cart-scroll" ref="scrollRef">
      <div class="scroll-content">
        <cart-goods-list :cartList="cartList" />
      </div>
    </scroll>
    <cart-settle />
  </div>
</template>

<script>
import Scroll from 'components/common/Scroll/Scroll'

import CartNavBar from './components/CartNavBar'
import CartGoodsList from './components/CartGoodsList'
import CartSettle from './components/CartSettle'

import { mapState } from 'vuex'

export default {
  name: 'Cart',
  components: {
    CartNavBar,
    Scroll,
    CartGoodsList,
    CartSettle
  },
  computed: {
    ...mapState({
      cartList: state => state.cartList
    })
  },
  activated () {
    this.$refs.scrollRef.upDataRefresh()
  }
}
</script>

<style lang="less" scopde>
  #cart {
    background-color: #f1f1f1;
    width: 100vw;
    height: 100vh;
    .cart-scroll {
      height: calc(100% - 44px - 49px - 66px);
      .scroll-content {
        padding: 0 6px;
      }
    }
  }
</style>
