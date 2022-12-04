<template>
  <div id="home">
    <nav-bar class="nav-bar" initColor="#333333">
      <div slot="center">首页</div>
    </nav-bar>
    <home-swiper :bannerList="bannerList"/>
    <home-recommend :recommendList="recommendList"/>
    <home-popular />
    <tabs :controlList="['流行', '新款', '精选']"/>
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
    </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar'
import HomeSwiper from './components/HomeSwiper'
import HomeRecommend from './components/HomeRecommend'
import HomePopular from './components/HomePopular'
import Tabs from 'components/content/Tabs/Tabs'
import { getHomeMultidata } from 'https/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    Tabs
  },
  data () {
    return {
      bannerList: [],
      recommendList: [],
      controlList: [
        {
          id: 0,
          text: '今年'
        },
        {
          id: 1,
          text: '明年'
        },
        {
          id: 2,
          text: '后年'
        }
      ]
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
