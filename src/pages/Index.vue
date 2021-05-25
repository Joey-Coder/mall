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
      <div
        class="postcard-item col-12"
        v-for="(url, index) in postcards"
        :key="index"
      >
        <q-img class="mr-xl lazyImage" :data-src="url || bu2" />
        <!-- <div class="flex flex-center absolute-full bg-transparent column">
            <h4>THE BEST CHOICE</h4>
            <q-btn color="black">{{ $t('showThisFabric') }}-></q-btn>
          </div> -->
      </div>
      <!-- <div class="postcard-item col-12">
        <q-img src="../assets/bu2.jpg" class="q-mr-xl">
          <div class="flex flex-center absolute-full bg-transparent column">
            <h4>THE BEST CHOICE</h4>
            <q-btn :label="$t('showThisFabric') + '->'" color="black"></q-btn>
          </div>
        </q-img>
      </div>
      <div class="postcard-item col-12">
        <q-img src="../assets/bu3.jpg" class="q-mr-xl">
          <div class="flex flex-center absolute-full bg-transparent column">
            <h4>THE BEST CHOICE</h4>
            <q-btn :label="$t('showThisFabric') + '->'" color="black"></q-btn>
          </div>
        </q-img>
      </div>
      <div class="postcard-item col-12">
        <q-img src="../assets/bu4.jpg" class="q-mr-xl">
          <div class="flex flex-center absolute-full bg-transparent column">
            <h4>THE BEST CHOICE</h4>
            <q-btn :label="$t('showThisFabric') + '->'" color="black"></q-btn>
          </div>
        </q-img>
      </div> -->
    </section>
    <!-- 商品展示区 -->
    <section class="products q-pa-xl">
      <div class="product" v-for="item in products" :key="item.id">
        <div class="product-image">
          <a href="javascript:void(0)" @click="goTo('detail', '1')"
            ><img
              src="/1.jpg"
              alt="product"
              :data-src="item.pic || bu2"
              class="lazyImage"
          /></a>
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
          <!-- <a href="#"
            >modelo de lichi de Color sólido bufanda bolsa hombro Diagonal
            bolso</a
          > -->
          <a href="javaScript:void(0)">{{ item.name }}</a>
        </h5>
        <!-- <ul class="price">
          <li class="normal-price">$25.00</li>
          <li class="cheap-price">$20.00</li>
        </ul> -->
      </div>
      <!-- <div class="product">
        <div class="product-image">
          <a href="javascript:void(0)" @click="goTo('detail', '1')"
            ><img src="../assets/bu2.jpg" alt="product"
          /></a>
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
        <ul class="price">
          <li class="normal-price">$25.00</li>
          <li class="cheap-price">$20.00</li>
        </ul>
      </div>
      <div class="product">
        <div class="product-image">
          <a href="#"><img src="../assets/bu3.jpg" alt="product"/></a>
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
        <ul class="price">
          <li class="normal-price">$25.00</li>
          <li class="cheap-price">$20.00</li>
        </ul>
      </div>
      <div class="product">
        <div class="product-image">
          <a href="#"><img src="../assets/bu4.jpg" alt="product"/></a>
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
        <ul class="price">
          <li class="normal-price">$25.00</li>
          <li class="cheap-price">$20.00</li>
        </ul>
      </div>
      <div class="product">
        <div class="product-image">
          <a href="#"><img src="../assets/bu5.jpg" alt="product"/></a>
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
        <ul class="price">
          <li class="normal-price">$25.00</li>
          <li class="cheap-price">$20.00</li>
        </ul>
      </div>
      <div class="product">
        <div class="product-image">
          <a href="#"><img src="../assets/bu1.jpg" alt="product"/></a>
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
        <ul class="price">
          <li class="normal-price">$25.00</li>
          <li class="cheap-price">$20.00</li>
        </ul>
      </div> -->
    </section>
    <!-- 联系信息 -->
    <section class="contact-info q-pa-xl">
      <div class="info">
        <div class="icon">
          <i class="iconfont icon-email"></i>
        </div>
        <h5 class="title">{{ $t('email') }}</h5>
        <p class="text">jartlace@gmail.com</p>
      </div>
      <div class="info">
        <div class="icon">
          <i class="iconfont icon-phone"></i>
        </div>
        <h5 class="title">{{ $t('phone') }}</h5>
        <p class="text">+86-13760888315</p>
      </div>
      <div class="info">
        <div class="icon">
          <i class="iconfont icon-location"></i>
        </div>
        <h5 class="title">{{ $t('address') }}</h5>
        <p class="text">
          {{ $t('addressValue') }}
        </p>
      </div>
    </section>
  </q-page>
</template>

