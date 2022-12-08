<template>
  <nav-bar>
    <div slot="left" class="detail-left" @click="handleNavBarLeftClick">
      <img src="~assets/images/common/back_icon.svg" alt="">
    </div>
    <div slot="center" class="detail-center">
      <div class="center-item" v-for="(item, index) in controlList" :key="index" :class="{ active: curIndex === index }" @click="handleNavBarItemClick(index)">{{ item }}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar'

export default {
  name: 'DetailNavBar',
  data () {
    return {
      controlList: ['商品', '参数', '评论', '推荐'],
      curIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    handleNavBarItemClick (index) {
      this.curIndex = index
    },
    handleNavBarLeftClick () {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
  .detail-left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    img {
      width: 26px;
    }
  }
  .detail-center {
    display: flex;
    font-size: 13px;
    .center-item {
      flex: 1;
    }
    .center-item.active {
      color: var(--tank-color);
    }
  }
</style>
