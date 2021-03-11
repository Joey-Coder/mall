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
        <h6 class="title">Shipping Address</h6>
        <q-form @submit="onSubmit" class="q-gutter-md">
          <!-- 姓名 -->
          <div class="name">
            <q-input
              v-model="this.addressObj.firstName"
              label="Your first name *"
              outlined
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
              class="first-name"
            />

            <q-input
              v-model="addressObj.lastName"
              label="Your last name *"
              outlined
              lazy-rules
              class="last-name"
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
            />
          </div>
          <!-- 地址 -->
          <q-input
            v-model="addressObj.address"
            label="Your Address *"
            outlined
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type something']"
            class="address"
          />
          <!-- 区域 -->
          <q-input
            v-model="addressObj.apartment"
            label="Your apartment, suite, street, number, etc(optional)"
            outlined
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type something']"
            class="apartment"
          />
          <!-- 城市 -->
          <div class="city-wrapper">
            <q-input
              v-model="addressObj.city"
              label="Your city"
              outlined
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
              class="city"
            />
            <!-- 优惠码 -->
            <q-input
              v-model="addressObj.zipCode"
              label="Zip code"
              outlined
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
              class="zip-code"
            />
          </div>

          <div class="select-wrapper">
            <!-- 国家选择 -->
            <q-select
              outlined
              v-model="countrySelect"
              :options="countryOptions"
              label="Select Country/Region"
              use-input
              hide-selected
              @filter="countryFilter"
              input-debounce="0"
              fill-input
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
            <!-- 地区选择 -->
            <q-select
              outlined
              v-model="addressObj.stateSelect"
              :options="stateOptions"
              label="Select State"
              use-input
              hide-selected
              @filter="stateFilter"
              input-debounce="0"
              fill-input
              @input-value="setState"
            >
              <template v-slot:no-option>
                <q-item>
                  <q-item-section class="text-grey">
                    No results
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>
          <q-input
            outlined
            v-model="addressObj.phone"
            class="phone"
            label="Mobile Phone Number"
          >
            <template v-slot:prepend>
              <div class="pre-phone">
                <p>+{{ getCode(addressObj.stateSelect) }}</p>
              </div>
            </template>
          </q-input>

          <div>
            <q-btn label="Save" type="submit" color="dark" text-color="white" />
          </div>
        </q-form>
      </section>
      <section class="shipping-method">
        <div class="agent" v-if="agentVisiable">
          <h6 class="title">Shipping Address</h6>
          <q-form class="q-gutter-md">
            <!-- 姓名 -->
            <div class="name">
              <q-input
                v-model="agentObj.firstName"
                label="Your first name *"
                outlined
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
                class="first-name"
              />

              <q-input
                v-model="agentObj.lastName"
                label="Your last name *"
                outlined
                lazy-rules
                class="last-name"
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
              />
            </div>
            <!-- 地址 -->
            <q-input
              v-model="agentObj.address"
              label="Your Address *"
              outlined
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
              class="address"
            />
            <!-- 区域 -->
            <q-input
              v-model="agentObj.apartment"
              label="Your apartment, suite, street, number, etc(optional)"
              outlined
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
              class="apartment"
            />
            <!-- 城市 -->
            <div class="city-wrapper">
              <q-input
                v-model="agentObj.city"
                label="Your city"
                outlined
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
                class="city"
              />
              <!-- 优惠码 -->
              <q-input
                v-model="agentObj.zipCode"
                label="Zip code"
                outlined
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || 'Please type something'
                ]"
                class="zip-code"
              />
            </div>

            <div class="select-wrapper">
              <!-- 国家选择 -->
              <q-select
                outlined
                v-model="agentCountrySelect"
                :options="countryOptions"
                label="Select Country/Region"
                use-input
                hide-selected
                @filter="countryFilter"
                input-debounce="0"
                fill-input
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
              <!-- 地区选择 -->
              <q-select
                outlined
                v-model="agentObj.stateSelect"
                :options="agentStateOptions"
                label="Select State"
                use-input
                hide-selected
                @filter="stateFilter"
                input-debounce="0"
                fill-input
                @input-value="setState"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
            </div>
            <q-input
              outlined
              v-model="agentObj.phone"
              class="phone"
              label="Mobile Phone Number"
            >
              <template v-slot:prepend>
                <div class="pre-phone">
                  <p>+{{ getCode(agentObj.stateSelect) }}</p>
                </div>
              </template>
            </q-input>
          </q-form>
        </div>
        <div class="normal" v-else></div>
      </section>
    </q-page-container>
  </q-layout>
</template>

<script>
import { country, state, code } from '../boot/country.js'

