<template>
  <q-page>
    <!-- 商品海报区 -->
    <div class="postcard">
      <!-- 轮播图 -->

      <q-carousel
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
      </q-carousel>
      <!-- 轮播图描述 -->

      <div class="row">
        <!-- 海报图1 -->
        <div
          class="col-12 postcard-item row justify-between items-center q-pa-xl q-gutter-x-lg no-wrap"
        >
          <q-img class="col-4" src="../assets/3*3-1.jpg" />

          <!-- <lazy-img className="image col-4" url="/3*3-1.jpg" key="fsdf" /> -->
          <!-- <q-skeleton square class="col-4" height="30vw" v-else></q-skeleton> -->
          <q-img src="../assets/3*3-2.jpg" class="col-4" />
          <div class="col-3 column items-start">
            <p class="text-h3">Best shirts for this summer</p>
            <p>
              Nam at dui lacus . Sed porttitor , metus idtristique maximus ,nisl
              ligula ultrices
            </p>
            <q-btn color="black" label="BUY NOW" outline></q-btn>
          </div>
        </div>
        <!-- 海报图2 -->
        <div class="col-12 postcard-item q-pa-xl">
          <q-img src="../assets/TheBestChoice.jpg" class="q-mr-xl">
            <div
              class="text-h2 text-black flex flex-center absolute-full bg-transparent column"
            >
              <p>THE BEST CHOICE</p>
              <q-btn label="ShOW NOW->" outline color="black"></q-btn>
            </div>
          </q-img>
        </div>
        <!-- 海报图3 -->
        <div
          class="col-12 postcard-item row justify-around q-pa-xl q-gutter-x-xl items-center"
        >
          <q-img src="../assets/2*2-1.jpg" class="col-5"></q-img>
          <div class="column justify-center col-5 q-gutter-y-xl items-center">
            <div class="column items-start col-3">
              <p class="text-h3">Best shirts for this summer</p>
              <p>
                Nam at dui lacus . Sed porttitor , metus idtristique maximus
                ,nisl ligula ultrices
              </p>
              <q-btn color="black" label="BUY NOW" outline></q-btn>
            </div>
            <q-img src="../assets/2*2-2.jpg"></q-img>
          </div>
        </div>
      </div>
    </div>
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
      autoplay: false,
      scrollReveal: ScrollReveal()
    }
  },
  methods: {},
  components: {},
  mounted() {
    const scrollOptions = {
      duration: 1000,
      delay: 500,
      origin: 'bottom',
      // reset: true,
      distance: '10rem',
      easing: 'ease-in-out'
      // interval: 2000
    }
    // const foo = document.querySelector('.postcard-item')
    this.scrollReveal.reveal('.postcard-item', {
      ...scrollOptions
    })
  }
}
</script>

<style scoped lang="scss">
.q-page {
  .postcard {
    // position: relative;
    width: auto;
    height: auto;
    .q-carousel {
      width: auto;
      height: auto;
      .q-carousel__slide {
        width: 100vw;
        height: 65vw;
        background-position: top center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
    }
    //   .postcard-item {
    //     height: 30vw;
    //     width: auto;
    //     .q-img__image {
    //       height: 10vw;
    //       background-position: top center;
    //       background-size: 20% 20%;
    //       background-repeat: no-repeat;
    //     }
    // }
  }
}
</style>
