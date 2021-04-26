<template>
  <q-page>
    <section class="title">
      <h4>About</h4>
    </section>
    <section class="content">
      <h6 class="about-us">{{ $t('aboutUs') }}</h6>
      <div>
        <p class="intro">Introduction: {{ $t('intro') }}</p>
        <p class="address">
          {{ $t('address') + ': ' + $t('addressValue') }}
        </p>
        <p class="phone">{{ $t('phone') }}: +86-13760888315</p>
        <p class="email">{{ $t('email') }}: jartlace@gmail.com</p>
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
