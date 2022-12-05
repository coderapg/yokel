<template>
  <div class="home-recommend">
    <div class="home-recommend-item" v-for="(item, index) in recommendList" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <span>{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeRecommend',
  props: {
    recommendList: {
      type: Array,
      default () {
        return []
      },
      require: true
    }
  }
}
</script>

<style lang="less" scoped>
  .home-recommend {
    display: flex;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
    .home-recommend-item {
      flex: 1;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 80px;
        }
        span {
          margin: 5px 0;
          color: #666;
          font-size: 14px;
        }
      }
    }
  }
</style>
