<template>
  <div class="goods-info" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="info-desc">
      <div class="desc">{{ goodsInfo.desc }}</div>
    </div>
    <div class="info-key">{{ goodsInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in goodsInfo.detailImage[0].list"
        :key="index"
        v-lazy="item"
        alt=""
        @load="goodsInfoImgLoad">
    </div>
    <div></div>
  </div>
</template>

<script>

export default {
  name: 'DetailGoodsInfo',
  data () {
    return {
      counter: 0,
      imgLength: 0
    }
  },
  props: {
    goodsInfo: {
      type: Object,
      default () {
        return {}
      },
      required: true
    }
  },
  methods: {
    goodsInfoImgLoad () {
      if (++this.counter === this.imgLength) {
        this.$emit('goodsInfoImgLoad')
      }
    }
  },
  watch: {
    goodsInfo () {
      this.imgLength = this.goodsInfo.detailImage[0].list.length
    }
  }
}
</script>

<style lang="less" scoped>
.goods-info {
  padding: 30px 8px 0;
  border-bottom: solid 4px rgba(100, 100, 100, .1);
}
.info-desc {
  padding: 0 8px 0;
  font-size: 14px;
}
.info-desc .desc {
  text-indent: 2em;
}
.info-key {
  padding: 8px;
}
.info-list img{
  width: 100%;
}
</style>
