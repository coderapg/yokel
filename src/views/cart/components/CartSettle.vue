<template>
  <div class="cart-settle">
    <div class="cart-checked-all" @click="handleToggleChecked">
      <div :class="isChecked ? 'checked-all-checked' : 'checked-all'">全选</div>
    </div>
    <div class="cart-amount">
      <div class="cart-all-price">
        <span class="cart-title">合计:</span>
        <span class="cart-money">
          <em>¥</em>244.88
        </span>
      </div>
      <div class="cart-total">
        <div class="total-btn">结算</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CartSettle',
  data () {
    return {
      isChecked: false
    }
  },
  methods: {
    handleToggleChecked () {
      this.isChecked = !this.isChecked
    }
  }
}
</script>

<style lang="less" scoped>
  .cart-settle {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 66px;
    padding: 0px  9px 0px 16px;
    background-color: #fff;
    .cart-checked-all {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #909090;
      .checked-all,
      .checked-all-checked {
        position: relative;
        padding-left: 26px;
      }
      .checked-all::before,
      .checked-all-checked::before {
        position: absolute;
        left: 0;
        top: 0;
        content: '';
        width: 20px;
        height: 20px;
        background-size: cover;
      }
      .checked-all::before {
        background-image: url("../../../assets/images/common/init_checkbox.png");
      }
      .checked-all-checked::before {
        background-image: url("../../../assets/images/common/checked.png");
      }
    }
    .cart-amount {
      display: flex;
      justify-content: center;
      justify-items: center;
      .cart-all-price {
        display: flex;
        justify-content: center;
        justify-items: center;
        font-size: 14px;
        .cart-title {
          line-height: 40px;
          color: #363636;
        }
        .cart-money {
          font-size: 18px;
          line-height: 40px;
          color: #ff5526;
          em {
            font-style: normal;
            font-size: 14px;
            margin: 0 3px 0 4px;
          }
        }
      }
      .cart-total {
        margin-left: 9px;
        .total-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100px;
          height: 40px;
          box-sizing: border-box;
          border-radius: 40px;
          color: #fff;
          font-weight: bold;
          font-size: 18px;
          background-image: linear-gradient(to right, #f78f2c, #ff492b);
        }
      }
    }
  }
</style>