<script>
// import LazyImg from '../components/LazyImg'
import ScrollReveal from 'scrollreveal'
import { getHome } from '../boot/axios'
import LazyImage from 'boot/lazyImg'
export default {
  name: 'Index',
  data() {
    return {
      slide: 1,
      autoplay: true,
      scrollReveal: ScrollReveal(),
      postcards: ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg'],
      products: [
        {
          pic: '/5.jpg',
          name:
            'modelo de lichi de Color sólido bufanda bolsa hombro Diagonal bolso'
        },
        {
          pic: '/6.jpg',
          name:
            'modelo de lichi de Color sólido bufanda bolsa hombro Diagonal bolso'
        },
        {
          pic: '/7.jpg',
          name:
            'modelo de lichi de Color sólido bufanda bolsa hombro Diagonal bolso'
        },
        {
          pic: '/8.jpg',
          name:
            'modelo de lichi de Color sólido bufanda bolsa hombro Diagonal bolso'
        },
        {
          pic: '/5.jpg',
          name:
            'modelo de lichi de Color sólido bufanda bolsa hombro Diagonal bolso'
        },
        {
          pic: '/6.jpg',
          name:
            'modelo de lichi de Color sólido bufanda bolsa hombro Diagonal bolso'
        }
      ],
      bu2: '/bu2.jpg'
    }
  },
  computed: {
    /**
     * 去除掉封面中url为null的元素
     */
    filterPostcards() {
      // console.log()
      return this.postcards.filter(val => val !== null)
    }
  },
  methods: {
    goTo(name, id) {
      this.$router.push({ name: name, params: { id } })
    },
    async getHome() {
      const { code, data, message } = await getHome()
      if (code === 200) {
        // console.log(data)
        Object.keys(data).forEach(key => {
          if (key.includes('showPic')) {
            this.postcards.push(data[key])
          }
        })
        this.products = data.product
        // console.log(this.postcards)
      } else {
        this.$q.notify({
          type: 'negative',
          message: message
        })
      }
    }
  },
  components: {},
  created() {
    // this.getHome()
  },
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
    const l = new LazyImage('.lazyImage')
    console.log(l)
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
    .postcard-item {
      padding: 2rem 0;
      width: 100%;
      .q-img {
        width: 100%;
        height: 65vw;
        ::v-deep .q-img__image {
          width: 100%;
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
          white-space: nowrap;
          width: 12rem;
          height: 3rem;
        }
      }
    }
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
    justify-content: space-between;
    column-gap: 5vw;
    .info {
      display: grid;
      grid-template-rows: 50px 1fr 2fr;
      justify-items: center;
      text-align: center;
      row-gap: 8px;
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
        // display: -webkit-box;
        width: 50%;
        // -webkit-box-orient: vertical;
        // -webkit-line-clamp: 2;
        // overflow: hidden;
        // text-overflow: ellipsis;
      }
    }
  }
}

@media (max-width: 1100px) {
  .q-page {
    .products {
      .product {
        .product-image {
          img {
            height: 23rem;
          }
        }
      }
    }
  }
}
@media (max-width: 998px) {
  .q-page {
    .postcard {
      .postcard-item {
        padding: 1.5rem 0 !important;
        h4 {
          font-weight: 600;
          font-size: 3rem !important;
          color: #000;
          margin-bottom: 2rem;
        }
        .q-btn {
          width: 10rem !important;
          height: 3rem !important;
          font-size: 0.8rem;
        }
      }
    }
    .products {
      grid-template-columns: repeat(2, 1fr);
      .product {
        .product-image {
          img {
            height: 40vw;
          }
        }
      }
    }
    .concact-info {
      .info {
        row-gap: 5px;
      }
    }
  }
}
@media (max-width: 700px) {
  .q-page {
    .postcard {
      .postcard-item {
        padding: 1.5rem 0 !important;
        h4 {
          font-weight: 600 !important;
          font-size: 2.5rem !important;
          color: #000;
          margin-bottom: 0.8rem !important;
        }
        .q-btn {
          width: 10rem !important;
          height: 2.5rem !important;
          font-size: 0.5rem;
        }
      }
    }
    .products {
      padding: 1rem;
      grid-template-columns: 1fr;
      row-gap: 1.5rem;
      .product {
        .product-image {
          img {
            height: 90vw;
          }
        }
        .product-desc {
          font-size: 1rem;
        }
      }
    }
    .contact-info {
      padding: 15px !important;
      .info {
        display: grid;
        grid-template-rows: 50px 1fr 2fr;
        row-gap: 5px;
        .title {
          font-size: 1.5rem;
          // font-weight: 600;
        }
        .text {
          width: 80%;
          font-size: 0.6rem;
        }
      }
    }
  }
}
@media (max-width: 599px) {
  .q-page {
    .postcard {
      .postcard-item {
        padding: 1.5rem 0 !important;
        h4 {
          font-weight: 600 !important;
          font-size: 1.5rem !important;
          color: #000;
          margin-bottom: 0.8rem !important;
        }
        .q-btn {
          width: 10rem !important;
          height: 2rem !important;
          .q-btn__wrapper {
            padding: 0px !important;
            .q-btn__content {
              font-size: 0.5rem !important;
            }
          }
        }
      }
    }
    .contact-info {
      padding: 10px !important;
      .info {
        display: grid;
        grid-template-rows: 50px 1fr 2fr;
        row-gap: 5px;
        .title {
          font-size: 1.2rem;
          // font-weight: 600;
        }
        .text {
          width: 90%;
          font-size: 0.6rem;
        }
      }
    }
  }
}
</style>
