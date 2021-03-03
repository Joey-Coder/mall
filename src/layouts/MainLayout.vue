<template>
  <q-layout view="hhh lpR fff">
    <q-header class="row bg-white text-black items-center">
      <q-toolbar class="row justify-between items-center">
        <div class="header-left">
          <a href="#"><img src="../assets/logo.png" alt=""/></a>
          <nav>
            <a href="">Home</a>
            <a href="javascript:void(0);"
              >Product
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section>category</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>category</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>category</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>category</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </a>
            <a href="">About</a>
          </nav>
        </div>
        <div class="header-right">
          <button class="lang" @click="langVisiable = true">USD</button>
          <!-- 语言切换dialog -->
          <q-dialog v-model="langVisiable" persistent>
            <q-card style="max-width:60vw">
              <q-card-section class="row items-center justify-between">
                <div class="text-h6">Select Your Language</div>
                <q-space />
                <q-btn
                  icon="close"
                  flat
                  round
                  dense
                  v-close-popup
                  @click="selectedLang = lang"
                />
              </q-card-section>
              <q-separator />
              <q-card-section class="dialog-content col q-py-lg">
                <q-btn
                  class="col-3 q-mx-sm q-my-lg"
                  style="width: 12rem"
                  unelevated
                  :color="selectedLang === 'us' ? 'grey-4' : 'grey-2'"
                  text-color="dark"
                  @click="selectedLang = 'us'"
                >
                  <!-- <q-icon left size="3em" name="map" /> -->
                  <div class="q-mr-sm">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-meiguo"></use>
                    </svg>
                  </div>
                  <div>United States</div>
                </q-btn>
                <q-btn
                  class="col-3 q-mx-sm q-my-lg"
                  style="width: 12rem"
                  unelevated
                  @click="selectedLang = 'els'"
                  :color="selectedLang === 'els' ? 'grey-4' : 'grey-2'"
                  text-color="dark"
                >
                  <svg class="icon q-mr-sm" aria-hidden="true">
                    <use xlink:href="#icon-eluosi"></use>
                  </svg>
                  <div>Россия</div>
                </q-btn>
                <q-btn
                  class="col-3 q-mx-sm q-my-lg"
                  style="width: 12rem"
                  unelevated
                  @click="selectedLang = 'teq'"
                  :color="selectedLang === 'teq' ? 'grey-4' : 'grey-2'"
                  text-color="dark"
                >
                  <svg class="icon q-mr-sm" aria-hidden="true">
                    <use xlink:href="#icon-tuerqi"></use>
                  </svg>
                  <div>Türkiye</div>
                </q-btn>
                <q-btn
                  class="col-3 q-mx-sm q-my-lg"
                  style="width: 12rem"
                  unelevated
                  @click="selectedLang = 'alb'"
                  :color="selectedLang === 'alb' ? 'grey-4' : 'grey-2'"
                  text-color="dark"
                >
                  <svg class="icon q-mr-sm" aria-hidden="true">
                    <use xlink:href="#icon-alabolianheqiuchangguo"></use>
                  </svg>
                  <div>لغة عربية</div>
                </q-btn>
              </q-card-section>

              <q-card-actions align="center" class="q-pb-lg">
                <q-btn
                  label="Save"
                  style="width: 30%"
                  color="dark"
                  unelevated
                  v-close-popup
                />
              </q-card-actions>
            </q-card>
          </q-dialog>
          <!-- 个人中心浮窗 -->
          <a
            href="#"
            class="user"
            @mouseover="popUpVisiable = true"
            @mouseleave="mouseLeave()"
            ><i class="iconfont icon-user1"></i>
            <q-popup-proxy
              no-parent-event
              target=".user"
              v-model="popUpVisiable"
              @mouseover="inPopUp = true"
            >
              <!-- @mouseleave="
                inPopUp = false
                popUpVisiable = false
              " -->
              <q-form @submit="onSubmit" class="user-form q-pa-lg">
                <q-input
                  class="q-my-sm"
                  filled
                  v-model="email"
                  label="Your Email Address"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Please type something'
                  ]"
                />

                <q-input
                  class="q-my-sm"
                  filled
                  v-model="password"
                  label="Your Password"
                  lazy-rules
                  :rules="[
                    val => (val && val.length > 0) || 'Please type something'
                  ]"
                />

                <div>
                  <q-btn
                    label="Sign In"
                    type="submit"
                    color="dark"
                    text-color="white"
                    style="width: 100%"
                    class="q-mb-sm"
                    unelevated
                  />
                  <q-btn
                    label="Join Free"
                    class="q-my-sm"
                    text-color="dark"
                    color="white"
                    outline
                    style="width: 100%"
                  />
                  <a href="#" class="text-grey-8 text-right q-my-sm" style="display: block">Forget your password?</a>
                </div>
              </q-form>
            </q-popup-proxy></a
          >
          <a href="#"><i class="iconfont icon-shopcart-o-fws"></i></a>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <!-- 底部菜单栏 -->
      <div class="footer-menu row justify-between q-pb-xl">
        <div class="member q-gutter-lg">
          <div class="footer-title text-h6">Member</div>
          <div>Order Tracking</div>
          <div>Create an Account</div>
        </div>
        <div class="overview q-gutter-lg">
          <div class="text-h6">Overview</div>
          <div>Payment Methods</div>
          <div>Shipping & Returns</div>
        </div>
        <div class="help q-gutter-lg">
          <div class="text-h6">FAQ & Help</div>
          <div>FAQ</div>
          <div>Buyer Protection</div>
        </div>
      </div>
      <!-- 合作伙伴 -->
      <div class="partners row justify-center q-gutter-x-lg q-py-xl">
        <div class="partners-item text-primary">Paypal</div>
        <div class="partners-item text-primary">FedEx</div>
        <div class="partners-item text-primary">DHL</div>
        <div class="partners-item text-primary">UPS</div>
        <div class="partners-item text-primary">EMS</div>
      </div>
      <!-- 联系方式和付款方式 -->
      <div class="contact row justify-between">
        <div class="follow-us row col-2 justify-between">
          <div class="iconfont icon-4CEBA48D845888E06C868951A5E1A875"></div>
          <div class="iconfont icon-google"></div>
          <div class="iconfont icon-inss"></div>
          <div class="iconfont icon-we-chat"></div>
          <div class="iconfont icon-whats-app"></div>
        </div>
        <div class="payment row col-2 justify-between">
          <div class="payment-item">
            <img src="../assets/icon_Paypal.png" />
          </div>
          <div class="payment-item">
            <img src="../assets/icon_Visa.png" />
          </div>
          <div class="payment-item">
            <img src="../assets/icon_Jcb.png" />
          </div>
          <div class="payment-item">
            <img src="../assets/icon_Mastercard.png" />
          </div>
          <div class="payment-item">
            <img src="../assets/icon_Maestro.png" />
          </div>
        </div>
      </div>
      <!-- copyright -->
      <div class="copyright q-py-lg">
        Copyright © 2007-2020 All Rights Reserved. POWERED BY UEESHOP
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      langVisiable: false,
      selectedLang: 'us',
      lang: 'us',
      popUpVisiable: true,
      inPopUp: true,
      email: null,
      password: null
    }
  },
  methods: {
    changeLanguage() {
      this.lang = this.selectedLang
      // send axios
    },
    mouseLeave() {
      setTimeout(() => {
        this.popUpVisiable = this.inPopUp
      }, 500)
    }
  }
}
</script>

