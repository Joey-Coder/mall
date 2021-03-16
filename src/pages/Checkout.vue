<template>
  <q-layout view="hhh lpr fff">
    <q-header unelevated>
      <div class="logo">
        <a href="javascript:void(0)" @click="goTo('index', '')"
          ><img src="../assets/logo.png" alt=""
        /></a>
      </div>
      <div class="step">
        <div class="step-item">
          <div class="icon">1</div>
          <div class="title">{{ $t('shopping') }}</div>
        </div>
        <div class="step-item">
          <div class="icon active">2</div>
          <div class="title">{{ $t('placeOrder') }}</div>
        </div>
        <div class="step-item">
          <div class="icon">3</div>
          <div class="title">{{ $t('completed') }}</div>
        </div>
      </div>
    </q-header>

    <q-page-container>
      <section class="shipping-address">
        <shipping-form :countryOptions="getCountryOptions"></shipping-form>
      </section>
      <section class="shipping-method">
        <h5>{{ $t('shippingMethod') }}</h5>
        <div class="check-menu">
          <q-radio
            v-model="agentVisiable"
            :val="true"
            :label="$t('ownLogisticsAgent')"
          />
          <q-radio
            v-model="agentVisiable"
            :val="false"
            :label="$t('normalLogistics')"
          />
        </div>
        <div class="agent" v-if="agentVisiable">
          <shipping-form
            :countryOptions="getCountryOptions"
            title="Agent address"
            :saveVisiable="false"
            who="Agent"
          ></shipping-form>
        </div>
        <div class="normal" v-else>
          <q-radio
            v-model="shippingMethod"
            val="ups"
            color="cyan"
            label="UPS"
          />
          <q-radio
            v-model="shippingMethod"
            val="dhl"
            color="cyan"
            label="DHL"
          />
          <q-radio
            v-model="shippingMethod"
            val="sea transportation"
            :label="$t('seaTransport')"
            color="cyan"
          />
          <q-radio
            v-model="shippingMethod"
            val="air transport"
            :label="$t('airTransport')"
            color="cyan"
          />
        </div>
      </section>
      <section class="payment">
        <h5 class="payment-title">
          {{ $t('paymentMethod') }}
        </h5>
        <div class="payment-content">
          <div>
            <q-radio v-model="payment" val="paypal" label="Paypal" />
            <div class="desc">
              {{ $t('thirdDesc') }}
            </div>
          </div>
          <div class="paypal-wrapper">
            paypal
          </div>
        </div>
      </section>
      <section class="products">
        <h5 class="products-title">{{ $t('products') }}</h5>
        <!-- pc端 -->
        <q-list separator class="pc">
          <q-item class="list-header bg-grey-2" v-ripple>
            <q-item-section>
              {{ $t('item') }}
            </q-item-section>
            <q-item-section>
              {{ $t('price') }}
            </q-item-section>
            <q-item-section>
              {{ $t('amount') }}
            </q-item-section>
          </q-item>
          <q-item v-ripple v-for="item in getCart" :key="item.productID">
            <q-item-section class="product-image">
              <img :src="item.productImg" alt="" />
              <p>{{ item.productName }}</p>
            </q-item-section>
            <q-item-section class="product-price">
              <p>${{ item.Hprice }}</p>
              <p class="number">{{ item.num }}</p>
            </q-item-section>
            <q-item-section class="product-amount">
              <p>${{ (parseFloat(item.Hprice) * item.num).toFixed(2) }}</p>
            </q-item-section>
          </q-item>
        </q-list>
        <!-- 移动端版本 -->
        <q-list separator class="mobile">
          <q-item v-ripple v-for="item in getCart" :key="item.productID">
            <q-item-section class="product-image">
              <img :src="item.productImg" alt="" />
              <div class="badge">{{ item.num }}</div>
            </q-item-section>
            <q-item-section class="product-price">
              <p>{{ item.productName }}</p>
              <div class="row justify-between">
                <p>USD ${{ item.price }}</p>
                <p class="text-weight-bold">
                  ${{ getProductPrice(item.productID) }}
                </p>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
        <div class="order-wrapper">
          <div class="order">
            <div class="subtotal">
              <p>{{ $t('subTotal') }}:</p>
              <p>${{ getTotalPrice.toFixed(2) }}</p>
            </div>
            <div class="express-total">
              <p>{{ $t('expressCost') }}:</p>
              <p>${{ expressTotal }}</p>
            </div>
            <div class="grand-total">
              <p>{{ $t('grandTotal') }}:</p>
              <p>${{ (getTotalPrice + expressTotal).toFixed(2) }}</p>
            </div>
            <q-btn text-color="white" unelevated color="red-4">{{
              $t('placeYourOrder')
            }}</q-btn>
          </div>
        </div>
      </section>
    </q-page-container>
  </q-layout>
</template>

