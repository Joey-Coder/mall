<template>
  <q-page>
    <section class="tabs">
      <q-btn
        unelevated
        :class="[isSign.toString() === '0' ? 'active' : '']"
        @click="isSign = '0'"
        >Sign In</q-btn
      >
      <q-btn
        unelevated
        :class="[isSign === '1' ? 'active' : '']"
        @click="isSign = '1'"
        >Join Free</q-btn
      >
    </section>
    <!-- pc端 -->
    <section class="create-wrapper" v-if="isSign.toString() === '1'">
      <!-- 输入框 -->
      <div class="create hide">
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
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
              autogrow
            />
            <!-- lastName -->
            <q-input
              outlined
              class="last-name"
              v-model="lastName"
              label="Your last name *"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
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
              color="dark"
              text-color="white"
              class="submit-btn"
            />
          </div>
        </q-form>
      </div>
      <!-- 侧边栏 -->
      <div class="create-aside hide">
        <div class="return-home">
          <a href="javascript:void(0)" @click="goTo('index', '')"
            >Return to the home page</a
          >
        </div>
        <div class="account">
          <p>Already have an account?</p>
          <q-btn
            label="Sign In Now"
            color="dark"
            text-color="white"
            class="sign-btn"
            @click="isSign = '0'"
          />
        </div>
      </div>
    </section>
    <section class="login-wrapper" v-else>
      <div class="login hide">
        <h4 class="title">Sign In</h4>
        <q-form @submit="onSubmit">
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
            label="Enter Your Password *"
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

          <div class="create-desc">
            <a href="javascript:void(0)" @click="goTo('forgot', '')"
              ><h6>Forget Password?</h6></a
            >
          </div>
          <div>
            <q-btn
              label="Sign In"
              type="submit"
              color="dark"
              text-color="white"
              class="submit-btn"
            />
          </div>
        </q-form>
      </div>

      <div class="login-aside hide">
        <div class="return-home">
          <a href="javascript:void(0)" @click="goTo('index', '')"
            >Return to the home page</a
          >
        </div>
        <div class="account">
          <p>New Customer</p>
          <q-btn
            label="Start here"
            color="dark"
            text-color="white"
            class="sign-btn"
            @click="isSign = '1'"
          />
        </div>
      </div>
    </section>

    <!-- 移动端 -->
    <section class="create hide-small" v-if="isSign.toString() === '1'">
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
            color="dark"
            text-color="white"
            class="submit-btn"
          />
        </div>
      </q-form>
    </section>
    <section class="sign-in hide-small" v-else>
      <q-form @submit="onSubmit">
        <!-- 邮箱 -->
        <q-input
          outlined
          v-model="email"
          label="Enter Your Email"
          lazy-rules
          type="email"
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
        <!-- 密码 -->
        <q-input
          v-model="password"
          outlined
          :type="passwordVisiable ? 'password' : 'text'"
          label="Enter Your Password"
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
        <q-separator></q-separator>
        <div class="sign-btn">
          <q-btn
            label="Sign in"
            type="submit"
            color="dark"
            text-color="white"
            unelevated
            class="q-mb-md"
          />
          <q-btn
            type="submit"
            color="white"
            text-color="dark"
            style="width: 100%"
            class="q-mb-md row justify-start"
            outline
            unelevated
            align="between"
          >
            <img src="../assets/ic_g.png" alt="" />
            <div>Google with login</div>
            <div></div>
          </q-btn>
          <q-btn
            type="submit"
            color="white"
            text-color="dark"
            style="width: 100%"
            class="q-mb-md row justify-start"
            outline
            unelevated
            align="between"
          >
            <img src="../assets/ic_facebook.png" alt="" />
            <div>Facebook with login</div>
            <div></div>
          </q-btn>
        </div>
      </q-form>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPw: null,
      passwordVisiable: true,
      isSign: this.id // '0' is login, '1' is create
    }
  },
  methods: {
    onSubmit() {},
    goTo(name, id) {
      this.$router.push({ name: name, params: { id } })
    }
  },
  components: {},
  props: {
    id: {
      type: String,
      default: '0'
    }
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {
    id(val) {
      this.isSign = val
    }
  }
}
</script>
<style scoped lang="scss">
.q-page {
  padding: 5vw 15vw;
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  .create-wrapper,
  .login-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  column-gap: 5vw;
  .tabs {
    display: none;
  }
  .hide-small {
    display: none;
  }
  .create,
  .login {
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
  .create-aside,
  .login-aside {
    justify-self: center;
    .return-home {
      border: 1px solid $grey-5;
      padding: 10px 20px;
      margin-bottom: 2rem;
      a {
        color: #333;
      }
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
@media (max-width: 1100px) {
  .q-page {
    display: block;
    .tabs {
      display: block;
      height: 3rem;
      border: 1px solid $grey-5;
      margin-bottom: 1.5rem;
      border-radius: 5px;
      .q-btn {
        width: 50%;
        height: 100%;
        font-size: 1rem;
      }
      .active {
        background-color: $grey-4;
        color: $grey-6;
      }
    }
    .hide {
      display: none;
    }
    .hide-small {
      display: block;
    }
    .create {
      margin-bottom: 5rem;
      .title {
        display: none;
      }
      .q-form {
        .create-desc {
          display: none;
        }
        .submit-btn {
          margin-top: 1rem;
          width: 98%;
        }
      }
    }
    .sign-in {
      justify-self: unset;
      .sign-btn {
        padding-top: 1rem;
        width: 100%;
        margin-bottom: 5rem;
        .q-btn {
          width: 100%;
        }
      }
    }
  }
}
@media (max-width: 700px) {
  .q-page {
    padding: 3vw;
  }
}
</style>
