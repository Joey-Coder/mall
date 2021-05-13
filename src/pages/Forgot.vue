<template>
  <q-page>
    <!-- pc端 -->
    <section class="forgot-wrapper">
      <!-- 输入框 -->
      <div class="forgot hide">
        <h4 class="title">{{ $t('resetYourPassword') }}</h4>
        <p>{{ $t('enterYourEmailOrPhone') }}</p>
        <q-form @submit="resetPassword">
          <!-- 电话号码 -->
          <div class="phone-wrapper">
            <div class="phone">
              <!-- 手机区号选择 -->
              <vue-country-intl
                schema="popover"
                v-model="phoneCountry"
                disableCountry="86"
                iso2
              >
                <button
                  type="button"
                  slot="reference"
                  style="width: 100%; height: 56px; line-height: 56px"
                >
                  +{{ phoneCountry }}
                </button>
              </vue-country-intl>
              <q-input
                ref="phonePc"
                outlined
                v-model="phone"
                :label="$t('phone') + '*'"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || $t('pleaseTypeSomething'),
                  val =>
                    (val && /^1[3456789]\d{9}$/.test(val)) ||
                    $t('checkPhoneFormat')
                ]"
              />
            </div>

            <div class="code">
              <q-input
                ref="codePc"
                outlined
                v-model="code"
                :label="$t('enterSecurityCode')"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || $t('pleaseTypeSomething')
                ]"
              />
              <q-btn
                outline
                :label="$t('sendCode')"
                padding="xs"
                @click="sendCode"
              ></q-btn>
            </div>
          </div>
          <!-- 密码 -->
          <q-input
            ref="passwordPc"
            v-model="password"
            outlined
            :type="passwordVisiable ? 'password' : 'text'"
            :label="$t('createYourPassword')"
            class="q-mb-lg"
            lazy-rules
            :rules="[
              val => (val && val.length > 0) || $t('pleaseTypeSomething')
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
          <!-- 确认密码 -->
          <q-input
            ref="confirmPwPc"
            v-model="confirmPw"
            outlined
            :type="passwordVisiable ? 'password' : 'text'"
            :label="$t('confirmPassword')"
            lazy-rules
            :rules="[val => (val && val === password) || $t('samePassword')]"
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
            <ul>
              <li>{{ $t('beforeWeReset') }}</li>
              <li>{{ $t('ifYouCant') }}</li>
            </ul>
          </div>
          <div>
            <q-btn
              :label="$t('resetYourPassword')"
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
          <a href="javascript:void(0)" @click="goTo('index', '')">{{
            $t('returnToHome')
          }}</a>
        </div>
        <div class="account">
          <p>{{ $t('alreadyHaveAnAccount') }}</p>
          <q-btn
            :label="$t('signInNow')"
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
      <q-form @submit="resetPassword">
        <!-- 邮箱 -->
        <p>Enter Your Phone</p>
        <!-- 电话号码 -->
        <div class="phone-wrapper">
          <div class="phone">
            <vue-country-intl
              schema="popover"
              v-model="phoneCountry"
              disableCountry="86"
              iso2
            >
              <button
                type="button"
                slot="reference"
                style="width: 100%; height: 56px; line-height: 56px"
              >
                +{{ phoneCountry }}
              </button>
            </vue-country-intl>
            <q-input
              ref="phoneMobile"
              outlined
              v-model="phone"
              :label="$t('phone') + '*'"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || $t('pleaseTypeSomething'),
                val =>
                  (val && /^1[3456789]\d{9}$/.test(val)) ||
                  $t('checkPhoneFormat')
              ]"
            />
          </div>
          <div class="code">
            <q-input
              ref="codeMobile"
              outlined
              v-model="code"
              :label="$t('enterSecurityCode')"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || $t('pleaseTypeSomething')
              ]"
            />
            <q-btn outline :label="$t('sendCode')" padding="xs"></q-btn>
          </div>
        </div>
        <!-- 密码 -->
        <q-input
          ref="passwordMobile"
          v-model="password"
          outlined
          :type="passwordVisiable ? 'password' : 'text'"
          :label="$t('createYourPassword')"
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
          ref="confirmPwMobile"
          v-model="confirmPw"
          outlined
          :type="passwordVisiable ? 'password' : 'text'"
          :label="$t('confirmPassword')"
          lazy-rules
          :rules="[val => (val && val === password) || $t('samePassword')]"
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
          <ul>
            <li>{{ $t('beforeWeReset') }}</li>
            <li>{{ $t('ifYouCant') }}</li>
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
import { updatePassword, getAuthCode } from '../boot/axios'
export default {
  name: 'Forgot',
  data() {
    return {
      isSign: '1', // '0' is login, '1' is create
      phoneCountry: '1',
      phone: null,
      code: null,
      password: null,
      confirmPw: null,
      passwordVisiable: true
    }
  },
  methods: {
    /**
     * 重置密码
     */
    async resetPassword() {
      const { data, code } = await updatePassword({
        // phone: this.phoneCountry + '-' + this.phone,
        phone: this.phone,
        code: this.code,
        newPassword: this.confirmPw,
        type: true
      })
      if (code === 200) {
        this.$q.notify({
          type: 'positive',
          message: '密码修改成功'
        })
        this.goTo('login', 0)
      } else {
        this.$q.notify({
          type: 'danger',
          message: data.message
        })
      }
    },
    async sendCode() {
      const { code, data, message } = await getAuthCode(this.phone)
      if (code === 200) {
        this.$q.notify({
          type: 'positive',
          message: `code: ${data}`
        })
      } else {
        this.$q.notify({
          message: message
        })
      }
    },
    goTo(name, id) {
      this.$router.push({ name: name, params: { id } })
    }
  },
  components: {},
  props: {},
  created() {},
  mounted() {},
  computed: {},
  watch: {
    /**
     * 监听vuex中当前语言的改变
     * 一旦语言发生改变，对已经校验的input重新校验
     * 确保校验提示也切换到当前语言
     */
    '$store.state.lang.lang': function(newVal, oldVal) {
      // console.log(newVal)
      const refs = [
        'phonePc',
        'codePc',
        'passwordPc',
        'confirmPwPc',
        'phoneMobile',
        'codeMobile',
        'passwordMobile',
        'confirmPwMobile'
      ]
      refs.forEach(ref => {
        if (this.$refs[ref].hasError) {
          // console.log(ref)
          this.$refs[ref].validate()
        }
      })
    }
  }
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
      .phone {
        display: grid;
        grid-template-columns: 1fr 5fr;
        column-gap: 1rem;
        .country-number {
          width: 100%;
          height: 56px;
          line-height: 56px;
          text-align: center;
          background-color: $grey-3;
        }
      }
      .code {
        display: grid;
        grid-template-columns: 4fr 1fr;
        column-gap: 1rem;
        .q-btn {
          height: 56px;
          ::v-deep .block {
            white-space: nowrap;
          }
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
