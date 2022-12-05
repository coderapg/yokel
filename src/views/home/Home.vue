<template>
  <div id="home">
    <nav-bar class="nav-bar" initColor="#333333">
      <div slot="center">首页</div>
    </nav-bar>
    <scroll
      class="wrap"
      ref="scrollRef"
      :probe-type="3"
      :pull-up-load="true"
      @handleBetterScrollScroll="handleBetterScrollScroll"
      @handleBetterScrollPullingUp="handleBetterScrollPullingUp">
      <home-swiper :bannerList="bannerList"/>
      <home-recommend :recommendList="recommendList"/>
      <home-popular />
      <tabs :controlList="['流行', '新款', '精选']" @handleTabItemClick="handleTabItemClick"/>
      <goods-list :goodsList="activeGoods"/>
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

export default {
  name: 'Home',
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
      isShowBackTop: false
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
  mounted () {
    this.$EventBus.$on('handleGoodsListItemImageLoad', () => {
      this.$refs.scrollRef.upDataRefresh()
    })
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
          if (page > 1) {
            this.$refs.scrollRef.overFinishPullUp()
          }
          // this.$refs.scrollRef.overFinishPullUp()
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
    },
    // 首页返回顶部
    handleBackTopClick () {
      this.$refs.scrollRef.scrollBack(0, 44, 500)
      // this.$refs.scrollRef.scroll.scrollTo(0, 44, 500)
    },
    // 实时监听子组件中滚动值的变化
    handleBetterScrollScroll (position) {
      this.isShowBackTop = Math.abs(position.y) > 1000
    },
    // 上拉加载更多
    handleBetterScrollPullingUp () {
      this.getHomeTabsData(this.goodsType)
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
    z-index: 99;
    background-color: #f8f8f8;
  }
  .wrap {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  }
</style>
