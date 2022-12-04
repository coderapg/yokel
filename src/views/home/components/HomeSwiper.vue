<template>
  <swiper>
    <swiper-item v-for="(item, index) in bannerList" :key="index">
      <a :href="item.ling">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/Swiper/index'

export default {
  name: 'HomeSwiper',
  props: {
    bannerList: {
      type: Array,
      default () {
        return []
      },
      require: true
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>
