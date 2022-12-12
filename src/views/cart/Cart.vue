<template>
  <div id="cart">
    <cart-nav-bar />
  </div>
</template>

<script>
import CartNavBar from './components/CartNavBar'

export default {
  name: 'Cart',
  components: {
    CartNavBar
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
