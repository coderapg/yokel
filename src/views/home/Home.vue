<template>
  <div id="home">
    <nav-bar class="nav-bar" initColor="#333333">
      <div slot="center">首页</div>
    </nav-bar>
    <scroll
      class="wrap"
      ref="scrollRef"
      :probe-type="3"
      @handleBetterScrollScroll="handleBetterScrollScroll">
      <home-swiper :bannerList="bannerList"/>
      <home-recommend :recommendList="recommendList"/>
      <home-popular />
      <tabs :controlList="['流行', '新款', '精选']" @handleTabItemClick="handleTabItemClick"/>
      <goods-list :goodsList="activeGoods"/>
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
