<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home" initColor="#333333" activeColor="#d81e06">
        <img slot="item-icon" src="../../../assets/images/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/images/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" initColor="#333333" activeColor="#d81e06">
        <img slot="item-icon" src="../../../assets/images/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/images/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" initColor="#333333" activeColor="#d81e06">
        <img slot="item-icon" src="../../../assets/images/tabbar/cart.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/images/tabbar/cart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" initColor="#333333" activeColor="#d81e06">
        <img slot="item-icon" src="../../../assets/images/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="../../../assets/images/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/TabBar/TabBar'
import TabBarItem from '@/components/common/TabBar/modules/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style lang="less" scopde>
  .main-tab-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f8f8f8;
    box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.09);
  }
</style>
