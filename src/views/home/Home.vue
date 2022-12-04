<template>
  <div id="home">
    <nav-bar class="nav-bar" initColor="#333333">
      <div slot="center">首页</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar'

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style lang="less" scopde>
  .nav-bar {
    background-color: #f8f8f8;
  }
</style>
