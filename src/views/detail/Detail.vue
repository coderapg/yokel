<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @handleNavBarItemClick="handleNavBarItemClick" />
    <scroll class="detail-scroll" ref="scrollRef">
      <detail-swiper :detailBannerList="detailBannerList" />
      <div class="detail-wares-related">
        <detail-wares-related :detailWaresInfo="detailWaresInfo" />
        <detail-seller :sellerInfo="sellerInfo" />
      </div>
      <detail-goods-info :goodsInfo="goodsInfo" @goodsInfoImgLoad="goodsInfoImgLoad" />
      <detail-param-info :paramInfo="paramInfo" ref="paramInfo" />
      <detail-comments-rate :commentInfo="commentInfo" ref="commentInfo" />
      <goods-list :goodsList="goodsList" ref="goodsList" />
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/Scroll/Scroll'
import GoodsList from 'components/content/GoodsList/GoodsList'

import DetailNavBar from './components/DetailNavBar'
import DetailSwiper from './components/DetailSwiper'
import DetailWaresRelated from './components/DetailWaresRelated'
import DetailSeller from './components/DetailSeller'
import DetailGoodsInfo from './components/DetailGoodsInfo'
import DetailParamInfo from './components/DetailParamInfo'
import DetailCommentsRate from './components/DetailCommentsRate'

import { getDetailMultidata, WaresInfo, SellerInfo, GoodsParam, recommendingCommodities } from 'https/detail'
import { imgRefreshLoadMixin } from 'common/mixin'
import { debounce } from 'common/utils'

export default {
  name: 'Detail',
  mixins: [imgRefreshLoadMixin],
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
      getThemeTopYs: null
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
    GoodsList
  },
  created () {
    // 保存传入的iid
    const { iid } = this.$route.query
    this.iid = iid
    // 根据iid请求对应的详情数据
    this.getDetailMultidata(iid)
    this.recommendingCommodities(iid)
    // 7. 获取到DOM元素对应的offsetTop的值
    this.getThemeTopYs = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.paramInfo.$el.offsetTop)
      this.themeTopYs.push(this.$refs.commentInfo.$el.offsetTop)
      this.themeTopYs.push(this.$refs.goodsList.$el.offsetTop)
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
        // 1. 获取顶部轮播图图片
        this.detailBannerList = itemInfo.topImages
        // 2. 获取商品信息
        this.detailWaresInfo = new WaresInfo(itemInfo, columns, shopInfo.services)
        // 3. 创建商品信息对象
        this.sellerInfo = new SellerInfo(shopInfo, this.iid)
        // 4. 保存商品的详情数据
        this.goodsInfo = detailInfo
        // 5. 保存商品的参数信息
        this.paramInfo = new GoodsParam(itemParams.info, itemParams.rule)
        // 6. 保存评论信息
        if (rate.cRate !== 0) {
          this.commentInfo = rate.list[0]
        }
      })
    },
    // 监听穿着效果图片加载完成
    goodsInfoImgLoad () {
      this.$refs.scrollRef.upDataRefresh()
      this.getThemeTopYs()
    },
    // 获取详情页推荐数据
    recommendingCommodities (iid) {
      recommendingCommodities(iid).then(res => {
        const { data: { list }, success } = res
        if (success) {
          this.goodsList = list
        }
      })
    },
    // 获取点击navbar对应的值
    handleNavBarItemClick (index) {
      this.$refs.scrollRef.scrollBack(0, -this.themeTopYs[index], 500)
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
