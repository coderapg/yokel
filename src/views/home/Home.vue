<template>
  <div id="home">
    <nav-bar class="nav-bar" initColor="#333333">
      <div slot="center">首页</div>
    </nav-bar>
    <scroll class="wrap">
      <home-swiper :bannerList="bannerList"/>
      <home-recommend :recommendList="recommendList"/>
      <home-popular />
      <tabs :controlList="['流行', '新款', '精选']" @handleTabItemClick="handleTabItemClick"/>
      <goods-list :goodsList="activeGoods"/>
    </scroll>
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
    Scroll
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
      goodsType: 'pop'
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
        }
      })
    },
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
