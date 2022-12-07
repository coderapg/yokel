<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data () {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  // mounted生命周期函数只执行一次，为什么其内部的$emit能够发射多次？
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    this.scroll.on('scroll', position => {
      this.$emit('handleBetterScrollScroll', position)
    })
    // 上拉加载更多
    this.scroll.on('pullingUp', () => {
      this.$emit('handleBetterScrollPullingUp')
    })
  },
  methods: {
    scrollBack (x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    overFinishPullUp () {
      this.scroll && this.scroll.finishPullUp()
    },
    upDataRefresh () {
      this.scroll && this.scroll.refresh()
      console.log('执行几次')
    }
  }
}
</script>
