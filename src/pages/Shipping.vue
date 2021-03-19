<template>
  <div class="shipping">
    <p class="q-mb-none">Your position: Home / Shipping & Returns</p>
    <h4>Shipping & Returns</h4>
    <p class="q-mb-xl">SHIPPING & RETURNS</p>
  </div>
</template>

<script>
export default {
  name: 'Shipping',
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
.shipping {
  padding: 5vw 15vw;
  h4 {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    padding: 2rem 0;
  }

}

@media (max-width: 1100px) {
  .shipping {
    padding: 5vw 10vw;
  }
}

@media (max-width: 998px) {
  .shipping {
    padding: 3vw 8vw;
  }
}

@media (max-width: 700px) {
  .shipping {
    padding: 3vw;
    h4 {
      font-size: 1.5rem;
    }
  }
}
</style>
