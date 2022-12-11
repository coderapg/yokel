<template>
  <div class="detail-tool-bar">
    <div class="shop" @click="handleToShop">
      <i class="iconfont">&#xe602;</i>
      <span>店铺</span>
    </div>
    <div class="customer-service" @click="handleToCustomerService">
      <i class="iconfont">&#xe60d;</i>
      <span>客服</span>
    </div>
    <div class="collect" @click="handleToCollect">
      <i class="iconfont">&#xe8b9;</i>
      <span>收藏</span>
    </div>
    <div class="add-cart" @click="handleToAddCart">
      <span>加入购物车</span>
    </div>
    <div class="buy-now" @click="handleToBuyNow">
      <span>立即购买</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailToolBar',
  methods: {
    handleToShop () {
      alert('跳转到店铺页')
    },
    handleToCustomerService () {
      alert('跳转到客服页')
    },
    handleToCollect () {
      alert('点击收藏')
    },
    handleToAddCart () {
      alert('点击加入购物车')
    },
    handleToBuyNow () {
      alert('点击立即购买')
    }
  }
}
</script>

<style lang="less" scoped>
  .detail-tool-bar {
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 49px;
    background-color: #fff;
    display: flex;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .shop,
    .customer-service,
    .collect {
      width: 60px;
    }
    .shop {
      .iconfont {
        color: var(--tank-color);
      }
    }
    .add-cart,
    .buy-now {
      flex: 1;
      span {
        display: block;
        width: 100%;
        line-height: 34px;
        text-align: center;
        font-size: 14px;
        color: #fff;
      }
    }
    .add-cart {
      span {
        background-image: linear-gradient(to right, #f6c934, #f9962e);
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
      }
    }
    .buy-now {
      span {
        background-image: linear-gradient(to right, #f87b26, #f65323);
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
      }
    }
    i.iconfont {
      font-size: 20px;
      vertical-align: middle;
      margin-bottom: 3px;
    }
    span {
      font-size: 12px;
    }
  }
</style>
