<template>
  <div class="toast" v-show="isShow">{{ message }}</div>
</template>

<script>

export default {
  name: 'Toast',
  props: {
    message: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showMessage (message = '默认文字', duration = 2000) {
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration)
    }
  }
}
</script>

<style lang="less" scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 999;
    transform:translate(-50%, -50%);
    padding: 6px 10px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }
</style>
