<template>
  <div class="goods-list-item">
    <a href="javascript:;" @click="handleGoodsListItemClick">
      <img :src="listItem.show.img" alt="" @load="handleGoodsListItemImageLoad">
      <div class="item-desc">
        <p class="item-title">{{ listItem.title }}</p>
        <div class="item-info">
          <div class="item-price">
            <span class="item-price-icon">{{ listItem.price }}</span>
            <span v-if="exceed" class="item-buy">超100+人收藏</span>
            <span class="item-else" v-else>浏览100+</span>
          </div>
          <div class="item-collect">
            <img src="~assets/images/common/collect.svg" alt="">
            <span>{{ listItem.cfav }}</span>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>

export default {
  name: 'GoodsListItem',
  props: {
    listItem: {
      type: Object,
      default () {
        return {}
      },
      require: true
    }
  },
  computed: {
    exceed () {
      return this.listItem.cfav > 100
    }
  },
  methods: {
    handleGoodsListItemImageLoad () {
      this.$EventBus.$emit('handleGoodsListItemImageLoad')
    },
    handleGoodsListItemClick () {
      const { iid } = this.listItem
      this.$router.push({
        path: '/detail',
        query: {
          iid
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .goods-list-item {
    width: 48%;
    margin: 6px 0;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    padding-bottom: 4px;
    a {
      display: block;
      > img {
        width: 100%;
      }
      .item-desc {
        margin: 4px 6px;
        color: #333;
        p.item-title {
          text-indent: 1em;
          font-size: 14px;
          overflow:hidden; /*超出的部分隐藏起来。*/
          text-overflow:ellipsis;/* 支持 IE */
          display:-webkit-box; //将对象作为弹性伸缩盒子模型显示。
          -webkit-box-orient:vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
          -webkit-line-clamp:2; //这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。
        }
        .item-info {
          .item-price {
            display: flex;
            font-size: 12px;
            color: var(--tank-color);
            span.item-price-icon {
              position: relative;
              font-size: 16px;
              text-indent: 8px;
              color: var(--tank-color);
              margin-left: 2px;
            }
            span.item-price-icon::before {
              position: absolute;
              content: '¥';
              top: 4px;
              left: -8px;
              color: var(--tank-color);
              font-size: 12px;
            }
            span.item-buy,
            span.item-else {
              margin-left: 6px;
              font-size: 12px;
              color: var(--span-color);
            }
          }
          .item-collect {
            margin-top: 6px;
            > img {
              width: 14px;
            }
            span {
              font-size: 14px;
              margin-left: 2px;
              color: var(--span-color);
            }
          }
        }
      }
    }
  }
</style>
