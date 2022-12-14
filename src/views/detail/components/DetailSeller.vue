<template>
  <div class="detail-seller bor-rad12">
    <div class="seller-top">
      <div class="seller-top-logo">
        <img v-lazy="sellerInfo.shopLogo" alt="">
      </div>
      <div class="seller-top-info">
        <div class="seller-top-title">{{ sellerInfo.name }}</div>
        <div class="seller-top-star-review">{{ sellerInfo.level }}</div>
        <div class="seller-top-desc">
          <span v-for="(item, index) in sellerInfo.score" :key="index">{{ item.name }}<b>{{ item.score }}</b><em>{{ item.isBetter ? '高' : '低' }}</em></span>
        </div>
      </div>
    </div>
    <div class="seller-center">
      <div class="seller-base-img">
        <img src="~assets/images/detail/base.png" alt="">
      </div>
      <div class="seller-center-title">{{ sellerInfo.idx }}</div>
    </div>
    <div class="seller-foot">
      <div @click="handleToSeller">进店逛逛</div>
      <div @click="handleAllGoods">全部宝贝</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailSeller',
  props: {
    sellerInfo: {
      type: Object,
      default () {
        return {}
      },
      required: true
    }
  },
  methods: {
    handleToSeller () {
      console.log('进店逛逛', this.sellerInfo.shopUrl)
    },
    handleAllGoods () {
      console.log('全部宝贝', this.sellerInfo.allGoodsUrl)
    }
  }
}
</script>

<style lang="less" scoped>
  .detail-seller {
    background-color: var(--bg-f8);
    .seller-top {
      display: flex;
      border-bottom: 1px solid #f1f1f1;
      box-sizing: border-box;
      padding: 8px;
      .seller-top-logo {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        overflow: hidden;
        margin-right: 8px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .seller-top-info {
        flex: 1;
        .seller-top-title {
          font-size: 15px;
          font-weight: bold;
          color: #000;
          line-height: 27px;
        }
        .seller-top-star-review {}
        .seller-top-desc {
          display: flex;
          span {
            font-size: 12px;
            color: #aaa;
            b {
              margin: 0 1px;
              font-size: 14px;
              color: #000;
            }
            em {
              color: var(--tips-color);
              font-style: normal;
            }
          }
          span:nth-child(2) {
            margin: 0 6px;
          }
        }
      }
    }
    .seller-center {
      display: flex;
      height: 38px;
      line-height: 38px;
      border-bottom: 1px solid #f1f1f1;
      box-sizing: border-box;
      padding: 0 8px;
      .seller-base-img {
        margin-right: 10px;
        img {
          width: 62px;
        }
      }
      .seller-center-title {
        flex: 1;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
        font-weight: bold;
        color: #000;
      }
    }
    .seller-foot {
      display: flex;
      div {
        flex: 1;
        text-align: center;
        line-height: 38px;
        font-size: 14px;
        color: #000;
        font-weight: bold;
      }
      div:first-child {
        border-right: 2px solid #f1f1f1;
      }
    }
  }
</style>
