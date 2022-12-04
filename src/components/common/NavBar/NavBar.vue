<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center" :style="{ color: initStyle }"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    initColor: {
      type: String,
      default: '#333333'
    }
  },
  computed: {
    initStyle () {
      return this.initColor
    }
  }
}
</script>

<style lang="less" scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
    font-size: 16px;
    .left, .right {
      width: 60px;
    }
    .center {
      flex: 1;
    }
  }
</style>
