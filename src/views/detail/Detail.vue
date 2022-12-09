<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" />
    <scroll class="detail-scroll" ref="detailScroll">
      <detail-swiper :detailBannerList="detailBannerList" />
      <div class="detail-wares-related">
        <detail-wares-related :detailWaresInfo="detailWaresInfo" />
        <detail-seller :sellerInfo="sellerInfo" />
      </div>
      <detail-goods-info :goodsInfo="goodsInfo" @goodsInfoImgLoad="goodsInfoImgLoad" />
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/Scroll/Scroll'

import DetailNavBar from './components/DetailNavBar'
import DetailSwiper from './components/DetailSwiper'
import DetailWaresRelated from './components/DetailWaresRelated'
import DetailSeller from './components/DetailSeller'
import DetailGoodsInfo from './components/DetailGoodsInfo'

import { getDetailMultidata, WaresInfo, SellerInfo } from 'https/detail'

export default {
  name: 'Detail',
  data () {
    return {
      iid: null,
      detailBannerList: [],
      detailWaresInfo: {},
      sellerInfo: {},
      goodsInfo: {}
    }
  },
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailWaresRelated,
    DetailSeller,
    DetailGoodsInfo
  },
  created () {
    // 保存传入的iid
    const { iid } = this.$route.query
    this.iid = iid
    // 根据iid请求对应的详情数据
    this.getDetailMultidata(iid)
  },
  methods: {
    getDetailMultidata (idx) {
      getDetailMultidata(idx).then(res => {
        const {
          columns,
          detailInfo,
          itemInfo,
          // itemParams,
          // rate,
          shopInfo
          // skuInfo,
          // topBar
        } = res.result
        // 1. 获取顶部轮播图图片
        this.detailBannerList = itemInfo.topImages
        // 2. 获取商品信息
        this.detailWaresInfo = new WaresInfo(itemInfo, columns, shopInfo.services)
        // 3. 创建商品信息对象
        this.sellerInfo = new SellerInfo(shopInfo, this.iid)
        // 4. 保存商品的详情数据
        this.goodsInfo = detailInfo
      })
    },
    // 监听图片加载完成
    goodsInfoImgLoad () {
      this.$refs.detailScroll.upDataRefresh()
    }
  }
}
</script>

<style lang="less" scoped>
  #detail {
    position: relative;
    z-index: 99;
    background-color: #fff;
    width: 100vw;
    height: 100vh;
  }
  .detail-nav-bar {
    position: relative;
    z-index: 999;
    left: 0;
    right: 0;
    top: 0;
    background-color: #fff;
  }
  .detail-scroll {
    height: calc(100% - 44px);
  }
  .detail-wares-related {
    background-color: #f0f0f0;
    padding: 10px 9px;
    box-sizing: border-box;
    .wares-info {
      background-color: #fff;
    }
  }
</style>
