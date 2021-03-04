<template>
  <q-layout view="hhh lpR fff">
    <q-header class="row bg-white text-black items-center" id="header">
      <!-- <a href="#top-bar" data-scroll></a> -->

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
                  <a
                    href="#"
                    class="text-grey-8 text-right q-my-sm"
                    style="display: block"
                    >Forget your password?</a
                  >
                </div>
              </q-form>
            </q-popup-proxy></a
          >
          <!-- 购物车按钮 -->
          <a href="#" @click="shopCarVisiable = true"
            ><i class="iconfont icon-shopcart-o-fws"></i
          ></a>
          <q-dialog
            v-model="shopCarVisiable"
            position="right"
            maximized
            persistent
          >
            <q-card
              style="width: 23vw; height: 100vh"
              class="bg-dark cart q-pa-md"
            >
              <q-card-section class="row items-start justify-between no-wrap">
                <div class="text-h6 text-white">Your Cart</div>
                <q-space />
                <q-btn
                  icon="close"
                  flat
                  round
                  dense
                  v-close-popup
                  text-color="white"
                />
              </q-card-section>
              <q-card-section class="column">
                <div class="cart-item text-white q-pb-lg">
                  <div class="cart-image">
                    <!-- <img src="/zzf.jpeg" alt="" /> -->
                  </div>
                  <a href="javascript:void(0)" class="cart-title ellips"
                    >modelo de lichi de Color sólido bufanda bolsa hombro
                    Diagonal bolso</a
                  >
                  <div class="cart-num row justify-between">
                    <div class="num-btn row">
                      <q-btn
                        icon="remove"
                        unelevated
                        dense
                        size="sm"
                        class="remove-btn"
                        @click="
                          if (cartItemNum > 0) {
                            cartItemNum--
                          }
                        "
                      ></q-btn>
                      <input
                        type="text"
                        class="num-input"
                        v-model="cartItemNum"
                      />
                      <q-btn
                        icon="add"
                        unelevated
                        dense
                        size="sm"
                        class="add-btn"
                        @click="cartItemNum++"
                      ></q-btn>
                    </div>
                    <div class="price">$27.99</div>
                  </div>
                </div>
                <div class="cart-item text-white q-pb-lg">
                  <div class="cart-image">
                    <!-- <img src="/zzf.jpeg" alt="" /> -->
                  </div>
                  <a href="javascript:void(0)" class="cart-title ellips"
                    >modelo de lichi de Color sólido bufanda bolsa hombro
                    Diagonal bolso</a
                  >
                  <div class="cart-num row justify-between">
                    <div class="num-btn row">
                      <q-btn
                        icon="remove"
                        unelevated
                        dense
                        size="sm"
                        class="remove-btn"
                        @click="
                          if (cartItemNum > 0) {
                            cartItemNum--
                          }
                        "
                      ></q-btn>
                      <input
                        type="text"
                        class="num-input"
                        v-model="cartItemNum"
                      />
                      <q-btn
                        icon="add"
                        unelevated
                        dense
                        size="sm"
                        class="add-btn"
                        @click="cartItemNum++"
                      ></q-btn>
                    </div>
                    <div class="price">$27.99</div>
                  </div>
                </div>
                <div class="cart-item text-white q-pb-lg">
                  <div class="cart-image">
                    <!-- <img src="/zzf.jpeg" alt="" /> -->
                  </div>
                  <a href="javascript:void(0)" class="cart-title ellips"
                    >modelo de lichi de Color sólido bufanda bolsa hombro
                    Diagonal bolso</a
                  >
                  <div class="cart-num row justify-between">
                    <div class="num-btn row">
                      <q-btn
                        icon="remove"
                        unelevated
                        dense
                        size="sm"
                        class="remove-btn"
                        @click="
                          if (cartItemNum > 0) {
                            cartItemNum--
                          }
                        "
                      ></q-btn>
                      <input
                        type="text"
                        class="num-input"
                        v-model="cartItemNum"
                      />
                      <q-btn
                        icon="add"
                        unelevated
                        dense
                        size="sm"
                        class="add-btn"
                        @click="cartItemNum++"
                      ></q-btn>
                    </div>
                    <div class="price">$27.99</div>
                  </div>
                </div>
              </q-card-section>
              <q-card-section class="text-white total">
                <div class="row justify-between items-center">
                  <p class="total-title text-weight-bold">Total</p>
                  <p class="total-price text-weight-bold ">$50.00</p>
                </div>
                <p class="total-tip text-grey-5 text-weight-bold">
                  Taxes and shipping calculated at checkout
                </p>
                <div class="checkout-btn text-h6">
                  CHECK OUT->
                </div>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
      <div class="tool-btn-group">
        <div class="tool-btn">
          <a href="javascript:void(0);"
            ><i class="iconfont icon-whats-app"></i
          ></a>
        </div>
        <div class="tool-btn">
          <a href="javascript:void(0);"
            ><i class="iconfont icon-we-chat"></i
          ></a>
        </div>
        <div class="tool-btn">
          <a href="javascript:void(0);"><i class="iconfont icon-email"></i></a>
        </div>
        <div class="tool-btn" id="top-bar" v-to-top>
          <a
            href="#header"
            v-smooth-scroll="{
              duration: 2000,
              updateHistory: false,
              offset: -50
            }"
          >
            <i class="iconfont icon-up"></i>
          </a>
        </div>
      </div>
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
      popUpVisiable: false,
      inPopUp: false,
      email: null,
      password: null,
      shopCarVisiable: false,
      cartItemNum: 1
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
    },
    onSubmit() {}
  },
  mounted() {},
  destroyed() {}
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
  .q-page-container {
    .tool-btn-group {
      position: fixed;
      bottom: 8vw;
      right: 3vw;
      display: grid;
      grid-template-rows: repeat(4, 1fr);
      row-gap: 0.5rem;
      z-index: 500;
      .tool-btn {
        // display: none;
        &:last-child {
          display: none;
        }
        width: 3rem;
        height: 3rem;
        background-color: $grey-6;
        border-radius: 1.5rem;
        text-align: center;
        line-height: 3rem;
        .iconfont {
          font-size: 1.5rem;
          color: white;
        }
      }
    }
  }

  .q-footer {
    z-index: 200;
    padding: 46px 64px;
    .partners {
      .partners-item {
        background-color: #eee;
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
