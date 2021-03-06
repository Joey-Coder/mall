<template>
  <q-layout view="hhh lpR fff">
    <q-header class="row bg-white text-black items-center" id="header">
      <!-- <a href="#top-bar" data-scroll></a> -->

      <q-toolbar class="row justify-between items-center">
        <div class="header-left">
          <!-- 抽屉按钮 -->
          <q-btn
            flat
            @click="drawerVisiable = true"
            round
            dense
            icon="menu"
            class="drawer-icon"
            size="lg"
          />
          <!-- 抽屉菜单 -->
          <q-dialog v-model="drawerVisiable" position="left" maximized>
            <q-card class="bg-white drawer q-pa-md">
              <q-list separator>
                <!-- 注册或登录 -->
                <q-item clickable v-ripple class="menu bg-grey-2">
                  <q-item-section avatar>
                    <q-icon
                      name="account_circle"
                      class="text-grey-8"
                      size="xl"
                    />
                  </q-item-section>
                  <q-item-section class="text-dark text-subtitle1">
                    Sign in or Join Free
                  </q-item-section>
                </q-item>
                <!-- 首页 -->
                <q-item clickable v-ripple class="menu">
                  <q-item-section class="text-dark text-subtitle1">
                    Home
                  </q-item-section>
                </q-item>
                <!-- 商品菜单 -->
                <q-item
                  clickable
                  v-ripple
                  class="menu"
                  @click="productSubMenuVisiable = true"
                >
                  <q-item-section class="text-dark text-subtitle1">
                    Product
                  </q-item-section>
                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" size="lg" />
                  </q-item-section>
                  <!-- 商品子分类菜单 -->
                  <q-dialog
                    v-model="productSubMenuVisiable"
                    position="left"
                    maximized
                  >
                    <q-card class="bg-white drawer q-pa-md">
                      <q-card-section
                        class="row items-start justify-between no-wrap"
                        v-close-popup
                      >
                        <div class="text-h6 text-dark">Product</div>
                        <q-space />
                        <q-btn
                          icon="navigate_before"
                          flat
                          round
                          dense
                          text-color="dark"
                        />
                      </q-card-section>
                      <q-list separator>
                        <q-item clickable v-ripple class="menu">
                          <q-item-section class="text-dark text-subtitle1">
                            Category
                          </q-item-section>
                        </q-item>
                        <q-item clickable v-ripple class="menu">
                          <q-item-section class="text-dark text-subtitle1">
                            Category
                          </q-item-section>
                        </q-item>
                        <q-item clickable v-ripple class="menu">
                          <q-item-section class="text-dark text-subtitle1">
                            Category
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-card>
                  </q-dialog>
                </q-item>
                <!-- 关于 -->
                <q-item clickable v-ripple class="menu">
                  <q-item-section class="text-dark text-subtitle1">
                    About
                  </q-item-section>
                </q-item>
                <q-separator size="8px" />
                <!-- 语言 -->
                <q-item
                  clickable
                  v-ripple
                  class="menu"
                  @click="languageSubMenuVisiable = true"
                >
                  <q-item-section avatar style="font-size: 1.5rem">
                    <svg class="icon" aria-hidden="true">
                      <use
                        xlink:href="#icon-meiguo"
                        v-if="lang === 'United States'"
                      ></use>
                      <use
                        xlink:href="#icon-eluosi"
                        v-if="lang === 'Россия'"
                      ></use>
                      <use
                        xlink:href="#icon-tuerqi"
                        v-if="lang === 'Türkiye'"
                      ></use>
                      <use
                        xlink:href="#icon-alabolianheqiuchangguo"
                        v-if="lang === 'لغة عربية'"
                      ></use>
                    </svg>
                  </q-item-section>
                  <q-item-section class="text-dark text-subtitle1">
                    {{ lang }}
                  </q-item-section>

                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" size="lg" />
                  </q-item-section>
                  <!-- 语言选择子菜单 -->
                  <q-dialog
                    v-model="languageSubMenuVisiable"
                    position="left"
                    maximized
                  >
                    <q-card class="bg-white drawer q-pa-md">
                      <q-card-section
                        class="row items-start justify-between no-wrap"
                        v-close-popup
                      >
                        <div class="text-h6 text-dark">{{ lang }}</div>
                        <q-space />
                        <q-btn
                          icon="navigate_before"
                          flat
                          round
                          dense
                          text-color="dark"
                        />
                      </q-card-section>
                      <q-list separator>
                        <q-item
                          clickable
                          v-ripple
                          class="menu"
                          @click="lang = 'United States'"
                          v-close-popup
                        >
                          <q-item-section avatar style="font-size: 1.5rem">
                            <svg class="icon" aria-hidden="true">
                              <use xlink:href="#icon-meiguo"></use>
                            </svg>
                          </q-item-section>
                          <q-item-section class="text-dark text-subtitle1">
                            United States
                          </q-item-section>
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          class="menu"
                          @click="lang = 'Россия'"
                          v-close-popup
                        >
                          <q-item-section avatar style="font-size: 1.5rem">
                            <svg class="icon q-mr-sm" aria-hidden="true">
                              <use xlink:href="#icon-eluosi"></use>
                            </svg>
                          </q-item-section>
                          <q-item-section class="text-dark text-subtitle1">
                            Россия
                          </q-item-section>
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          class="menu"
                          @click="lang = 'Türkiye'"
                          v-close-popup
                        >
                          <q-item-section avatar style="font-size: 1.5rem">
                            <svg class="icon q-mr-sm" aria-hidden="true">
                              <use xlink:href="#icon-tuerqi"></use>
                            </svg>
                          </q-item-section>
                          <q-item-section class="text-dark text-subtitle1">
                            Türkiye
                          </q-item-section>
                        </q-item>
                        <q-item
                          clickable
                          v-ripple
                          class="menu"
                          @click="lang = 'لغة عربية'"
                          v-close-popup
                        >
                          <q-item-section avatar style="font-size: 1.5rem">
                            <svg class="icon q-mr-sm" aria-hidden="true">
                              <use
                                xlink:href="#icon-alabolianheqiuchangguo"
                              ></use>
                            </svg>
                          </q-item-section>
                          <q-item-section class="text-dark text-subtitle1">
                            لغة عربية
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-card>
                  </q-dialog>
                </q-item>
                <q-separator />
              </q-list>
            </q-card>
          </q-dialog>
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

        <a href="#" class="logo"><img src="../assets/logo.png" alt=""/></a>
        <div class="header-right">
          <button class="lang" @click="langVisiable = true">
            {{ lang }}
          </button>
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
                <!-- 英语 -->
                <q-btn
                  class="col-3 q-mx-sm q-my-lg"
                  style="width: 12rem"
                  unelevated
                  :color="
                    selectedLang === 'United States' ? 'grey-4' : 'grey-2'
                  "
                  text-color="dark"
                  @click="selectedLang = 'United States'"
                >
                  <!-- <q-icon left size="3em" name="map" /> -->
                  <div class="q-mr-sm">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-meiguo"></use>
                    </svg>
                  </div>
                  <div>United States</div>
                </q-btn>
                <!-- 俄语 -->
                <q-btn
                  class="col-3 q-mx-sm q-my-lg"
                  style="width: 12rem"
                  unelevated
                  @click="selectedLang = 'Россия'"
                  :color="selectedLang === 'Россия' ? 'grey-4' : 'grey-2'"
                  text-color="dark"
                >
                  <svg class="icon q-mr-sm" aria-hidden="true">
                    <use xlink:href="#icon-eluosi"></use>
                  </svg>
                  <div>Россия</div>
                </q-btn>
                <!-- 土耳其 -->
                <q-btn
                  class="col-3 q-mx-sm q-my-lg"
                  style="width: 12rem"
                  unelevated
                  @click="selectedLang = 'Türkiye'"
                  :color="selectedLang === 'Türkiye' ? 'grey-4' : 'grey-2'"
                  text-color="dark"
                >
                  <svg class="icon q-mr-sm" aria-hidden="true">
                    <use xlink:href="#icon-tuerqi"></use>
                  </svg>
                  <div>Türkiye</div>
                </q-btn>
                <!-- 阿拉伯 -->
                <q-btn
                  class="col-3 q-mx-sm q-my-lg"
                  style="width: 12rem"
                  unelevated
                  @click="selectedLang = 'لغة عربية'"
                  :color="selectedLang === 'لغة عربية' ? 'grey-4' : 'grey-2'"
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
                  @click="changeLanguage"
                />
              </q-card-actions>
            </q-card>
          </q-dialog>
          <!-- 个人中心浮窗 -->
          <a
            href="#"
            class="user-icon"
            @mouseleave="mouseLeave()"
            @mouseover="popUpVisiable = true"
            ><i class="iconfont icon-user1"></i>
            <q-popup-proxy
              no-parent-event
              target=".user-icon"
              v-model="popUpVisiable"
              @mouseover="inPopUp = true"
              @mouseleave="
                inPopUp = false
                popUpVisiable = false
              "
            >
              <q-form @submit="onSubmit" class="user-form q-pa-lg bg-white">
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
          <a href="#" @click="shopCarVisiable = true" class="cart-icon"
            ><i class="iconfont icon-iconfontcart-copy"></i>
            <span>{{ getTotalPrice.toFixed(2) }}</span>
          </a>
          <q-dialog v-model="shopCarVisiable" position="right" maximized>
            <q-card class="bg-dark cart q-pa-md">
              <q-card-section
                class="cart-title row items-start justify-between no-wrap"
              >
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
                <div
                  class="cart-item text-white q-pb-lg"
                  v-for="item in getCart"
                  :key="item.productID"
                >
                  <div class="cart-image">
                    <!-- <img src="/zzf.jpeg" alt="" /> -->
                  </div>
                  <a href="javascript:void(0)" class="cart-title ellips">{{
                    item.productName
                  }}</a>
                  <div class="cart-num row justify-between">
                    <div class="num-btn row">
                      <q-btn
                        icon="remove"
                        unelevated
                        dense
                        size="sm"
                        class="remove-btn"
                        @click="removeCartNum(item.productID)"
                      ></q-btn>
                      <input type="text" class="num-input" v-model="item.num" />
                      <q-btn
                        icon="add"
                        unelevated
                        dense
                        size="sm"
                        class="add-btn"
                        @click="addCartNum(item.productID)"
                      ></q-btn>
                    </div>
                    <div class="price">
                      ${{ (item.price * item.num).toFixed(2) }}
                    </div>
                  </div>
                </div>
              </q-card-section>
              <q-card-section class="text-white total">
                <div class="row justify-between items-center">
                  <p class="total-title text-weight-bold">Total</p>
                  <p class="total-price text-weight-bold ">
                    ${{ getTotalPrice.toFixed(2) }}
                  </p>
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
        <a href="javascript:void(0)" class="partners-item text-primary">
          <img src="../assets/paypal.png" alt="" />
        </a>
        <a href="javascript:void(0)" class="partners-item text-primary">
          <img src="../assets/fedex.png" alt="" />
        </a>
        <a href="javascript:void(0)" class="partners-item text-primary">
          <img src="../assets/dhl.png" alt="" />
        </a>
        <a href="javascript:void(0)" class="partners-item text-primary">
          <img src="../assets/ups.png" alt="" />
        </a>
        <a href="javascript:void(0)" class="partners-item text-primary">
          <img src="../assets/ems.png" alt="" />
        </a>
      </div>
      <!-- 联系方式和付款方式 -->
      <div class="contact row justify-between">
        <div class="follow-us row col-2 justify-between">
          <a href="javascript:void(0)" class="follow-image">
            <img src="../assets/ic_facebook.png" alt="" />
          </a>
          <a href="javascript:void(0)" class="follow-image">
            <img src="../assets/ic_ins.png" alt="" />
          </a>
          <a href="javascript:void(0)" class="follow-image">
            <img src="../assets/ic_whatsapp.png" alt="" />
          </a>
          <a href="javascript:void(0)" class="follow-image">
            <img src="../assets/ic_g.png" alt="" />
          </a>
          <a href="javascript:void(0)" class="follow-image">
            <img src="../assets/ic_wechat.png" alt="" />
          </a>
        </div>
        <div class="payment row col-2 justify-between">
          <a href="javascript:void(0)" class="payment-item">
            <img src="../assets/icon_paypal.png" />
          </a>
          <a href="javascript:void(0)" class="payment-item">
            <img src="../assets/icon_visa.png" />
          </a>
          <a href="javascript:void(0)" class="payment-item">
            <img src="../assets/icon_jcb.png" />
          </a>
          <a href="javascript:void(0)" class="payment-item">
            <img src="../assets/icon_wanshida.png" />
          </a>
          <a href="javascript:void(0)" class="payment-item">
            <img src="../assets/icon_diners.png" />
          </a>
        </div>
      </div>
      <!-- copyright -->
      <div class="copyright q-py-lg">
        版权所有©2020-2020保留所有权利
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      langVisiable: false,
      selectedLang: 'United States',
      lang: 'United States',
      popUpVisiable: false,
      inPopUp: false,
      email: null,
      password: null,
      shopCarVisiable: false,
      drawerVisiable: false,
      productSubMenuVisiable: false,
      languageSubMenuVisiable: false
    }
  },
  computed: {
    ...mapGetters(['getCart', 'getTotalPrice'])
  },

  methods: {
    ...mapMutations(['addCartNum', 'removeCartNum']),
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
  mounted() {
    // console.log(this.getCarts)
  },
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
        .drawer-icon {
          display: none;
        }
      }
      .header-right {
        justify-self: end;
        display: flex;
        .lang {
          margin-right: 2rem;
          width: 9rem;
          padding: 0;
          border: 1px solid transparent;
          outline: none;
          background-color: transparent;
          color: #000;
          font-size: 1.2rem;
          font-weight: 500;
          cursor: pointer;
          text-align: end;
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
        .cart-icon {
          display: flex;
          justify-content: center;
          span {
            margin-left: 5px;
          }
        }
      }
      .logo {
        display: none;
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
        // background-color: #eee;
        // padding: 0.3rem 1.4rem;
        // border-radius: 0.5rem;
        overflow: hidden;
        img {
          height: 33px;
        }
      }
    }
    .contact {
      .follow-us {
        .iconfont {
          font-size: 1.5rem;
        }
        .follow-image {
          overflow: hidden;
          img {
            width: 26px;
            height: 26px;
          }
        }
      }
      .payment {
        .payment-item {
          display: block;
          overflow: hidden;
          img {
            height: 24px;
            width: 36px;
          }
        }
      }
    }
  }
}

@media (max-width: 1100px) {
  .q-layout {
    .q-header {
      height: 100px;
      padding: 0 1rem;
      .q-toolbar {
        // display: flex;
        // justify-content: space-between;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        .logo {
          display: block;
          justify-self: center;
        }
        .header-left {
          justify-self: start;
          nav,
          img {
            display: none;
          }

          .drawer-icon {
            display: block;
          }
        }
        .header-right {
          justify-self: end;
          .lang {
            display: none;
          }
          .cart-icon {
            font-size: 1rem;
            margin: 0 1rem;
            span {
              display: none;
            }
          }
          .user-icon {
            display: none;
            font-size: 1rem;
            margin: 0 1rem;
          }
        }
      }
    }
    .q-page-container {
      .tool-btn-group {
        display: none;
      }
    }
  }
}

@media (max-width: 700px) {
  .q-layout {
    .q-header {
      height: 80px;
      padding: 0;
      .q-toolbar {
        .header-right {
          .cart-icon,
          .user-icon {
            font-size: 0.8rem;
            margin: 0 0.5rem;
          }
        }
      }
    }
  }
}
</style>
