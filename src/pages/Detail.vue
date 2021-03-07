<template>
  <q-page>
    <section class="postcard">
      <!-- 轮播图 -->
      <div class="carousel">
        <!-- 轮播图大图 -->
        <div class="carousel-image">
          <img
            :src="item"
            alt=""
            v-for="(item, index) in carouselOption"
            :key="index"
            :class="[index === currentImg ? 'current-img' : '']"
          />
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
          <h4 class="price">$25.00</h4>
        </div>
        <div class="quantity">
          <p>QUANTITY</p>
          <div class="quantity-btn">
            <q-btn
              icon="remove"
              size="md"
              class="remove-btn"
              @click="num--"
              unelevated
              :disable="num <= 0"
            ></q-btn>
            <input type="text" class="num-input" v-model="num" />
            <q-btn
              icon="add"
              size="md"
              unelevated
              class="add-btn"
              @click="num++"
            ></q-btn>
          </div>
        </div>
        <div class="tool-btn">
          <q-btn color="white" text-color="dark" outline>Add to Cart</q-btn>
          <q-btn color="dark" text-color="white">Buy Now</q-btn>
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
    <section class="desc"></section>
  </q-page>
</template>

<script>
export default {
  name: 'Detail',
  data() {
    return {
      slide: 1,
      //   options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      //   currentCurrency: 'USD',
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
    goTo(name, id) {
      this.$router.push({ name: name, params: { id } })
    }
  },
  components: {},
  props: {},
  created() {},
  mounted() {},
  computed: {},
  watched: {}
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
    column-gap: 3vw;
    .carousel {
      .carousel-image {
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
          width: 30rem;
          height: 30rem;
          animation: 1s fade-in ease-out forwards;
        }
        .current-img {
          display: block;
        }
      }
      .overview {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        align-items: center;
        justify-content: center;
        justify-items: center;
        a {
          display: block;
          img {
            object-fit: cover;
            object-position: top center;
            width: 5rem;
            height: 5rem;
          }
        }
      }
    }
    .buy {
      display: grid;
      grid-template-rows: repeat(7, 1fr);
      align-items: center;
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
}
</style>