export default {
  name: 'Checkout',
  data() {
    return {
      step: 1,
      addressObj: {},
      agentObj: {},
      countryOptions: this.getCountryOptions,
      stateOptions: [],
      stateOptionsFilter: [],
      agentStateOptions: [],
      countrySelect: '',
      agentCountrySelect: '',
      //   stateOptions: this.getStateOptions(this.addressObj.countrySelect),
      //   agentStateOptions: this.getStateOptions(this.agentObj.countrySelect),
      agentVisiable: true
    }
  },
  methods: {
    onSubmit() {},
    countryFilter(val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        this.countryOptions = this.getCountryOptions.filter(
          v => v.toLowerCase().indexOf(needle) > -1
        )
      })
    },
    stateFilter(val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        this.stateOptions = this.stateOptionsFilter.filter(
          v => v.toLowerCase().indexOf(needle) > -1
        )
      })
    },
    setState(val) {
      if (this.getStateOptions.length === 0) {
        // console.log('dsfsdfs')
        this.stateSelect = val
      } else {
      }
    },
    getStateOptions(select) {
      var arr = []
      const key = country[select]
      //   console.log('country code:', key)
      if (key in state) {
        for (let i = 0; i < state[key].length; i++) {
          arr.push(state[key][i].States)
        }
      }
      return arr
    },

    getCode(select) {
      return code[country[select]]
    }
  },
  components: {},
  props: {},
  created() {
    this.addressObj = {
      firstName: null,
      lastName: null,
      address: null,
      apartment: null,
      city: null,
      zipCode: null,
      countrySelect: 'United States',
      stateSelect: null,
      phone: null
    }
    this.agentObj = {
      firstName: null,
      lastName: null,
      address: null,
      apartment: null,
      city: null,
      zipCode: null,
      countrySelect: 'United States',
      stateSelect: null,
      phone: null
    }
  },
  mounted() {},
  computed: {
    getCountryOptions() {
      return Object.keys(country)
    }
  },
  watch: {
    countrySelect(newValue, oldValue) {
      this.addressObj.countrySelect = newValue
      this.stateOptions = []
      const key = country[newValue]
      //   console.log('key:', key)
      if (key in state) {
        // console.log('in')
        for (let i = 0; i < state[key].length; i++) {
          this.stateOptions.push(state[key][i].States)
        }
        this.stateOptionsFilter = this.stateOptions
        // console.log(this.stateOptions)
      }
    }
  }
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
      border: 1px solid $grey-4;
      padding: 1.5rem;
      background-color: white;
      margin-bottom: 1rem;
      .title {
        font-size: 1.2rem;
        padding-bottom: 1rem;
        font-weight: 400;
      }
      .q-form {
        width: 70%;
        .name {
          display: flex;
          justify-content: space-between;
          .first-name,
          .last-name {
            width: 48%;
          }
        }
        .city-wrapper {
          //   display: flex;
          //   justify-content: space-between;
          .q-input {
            // width: 48%;
          }
        }
        .phone {
          ::v-deep .q-field__control {
            padding-left: 0;
            .pre-phone {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
              width: 8rem;
              background-color: $grey-3;
              border-right: 1px solid $grey-5;
              p {
                margin: 0 !important;
                font-size: 1rem;
                color: #000;
              }
            }
          }
        }
        .address {
        }
        .select-wrapper {
          display: flex;
          justify-content: space-between;
          .q-select {
            width: 48%;
            margin-bottom: 1rem;
          }
        }
        .q-btn {
          width: 8rem;
        }
      }
    }
    .shipping-method {
      .agent {
        border: 1px solid $grey-4;
        padding: 1.5rem;
        background-color: white;
        .title {
          font-size: 1.2rem;
          padding-bottom: 1rem;
          font-weight: 400;
        }
        .q-form {
          width: 70%;
          .name {
            display: flex;
            justify-content: space-between;
            .first-name,
            .last-name {
              width: 48%;
            }
          }
          .city-wrapper {
            //   display: flex;
            //   justify-content: space-between;
            .q-input {
              // width: 48%;
            }
          }
          .phone {
            ::v-deep .q-field__control {
              padding-left: 0;
              .pre-phone {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                width: 8rem;
                background-color: $grey-3;
                border-right: 1px solid $grey-5;
                p {
                  margin: 0 !important;
                  font-size: 1rem;
                  color: #000;
                }
              }
            }
          }
          .address {
          }
          .select-wrapper {
            display: flex;
            justify-content: space-between;
            .q-select {
              width: 48%;
              margin-bottom: 1rem;
            }
          }
          .q-btn {
            width: 8rem;
          }
        }
      }
    }
  }
}
</style>
