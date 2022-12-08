<template>
  <swiper>
    <swiper-item v-for="(item, index) in detailBannerList" :key="index">
      <img :src="item" alt="">
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
      require: true
    }
  }
}
</script>

<style lang="less" scoped></style>
