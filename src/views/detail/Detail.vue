<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :detailBannerList="detailBannerList" />
    <div class="detail-wares-related">
      <detail-wares-related :detailWaresInfo="detailWaresInfo" />
    </div>
  </div>
</template>

<script>
import DetailNavBar from './components/DetailNavBar'
import DetailSwiper from './components/DetailSwiper'

import DetailWaresRelated from './components/DetailWaresRelated'

import { getDetailMultidata } from 'https/detail'
import { WaresInfo } from 'common/utils'

export default {
  name: 'Detail',
  data () {
    return {
      iid: null,
      detailBannerList: [],
      detailWaresInfo: {}
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailWaresRelated
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
          columns,
          // detailInfo,
          itemInfo,
          // itemParams,
          // rate,
          shopInfo
          // skuInfo,
          // topBar
        } = res.result
        this.detailBannerList = itemInfo.topImages
        this.detailWaresInfo = new WaresInfo(itemInfo, columns, shopInfo.services)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .detail-wares-related {
    background-color: #f0f0f0;
    padding: 10px 9px;
    box-sizing: border-box;
    .wares-info {
      background-color: #fff;
    }
  }
</style>
