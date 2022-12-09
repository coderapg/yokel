<template>
  <div class="wares-info bor-rad12 pad12 mb16" v-if="Object.keys(detailWaresInfo).length !== 0">
    <div class="wares-info-head">
      <div class="wares-info-head-tips">
        <div class="wares-info-first-content bor-rad3">
          <span>会员券</span>
          <span>满600减70</span>
        </div>
        <div class="wares-info-lase-content">
          <span class="bor-rad3">购买得积分</span>
        </div>
      </div>
      <div class="wares-info-head-arch">
        <span>领券</span>
        <i class="iconfont">></i>
      </div>
    </div>
    <div class="wares-info-body">
      <div class="info-sales-volume">
        <span class="Tmall">天猫</span>
        <span class="sales-amount">月销1万+</span>
      </div>
      <div class="info-sales-title">
        <p class="info-sales-desc">{{ detailWaresInfo.title }}</p>
      </div>
    </div>
    <div class="wares-info-foot">
      <div class="wares-info-ranking">
        <span class="wares-ranking-real">{{ detailWaresInfo.newPrice }}</span>
        <span class="wares-ranking-old">{{ detailWaresInfo.oldPrice }}</span>
        <span class="wares-ranking-you">优惠价</span>
      </div>
      <div class="wares-info-foot-tips">
        <div class="wares-info-tips-item">
          <i class="icon">✩</i>
          <span>推荐</span>
        </div>
        <div class="wares-info-tips-item">
          <i class="icon">✩</i>
          <span>推荐</span>
        </div>
        <div class="wares-info-tips-item">
          <i class="icon">✩</i>
          <span>推荐</span>
        </div>
      </div>
      <div class="wares-info-foot-flex">
        <div class="wares-flex-item">销量10442</div>
        <div class="wares-flex-item">收藏616人</div>
        <div class="wares-flex-item">退货补运费</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailWaresRelated',
  props: {
    detailWaresInfo: {
      type: Object,
      default () {
        return {}
      },
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
  .wares-info {
    font-size: 12px;
    color: #666;
    .wares-info-head {
      display: flex;
      justify-content: space-between;
      height: 24px;
      line-height: 24px;
      margin-bottom: 18px;
      .wares-info-head-tips {
        display: flex;
        justify-content: space-between;
        span {
          padding: 2px 3px;
          height: 18px;
          box-sizing: border-box;
          color: var(--tips-color);
        }
        .wares-info-first-content {
          border: 1px solid var(--tips-color);
          span:first-child {
            position: relative;
          }
          span:first-child::after {
            position: absolute;
            top: -2px;
            right: 0;
            content: '';
            width: 1px;
            height: 22px;
            background-color: var(--tips-color);
          }
        }
        .wares-info-lase-content {
          margin-left: 5px;
          span {
            border: 1px solid var(--tips-color);
          }
        }
      }
      .wares-info-head-arch {
        position: relative;
        right: -12px;
        top: 0;
        width: 53px;
        height: 24px;
        background-color: var(--tips-color);
        text-align: center;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 12px;
        color: #f2f2f2;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
      }
    }
    .wares-info-body {
      .info-sales-volume {
        display: flex;
        justify-content: space-between;
        span.Tmall {
          padding: 2px 4px;
          background-color: #fe292f;
          color: #fff;
          border-radius: 10px;
        }
        span.sales-amount {
          color: #aaa;
        }
      }
      .info-sales-title {
        .info-sales-desc {
          width: 100%;
          color: #000;
          font-weight: 600;
          font-size: 14px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }
    .wares-info-foot {
      .wares-info-ranking {
        margin: 16px 0px;
        .wares-ranking-real {
          font-size: 18px;
          color: var(--tips-color);
          font-weight: 500;
        }
        .wares-ranking-old {
          font-size: 12px;
          color: #aaa;
          text-decoration: line-through;
          margin: 0px 2px;
        }
        .wares-ranking-you {
          padding: 2px 4px;
          background-color: var(--tips-color);
          color: #fff;
          font-size: 12px;
          border-radius: 8px;
        }
      }
      .wares-info-foot-tips {
        display: flex;
        margin-top: 9px;
        .wares-info-tips-item {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
          .icon {}
          span {}
        }
      }
      .wares-info-foot-flex {
        display: flex;
        .wares-flex-item {
          flex: 1;
        }
      }
    }
  }
</style>
