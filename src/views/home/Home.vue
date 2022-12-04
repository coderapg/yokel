<template>
  <div id="home">
    <nav-bar class="nav-bar" initColor="#333333">
      <div slot="center">首页</div>
    </nav-bar>
    <home-swiper :bannerList="bannerList"/>
    <home-recommend :recommendList="recommendList"/>
    <home-popular />
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar'
import HomeSwiper from './components/HomeSwiper'
import HomeRecommend from './components/HomeRecommend'
import HomePopular from './components/HomePopular'
import { getHomeMultidata } from 'https/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomePopular
  },
  data () {
    return {
      bannerList: [],
      recommendList: []
    }
  },
  created () {
    this.getHomeBanners()
  },
  methods: {
    getHomeBanners () {
      getHomeMultidata().then(res => {
        const { data: { banner, recommend }, success } = res
        if (success) {
          this.bannerList = banner.list
          this.recommendList = recommend.list
        }
      })
    }
  }
}
</script>

<style lang="less" scopde>
  .nav-bar {
    background-color: #f8f8f8;
  }
</style>
