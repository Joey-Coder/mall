<template>
  <div class="payment">
    <p class="q-mb-none">Your position: Home / Payment Methods</p>
    <h4>Payment Methods</h4>
    <p class="q-mb-xl">PAYMENT METHODS</p>
  </div>
</template>

<script>
export default {
  name: 'Payment',
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
.payment {
  padding: 5vw 15vw;
  h4 {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    padding: 2rem 0;
  }

}

@media (max-width: 1100px) {
  .payment {
    padding: 5vw 10vw;
  }
}

@media (max-width: 998px) {
  .payment {
    padding: 3vw 8vw;
  }
}

@media (max-width: 700px) {
  .payment {
    padding: 3vw;
    h4 {
      font-size: 1.5rem;
    }
  }
}
</style>
