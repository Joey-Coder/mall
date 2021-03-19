<template>
  <div class="faq">
    <p class="q-mb-none">Your position: Home / FAQ</p>
    <h4>FAQ</h4>
    <div class="q-mb-xl">
      <h5 class="q-pb-md">Contact Us</h5>
      <p>
        We always have someone on hand to answer your questions. We believe in
        the timeliness of customer service, and will do everything possible to
        satisfy our customers. If you have any problems, comments, or
        suggestions, please contact us.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
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
.faq {
  padding: 5vw 15vw;
  h4 {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    padding: 2rem 0;
  }
}

@media (max-width: 1100px) {
  .faq {
    padding: 5vw 10vw;
  }
}

@media (max-width: 998px) {
  .faq {
    padding: 3vw 8vw;
  }
}

@media (max-width: 700px) {
  .faq {
    padding: 3vw;
    h4 {
      font-size: 1.5rem;
    }
    h5 {
      font-size: 1rem;
    }
  }
}
</style>
