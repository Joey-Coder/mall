<template>
  <q-page>
    <section class="create">
      <h4 class="title">Create Account</h4>
      <q-form @submit="onSubmit">
        <div class="name" style="width: 100%">
          <!-- firstName -->
          <q-input
            class="first-name"
            outlined
            v-model="firstName"
            label="Your first name *"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type something']"
            autogrow
          />
          <!-- lastName -->
          <q-input
            outlined
            class="last-name"
            v-model="lastName"
            label="Your last name *"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type something']"
          />
        </div>
        <!-- 邮箱 -->
        <q-input
          outlined
          v-model="email"
          label="Email *"
          lazy-rules
          type="email"
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
        <!-- 密码 -->
        <q-input
          v-model="password"
          outlined
          :type="passwordVisiable ? 'password' : 'text'"
          label="Create Your Password *"
          class="q-mb-lg"
        >
          <template v-slot:append>
            <q-icon
              :name="passwordVisiable ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="passwordVisiable = !passwordVisiable"
            />
          </template>
        </q-input>
        <!-- 确认密码 -->
        <q-input
          v-model="confirmPw"
          outlined
          :type="passwordVisiable ? 'password' : 'text'"
          label="Confirm Password"
          lazy-rules
          :rules="[
            val => (val && val === password) || 'Please type same password'
          ]"
        >
          <template v-slot:append>
            <q-icon
              :name="passwordVisiable ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="passwordVisiable = !passwordVisiable"
            />
          </template>
        </q-input>
        <div class="create-desc">
          <h6>By clicking "Create my Account" I agree that:</h6>
          <ul>
            <li>
              I may receive communication emails from MY SHOP about order and
              delivery.
            </li>
            <li>
              I may receive new products and promotion emails from MY SHOP.
            </li>
          </ul>
        </div>
        <div>
          <q-btn
            label="Create my Account"
            type="submit"
            color="primary"
            class="submit-btn"
          />
        </div>
      </q-form>
    </section>
    <section class="sign-in">
      <div class="return-home">
        Return to the home page
      </div>
      <div class="account">
        <p>Already have an account?</p>
        <q-btn
          label="Sign In Now"
          color="dark"
          text-color="white"
          class="sign-btn"
        />
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'Sign',
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPw: null,
      passwordVisiable: false
    }
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5vw;
  .create {
    .title {
      margin-bottom: 3rem;
      font-size: 2.5rem;
      font-weight: 600;
    }
    .q-form {
      .name {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .first-name,
        .last-name {
          width: 45%;
        }
      }
      .create-desc {
        margin-bottom: 2rem;
        h6 {
          font-size: 1rem;
          font-weight: 500;
          color: $grey-9;
        }
        li {
          margin-left: 2rem;
          list-style: disc;
          color: $grey-9;
        }
      }
      .submit-btn {
        width: 50%;
      }
    }
  }
  .sign-in {
    justify-self: center;
    .return-home {
      border: 1px solid $grey-5;
      padding: 10px 20px;
      color: #333;
      margin-bottom: 2rem;
    }
    .account {
      border: 1px solid $grey-5;
      padding: 10px 20px;
      text-align: center;
      .sign-btn {
        width: 90%;
        margin-bottom: 2rem;
      }
    }
  }
}
</style>
