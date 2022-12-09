<template>
  <div class="tab-bar-item" @click="handleTabBarItemClick">
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="{ color: activeStyle }"><slot name="item-text"></slot></div>
  </div>
</template>

<script>

export default {
  name: 'TabBarItem',
  props: {
    path: {
      type: String,
      required: true
    },
    initColor: {
      type: String,
      default: '#333333',
      required: true
    },
    activeColor: {
      type: String,
      default: '#d81e06',
      required: true
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) === -1
    },
    activeStyle () {
      return this.isActive ? this.initColor : this.activeColor
    }
  },
  methods: {
    handleTabBarItemClick () {
      this.$router.push(this.path)
    }
  }
}
</script>

<style lang="less" scopde>
  .tab-bar-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 49px;
    font-size: 12px;
    img {
      width: 20px;
    }
  }
</style>
