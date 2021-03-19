<template>
  <div class="protection">
    <p class="q-mb-none">Your position: Home / Buyer Protection</p>
    <h4>Buyer Protection</h4>
    <p class="q-mb-xl">Buyer Protection</p>
  </div>
</template>

<script>
export default {
  name: 'Protection',
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
.protection {
  padding: 5vw 15vw;
  h4 {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    padding: 2rem 0;
  }
}

@media (max-width: 1100px) {
  .protection {
    padding: 5vw 10vw;
  }
}

@media (max-width: 998px) {
  .protection {
    padding: 3vw 8vw;
  }
}

@media (max-width: 700px) {
  .protection {
    padding: 3vw;
    h4 {
      font-size: 1.5rem;
    }
  }
}
</style>
