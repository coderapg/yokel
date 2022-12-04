<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'TabBar'
}
</script>

<style lang="less" scopde>
  #tab-bar {
    display: flex;
  }
</style>
