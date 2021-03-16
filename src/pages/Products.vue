<template>
  <q-page>
    <section class="title row">
      <h4>Product Classification</h4>
    </section>
    <section class="products">
      <div class="product" v-for="i in 20" :key="i">
        <div class="product-image">
          <a href="javascript:void(0)" @click="goTo('detail', i)"
            ><img src="../assets/productImg.jpg" alt="product"
          /></a>
        </div>
        <h5 class="product-desc">
          <a href="javascript:void(0)" @click="goTo('detail', i)"
            >modelo de lichi de Color sólido bufanda bolsa hombro Diagonal
            bolso</a
          >
        </h5>
      </div>
    </section>
    <section class="pagination row justify-center">
      <div class="row pagination-wrapper">
        <a
          href="javascript:void(0)"
          class="pre"
          @click="
            if (currentPage > 1) {
              currentPage = currentPage - 1
            }
          "
        >
          <q-icon name="arrow_back_ios_new"> </q-icon>
          <span>{{ $t('previous') }}</span>
        </a>
        <a
          href="javascript:void(0)"
          :class="['page', i === currentPage ? 'active-page' : '']"
          v-for="i in pageRange"
          :key="i"
          @click="currentPage = i"
          >{{ i }}</a
        >
        <!-- <a href="" class="page">2</a> -->
        <a
          href="javascript:void(0)"
          class="next"
          @click="
            if (currentPage < maxPage) {
              currentPage = currentPage + 1
            }
          "
          ><span>{{ $t('next') }}</span>
          <q-icon name="arrow_forward_ios"></q-icon>
        </a>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      currentPage: 1,
      maxPage: 10,
      showPage: 4
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
  computed: {
    pageRange: function() {
      var rangeArr = []
      var start = this.currentPage - this.showPage / 2
      if (start < 1) {
        start = 1
      }
      var end = this.currentPage + this.showPage / 2
      if (end > this.maxPage) {
        end = this.maxPage
      }
      for (let i = start; i <= end; i++) {
        rangeArr.push(i)
      }
      return rangeArr
    }
  },
  watched: {}
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
  padding: 5vw 15vw;
  .title {
    padding-bottom: 3vw;
    h4 {
      font-size: 2rem;
      font-weight: 500;
    }
  }
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 24px;
    row-gap: 50px;
    margin-bottom: 20px;
    .product {
      display: grid;
      justify-items: center;
      //   text-align: center;
      .product-image {
        overflow: hidden;
        position: relative;
        img {
          position: relative;
          width: 100%;
          height: 20vw;
          object-fit: cover;
          object-position: top center;
          z-index: 100;
        }
      }
      .product-desc {
        margin: 16px 0 10px;
        padding: 0 5px;
        font-size: 1rem;
        font-weight: 400;
        line-height: 23px;
      }
    }
  }
  .pagination {
    padding: 2rem 0;
    .pagination-wrapper {
      //   width: 30%;
      height: 2rem;
      a {
        display: block;
        // width: 2rem;
        // padding: 0 12px;
        height: 100%;
        line-height: 2rem;
        text-align: center;
        margin-left: 10px;
        border-radius: 4px;
        background-color: white;
        border: $grey-5 1px solid;
        color: $dark;
      }
      .next,
      .pre {
        display: flex;
        align-items: center;
        padding: 0 12px;
      }
      .page {
        width: 2rem;
      }
      .active-page {
        background-color: $dark;
        color: #fff;
      }
    }
  }
}

@media (max-width: 1100px) {
  .q-page {
    padding: 3vw 3vw;
    .title {
      padding-bottom: 5vw;
    }
    .products {
      .product {
        .product-desc {
          line-height: 18px;
        }
      }
    }
  }
}

@media (max-width: 998px) {
  .q-page {
    .products {
      display: grid;
      grid-template-columns: 1fr 1fr;
      .product {
        .product-image {
          img {
            height: 40vw;
          }
        }
      }
    }
    .pagination {
      .pagination-wrapper {
        .next,
        .pre {
          span {
            display: none;
          }
        }
      }
    }
  }
}

@media (max-width: 700px) {
  .q-page {
    .title {
      h4 {
        font-size: 1.5rem;
        font-weight: 400;
      }
    }
    .products {
      gap: 15px;
    }
  }
}

@media (max-width: 599px) {
  .q-page {
    .title {
      h4 {
        font-size: 1.2rem;
      }
    }
    .products {
      gap: 10px;
    }
  }
}
</style>
