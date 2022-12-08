<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper class="detail-swiper" :detailBannerList="detailBannerList" />
  </div>
</template>

<script>
import DetailNavBar from './components/DetailNavBar'
import DetailSwiper from '@/views/detail/components/DetailSwiper'

import { getDetailMultidata } from 'https/detail'

export default {
  name: 'Detail',
  data () {
    return {
      iid: null,
      detailBannerList: []
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
  created () {
    const { iid } = this.$route.query
    this.iid = iid
    this.getDetailMultidata(iid)
  },
  methods: {
    getDetailMultidata (idx) {
      getDetailMultidata(idx).then(res => {
        const {
          // columns,
          // detailInfo,
          itemInfo
          // itemParams,
          // rate,
          // shopInfo,
          // skuInfo,
          // topBar
        } = res.result
        this.detailBannerList = itemInfo.topImages
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .detail-swiper {
    height: 260px;
    overflow: hidden;
  }
</style>
