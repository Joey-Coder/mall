<template>
  <q-page class="flex flex-center">
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

      <!-- <div class="desc">
        <div class="text-h2 q-mb-lg text-bolder">New Collwction</div>
        <q-btn color="black" label="shop this collection ->"></q-btn>
      </div> -->
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      slide: 1,
      autoplay: false
    }
  }
}
</script>

<style scoped lang="scss">
.q-page {
  .postcard {
    // position: relative;
    width: auto;
    height: auto;
    background-color: #eee;
    .q-carousel {
      width: auto;
      height: auto;
      .q-carousel__slide {
        width: 100vw;
        height: 120vh;
        background-position: top center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
    }
    // .desc {
    //   position: absolute;
    //   top: 30%;
    //   left: 40%;
    //   text-align: center;
    // }
  }
}
</style>
