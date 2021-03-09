<template>
  <q-page>
    <!-- pc端 -->
    <section class="forgot-wrapper">
      <!-- 输入框 -->
      <div class="forgot hide">
        <h4 class="title">Reset Your Password</h4>
        <p>Enter your email address</p>
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

          <div class="create-desc">
            <ul>
              <li>
                Before we can reset your password, we require that you enter
                your email address below. You will then receive an email with
                instructions to reset your password.
              </li>
              <li>
                If you can't remember which email address you registered with or
                still have problems signing in to your account please contact
                our Customer Services.
              </li>
            </ul>
          </div>
          <div>
            <q-btn
              label="Send Email"
              type="submit"
              color="dark"
              text-color="white"
              class="submit-btn"
            />
          </div>
        </q-form>
      </div>
      <!-- 侧边栏 -->
      <div class="forgot-aside hide">
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
            @click="goTo('login', '0')"
          />
        </div>
      </div>
    </section>

    <!-- 移动端 -->
    <section class="forgot hide-small">
      <h6 class="q-pb-md">Reset Your Password</h6>
      <q-form @submit="onSubmit">
        <!-- 邮箱 -->
        <p>Enter Your Email Address</p>
        <q-input
          outlined
          v-model="email"
          label="Email *"
          lazy-rules
          type="email"
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
        <div class="create-desc">
          <ul>
            <li>
              Before we can reset your password, we require that you enter your
              email address below. You will then receive an email with
              instructions to reset your password.
            </li>
            <li>
              If you can't remember which email address you registered with or
              still have problems signing in to your account please contact our
              Customer Services.
            </li>
          </ul>
        </div>
        <q-separator></q-separator>
        <div class="sign-btn">
          <q-btn
            label="send email"
            type="submit"
            color="dark"
            text-color="white"
            unelevated
            class="q-mb-md"
          />
        </div>
      </q-form>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'Forgot',
  data() {
    return {
      email: null,
      isSign: '1' // '0' is login, '1' is create
    }
  },
  methods: {
    onSubmit() {},
    goTo(name, id) {
      this.$router.push({ name: name, params: { id } })
    }
  },
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
  .forgot-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  column-gap: 5vw;
  .hide-small {
    display: none;
  }
  .forgot {
    .title {
      margin-bottom: 3rem;
      font-size: 2.5rem;
      font-weight: 600;
      white-space: nowrap;
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
          margin-bottom: 1rem;
          list-style: disc;
          color: $grey-9;
        }
      }
      .submit-btn {
        width: 50%;
      }
    }
  }
  .forgot-aside {
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
    .forgot {
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
