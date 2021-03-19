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
                <q-item
                  clickable
                  v-ripple
                  class="menu bg-grey-2"
                  @click="isLogIn ? goTo('user', '0') : goTo('login', '0')"
                >
                  <q-item-section avatar>
                    <q-icon
                      name="account_circle"
                      class="text-grey-8"
                      size="xl"
                    />
                  </q-item-section>
                  <q-item-section
                    class="text-dark text-subtitle1"
                    v-if="!isLogIn"
                    style="white-space:nowrap; overflow: scroll"
                  >
                    {{ $t('signOrJoin') }}
                  </q-item-section>
                  <q-item-section class="text-dark text-subtitle1" v-else>
                    My Orders or Settings
                  </q-item-section>
                </q-item>
                <!-- 首页 -->
                <q-item
                  clickable
                  v-ripple
                  class="menu"
                  @click="goTo('index', '')"
                >
                  <q-item-section class="text-dark text-subtitle1">
                    {{ $t('home') }}
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
                    {{ $t('product') }}
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
                        <q-item
                          clickable
                          v-ripple
                          class="menu"
                          v-for="i in 3"
                          :key="i"
                        >
                          <q-item-section
                            class="text-dark text-subtitle1"
                            @click="goTo('products', `category${i}`)"
                          >
                            Category{{ i }}
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-card>
                  </q-dialog>
                </q-item>
                <!-- 关于 -->
                <q-item clickable v-ripple class="menu">
                  <q-item-section
                    class="text-dark text-subtitle1"
                    @click="goTo('about', '')"
                  >
                    {{ $t('about') }}
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
                          @click="lang = $i18n.locale = 'United States'"
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
                          @click="lang = $i18n.locale = 'Россия'"
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
                          @click="lang = $i18n.locale = 'Türkiye'"
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
                          @click="lang = $i18n.locale = 'لغة عربية'"
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
          <a href="javascript:void(0)" @click="goTo('index', '')"
            ><img src="../assets/logo.png" alt=""
          /></a>
          <nav>
            <a
              href="javascript:void(0)"
              clickable
              v-close-popup
              @click="goTo('index', '')"
              >{{ $t('home') }}</a
            >
            <a href="javascript:void(0);"
              >{{ $t('product') }}
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup v-for="i in 3" :key="i">
                    <q-item-section @click="goTo('products', `category${i}`)"
                      >category{{ i }}</q-item-section
                    >
                  </q-item>
                </q-list>
              </q-menu>
            </a>
            <a href="javascript:void(0)" @click="goTo('about', '')">{{
              $t('about')
            }}</a>
          </nav>
        </div>

        <a href="#" class="logo"
          ><img
            src="../assets/logo.png"
            alt=""
            style="width: 4rem; height: 4rem"
        /></a>

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
                  :label="$t('save')"
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
            href="javascript:void(0)"
            class="user-icon"
            @mouseleave="mouseLeave('icon')"
            @mouseover="inIcon = true"
            ><i class="iconfont icon-user1"></i>
            <q-popup-proxy
              no-parent-event
              target=".user-icon"
              v-model="popUpVisiable"
              @mouseover="inPopUp = true"
              @mouseleave="mouseLeave('popup')"
            >
              <!-- 登录框 -->
              <div v-if="!getIsLogIn">
                <q-form @submit="onSubmit" class="user-form q-pa-lg bg-white">
                  <q-input
                    class="q-my-sm"
                    filled
                    v-model="email"
                    :label="$t('yourEmailAddress')"
                    lazy-rules
                    :rules="[
                      val => (val && val.length > 0) || 'Please type something'
                    ]"
                  />

                  <q-input
                    class="q-my-sm"
                    filled
                    v-model="password"
                    :label="$t('yourPassword')"
                    lazy-rules
                    :rules="[
                      val => (val && val.length > 0) || 'Please type something'
                    ]"
                  />

                  <div>
                    <q-btn
                      :label="$t('signIn')"
                      type="submit"
                      color="dark"
                      text-color="white"
                      style="width: 100%"
                      class="q-mb-sm"
                      unelevated
                      @click="signIn"
                    /><q-btn
                      type="submit"
                      color="white"
                      text-color="dark"
                      style="width: 100%"
                      class="q-mb-sm row justify-start"
                      outline
                      unelevated
                      align="between"
                    >
                      <img src="../assets/ic_facebook.png" alt="" />
                      <div>{{ $t('facebookWithLogin') }}</div>
                      <div></div>
                    </q-btn>
                    <q-btn
                      type="submit"
                      color="white"
                      text-color="dark"
                      style="width: 100%"
                      class="q-mb-sm row justify-start"
                      outline
                      unelevated
                      align="between"
                    >
                      <img src="../assets/ic_g.png" alt="" />
                      <div>{{ $t('googleWithLogin') }}</div>
                      <div></div>
                    </q-btn>

                    <q-separator class="q-my-xs" />
                    <q-btn
                      :label="$t('joinFree')"
                      class="q-my-sm"
                      text-color="dark"
                      color="white"
                      outline
                      style="width: 100%"
                      @click="goTo('login', '1')"
                    />
                    <a
                      href="javascript:void(0)"
                      class="text-grey-8 text-right q-my-sm"
                      style="display: block"
                      @click="goTo('forgot', '')"
                      >{{ $t('forgetYourPassword') }}?</a
                    >
                  </div>
                </q-form>
              </div>
              <!-- 已登录 -->
              <div v-else class="my-account user-form">
                <a href="javascript:void(0)" @click="goTo('user', '0')"
                  ><p>My Orders</p></a
                >
                <a href="javascript:void(0)" @click="goTo('user', '1')"
                  ><p>Account Setting</p></a
                >
                <q-btn
                  outline
                  unelevated
                  label="Sign Out"
                  @click="signOut"
                ></q-btn>
              </div> </q-popup-proxy
          ></a>
          <!-- 购物车按钮 -->
          <a
            href="javascript:void(0)"
            @click="shopCarVisiable = true"
            class="cart-icon"
            ><i class="iconfont icon-iconfontcart-copy"></i>
            <span>{{ getTotalPrice.toFixed(2) }}</span>
          </a>
          <q-dialog v-model="shopCarVisiable" position="right" maximized>
            <q-card class="bg-dark cart q-pa-md">
              <q-card-section
                class="cart-title row items-start justify-between no-wrap"
              >
                <div class="text-h6 text-white">{{ $t('yourCart') }}</div>
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
                  <a
                    href="javascript:void(0)"
                    class="cart-title q-pa-none ellips"
                    >{{ item.productName }}</a
                  >
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
                      ${{ getProductPrice(item.productID) }}
                    </div>
                  </div>
                </div>
              </q-card-section>
              <q-card-section class="text-white total">
                <div class="row justify-between items-center">
                  <p class="total-title text-weight-bold">{{ $t('total') }}</p>
                  <p class="total-price text-weight-bold ">
                    ${{ getTotalPrice.toFixed(2) }}
                  </p>
                </div>
                <p class="total-tip text-grey-5 text-weight-bold">
                  {{ $t('taxesAndShippingCalculatedAtCheckout') }}
                </p>
                <div
                  class="checkout-btn text-h6"
                  @click="goTo('checkout', '')"
                  style="cursor: pointer"
                >
                  {{ $t('checkOut') }}->
                </div>
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view @signOut="isLogIn = false" />
      <div class="tool-btn-group">
        <div class="tool-btn">
          <a href="javascript:void(0);"
            ><i class="iconfont icon-whats-app"></i
          ></a>
        </div>
        <div class="tool-btn">
          <a
            href="javascript:void(0);"
            @mouseleave="mouseLeave('inWechatIcon')"
            @mouseover="inWechatIcon = true"
            ><i class="iconfont icon-we-chat"></i>
            <wechat-popup
              target=".icon-we-chat"
              :inIcon="inWechatIcon"
            ></wechat-popup>
          </a>
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
      <!-- 底部菜单栏 移动端版本-->
      <div class="footer-menu" v-if="$q.screen.lt.lg">
        <div class="member">
          <div
            class="member-title text-h6 row justify-between items-center"
            @click="memberVisiable = !memberVisiable"
          >
            <div>{{ $t('member') }}</div>
            <q-btn icon="add" flat dense v-if="!memberVisiable"></q-btn>
            <q-btn icon="remove" flat dense v-else></q-btn>
          </div>
          <div class="member-text" v-if="memberVisiable">
            <div
              class="q-pt-md"
              @click="
                if (getIsLogIn) {
                  goTo('user', '0')
                } else {
                  goTo('login', '0')
                }
              "
              style="cursor: pointer"
            >
              {{ $t('orderTracking') }}
            </div>
            <div @click="goTo('login', '1')" style="cursor: pointer">
              {{ $t('createAnAccount') }}
            </div>
          </div>
        </div>
        <div class="overview ">
          <div
            class="overview-title text-h6 row justify-between items-center"
            @click="overviewVisiable = !overviewVisiable"
          >
            <div>{{ $t('overview') }}</div>
            <q-btn icon="add" flat dense v-if="!overviewVisiable"></q-btn>
            <q-btn icon="remove" flat dense v-else></q-btn>
          </div>
          <div class="overview-text" v-if="overviewVisiable">
            <div class="q-pt-md">{{ $t('paymentMethods') }}</div>
            <div>{{ $t('shippingReturns') }}</div>
          </div>
        </div>
        <div class="help ">
          <div
            class="text-h6 help-title row justify-between items-center"
            @click="helpVisiable = !helpVisiable"
          >
            <div>{{ $t('FaqHelp') }}</div>
            <q-btn icon="add" flat dense v-if="!helpVisiable"></q-btn>
            <q-btn icon="remove" flat dense v-else></q-btn>
          </div>
          <div class="help-text" v-if="helpVisiable">
            <div class="q-pt-md">{{ $t('Faq') }}</div>
            <div>{{ $t('buyerProtection') }}</div>
          </div>
        </div>
      </div>
      <!-- 底部菜单栏 -->
      <div class="footer-menu" v-else>
        <div class="member">
          <div class="member-title text-h6 ">
            {{ $t('member') }}
          </div>
          <div class="member-text">
            <div
              class="q-pt-md"
              @click="
                if (getIsLogIn) {
                  goTo('user', '0')
                } else {
                  goTo('login', '0')
                }
              "
              style="cursor: pointer"
            >
              {{ $t('orderTracking') }}
            </div>

            <div @click="goTo('login', '1')" style="cursor: pointer">
              {{ $t('createAnAccount') }}
            </div>
          </div>
        </div>
        <div class="overview ">
          <div class="overview-title text-h6">
            {{ $t('overview') }}
          </div>
          <div class="overview-text">
            <div class="q-pt-md">{{ $t('paymentMethods') }}</div>
            <div>{{ $t('shippingReturns') }}</div>
          </div>
        </div>
        <div class="help ">
          <div class="text-h6 help-title ">
            {{ $t('FaqHelp') }}
          </div>
          <div class="help-text">
            <div class="q-pt-md">{{ $t('Faq') }}</div>
            <div>{{ $t('buyerProtection') }}</div>
          </div>
        </div>
      </div>
      <!-- 合作伙伴 -->
      <div class="partners row justify-center q-gutter-x-lg q-py-xl">
        <a href="http://www.baidu.com" class="partners-item text-primary">
          <img src="../assets/paypal.png" alt="" />
        </a>
        <a href="http://www.baidu.com" class="partners-item text-primary">
          <img src="../assets/fedex.png" alt="" />
        </a>
        <a href="http://www.baidu.com" class="partners-item text-primary">
          <img src="../assets/dhl.png" alt="" />
        </a>
        <a href="http://www.baidu.com" class="partners-item text-primary">
          <img src="../assets/ups.png" alt="" />
        </a>
        <a href="http://www.baidu.com" class="partners-item text-primary">
          <img src="../assets/ems.png" alt="" />
        </a>
      </div>
      <!-- 联系方式和付款方式 -->
      <div class="contact">
        <div class="follow-us row col-2 justify-between">
          <a href="http://www.baidu.com" class="follow-image">
            <img src="../assets/ic_facebook.png" alt="" />
          </a>
          <a href="http://www.baidu.com" class="follow-image">
            <img src="../assets/ic_ins.png" alt="" />
          </a>
          <a href="http://www.baidu.com" class="follow-image">
            <img src="../assets/ic_whatsapp.png" alt="" />
          </a>
          <a href="http://www.baidu.com" class="follow-image">
            <img src="../assets/ic_g.png" alt="" />
          </a>
          <a
            href="http://www.baidu.com"
            class="follow-image"
            @mouseleave="mouseLeave('inFooterWechatIcon')"
            @mouseover="inFooterWechatIcon = true"
          >
            <img src="../assets/ic_wechat.png" alt="" class="wechat-img" />
            <wechat-popup
              target=".wechat-img"
              :inIcon="inFooterWechatIcon"
            ></wechat-popup>
          </a>
        </div>
        <div class="payment row col-2 justify-between">
          <a href="http://www.baidu.com" class="payment-item">
            <img src="../assets/icon_paypal.png" />
          </a>
          <a href="http://www.baidu.com" class="payment-item">
            <img src="../assets/icon_visa.png" />
          </a>
          <a href="http://www.baidu.com" class="payment-item">
            <img src="../assets/icon_jcb.png" />
          </a>
          <a href="http://www.baidu.com" class="payment-item">
            <img src="../assets/icon_wanshida.png" />
          </a>
          <a href="http://www.baidu.com" class="payment-item">
            <img src="../assets/icon_diners.png" />
          </a>
        </div>
      </div>
      <!-- copyright -->
      <div class="copyright q-py-lg">{{ $t('copyRight') }}</div>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import WechatPopup from '../components/WechatPopup'
