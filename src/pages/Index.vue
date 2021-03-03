<template>
  <q-page>
    <!-- 轮播图 -->
    <!-- <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      control-color="grey"
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        :name="1"
        img-src="../assets/postcard1.jpg"
        class="column no-wrap flex-center"
      >
        <div class="text-h2 q-mb-lg text-weight-medium text-center">
          New Collwction
        </div>
        <q-btn
          color="black"
          label="shop this collection ->"
          padding="md"
        ></q-btn>
      </q-carousel-slide>
      <q-carousel-slide
        :name="2"
        img-src="../assets/postcard2.jpg"
        class="column no-wrap flex-center"
      >
        <div class="text-h2 q-mb-lg text-weight-medium text-center">
          Vintage Style
        </div>
        <q-btn
          color="black"
          label="shop this collection ->"
          padding="md"
        ></q-btn>
      </q-carousel-slide>
    </q-carousel> -->

    <!-- 商品海报区 -->
    <section class="postcard">
      <!-- 海报图1 -->
      <!-- <div class="postcard-item-1 q-pa-xl">
        <div class="image-wrapper-1">
          <img src="../assets/2*2-1.jpg" alt="" />
        </div>
        <div class="title">
          <p class="text-h3">Best shirts for this summer</p>
          <p>
            Nam at dui lacus . Sed porttitor , metus idtristique maximus ,nisl
            ligula ultrices
          </p>
          <q-btn color="black" label="BUY NOW" outline></q-btn>
        </div>
        <div class="image-wrapper-2">
          <img src="../assets/2*2-2.jpg" alt="" />
        </div>
      </div> -->
      <!-- 海报图2 -->
      <!-- <div class="postcard-item-2 q-pa-xl">
        <div class="image-wrapper-1">
          <img src="../assets/3*3-1.jpg" alt="" />
        </div>
        <div class="image-wrapper-2">
          <img src="../assets/3*3-2.jpg" alt="" />
        </div>
        <div class="title">
          <p class="text-h3">Best shirts for this summer</p>
          <p>
            Nam at dui lacus . Sed porttitor , metus idtristique maximus ,nisl
            ligula ultrices
          </p>
          <q-btn color="black" label="BUY NOW" outline></q-btn>
        </div>
      </div> -->

      <!-- 海报图3 -->
      <!-- <div class="postcard-item-3 q-pa-xl">
        <q-img
          src="../assets/TheBestChoice.jpg"
          style="height: 480px"
          class="q-mr-xl"
        >
          <div
            class="text-h2 text-black flex flex-center absolute-full bg-transparent column"
          >
            <p>THE BEST CHOICE</p>
            <q-btn label="Shop this fabri->" outline color="black"></q-btn>
          </div>
        </q-img>
      </div> -->
      <!-- 海报图1 -->
      <div class="postcard-item">
        <q-img src="../assets/postcard1.jpg" class="q-mr-xl">
          <div class="flex flex-center absolute-full bg-transparent column">
            <h4>THE BEST CHOICE</h4>
            <q-btn label="Shop this fabri->" color="black"></q-btn>
          </div>
        </q-img>
      </div>
      <div class="postcard-item">
        <q-img src="../assets/postcard2.jpg" class="q-mr-xl">
          <div class="flex flex-center absolute-full bg-transparent column">
            <h4>THE BEST CHOICE</h4>
            <q-btn label="Shop this fabri->" color="black"></q-btn>
          </div>
        </q-img>
      </div>
      <div class="postcard-item">
        <q-img src="../assets/postcard1.jpg" class="q-mr-xl">
          <div class="flex flex-center absolute-full bg-transparent column">
            <h4>THE BEST CHOICE</h4>
            <q-btn label="Shop this fabri->" color="black"></q-btn>
          </div>
        </q-img>
      </div>
      <div class="postcard-item">
        <q-img src="../assets/postcard2.jpg" class="q-mr-xl">
          <div class="flex flex-center absolute-full bg-transparent column">
            <h4>THE BEST CHOICE</h4>
            <q-btn label="Shop this fabri->" color="black"></q-btn>
          </div>
        </q-img>
      </div>
    </section>
    <!-- 商品展示区 -->
    <section class="products q-pa-xl">
      <div class="product">
        <div class="product-image">
          <a href="#"><img src="../assets/product.jpg" alt="product"/></a>
          <div class="buy-icon">
            <q-btn unelevated round padding="md">
              <i class="iconfont icon-gouwudai"></i>
            </q-btn>
            <q-btn unelevated round padding="md">
              <i class="iconfont icon-eye"></i>
            </q-btn>
          </div>
        </div>
        <h5 class="product-desc">
          <a href="#"
            >modelo de lichi de Color sólido bufanda bolsa hombro Diagonal
            bolso</a
          >
        </h5>
        <!-- <ul class="price">
          <li class="normal-price">$25.00</li>
          <li class="cheap-price">$20.00</li>
        </ul> -->
      </div>
      <div class="product">
        <div class="product-image">
          <a href="#"><img src="../assets/product.jpg" alt="product"/></a>
          <div class="buy-icon">
            <q-btn unelevated round padding="md">
              <i class="iconfont icon-gouwudai"></i>
            </q-btn>
            <q-btn unelevated round padding="md">
              <i class="iconfont icon-eye"></i>
            </q-btn>
          </div>
        </div>
        <h5 class="product-desc">
          <a href="#"
            >modelo de lichi de Color sólido bufanda bolsa hombro Diagonal
            bolso</a
          >
        </h5>
        <!-- <ul class="price">
          <li class="normal-price">$25.00</li>
          <li class="cheap-price">$20.00</li>
        </ul> -->
      </div>
      <div class="product">
        <div class="product-image">
          <a href="#"><img src="../assets/product.jpg" alt="product"/></a>
          <div class="buy-icon">
            <q-btn unelevated round padding="md">
              <i class="iconfont icon-gouwudai"></i>
            </q-btn>
            <q-btn unelevated round padding="md">
              <i class="iconfont icon-eye"></i>
            </q-btn>
          </div>
        </div>
        <h5 class="product-desc">
          <a href="#"
            >modelo de lichi de Color sólido bufanda bolsa hombro Diagonal
            bolso</a
          >
        </h5>
        <!-- <ul class="price">
          <li class="normal-price">$25.00</li>
          <li class="cheap-price">$20.00</li>
        </ul> -->
      </div>
      <div class="product">
        <div class="product-image">
          <a href="#"><img src="../assets/product.jpg" alt="product"/></a>
          <div class="buy-icon">
            <q-btn unelevated round padding="md">
              <i class="iconfont icon-gouwudai"></i>
            </q-btn>
            <q-btn unelevated round padding="md">
              <i class="iconfont icon-eye"></i>
            </q-btn>
          </div>
        </div>
        <h5 class="product-desc">
          <a href="#"
            >modelo de lichi de Color sólido bufanda bolsa hombro Diagonal
            bolso</a
          >
        </h5>
        <!-- <ul class="price">
          <li class="normal-price">$25.00</li>
          <li class="cheap-price">$20.00</li>
        </ul> -->
      </div>
      <div class="product">
        <div class="product-image">
          <a href="#"><img src="../assets/product.jpg" alt="product"/></a>
          <div class="buy-icon">
            <q-btn unelevated round padding="md">
              <i class="iconfont icon-gouwudai"></i>
            </q-btn>
            <q-btn unelevated round padding="md">
              <i class="iconfont icon-eye"></i>
            </q-btn>
          </div>
        </div>
        <h5 class="product-desc">
          <a href="#"
            >modelo de lichi de Color sólido bufanda bolsa hombro Diagonal
            bolso</a
          >
        </h5>
        <!-- <ul class="price">
          <li class="normal-price">$25.00</li>
          <li class="cheap-price">$20.00</li>
        </ul> -->
      </div>
      <div class="product">
        <div class="product-image">
          <a href="#"><img src="../assets/product.jpg" alt="product"/></a>
          <div class="buy-icon">
            <q-btn unelevated round padding="md">
              <i class="iconfont icon-gouwudai"></i>
            </q-btn>
            <q-btn unelevated round padding="md">
              <i class="iconfont icon-eye"></i>
            </q-btn>
          </div>
        </div>
        <h5 class="product-desc">
          <a href="#"
            >modelo de lichi de Color sólido bufanda bolsa hombro Diagonal
            bolso</a
          >
        </h5>
        <!-- <ul class="price">
          <li class="normal-price">$25.00</li>
          <li class="cheap-price">$20.00</li>
        </ul> -->
      </div>
    </section>
    <!-- 联系信息 -->
    <section class="contact-info q-pa-xl">
      <div class="info">
        <div class="icon">
          <i class="iconfont icon-email"></i>
        </div>
        <h5 class="title">mail</h5>
        <p class="text">*******@qq.com</p>
      </div>
      <div class="info">
        <div class="icon">
          <i class="iconfont icon-phone"></i>
        </div>
        <h5 class="title">phone</h5>
        <p class="text">0755-33****</p>
      </div>
      <div class="info">
        <div class="icon">
          <i class="iconfont icon-location"></i>
        </div>
        <h5 class="title">address</h5>
        <p class="text">
          美國華盛頓哥倫比亞特區西北區賓夕法尼亞大道1600號美國華盛頓哥倫比亞特區西北區賓夕法尼亞大道1600號
        </p>
      </div>
    </section>
  </q-page>
