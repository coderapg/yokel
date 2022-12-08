<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" />
    <scroll class="detail-scroll">
      <detail-swiper :detailBannerList="detailBannerList" />
      <div class="detail-wares-related">
        <detail-wares-related :detailWaresInfo="detailWaresInfo" />
        <detail-seller :sellerInfo="sellerInfo" />
      </div>
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
import DetailNavBar from './components/DetailNavBar'
import DetailSwiper from './components/DetailSwiper'
import DetailWaresRelated from './components/DetailWaresRelated'
import DetailSeller from './components/DetailSeller'

import Scroll from 'components/common/Scroll/Scroll'

import { getDetailMultidata, WaresInfo, SellerInfo } from 'https/detail'

export default {
  name: 'Detail',
  data () {
    return {
      iid: null,
      detailBannerList: [],
      detailWaresInfo: {},
      sellerInfo: {}
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailWaresRelated,
    DetailSeller,
    Scroll
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
        this.sellerInfo = new SellerInfo(shopInfo, this.iid)
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