export default {
  data() {
    return {
      langVisiable: false,
      selectedLang: 'United States',
      lang: 'United States',
      inPopUp: false,
      inIcon: false,
      inWechatIcon: false,
      inFooterWechatIcon: false,
      email: null,
      password: null,
      shopCarVisiable: false,
      drawerVisiable: false,
      productSubMenuVisiable: false,
      languageSubMenuVisiable: false,
      memberVisiable: false,
      overviewVisiable: false,
      helpVisiable: false,
      isLogIn: false
    }
  },
  components: {
    WechatPopup
  },
  computed: {
    ...mapGetters([
      'getCart',
      'getTotalPrice',
      'getProductPrice',
      'getIsLogIn'
    ]),
    popUpVisiable: {
      get: function() {
        return this.inIcon || this.inPopUp
      },
      set: function(newValue) {}
    }
  },

  methods: {
    ...mapMutations(['addCartNum', 'removeCartNum', 'signIn', 'signOut']),
    changeLanguage() {
      this.lang = this.selectedLang
      this.$i18n.locale = this.lang
      // send axios
    },
    mouseLeave(type) {
      switch (type) {
        case 'icon':
          setTimeout(() => {
            this.inIcon = false
          }, 600)
          break
        case 'inWechatIcon':
          setTimeout(() => {
            this.inWechatIcon = false
          }, 600)
          break
        case 'inFooterWechatIcon':
          setTimeout(() => {
            this.inFooterWechatIcon = false
          }, 600)
          break
        default:
          setTimeout(() => {
            this.inPopUp = false
          }, 600)
          break
      }
    },
    onSubmit() {},
    goTo(name, id) {
      this.$router.push({ name: name, params: { id } })
    }
    // signOrSet() {
    //   if (this.isLogIn) {
    //     this.goTo('user', '0')
    //   } else {
    //     this.goTo('sign', '')
    //   }
    // }
  },
  mounted() {
    // console.log(this.getCarts)
    this.$q.screen.setSizes({ sm: 599, md: 700, lg: 998, xl: 110 })
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
      height: 6rem;
      display: grid;
      grid-template-columns: 3fr 1fr;
      align-items: end;

      .header-left {
        display: flex;
        img {
          margin-right: 2rem;
          width: 6rem;
          height: 6rem;
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
          font-size: 1.8rem;
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
    padding: 5vw 15vw;
    .footer-menu {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      justify-content: center;
      .member {
        justify-self: flex-start;
        .member-title {
          padding-bottom: 10px;
        }
        .member-text {
          display: grid;
          grid-template-rows: 1fr 1fr;
          row-gap: 15px;
        }
      }
      .help {
        justify-self: flex-end;
        .help-title {
          padding-bottom: 10px;
        }
        .help-text {
          display: grid;
          grid-template-rows: 1fr 1fr;
          row-gap: 15px;
        }
      }
      .overview {
        .overview-title {
          padding-bottom: 10px;
        }
        .overview-text {
          display: grid;
          grid-template-rows: 1fr 1fr;
          row-gap: 15px;
        }
      }
    }
    .partners {
      .partners-item {
        overflow: hidden;
        img {
          height: 33px;
        }
      }
    }
    .contact {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      .follow-us {
        justify-self: flex-start;
        .iconfont {
          font-size: 1.5rem;
        }
        .follow-image {
          display: block;
          overflow: hidden;
          margin-right: 1.2rem;
          img {
            width: 26px;
            height: 26px;
          }
        }
      }
      .payment {
        justify-self: flex-end;

        .payment-item {
          display: block;
          overflow: hidden;
          margin-right: 1.2rem;
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
        // display: none;
      }
    }
  }
}

@media (max-width: 998px) {
  .q-layout {
    .q-footer {
      .footer-menu {
        display: flex;
        flex-direction: column;
        // grid-template-columns: 1fr;
        // grid-template-rows: repeat(3, 1fr);
        // justify-items: flex-start;
        .member {
          width: 100%;
          padding-bottom: 15px;
          cursor: pointer;
          .member-text {
          }
        }
        .overview {
          width: 100%;
          padding-bottom: 15px;
          cursor: pointer;
          .overview-text {
          }
        }
        .help {
          width: 100%;
          padding-bottom: 15px;
          // justify-self: flex-start;
          cursor: pointer;
          .help-text {
          }
        }
      }
      .partners {
        justify-content: flex-start;
        padding: 1rem 0;
      }
      .contact {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        justify-items: flex-start;
        align-content: center;
        .follow-us {
          justify-self: flex-start;
          align-self: center;
          margin-bottom: 10px;
        }
        .payment {
          justify-self: flex-start;
          align-self: center;
        }
      }
      .copyright {
        padding: 1rem 0;
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
    .q-footer {
      padding: 2rem;
      .footer-menu {
        .member {
          .member-title {
            div {
            }
          }
        }
      }
    }
  }
}

@media (max-width: 599px) {
  .q-layout {
    .q-header {
    }
    .q-page-container {
      .tool-btn-group {
        right: 7vw;
        bottom: 1vw;
        // display: none;
        .tool-btn {
          background-color: rgba($color: $grey-6, $alpha: 0.6);
          width: 2.6rem;
          height: 2.6rem;
          border-radius: 1.3rem;
          line-height: 2.6rem;
          .iconfont {
            font-size: 1.5rem;
          }
          // 选择从0到3的子节点
          &:nth-child(-n + 3) {
            display: none;
          }
        }
      }
    }
    .q-footer {
      .member {
        .member-title {
          div {
            font-size: 1.1rem;
            font-weight: 700;
          }
        }
      }
      .overview {
        .overview-title {
          div {
            font-size: 1.1rem;
            font-weight: 700;
          }
        }
      }
      .help {
        .help-title {
          div {
            font-size: 1.1rem;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
