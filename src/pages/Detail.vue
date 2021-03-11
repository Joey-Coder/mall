<template>
  <q-page>
    <section class="postcard">
      <!-- 轮播图 -->
      <div class="carousel">
        <!-- 轮播图大图 -->
        <div
          class="carousel-image"
          v-touch:swipeleft="leftSlide"
          v-touch:swiperight="rightSlide"
        >
          <img
            :src="item"
            alt=""
            v-for="(item, index) in carouselOption"
            :key="index"
            :class="[index === currentImg ? 'current-img' : '']"
          />
          <div class="carousel-tip">{{ currentImg + 1 }}/{{ carouselNum }}</div>
        </div>
        <!-- 轮播图预览 -->
        <div class="overview row">
          <a
            href="javascript:void(0)"
            v-for="(item, index) in carouselOption"
            :key="index"
            @click="
              if (currentImg !== index) {
                currentImg = index
              }
            "
            ><img :src="item" alt=""
          /></a>
        </div>
      </div>
      <div class="buy">
        <h4 class="title">
          2018 Hot New Tropical Print Button Front Belted Romper
        </h4>
        <div class="price-wrapper row">
          <q-select
            v-model="currency"
            :options="currencyOptions"
            outlined
            dense
            standout
          />
          <h4 class="price">${{ (product.price * product.num).toFixed(2) }}</h4>
        </div>
        <div class="quantity">
          <p>QUANTITY</p>
          <div class="quantity-btn">
            <q-btn
              icon="remove"
              size="md"
              class="remove-btn"
              @click="removeCartNum(product.productID)"
              unelevated
              :disable="product.num <= 0"
            ></q-btn>
            <input type="text" class="num-input" v-model="product.num" />
            <q-btn
              icon="add"
              size="md"
              unelevated
              class="add-btn"
              @click="addCartNum(product.productID)"
            ></q-btn>
          </div>
        </div>
        <div class="tool-btn">
          <q-btn color="white" text-color="dark" outline>Add to Cart</q-btn>
          <q-btn color="dark" text-color="white" @click="goTo('checkout', '')"
            >Buy Now</q-btn
          >
        </div>
        <q-separator></q-separator>
        <div class="contact">
          <a href="javascript:void(0)" class="follow-image">
            <img src="../assets/ic_facebook.png" alt="" />
          </a>
          <a href="javascript:void(0)" class="follow-image">
            <img src="../assets/ic_ins.png" alt="" />
          </a>
          <a href="javascript:void(0)" class="follow-image">
            <img src="../assets/ic_whatsapp.png" alt="" />
          </a>
          <a href="javascript:void(0)" class="follow-image">
            <img src="../assets/ic_g.png" alt="" />
          </a>
          <a href="javascript:void(0)" class="follow-image">
            <img src="../assets/ic_wechat.png" alt="" />
          </a>
        </div>
      </div>
    </section>
    <section class="desc">
      <div class="title">
        <h4>Descripiton</h4>
      </div>
      <div class="detail-wrapper">
        <h4 class="product-title">
          2018 Hot New Tropical Print Button Front Belted Romper
        </h4>
        <h4 class="description">Descripiton</h4>
        <div class="desc-content">
          <p>Is In Size S Model</p>
          <p>Height: 175cm ,Bust: 81cm</p>
          <p>Waist: 62cm ,Hips: 88cm . Item Measurements:</p>
        </div>
        <div
          class="detail-img"
          v-for="(item, index) in carouselOption"
          :key="index"
        >
          <img :src="item" alt="" />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Detail',
  data() {
    return {
      slide: 1,
      num: 1,
      currentImg: 0,
      carouselOption: [
        '/bu1.jpg',
        '/bu2.jpg',
        '/bu3.jpg',
        '/bu4.jpg',
        '/bu5.jpg'
      ],
      currency: 'USD',
      currencyOptions: ['USD', 'ELS', 'TEQ']
    }
  },
  methods: {
    ...mapMutations(['addCartNum', 'removeCartNum', 'inCart', 'insertProduct']),
    goTo(name, id) {
      this.$router.push({ name: name, params: { id } })
    },
    leftSlide() {
      this.currentImg =
        (this.currentImg + 1 + this.carouselNum) % this.carouselNum
    },
    rightSlide() {
      this.currentImg =
        (this.currentImg - 1 + this.carouselNum) % this.carouselNum
    }
  },
  components: {},
  props: {
    id: {
      type: [Number, String]
    }
  },
  created() {},
  mounted() {},
  computed: {
    ...mapGetters(['getCart']),
    /**
     * 根据id获取商品数量
     */
    product() {
      for (let i = 0; i < this.getCart.length; i++) {
        if (this.getCart[i].productID === this.id.toString()) {
          return this.getCart[i]
        }
      }
      const p = {
        id: '', // 购物车id
        productID: this.id.toString(), // 商品id
        productName:
          'modelo de lichi de Color sólido bufanda bolsa hombroDiagonal bolso', // 商品名称
        productImg: '', // 商品图片
        price: '23.00', // 商品价格
        num: '1', // 商品数量
        maxNum: '100' // 商品限购数量
      }
      this.insertProduct(p)
      return p
    },
    carouselNum() {
      return this.carouselOption.length
    }
  },
  watched: {},
  // 自定义左滑右滑的指令
  directives: {
    // 滑动指令
    touch: {
      bind: function(el, binding, vnode) {
        var touchType = binding.arg // 传入的模式 press swipeRight swipeLeft swipeTop swipeDowm Tap
        var timeOutEvent = 0
        var direction = ''
        // 滑动处理
        var startX, startY

        // 返回角度
        function GetSlideAngle(dx, dy) {
          return (Math.atan2(dy, dx) * 180) / Math.PI
        }

        // 根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
        function GetSlideDirection(startX, startY, endX, endY) {
          var dy = startY - endY
          var dx = endX - startX
          var result = 0

          // 如果滑动距离太短
          if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
            return result
          }

          var angle = GetSlideAngle(dx, dy)
          if (angle >= -45 && angle < 45) {
            result = 'swiperight'
          } else if (angle >= 45 && angle < 135) {
            result = 'swipeup'
          } else if (angle >= -135 && angle < -45) {
            result = 'swipedown'
          } else if (
            (angle >= 135 && angle <= 180) ||
            (angle >= -180 && angle < -135)
          ) {
            result = 'swipeleft'
          }
          return result
        }

        el.addEventListener(
          'touchstart',
          function(ev) {
            startX = ev.touches[0].pageX
            startY = ev.touches[0].pageY

            // 判断长按
            timeOutEvent = setTimeout(() => {
              timeOutEvent = 0
              if (touchType === 'press') {
                binding.value()
              }
            }, 500)
          },
          false
        )

        el.addEventListener('touchmove', function(ev) {
          clearTimeout(timeOutEvent)
          timeOutEvent = 0
        })

        el.addEventListener(
          'touchend',
          function(ev) {
            var endX, endY
            endX = ev.changedTouches[0].pageX
            endY = ev.changedTouches[0].pageY
            direction = GetSlideDirection(startX, startY, endX, endY)

            clearTimeout(timeOutEvent)

            switch (direction) {
              case 0:
                break
              case 'swipeup':
                if (touchType === 'swipeup') {
                  binding.value()
                }
                break
              case 'swipedown':
                if (touchType === 'swipedown') {
                  binding.value()
                }
                break
              case 'swipeleft':
                if (touchType === 'swipeleft') {
                  binding.value()
                }
                break
              case 'swiperight':
                if (touchType === 'swiperight') {
                  binding.value()
                }
                break
              default:
            }
          },
          false
        )
      }
    }
  }
}
</script>
<style scoped lang="scss">
@keyframes fade-in {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
.q-page {
  padding: 5vw 15vw;
  .postcard {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 4vw;
    justify-content: center;
    margin-bottom: 4rem;
    .carousel {
      max-width: 600px;
      .carousel-image {
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
        img {
          display: none;
          opacity: 0;
          padding: 0px;
          object-fit: cover;
          object-position: top center;
          width: 32rem;
          height: 30rem;
          animation: 1s fade-in ease-out forwards;
        }
        .carousel-tip {
          display: none;
        }
        .current-img {
          display: block;
        }
      }
      .overview {
        display: flex;
        align-items: center;
        justify-content: space-between;
        justify-items: center;
        a {
          display: block;
          img {
            object-fit: cover;
            object-position: top center;
            width: 5.2rem;
            height: 5.2rem;
          }
        }
      }
    }
    .buy {
      max-width: 600px;
      display: grid;
      grid-template-rows: repeat(6, 1fr);
      align-items: center;
      //   justify-self: flex-start;
      .title {
        font-size: 1.2rem;
        font-weight: 700;
      }
      .price-wrapper {
        .q-select {
          margin-right: 2rem;
        }
        .price {
          font-size: 1.8rem;
          font-weight: 700;
        }
      }
      .quantity {
        .quantity-btn {
          display: flex;
          .remove-btn {
            width: 3rem;
            height: 3rem;
            border: 1px solid $grey-4;
          }
          .add-btn {
            width: 3rem;
            height: 3rem;
            border: 1px solid $grey-4;
          }
          .num-input {
            width: 4rem;
            height: 3rem;
            text-align: center;
            background-color: transparent;
            color: #000;
            border: 1px solid transparent;
            border: 1px solid $grey-4;
          }
        }
      }
      .tool-btn {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
        align-self: flex-end;
        height: 50%;
      }
      .contact {
        align-self: flex-start;
        // border-top: 1px $grey-5 solid;
        // height: 80%;
        a {
          //   display: block;
          margin-right: 1rem;
        }
      }
    }
  }
  .desc {
    .title {
      padding: 0.5rem 0 0.5rem 1.5rem;
      border: 1px solid $grey-4;
      h4 {
        font-size: 1.2rem;
      }
      margin-bottom: 1.5rem;
    }
    .detail-wrapper {
      .product-title {
        font-size: 1.2rem;
        font-weight: 600;
        color: #444;
        margin-bottom: 1rem;
      }
      .description {
        font-size: 1.2rem;
        font-weight: 600;
        color: #444;
        margin-bottom: 5px;
      }
      .desc-content {
        margin-bottom: 5rem;
      }
      .detail-img {
        margin: 1rem 0;
        overflow: hidden;
        img {
          object-fit: cover;
          width: 31rem;
          height: 31rem;
          object-position: top center;
        }
      }
    }
  }
}

@media (max-width: 1280px) {
  .q-page {
    padding: 5vw 10vw;
  }
}

@media (max-width: 1100px) {
  .q-page {
    padding: 5vw 3vw;
  }
}

@media (max-width: 998px) {
  .q-page {
    .postcard {
      grid-template-columns: 1fr;
      grid-template-rows: 630px 1fr;
      justify-items: center;
      margin-bottom: 5px;
      .carousel {
        .carousel-image {
          img {
            width: 600px;
            height: 600px;
          }
          .carousel-tip {
            display: block;
            position: absolute;
            z-index: 200;
            bottom: 10px;
            left: 10px;
            width: 45px;
            height: 27px;
            text-align: center;
            background-color: rgba(0, 0, 0, 0.3);
            color: white;
            line-height: 27px;
            border-radius: 10px;
          }
        }
        .overview {
          display: none !important;
        }
      }
      .buy {
        display: block;
        margin-bottom: 2rem;
        .title,
        .price-wrapper,
        .quantity,
        .tool-btn,
        .contact {
          margin: 1.2rem 0;
        }
        .tool-btn {
          height: 50px;
        }
        .contact {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}

@media (max-width: 700px) {
  .q-page {
    .postcard {
      grid-template-rows: 100vw 1fr;
      .carousel {
        .carousel-image {
          width: 98vw;
          height: 98vw;
        }
      }
      .buy {
        margin-bottom: 10px;
      }
    }
    .desc {
      .detail-wrapper {
        .title {
          padding-left: 1rem;
        }
        .detail-img {
          display: flex;
          width: 90vw;
          height: 90vw;
          justify-content: center;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
