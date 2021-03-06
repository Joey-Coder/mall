<template>
  <q-page>
    <section class="title">
      <h4>About</h4>
    </section>
    <section class="content">
      <h6 class="about-us">About us</h6>
      <div>
        <p class="address">
          address: 美國華盛頓哥倫比亞特區西北區賓夕法尼亞大道1600號
        </p>
        <p class="phone">phone: 0755-74******</p>
        <p class="email">email: *****email@mail.com</p>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {}
  },
  methods: {},
  components: {},
  props: {},
  created() {},
  mounted() {},
  computed: {},
  watched: {}
}
</script>
<style scoped lang="scss">
.q-page {
  padding: 5vw 15vw;
  .title {
    h4 {
      margin-bottom: 3vw;
      font-weight: 600;
    }
  }
  .content {
    width: 50%;
    h6 {
      font-size: 1.2rem;
      font-weight: 400;
      margin-bottom: 1vw;
    }
  }
}
@media (max-width: 998px) {
  .q-page {
    .content {
      width: 65%;
    }
  }
}

@media (max-width: 700px) {
  .q-page {
    padding: 5vw 10vw;
  }
}

@media (max-width: 599px) {
  .q-page {
    padding: 10vw 5vw 50vw;
    .title {
      h4 {
        font-size: 1.5rem;
      }
    }
    .content {
      width: 80%;
    }
  }
}
</style>
