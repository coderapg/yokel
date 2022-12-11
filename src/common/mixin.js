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

// 封装返回顶部混入
export const backTopMixin = {
  data () {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    mixinPosition (position, current) {
      this.isShowBackTop = Math.abs(position.y) > current
    },
    // 返回顶部
    handleBackTopClick () {
      this.$refs.scrollRef.scrollBack(0, 44, 500)
    }
  }
}
