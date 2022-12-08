<template>
  <div id="detail">
  </div>
</template>

<script>

export default {
  name: 'Detail',
  data () {
    return {
      iid: null
    }
  },
  created () {
    const { iid } = this.$route.query
    this.iid = iid
  }
}
</script>

<style lang="less" scoped></style>
