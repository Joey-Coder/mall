<template>
  <q-page>
    <section class="tabs">
      <q-btn
        unelevated
        :class="[isSign.toString() === '0' ? 'active' : '']"
        @click="isSign = '0'"
        >{{ $t('signIn') }}</q-btn
      >
      <q-btn
        unelevated
        :class="[isSign === '1' ? 'active' : '']"
        @click="isSign = '1'"
        >{{ $t('joinFree') }}</q-btn
      >
    </section>
    <!-- pc端 -->
    <!-- 创建新账号 -->
    <section class="create-wrapper" v-if="isSign.toString() === '1'">
      <!-- 输入框 -->
      <div class="create hide">
        <h4 class="title">{{ $t('createAccount') }}</h4>
        <q-form @submit="register">
          <div class="name" style="width: 100%">
            <!-- firstName -->
            <q-input
              ref="firstNamePc"
              class="first-name"
              outlined
              v-model="firstName"
              :label="$t('yourFirstName')"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || $t('pleaseTypeSomething')
              ]"
              autogrow
            />
            <!-- lastName -->
            <q-input
              ref="lastNamePc"
              outlined
              class="last-name"
              v-model="lastName"
              :label="$t('yourLastName')"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || $t('pleaseTypeSomething')
              ]"
            />
          </div>

          <!-- 邮箱 -->
          <!-- <div class="email" v-if="useEmail">
            <p>
              <a
                href="javascript:void(0)"
                @click="useEmail = false"
                v-if="
                  $i18n.locale === 'Türkiye' || $i18n.locale === 'لغة عربية'
                "
                >{{ $t('mobile') }}</a
              >
              {{ $t('useYourEmailOr') }}
              <a
                href="javascript:void(0)"
                @click="useEmail = false"
                v-if="
                  $i18n.locale === 'United States' || $i18n.locale === 'Россия'
                "
                >{{ $t('mobile') }}</a
              >
            </p>
            <q-input
              outlined
              v-model="email"
              :label="$t('email')"
              lazy-rules
              type="email"
              :rules="[
                val => (val && val.length > 0) || $t('pleaseTypeSomething')
              ]"
            />
            <div class="code">
              <q-input
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
          </div> -->

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
                ref="phonePc"
                outlined
                v-model="phone"
                label="phone  *"
                lazy-rules
                :rules="[
                  val => (val && val.length > 0) || $t('pleaseTypeSomething'),
                  val =>
                    (val && /^1[3456789]\d{9}$/.test(val)) ||
                    $t('checkPhoneFormat')
                ]"
              />
            </div>
            <!-- 切换选项 -->
            <!-- <p>
              <a
                href="javascript:void(0)"
                @click="useEmail = true"
                v-if="
                  $i18n.locale === 'Türkiye' || $i18n.locale === 'لغة عربية'
                "
                >{{ $t('email') }}</a
              >
              {{ $t('useYourMobileOr') }}
              <a
                href="javascript:void(0)"
                @click="useEmail = true"
                v-if="
                  $i18n.locale === 'United States' || $i18n.locale === 'Россия'
                "
                >{{ $t('email') }}</a
              >
            </p> -->
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
                @click="getAuthCode"
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
            <h6>{{ $t('byClickCreate') }}</h6>
            <ul>
              <li>
                {{ $t('orderAndDelivery') }}
              </li>
              <li>
                {{ $t('productsAndPromotions') }}
              </li>
            </ul>
          </div>
          <div>
            <q-btn
              :label="$t('createMyAccount')"
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
            @click="isSign = '0'"
          />
        </div>
      </div>
    </section>
    <!-- 登录 -->
    <section class="login-wrapper" v-else>
      <div class="login hide">
        <h4 class="title">{{ $t('signIn') }}</h4>
        <q-form @submit="login">
          <!-- 手机号 -->
          <q-input
            ref="phonePc"
            outlined
            v-model="emailPhone"
            :label="$t('phone') + '*'"
            lazy-rules
            :rules="[
              val => (val && val.length > 0) || $t('pleaseTypeSomething'),
              val =>
                (val && /^1[3456789]\d{9}$/.test(val)) || $t('checkPhoneFormat')
            ]"
          >
            <template v-slot:append></template>
          </q-input>

          <!-- 密码 -->
          <q-input
            ref="passwordPc"
            v-model="loginPassword"
            outlined
            :type="passwordVisiable ? 'password' : 'text'"
            :label="$t('yourPassword')"
            class="q-mb-lg"
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

          <div class="create-desc">
            <a href="javascript:void(0)" @click="goTo('forgot', '')"
              ><h6>{{ $t('forgetYourPassword') }}</h6></a
            >
          </div>
          <div>
            <q-btn
              :label="$t('signIn')"
              type="submit"
              color="dark"
              text-color="white"
              unelevated
              class="submit-btn"
            />
          </div>
          <q-btn
            color="white"
            text-color="dark"
            style="width: 50%"
            class="q-mt-sm row justify-start"
            outline
            unelevated
            align="between"
          >
            <img src="../assets/ic_g.png" alt="" />
            <div>{{ $t('googleWithLogin') }}</div>
            <div></div>
          </q-btn>
          <q-btn
            color="white"
            text-color="dark"
            style="width: 50%"
            class="q-mt-sm row justify-start"
            outline
            unelevated
            align="between"
          >
            <img src="../assets/ic_facebook.png" alt="" />
            <div>{{ $t('facebookWithLogin') }}</div>
            <div></div>
          </q-btn>
        </q-form>
      </div>

      <div class="login-aside hide">
        <div class="return-home">
          <a href="javascript:void(0)" @click="goTo('index', '')">{{
            $t('returnToHome')
          }}</a>
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
      <h4 class="title">{{ $t('createAccount') }}</h4>
      <!-- 注册 -->
      <q-form @submit="register">
        <div class="name" style="width: 100%">
          <!-- firstName -->
          <q-input
            ref="firstNameMobile"
            class="first-name"
            outlined
            v-model="firstName"
            :label="$t('yourFirstName')"
            lazy-rules
            :rules="[
              val => (val && val.length > 0) || $t('pleaseTypeSomething')
            ]"
            autogrow
          />
          <!-- lastName -->
          <q-input
            ref="lastNameMobile"
            outlined
            class="last-name"
            v-model="lastName"
            :label="$t('yourLastName')"
            lazy-rules
            :rules="[
              val => (val && val.length > 0) || $t('pleaseTypeSomething')
            ]"
          />
        </div>
        <!-- 邮箱 -->
        <!-- <q-input
          outlined
          v-model="email"
          label="Email *"
          lazy-rules
          type="email"
          :rules="[val => (val && val.length > 0) || $t('pleaseTypeSomething')]"
        /> -->

        <!-- 邮箱 -->
        <!-- <div class="email" v-if="useEmail">
          <p>
            <a
              href="javascript:void(0)"
              @click="useEmail = false"
              v-if="$i18n.locale === 'Türkiye' || $i18n.locale === 'لغة عربية'"
              >{{ $t('mobile') }}</a
            >
            {{ $t('useYourEmailOr') }}
            <a
              href="javascript:void(0)"
              @click="useEmail = false"
              v-if="
                $i18n.locale === 'United States' || $i18n.locale === 'Россия'
              "
              >{{ $t('mobile') }}</a
            >
          </p>
          <q-input
            outlined
            v-model="email"
            :label="$t('email')"
            lazy-rules
            type="email"
            :rules="[
              val => (val && val.length > 0) || $t('pleaseTypeSomething')
            ]"
          />
          <div class="code">
            <q-input
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
        </div> -->

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
              label="phone  *"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || $t('pleaseTypeSomething'),
                val =>
                  (val && /^1[3456789]\d{9}$/.test(val)) ||
                  $t('checkPhoneFormat')
              ]"
            />
          </div>
          <!-- 手机和邮箱的切换 -->
          <!-- <p>
            <a
              href="javascript:void(0)"
              @click="useEmail = true"
              v-if="$i18n.locale === 'Türkiye' || $i18n.locale === 'لغة عربية'"
              >{{ $t('email') }}</a
            >
            {{ $t('useYourMobileOr') }}
            <a
              href="javascript:void(0)"
              @click="useEmail = true"
              v-if="
                $i18n.locale === 'United States' || $i18n.locale === 'Россия'
              "
              >{{ $t('email') }}</a
            >
          </p> -->
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
            <q-btn
              outline
              :label="$t('sendCode')"
              padding="xs"
              @click="getAuthCode"
            ></q-btn>
          </div>
        </div>
        <!-- 密码 -->
        <q-input
          ref="passwordMobile"
          v-model="password"
          outlined
          :type="passwordVisiable ? 'password' : 'text'"
          :label="$t('createYourPassword')"
          :rules="[val => (val && val.length > 0) || $t('pleaseTypeSomething')]"
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
          <h6>{{ $t('byClickCreate') }}</h6>
          <ul>
            <li>
              {{ $t('orderAndDelivery') }}
            </li>
            <li>
              {{ $t('productsAndPromotions') }}
            </li>
          </ul>
        </div>
        <div>
          <q-btn
            :label="$t('createMyAccount')"
            type="submit"
            color="dark"
            text-color="white"
            class="submit-btn"
          />
        </div>
      </q-form>
    </section>
    <!-- 登录 -->
    <section class="sign-in hide-small" v-else>
      <q-form @submit="login">
        <!-- 手机号 -->
        <q-input
          ref="phoneMobile"
          outlined
          v-model="emailPhone"
          :label="$t('phone') + '*'"
          lazy-rules
          :rules="[
            val => (val && val.length > 0) || $t('pleaseTypeSomething'),
            val =>
              (val && /^1[3456789]\d{9}$/.test(val)) || $t('checkPhoneFormat')
          ]"
        >
          <template v-slot:append> </template>
        </q-input>
        <!-- 密码 -->
        <q-input
          ref="passwordMobile"
          v-model="loginPassword"
          outlined
          :type="passwordVisiable ? 'password' : 'text'"
          :label="$t('yourPassword')"
          class="q-mb-lg"
          :rules="[val => (val && val.length > 0) || $t('pleaseTypeSomething')]"
        >
          <template v-slot:append>
            <q-icon
              :name="passwordVisiable ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="passwordVisiable = !passwordVisiable"
            />
          </template>
        </q-input>
        <a
          href="javascript:void(0)"
          @click="goTo('forgot', '')"
          style="display: block; text-decoration: none; color: black;"
          >{{ $t('forgetYourPassword') }}</a
        >
        <q-separator></q-separator>
        <div class="sign-btn">
          <q-btn
            :label="$t('signIn')"
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
            <div>{{ $t('googleWithLogin') }}</div>
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
            <div>{{ $t('facebookWithLogin') }}</div>
            <div></div>
          </q-btn>
        </div>
      </q-form>
    </section>
  </q-page>
