<template>
  <div class="shipping-form">
    <h6 class="title">{{ title }}</h6>
    <q-form @submit="onSubmit" class="q-gutter-md">
      <!-- 姓名 -->
      <div class="name">
        <q-input
          v-model="firstName"
          :label="`${who} first name *`"
          outlined
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
          class="first-name"
        />

        <q-input
          v-model="lastName"
          :label="`${who} last name *`"
          outlined
          lazy-rules
          class="last-name"
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
      </div>
      <!-- 地址 -->
      <q-input
        v-model="address"
        :label="`${who} Address *`"
        outlined
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
        class="address"
      />
      <!-- 区域 -->
      <q-input
        v-model="apartment"
        :label="`${who} apartment, suite, street, number, etc(optional)`"
        outlined
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
        class="apartment"
      />
      <!-- 城市 -->
      <div class="city-wrapper">
        <q-input
          v-model="city"
          :label="`${who} city`"
          outlined
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
          class="city"
        />
        <!-- 优惠码 -->
        <q-input
          v-model="zipCode"
          label="Zip code"
          outlined
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
          class="zip-code"
        />
      </div>

      <div class="select-wrapper">
        <!-- 国家选择 -->
        <q-select
          outlined
          v-model="countrySelect"
          :options="countryOptionsFilter"
          :label="`Select ${who} Country/Region`"
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
          v-model="stateSelect"
          :options="stateOptionsFilter"
          :label="`Select ${who} State`"
          use-input
          hide-selected
          input-debounce="0"
          @filter="stateFilter"
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
        v-model="phone"
        class="phone"
        :label="`${who} Mobile Phone Number`"
      >
        <template v-slot:prepend>
          <div class="pre-phone">
            <p>+{{ getCode }}</p>
          </div>
        </template>
      </q-input>

      <div v-if="saveVisiable">
        <q-btn label="Save" type="submit" color="dark" text-color="white" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { state, code, country } from '../boot/country.js'
export default {
  name: '',
  data() {
    return {
      firstName: null,
      lastName: null,
      address: null,
      apartment: null,
      city: null,
      zipCode: null,
      countrySelect: 'United States',
      stateSelect: null,
      phone: null,
      countryOptionsFilter: this.countryOptions,
      stateOptionsFilter: []
    }
  },
  methods: {
    onSubmit() {},
    countryFilter(val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        this.countryOptionsFilter = this.countryOptions.filter(
          v => v.toLowerCase().indexOf(needle) > -1
        )
      })
    },
    stateFilter(val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()
        this.stateOptionsFilter = this.getStateOptions.filter(
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
    }
  },
  components: {},
  props: {
    countryOptions: {
      type: Array,
      default: () => {
        return []
      }
    },
    title: {
      type: String,
      default: 'Shipping Address'
    },
    saveVisiable: {
      type: Boolean,
      default: true
    },
    who: {
      type: String,
      default: 'Your'
    }
  },
  created() {
    // this.stateOptionsFilter = this.getStateOptions
  },
  mounted() {},
  computed: {
    // 根据国家选择地区
    getStateOptions() {
      var arr = []
      const key = country[this.countrySelect]
      console.log('country code:', key)
      if (key in state) {
        for (let i = 0; i < state[key].length; i++) {
          arr.push(state[key][i].States)
        }
      }
      return arr
    },
    getCode() {
      return code[country[this.countrySelect]]
    }
  },
  watch: {
    countrySelect(val) {
      this.stateOptionsFilter = this.getStateOptions
    }
  }
}
</script>
<style scoped lang="scss">
.shipping-form {
  // border: 1px solid $grey-4;
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
        margin-bottom: 1rem;
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

@media (max-width: 700px) {
  .shipping-form {
    .q-form {
      width: 90%;
    }
  }
}

@media (max-width: 598px) {
  .shipping-form {
    .q-form {
      width: 100%;
      .city-wrapper {
        display: flex;
        justify-content: space-between;
        .q-input {
          width: 48%;
        }
      }
      .phone {
        ::v-deep .q-field__control {
          .pre-phone {
            width: 5rem;
          }
        }
      }
      .select-wrapper {
        display: block;
        .q-select {
          width: 100%;
        }
      }
      // .q-btn {
      //   display: none;
      // }
    }
  }
}
</style>
