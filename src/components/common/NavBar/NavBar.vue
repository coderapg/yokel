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
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.02);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
    font-size: 16px;
    box-sizing: border-box;
    z-index: 999;
    .left, .right {
      width: 60px;
    }
    .center {
      flex: 1;
      div {
        margin: 0;
      }
    }
  }
</style>