</template>

<script>
// import LazyImg from '../components/LazyImg'
import ScrollReveal from 'scrollreveal'
export default {
  name: 'PageIndex',
  data() {
    return {
      slide: 1,
      autoplay: true,
      scrollReveal: ScrollReveal()
    }
  },
  methods: {},
  components: {},
  mounted() {
    const scrollOptions = {
      duration: 1500,
      delay: 500,
      origin: 'bottom',
      reset: true,
      distance: '10rem',
      easing: 'ease-in-out'
      // interval: 2000
    }
    // const foo = document.querySelector('.postcard-item')
    this.scrollReveal.reveal('.postcard-item', {
      ...scrollOptions
    })
    this.scrollReveal.reveal('.product', { ...scrollOptions })
  }
}
</script>

<style scoped lang="scss">
@keyframes slide-top {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    transform: translateY(-50px);
    opacity: 1;
  }
}

.q-page {
  .q-carousel {
    width: auto;
    height: auto;
    .q-carousel__slide {
      width: 100vw;
      height: 65vw;
      background-position: top center;
      object-fit: contain;
    }
  }
  .postcard {
    // position: relative;
    width: auto;
    height: auto;
    .postcard-item {
      padding: 2rem 0;
      .q-img {
        width: 100%;
        height: 65vw;
        ::v-deep .q-img__image {
          background-position: top center !important;
          background-size: cover;
        }
        h4 {
          font-weight: 600;
          font-size: 4rem;
          color: #000;
          margin-bottom: 2.5rem;
        }
        .q-btn {
          width: 12rem;
          height: 3rem;
        }
      }
    }
    // .postcard-item-1 {
    //   display: grid;
    //   grid-template-areas: 'pic1 title' 'pic1 pic2';
    //   grid-template-columns: 1fr 1fr;
    //   grid-template-rows: 220px 1fr;
    //   gap: 80px;

    //   .image-wrapper-1 {
    //     grid-area: pic1;
    //     overflow: hidden;
    //     place-self: end end;
    //     img {
    //       width: 100%;
    //       height: 700px;
    //       object-fit: cover;
    //       object-position: top center;
    //     }
    //   }
    //   .image-wrapper-2 {
    //     grid-area: pic2;
    //     overflow: hidden;
    //     place-self: start start;
    //     img {
    //       width: 100%;
    //       height: 500px;
    //       object-fit: cover;
    //       object-position: top center;
    //     }
    //   }
    //   .title {
    //     width: 75%;
    //     grid-area: title;
    //     place-self: center start;
    //     text-align: center;
    //   }
    //   ::v-deep .q-img__image {
    //     background-position: top center !important;
    //   }
    // }
    // .postcard-item-2 {
    //   display: grid;
    //   grid-template-columns: 1fr 1fr 1fr;
    //   gap: 80px;
    //   align-items: center;
    //   .image-wrapper-1 {
    //     overflow: hidden;
    //     // place-self: center end;
    //     img {
    //       width: 100%;
    //       height: 510px;
    //       object-fit: cover;
    //       object-position: top center;
    //     }
    //   }
    //   .image-wrapper-2 {
    //     overflow: hidden;
    //     // place-self: center center;
    //     img {
    //       width: 100%;
    //       height: 880px;
    //       object-fit: cover;
    //       object-position: top center;
    //     }
    //   }
    //   .title {
    //     // place-self: end start;
    //   }
    // }
  }
  .products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
    row-gap: 50px;
    .product {
      display: grid;
      justify-items: center;
      text-align: center;
      &:hover {
        .buy-icon {
          animation: slide-top 0.6s ease-in-out forwards;
        }
      }
      .product-image {
        overflow: hidden;
        position: relative;
        img {
          position: relative;
          width: 100%;
          height: 500px;
          object-fit: cover;
          object-position: top center;
          z-index: 100;
        }
        .buy-icon {
          position: absolute;
          z-index: 200;
          bottom: 3%;
          background-color: transparent;
          width: 100%;
          opacity: 0;
          .q-btn {
            margin: 5px;
            background-color: #fff;
            transition: all 0.8s ease-in-out;
            .iconfont {
              font-size: 30px;
              font-weight: 200;
              color: #888888;
            }
            &:hover {
              background-color: #000;
              .iconfont {
                color: #fff;
              }
            }
          }
        }
      }
      .product-desc {
        margin: 16px 0 10px;
        padding: 0 16px;
        font-size: 20px;
        font-weight: 400;
      }
      // .price {
      //   width: 100%;
      //   display: flex;
      //   justify-content: center;
      //   margin-top: 0;
      //   li {
      //     list-style: none;
      //     font-size: 18px;
      //   }
      //   .cheap-price {
      //     margin-left: 10px;
      //     color: #888;
      //   }
      // }
    }
  }
  .contact-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5vw;
    .info {
      display: grid;
      justify-items: center;
      text-align: center;
      .icon {
        // background-color: #eee;
        height: 50px;
        width: 50px;
        text-align: center;
        line-height: 50px;
        border-radius: 25px;
        border: 1px solid #eee;
        i {
          font-size: 30px;
        }
      }
      .text {
        /* 多行文本省略 */
        display: -webkit-box;
        width: 50%;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
