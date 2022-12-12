<template>
  <div class="cart-nav-bar">
    <nav-bar>
      <p slot="left" class="shop-cart">购物车</p>
      <div slot="center" class="cart-delivery">
        <div class="cart-icon">
          <i class="iconfont">&#xe624;</i>
        </div>
        <div class="cart-address">
          <p>配送至:<span>北京市海淀区车公庄路菱花小区10086号1单元1102室收</span></p>
        </div>
        <div class="cart-edit">
          <p>编辑</p>
        </div>
      </div>
      <div slot="right" class="cart-ellip">
        <i class="iconfont">&#xec1c;</i>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar'

export default {
  name: 'CartNavBar',
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>
  .cart-nav-bar {
    width: 100vw;
    height: 44px;
    .nav-bar {
      background-color: #f8f8f8;
    }
    p {
      margin: 0;
    }
    .shop-cart {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 44px;
      font-size: 14px;
      font-weight: bold;
      color: #1a1a1a;
    }
    .cart-delivery {
      display: flex;
      margin: 0;
      .cart-icon {
        width: 16px;
        .iconfont {
          font-weight: bold;
          font-size: 16px;
        }
      }
      .cart-address {
        flex: 1;
        width: 100px;
        p {
          width: 100%;
          line-height: 44px;
          text-align: center;
          font-size: 13px;
          color: #999;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .cart-edit {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .cart-ellip {
      display: flex;
      justify-content: center;
      align-items: center;
      .iconfont {
        font-size: 30px;
        color: #1a1a1a;
      }
    }
  }
</style>