<style scoped lang="scss">
.q-layout {
  .q-header {
    height: 120px;
    padding: 0 4rem;
    .q-toolbar {
      height: 76px;
      display: grid;
      grid-template-columns: 3fr 1fr;
      align-items: end;

      .header-left {
        display: flex;
        img {
          margin-right: 2rem;
        }
        nav {
          display: flex;
          align-items: flex-end;
          a {
            display: block;
            color: #000;
            font-size: 1.2rem;
            font-weight: 500;
            height: 2.5rem;
            line-height: 2.5rem;
            margin: 0 2rem;
            &:hover {
              border-bottom: 1px solid #000;
            }
          }
        }
      }
      .header-right {
        justify-self: end;
        display: flex;
        .lang {
          margin-right: 2rem;
          padding: 0;
          border: 1px solid transparent;
          outline: none;
          background-color: transparent;
          color: #000;
          font-size: 1.2rem;
          font-weight: 500;
          cursor: pointer;
        }
        a {
          display: block;
          color: #000;
          font-size: 1.2rem;
          font-weight: 500;
          height: 2.5rem;
          line-height: 2.5rem;
          margin: 0 2rem;
          &:hover {
            border-bottom: 1px solid #000;
          }
        }
        .iconfont {
          color: #000;
          font-size: 2rem;
        }
      }
    }
  }
  .q-footer {
    padding: 46px 64px;
    .partners {
      .partners-item {
        background-color: #eee;
        // color: skyblue;
        padding: 0.3rem 1.4rem;
        border-radius: 0.5rem;
      }
    }
    .contact {
      .follow-us {
        .iconfont {
          font-size: 1.5rem;
        }
      }
      .payment {
        .payment-item img {
          height: 24px;
          width: 36px;
        }
      }
    }
  }
}
</style>
