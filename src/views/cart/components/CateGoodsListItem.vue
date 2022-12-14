<template>
  <div class="goods-list-item">
    <div class="item-head">
      <div class="item-head-left">
        <div class="item-head-checked-icon">
          <div :class="goodsItem.isChecked ? 'item-head-check-checked' : 'item-head-check'" @click="handleItemClick"></div>
        </div>
      </div>
      <div class="item-head-right">
        <div class="item-head-title">
          <div class="head-title">
            <i class="iconfont">
              <img src="~assets/images/cart/tianmao.png" alt="">
            </i>
            <p>{{ goodsItem.name }}</p>
            <em class="iconfont"> > </em>
          </div>
          <div class="head-draw-coupon">领券</div>
        </div>
        <div class="item-head-desc">
          <div class="desc-across">
            <span class="item-reduction">跨店减免</span>
            <span class="man-jian">每满200减30,可跨店</span>
          </div>
          <span class="cou-dan">凑单<em> > </em></span>
        </div>
      </div>
    </div>
    <div class="item-content">
      <div class="item-head-left">
        <div class="item-head-checked-icon">
          <div :class="goodsItem.isChecked ? 'item-head-check-checked' : 'item-head-check'" @click="handleItemClick"></div>
        </div>
      </div>
      <div class="item-content-right">
        <div class="item-content-message">
          <div class="item-content-img">
            <img :src="goodsItem.wearImg" alt="">
          </div>
          <div class="item-head-info">
            <div class="item-info-title">
              <p>{{ goodsItem.title }}</p>
            </div>
            <div class="item-info-mode">
              <span class="item-info-mode-desc">{{ goodsItem.desc }}</span>
              <i class="iconfont"> > </i>
            </div>
            <div class="item-info-descount">
              <span v-for="(key, indey) in goodsItem.servicesArr" :key="indey">{{ key }}</span>
            </div>
            <div class="item-info-price">
              <span class="info-now-price"><em>¥</em>{{ goodsItem.realPrice }}</span>
              <span class="info-now-num">X {{ goodsItem.count }} </span>
            </div>
          </div>
        </div>
        <div class="item-content-shaky">
          <p class="shaky"><em>本店活动</em>直降除外，满199元，享包邮</p>
          <p class="cou">凑单 ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CateGoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    handleItemClick () {
      this.goodsItem.isChecked = !this.goodsItem.isChecked
    }
  }
}
</script>

<style lang="less" scoped>
  .goods-list-item:first-child {
    margin-top: 0 !important;
  }
  .goods-list-item {
    width: 100%;
    padding: 12px 11px 12px 10px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 12px;
    margin-top: 8px;
    font-size: 12px;
    .item-head {
      display: flex;
      .item-head-left {
        .item-head-checked-icon {
          top: 4px;
        }
      }
      .item-head-right {
        flex: 1;
        width: 100%;
        .item-head-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .head-title {
            display: flex;
            justify-content: center;
            align-items: center;
            .iconfont {
              img {
                width: 20px;
                margin-right: 7px;
              }
            }
            p {
              font-size: 14px;
              color: #333;
              font-weight: bold;
            }
            em {
              font-size: 12px;
              color: #c7c7c7;
              font-style: normal;
              margin-left: 7px;
            }
          }
          .head-draw-coupon {
            font-size: 12px;
            color: #111;
            font-weight: bold;
          }
        }
        .item-head-desc {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 20px 0;
          font-size: 12px;
          .desc-across {
            .item-reduction {
              padding: 1px 2px;
              color: var(--tank-color);
              border: 1px solid var(--tank-color);
              border-radius: 4px;
              margin-right: 5px;
            }
            .man-jian {
              color: #060606;
            }
          }
          .cou-dan {
            color: var(--tank-color);
          }
        }
      }
    }
    .item-content {
      display: flex;
      .item-head-left {
        .item-head-checked-icon {
          top: 20px;
        }
      }
      .item-content-right {
        flex: 1;
        .item-content-message {
          display: flex;
          .item-content-img {
            width: 100px;
            height: 100px;
            border-radius: 20px;
            overflow: hidden;
            margin-right: 12px;
            img {
              width: 100px;
              height: 100px;
            }
          }
          .item-head-info {
            flex: 1;
            line-height: 26px;
            .item-info-title {
              p {
                width: 200px;
                font-weight: bold;
                font-size: 14px;
                color: #131313;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
            .item-info-mode {
              display: flex;
              justify-content: space-around;
              align-items: center;
              .item-info-mode-desc {
                width: 180px;
                font-size: 14px;
                color: #9a9a9a;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              i {
                font-size: 12px;
              }
            }
            .item-info-descount {
              span {
                padding: 1px 3px;
                color: var(--tank-color);
                border: 1px solid var(--tank-color);
                margin-right: 4px;
                border-radius: 3px;
              }
            }
            .item-info-price {
              display: flex;
              justify-content: space-between;
              margin: 4px 0;
              .info-now-price {
                font-size: 18px;
                font-weight: bold;
                color: var(--tank-color);
                em {
                  font-style: normal;
                  font-size: 14px;
                  margin-right: 2px;
                }
              }
              .info-now-num {
                color: #090909;
                font-weight: bold;
                padding: 2px 6px;
                border: 1px solid #dddddd;
                border-radius: 4px;
              }
            }
          }
        }
        .item-content-shaky {
          display: flex;
          justify-content: center;
          align-items: center;
          .shaky {
            flex: 1;
            color: #0f0f0f;
            font-size: 14px;
            em {
              font-size: 12px;
              padding: 1px 4px;
              border: 1px solid var(--tank-color);
              color: var(--tank-color);
              border-radius: 4px;
              margin-right: 6px;
              font-style: normal;
            }
          }
          .cou {
            // width: 30px;
          }
        }
      }
    }
    .item-head-left {
      width: 20px;
      margin-right: 10px;
      .item-head-checked-icon {
        position: relative;
        left: 0;
        right: 0;
      }
      .item-head-check,
      .item-head-check-checked {
        position: relative;
        width: 20px;
        height: 20px;
      }
      .item-head-check::before,
      .item-head-check-checked::before {
        position: absolute;
        left: 0;
        top: 0;
        content: '';
        width: 20px;
        height: 20px;
        background-size: cover;
      }
      .item-head-check::before {
        background-image: url("../../../assets/images/common/init_checkbox.png");
      }
      .item-head-check-checked::before {
        background-image: url("../../../assets/images/common/checked.png");
      }
    }
  }
</style>
