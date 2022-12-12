<template>
  <div id="cart">
    <cart-nav-bar />
    <scroll class="cart-scroll" ref="scrollRef">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
      </ul>
    </scroll>
    <cart-settle />
  </div>
</template>

<script>
import CartNavBar from './components/CartNavBar'
import Scroll from 'components/common/Scroll/Scroll'
import CartSettle from './components/CartSettle'

export default {
  name: 'Cart',
  components: {
    CartNavBar,
    Scroll,
    CartSettle
  }
}
</script>

<style lang="less" scopde>
  #cart {
    background-color: #f1f1f1;
    width: 100vw;
    height: 100vh;
    .cart-scroll {
      height: calc(100% - 44px - 49px - 66px);
    }
  }
</style>
