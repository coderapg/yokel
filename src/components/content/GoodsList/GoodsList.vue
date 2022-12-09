<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goodsList" :listItem="item" :key="index"/>
  </div>
</template>

<script>
import GoodsListItem from './modules/GoodsListItem'

export default {
  name: 'GoodsList',
  props: {
    goodsList: {
      type: Array,
      default () {
        return []
      },
      required: true
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style lang="less" scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #efefef;
    padding: 10px 15px;
    box-sizing: border-box;
  }
</style>