<script>
import { country } from '../boot/country.js'
import ShippingForm from '../components/ShippingForm'
import { mapGetters } from 'vuex'
export default {
  name: 'Checkout',
  data() {
    return {
      step: 1,
      agentVisiable: true,
      shippingMethod: 'ups',
      payment: 'paypal',
      expressTotal: 23.0
    }
  },
  methods: {
    onSubmit() {},
    goTo(name, id) {
      this.$router.push({ name: name, params: { id } })
    }
  },
  components: {
    ShippingForm
  },
  props: {},
  created() {},
  mounted() {},
  computed: {
    ...mapGetters(['getCart', 'getTotalPrice', 'getProductPrice']),
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
      padding: 1.5rem;
      background-color: white;
      border: 1px solid $grey-4;
      margin: 1rem 0;
    }
    .shipping-method {
      padding: 1.5rem;
      background-color: white;
      border: 1px solid $grey-4;
      margin: 1rem 0;
      h5 {
        font-size: 1.2rem;
        padding-bottom: 1rem;
        font-weight: 400;
      }
      .check-menu {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 1rem;
        .q-radio {
          font-size: 1.8rem;
        }
      }
      .normal {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        row-gap: 2rem;
        margin-top: 3rem;
      }
    }
    .payment {
      padding: 1.5rem;
      background-color: white;
      border: 1px solid $grey-4;
      margin: 1rem 0;
      .payment-title {
        font-size: 1.2rem;
        padding-bottom: 1rem;
        font-weight: 400;
      }
      .payment-content {
        display: grid;
        grid-template-columns: 2fr 1fr;

        .q-radio {
          font-size: 2rem;
        }
        .desc {
          width: 65%;
          padding-left: 1rem;
        }
        .paypal-wrapper {
          width: 5rem;
          height: 2rem;
          font-size: 1.2rem;
          font-weight: 600;
          color: white;
          background-color: black;
          text-align: center;
          line-height: 2rem;
          border-radius: 3px;
          font-style: italic;
          margin-top: 0.8rem;
        }
      }
    }
    .products {
      padding: 1.5rem;
      background-color: white;
      border: 1px solid $grey-4;
      margin: 1rem 0;
      .products-title {
        font-size: 1.2rem;
        padding-bottom: 1rem;
        font-weight: 400;
      }
      .pc {
        .q-item {
          display: grid;
          grid-template-columns: 6fr 2fr 1fr;
          align-items: center;
          overflow: hidden;
          padding: 1rem 0.5rem;
          align-items: flex-start;
          column-gap: 1rem;
          .product-image {
            display: grid;
            grid-template-columns: 4rem 1fr;
            column-gap: 1rem;
            img {
              width: 4rem;
              height: 4rem;
              object-fit: cover;
              object-position: top center;
              border-radius: 3px;
            }
          }
          .product-price {
            display: grid;
            grid-template-columns: 1fr 1fr;
            .number {
              justify-self: center;
            }
          }
        }
      }
      .mobile {
        display: none;
      }
      .order-wrapper {
        display: flex;
        justify-content: flex-end;
        margin-right: 2rem;
        .order {
          width: 18rem;
          padding-bottom: 10rem;
          div {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
            p {
              margin: 0;
            }
          }
          .grand-total {
            margin-bottom: 1rem;
            p {
              font-weight: 600;
            }
          }
          .q-btn {
            width: 100%;
          }
        }
      }
    }
  }
}

@media (max-width: 1100px) {
  .q-layout {
    .q-header {
      padding: 0 10vw;
    }
    .q-page-container {
      padding: 3vw 10vw;
    }
  }
}

@media (max-width: 998px) {
  .q-layout {
    .q-header {
      padding: 0 5vw;
    }
    .q-page-container {
      padding: 3vw 5vw;
      .shipping-method {
        .check-menu {
          .q-radio {
            font-size: 1.5rem !important;
          }
        }
      }
    }
  }
}

@media (max-width: 700px) {
  .q-layout {
    .q-header {
      padding: 0 3vw;
      .logo {
        img {
          width: 4rem;
          height: 4rem;
        }
      }
      .step {
        display: none;
      }
    }
    .q-page-container {
      padding: 3vw 3vw;
      .shipping-address {
        margin-top: 0;
        padding: 0.5rem;
      }
      .shipping-method {
        padding: 0.5rem;
        .check-menu {
          .q-radio {
            font-size: 1.2rem !important;
          }
        }
      }
      .payment {
        padding: 1.5rem 0.5rem;
        .payment-content {
          .desc {
            width: 90%;
          }
          .paypal-wrapper {
          }
        }
      }
      .products {
        padding: 0.5rem;
      }
    }
  }
}

@media (max-width: 598px) {
  .q-layout {
    .q-header {
      padding: 0 1vw;
    }
    .q-page-container {
      padding: 1vw;
      .shipping-address {
      }
      .shipping-method {
        .check-menu {
          .q-radio {
            font-size: 0.9rem !important;
          }
        }
      }
      .payment {
        padding: 1.5rem 0.5rem;
        .payment-content {
          display: block;
          .desc {
            padding-top: 1rem;
            width: 80%;
          }
          .paypal-wrapper {
            display: none;
          }
        }
      }
      .products {
        .pc {
          display: none;
        }
        .mobile {
          display: block;
          padding-bottom: 1rem;
          .q-item {
            display: grid;
            grid-template-columns: 5rem 1fr;
            column-gap: 1rem;
            padding: 0.5rem;
            .product-image {
              position: relative;
              align-self: center;
              grid-template-columns: unset;
              img {
                width: 4rem;
                height: 4rem;
                object-position: top center;
                object-fit: cover;
              }
              .badge {
                position: absolute;
                padding: 5px;
                width: 20px;
                height: 20px;
                text-align: center;
                line-height: 10px;
                border-radius: 10px;
                background-color: $red-5;
                color: white;
                top: -10px;
                right: 0;
              }
            }
            .product-price {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
