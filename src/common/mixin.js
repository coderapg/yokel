// 定义混入
import { debounce } from './utils'

// 封装防抖函数混入
export const imgRefreshLoadMixin = {
  data () {
    return {
      imgLoad: null,
      refreImg: null
    }
  },
  mounted () {
    // 1. 监听图片加载完毕
    this.refreImg = debounce(this.$refs.scrollRef.upDataRefresh, 200)
    this.imgLoad = () => {
      this.refreImg()
    }
    this.$EventBus.$on('handleGoodsListItemImageLoad', this.imgLoad)
  }
}
