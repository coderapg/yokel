<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @handleNavBarItemClick="handleNavBarItemClick" ref="navBar" />
    <scroll class="detail-scroll" ref="scrollRef" :probeType="3" @handleBetterScrollScroll="handleBetterScrollScroll">
      <detail-swiper :detailBannerList="detailBannerList" />
      <div class="detail-wares-related">
        <detail-wares-related :detailWaresInfo="detailWaresInfo" />
        <detail-seller :sellerInfo="sellerInfo" />
      </div>
      <detail-goods-info :goodsInfo="goodsInfo" @goodsInfoImgLoad="goodsInfoImgLoad" />
      <detail-param-info :paramInfo="paramInfo" ref="paramInfo" />
      <detail-comments-rate :commentInfo="commentInfo" ref="commentInfo" />
      <goods-list :goodsList="goodsList" ref="goodsList" />
    </scroll>
    <back-top @click.native="handleBackTopClick" v-show="isShowBackTop" />
    <detail-tool-bar @handleToAddCart="handleToAddCart" />
  </div>
</template>

<script>
import Scroll from 'components/common/Scroll/Scroll'
import GoodsList from 'components/content/GoodsList/GoodsList'
import BackTop from 'components/content/BackTop/BackTop'

import DetailNavBar from './components/DetailNavBar'
import DetailSwiper from './components/DetailSwiper'
import DetailWaresRelated from './components/DetailWaresRelated'
import DetailSeller from './components/DetailSeller'
import DetailGoodsInfo from './components/DetailGoodsInfo'
import DetailParamInfo from './components/DetailParamInfo'
import DetailCommentsRate from './components/DetailCommentsRate'
import DetailToolBar from './components/DetailToolBar'

import { getDetailMultidata, WaresInfo, SellerInfo, GoodsParam, recommendingCommodities, ShopOrderItem } from 'https/detail'
import { imgRefreshLoadMixin, backTopMixin } from 'common/mixin'
import { debounce } from 'common/utils'
import { DISPATCH_CART } from '@/store/mutations-type'

export default {
  name: 'Detail',
  mixins: [imgRefreshLoadMixin, backTopMixin],
  data () {
    return {
      iid: null,
      detailBannerList: [],
      detailWaresInfo: {},
      sellerInfo: {},
      goodsInfo: {},
      paramInfo: {},
      commentInfo: {},
      goodsList: [],
      themeTopYs: [],
      getThemeTopYs: null,
      currIndex: 0
    }
  },
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailWaresRelated,
    DetailSeller,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentsRate,
    GoodsList,
    BackTop,
    DetailToolBar
  },
  created () {
    // ???????????????iid
    const { iid } = this.$route.query
    this.iid = iid
    // ??????iid???????????????????????????
    this.getDetailMultidata(iid)
    this.recommendingCommodities(iid)
    // 7. ?????????DOM???????????????offsetTop??????
    this.getThemeTopYs = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.paramInfo.$el.offsetTop)
      this.themeTopYs.push(this.$refs.commentInfo.$el.offsetTop)
      this.themeTopYs.push(this.$refs.goodsList.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE) // hacker???????????????????????????????????????????????????????????????
    }, 500)
  },
  methods: {
    getDetailMultidata (idx) {
      getDetailMultidata(idx).then(res => {
        const {
          columns,
          detailInfo,
          itemInfo,
          itemParams,
          rate,
          shopInfo
          // skuInfo,
          // topBar
        } = res.result
        // 1. ???????????????????????????
        this.detailBannerList = itemInfo.topImages
        // 2. ??????????????????
        this.detailWaresInfo = new WaresInfo(itemInfo, columns, shopInfo.services)
        // 3. ????????????????????????
        this.sellerInfo = new SellerInfo(shopInfo, this.iid)
        // 4. ???????????????????????????
        this.goodsInfo = detailInfo
        // 5. ???????????????????????????
        this.paramInfo = new GoodsParam(itemParams.info, itemParams.rule)
        // 6. ??????????????????
        if (rate.cRate !== 0) {
          this.commentInfo = rate.list[0]
        }
      })
    },
    // ????????????????????????????????????
    goodsInfoImgLoad () {
      this.$refs.scrollRef.upDataRefresh()
      this.getThemeTopYs()
    },
    // ???????????????????????????
    recommendingCommodities (iid) {
      recommendingCommodities(iid).then(res => {
        const { data: { list }, success } = res
        if (success) {
          this.goodsList = list
        }
      })
    },
    // ????????????navbar????????????
    handleNavBarItemClick (index) {
      this.$refs.scrollRef.scrollBack(0, -this.themeTopYs[index], 500)
    },
    // ??????better-scroll??????????????????navBar??????index
    handleBetterScrollScroll (position) {
      this.mixinPosition(position, 1500)
      const Length = this.themeTopYs.length
      const positionY = -position.y
      // ???????????????
      // for (let i = 0; i < Length; i++) {
      //   if (this.currIndex !== i && ((i < Length && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) || (i === Length - 1 && positionY >= this.themeTopYs[i]))) {
      //     this.currIndex = i
      //     this.$refs.navBar.curIndex = this.currIndex
      //   }
      // }
      // hacker??????
      for (let i = 0; i < Length - 1; i++) {
        if (this.currIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1])) {
          this.currIndex = i
          this.$refs.navBar.curIndex = this.currIndex
        }
      }
    },
    handleToAddCart () {
      const shopObj = new ShopOrderItem(this.detailWaresInfo, this.sellerInfo, this.goodsInfo)
      this.$store.dispatch(DISPATCH_CART, {
        data: shopObj,
        callback: () => {
          this.$toast.showMessage('????????????', 1500)
        }
      })
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
    height: calc(100% - 44px - 49px);
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
