<template>
  <div class="cart-goods-list">
    <cart-goods-list-item  v-for="(item, index) in cartList" :key="index" :goodsItem="item"/>
  </div>
</template>

<script>
import CartGoodsListItem from './CateGoodsListItem.vue'

export default {
  name: 'CartGoodsList',
  props: {
    cartList: {
      type: Array,
      default () {
        return []
      },
      required: true
    }
  },
  components: {
    CartGoodsListItem
  }
}
</script>

<style lang="less" scoped>
  // .cart-goods-list {
  // }
</style>
