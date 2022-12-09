<template>
  <swiper>
    <swiper-item v-for="(item, index) in bannerList" :key="index">
      <a :href="item.ling">
        <img :src="item.image" alt="" @load="handleBannerImageLoad">
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
      required: true
    }
  },
  data () {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    handleBannerImageLoad () {
      if (!this.isLoad) {
        this.$emit('handleBannerImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>
