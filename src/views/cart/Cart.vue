<template>
  <div id="cart">
    <cart-nav-bar />
    <div class="cart-content"></div>
    <cart-settle />
  </div>
</template>

<script>
import CartNavBar from './components/CartNavBar'
import CartSettle from './components/CartSettle'

export default {
  name: 'Cart',
  components: {
    CartNavBar,
    CartSettle
  }
}
</script>

<style lang="less" scopde>
  #cart {
    background-color: #f1f1f1;
    width: 100vw;
    height: 100vh;
  }
</style>
