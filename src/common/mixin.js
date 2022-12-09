// 定义混入
import { debounce } from './utils'

export const imgRefreshLoadMixin = {
  data () {
    return {
      imgLoad: null
    }
  },
  mounted () {
    // 1. 监听图片加载完毕
    this.imgLoad = () => {
      const refreImg = debounce(this.$refs.scrollRef.upDataRefresh, 200)
      refreImg()
    }
    this.$EventBus.$on('handleGoodsListItemImageLoad', this.imgLoad)
  }
}
