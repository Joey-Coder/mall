<template>
  <q-layout view="hhh lpr fff">
    <q-header unelevated>
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="step">
        <div class="step-item">
          <div class="icon">1</div>
          <div class="title">Shopping</div>
        </div>
        <div class="step-item">
          <div class="icon active">2</div>
          <div class="title">Place Order</div>
        </div>
        <div class="step-item">
          <div class="icon">3</div>
          <div class="title">Completed</div>
        </div>
      </div>
    </q-header>

    <q-page-container>
      <section class="shipping-address">
        <shipping-form :countryOptions="getCountryOptions"></shipping-form>
      </section>
      <section class="shipping-method">
        <div class="agent" v-if="agentVisiable">
          <shipping-form :countryOptions="getCountryOptions"></shipping-form>
        </div>
        <div class="normal" v-else></div>
      </section>
    </q-page-container>
  </q-layout>
</template>

<script>
import { country } from '../boot/country.js'
import ShippingForm from '../components/ShippingForm'
export default {
  name: 'Checkout',
  data() {
    return {
      step: 1,
      agentVisiable: true
    }
  },
  methods: {
    onSubmit() {}
  },
  components: {
    ShippingForm
  },
  props: {},
  created() {
    // this.addressObj = {
    //   firstName: null,
    //   lastName: null,
    //   address: null,
    //   apartment: null,
    //   city: null,
    //   zipCode: null,
    //   countrySelect: 'United States',
    //   stateSelect: null,
    //   phone: null
    // }
    // this.agentObj = {
    //   firstName: null,
    //   lastName: null,
    //   address: null,
    //   apartment: null,
    //   city: null,
    //   zipCode: null,
    //   countrySelect: 'United States',
    //   stateSelect: null,
    //   phone: null
    // }
  },
  mounted() {},
  computed: {
    getCountryOptions() {
      return Object.keys(country)
    }
  },
  watch: {}
}
</script>
<style scoped lang="scss">
.q-layout {
  background-color: #f5f5f5;
  .q-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15vw;
    height: 6rem;
    background-color: #f5f5f5;
    .logo {
      img {
        height: 76px;
        width: 76px;
      }
    }
    .step {
      display: flex;
      align-items: center;

      .step-item {
        display: flex;
        align-items: center;
        padding-left: 2rem;
        .active {
          background-color: #000 !important;
          color: white !important;
        }
        .icon {
          width: 23px;
          height: 23px;
          line-height: 23px;
          font-weight: 600;
          text-align: center;
          background-color: $grey-4;
          border-radius: 12px;
          margin-right: 12px;
        }
        .title {
          color: #000;
        }
      }
    }
  }
  .q-page-container {
    padding: 3vw 15vw;
    .shipping-address {
    }
    .shipping-method {
    }
  }
}
</style>
