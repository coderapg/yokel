<template>
  <div id="detail">
    <detail-nav-bar />
  </div>
</template>

<script>
import DetailNavBar from './components/DetailNavBar'

export default {
  name: 'Detail',
  data () {
    return {
      iid: null
    }
  },
  components: {
    DetailNavBar
  },
  created () {
    const { iid } = this.$route.query
    this.iid = iid
  }
}
</script>

<style lang="less" scoped></style>
