<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in detailBannerList" :key="index">
      <img v-lazy="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/Swiper'

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    detailBannerList: {
      type: Array,
      default () {
        return []
      },
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
  .detail-swiper {
    height: 240px;
    overflow: hidden;
  }
</style>
