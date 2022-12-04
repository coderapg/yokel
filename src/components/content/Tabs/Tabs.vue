<template>
  <div class="tabs">
    <div
      class="tab-item"
      v-for="(item, index) in controlList"
      :key="index"
      :class="currIndex === index ? 'active' : ''"
      @click="handleTabItemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    controlList: {
      type: Array,
      default () {
        return []
      },
      require: true
    }
  },
  data () {
    return {
      currIndex: 0
    }
  },
  methods: {
    handleTabItemClick (index) {
      this.currIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
  .tabs {
    display: flex;
    .tab-item {
      flex: 1;
      text-align: center;
      line-height: 44px;
      span {
        padding-bottom: 6px;
        border-bottom: 2px solid transparent;
      }
    }
    .tab-item.active {
      span {
        color: #ff6700;
        border-bottom-color: #ff6700;
      }
    }
  }
</style>
