<template>
  <div id="home">
    <nav-bar class="nav-bar" initColor="#333333">
      <div slot="center">首页</div>
    </nav-bar>
    <tabs
      class="tab-control"
      v-show="showTabs"
      ref="tabControl"
      :controlList="['流行', '新款', '精选']"
      @handleTabItemClick="handleTabItemClick" />
    <scroll
      class="wrap"
      ref="scrollRef"
      :probe-type="3"
      :pull-up-load="true"
      @handleBetterScrollScroll="handleBetterScrollScroll"
      @handleBetterScrollPullingUp="handleBetterScrollPullingUp">
      <home-swiper :bannerList="bannerList" @handleBannerImageLoad="handleBannerImageLoad" />
      <home-recommend :recommendList="recommendList" />
      <home-popular />
      <tabs ref="tabs" :controlList="['流行', '新款', '精选']" @handleTabItemClick="handleTabItemClick" />
      <goods-list :goodsList="activeGoods" />
    </scroll>
    <back-top @click.native="handleBackTopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from './components/HomeSwiper'
import HomeRecommend from './components/HomeRecommend'
import HomePopular from './components/HomePopular'

import NavBar from 'components/common/NavBar/NavBar'
import Tabs from 'components/content/Tabs/Tabs'
import GoodsList from 'components/content/GoodsList/GoodsList'
import Scroll from 'components/common/Scroll/Scroll'
import BackTop from 'components/content/BackTop/BackTop'

import { getHomeMultidata, getHomeTabsData } from 'https/home'
import { imgRefreshLoadMixin, backTopMixin } from 'common/mixin'

export default {
  name: 'Home',
  mixins: [imgRefreshLoadMixin, backTopMixin],
  components: {
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    NavBar,
    Tabs,
    GoodsList,
    Scroll,
    BackTop
  },
  data () {
    return {
      bannerList: [],
      recommendList: [],
      homeGoods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      goodsType: 'pop',
      tabsOffsetTop: 0,
      showTabs: false,
      saveY: 0
    }
  },
  created () {
    this.getHomeMultidata()
    this.getHomeTabsData('pop')
    this.getHomeTabsData('new')
    this.getHomeTabsData('sell')
  },
  computed: {
    activeGoods () {
      return this.homeGoods[this.goodsType].list
    }
  },
  activated () {
    this.$refs.scrollRef.scrollBack(0, this.saveY, 0)
    this.$refs.scrollRef.upDataRefresh()
  },
  deactivated () {
    // 1. 离开是记录当前y的值，后续再次进来的时候给scroll赋值
    this.saveY = this.$refs.scrollRef.scroll.y
    // 2. 离开时取消事件总线中的事件(因为在详情页中也需要接收从GoodsListItem中发射过来的事件，因为事件名称都是一样的，所以这里需要取消，否则发生不必要的bug)
    this.$EventBus.$off('handleGoodsListItemImageLoad', this.imgLoad)
  },
  methods: {
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        const { data: { banner, recommend }, success } = res
        if (success) {
          this.bannerList = banner.list
          this.recommendList = recommend.list
        }
      })
    },
    getHomeTabsData (type) {
      const page = this.homeGoods[type].page + 1
      getHomeTabsData(type, page).then(res => {
        const { data, success } = res
        if (success) {
          this.homeGoods[type].list.push(...data.list)
          this.homeGoods[type].page += 1
          // 当上拉加载更多是，调用 getHomeTabsData 时，每次触发 pullingUp 钩子后，你应该主动调用 finishPullUp() 告诉 BetterScroll 准备好下一次的 pullingUp 钩子
          if (page >= 1) {
            this.$refs.scrollRef.overFinishPullUp()
          }
        }
      })
    },
    // 切换选项卡
    handleTabItemClick (index) {
      switch (index) {
        case 0:
          this.goodsType = 'pop'
          break
        case 1:
          this.goodsType = 'new'
          break
        case 2:
          this.goodsType = 'sell'
          break
      }
      // 让2个组件中被点击的选项卡保持一致
      this.$refs.tabs.currIndex = index
      this.$refs.tabControl.currIndex = index
    },
    // 实时监听子组件中滚动值的变化
    handleBetterScrollScroll (position) {
      this.mixinPosition(position, 1500)
      this.showTabs = Math.abs(position.y) > this.tabsOffsetTop
    },
    // 上拉加载更多
    handleBetterScrollPullingUp () {
      this.getHomeTabsData(this.goodsType)
    },
    // 监听banner图片加载完成
    handleBannerImageLoad () {
      // 2. 获取tabs对应的offsetTop的值(但是这里banner中的图片和tabs组件上面的图片在没有加载完成时会影响tabs的offsetTop的值，所以我们需要对图片加载进行监听，当图片加载完毕之后在获取tabs的offsetTop值才是正确的)
      this.tabsOffsetTop = this.$refs.tabs.$el.offsetTop
    }
  }
}
</script>

<style lang="less" scopde>
  #home {
    position: relative;
    height: 100vh;
  }
  .nav-bar {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 999;
    background-color: #f8f8f8;
  }
  .wrap {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  }
  .tab-control {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    z-index: 999;
  }
</style>