</template>

<script>
import { getAuthCode, register, login } from '../boot/axios'
import { setToken } from '../boot/auth.js'
export default {
  name: 'Login',
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      emailPhone: null,
      phone: null,
      password: null,
      loginPassword: null,
      code: null,
      confirmPw: null,
      passwordVisiable: true,
      useEmail: true,
      phoneCountry: '1',
      isSign: this.id // '0' is login, '1' is create
    }
  },
  methods: {
    /**
     * 获取手机验证码
     */
    async getAuthCode() {
      const res = await getAuthCode(this.phone)
      this.$q.notify({
        message: res.message
      })
      console.log(res)
    },

    async register() {
      const { data, code } = await register({
        authCode: this.code,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        phone: this.phoneCountry + '-' + this.phone
      })
      if (code === 200) {
        this.$q.notify({
          type: 'positive',
          message: '注册成功'
        })
      } else {
        this.$q.notify({
          type: 'danger',
          message: data.message
        })
      }
      // console.log(res)
    },
    async login() {
      const { code, data } = await login({
        phone: this.emailPhone,
        password: this.loginPassword
      })
      // console.log(res)
      if (code === 200) {
        setToken(data.tokenHead + data.token)
        this.$q.notify({
          type: 'success',
          message: '登录成功'
        })
        // const res = await getUserInfo(this.emailPhone)
        // console.log(res)
        this.$store.commit('signIn')
        this.$router.push({ path: '/' })
      } else {
        this.$q.notify({
          type: 'danger',
          message: data.message
        })
      }
    },
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
  mounted() {
    console.log(this.$i18n.locale)
  },
  computed: {},
  watch: {
    id(val) {
      this.isSign = val
    },
    /**
     * 监听语言改变，重新校验表单规则
     */
    '$store.state.lang.lang': function(newValue, oldValue) {
      const refs = [
        'firstName',
        'lastName',
        'phone',
        'code',
        'password',
        'confirmPw'
      ]
      refs.forEach(ref => {
        const refPc = this.$refs[ref + 'Pc']
        const refMobile = this.$refs[ref + 'Mobile']
        if (refPc && refPc.hasError) {
          refPc.validate()
        }
        if (refMobile && refMobile.hasError) {
          refMobile.validate()
        }
      })
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
    .q-btn {
      white-space: nowrap;
      overflow: hidden;
    }
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
      .email {
        p {
          a {
            text-decoration: underline;
            color: black;
            cursor: pointer;
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
      }
      .phone-wrapper {
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
        p {
          a {
            text-decoration: underline;
            color: black;
            cursor: pointer;
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
