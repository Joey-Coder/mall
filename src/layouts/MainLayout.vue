<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="row bg-white text-black items-center">
      <q-toolbar class="row justify-between items-center">
        <div class="toolbar-left col-4 row justify-between items-end">
          <q-avatar size="76px"> <img src="../assets/logo.png" /> </q-avatar>
          <div>Home</div>
          <div>Product</div>
          <div>About</div>
        </div>
        <div class="toolbar-right col-3 row justify-between items-end">
          <div>United States</div>
          <div><q-icon name="person_outline"></q-icon></div>
          <div><q-icon name="local_grocery_store"></q-icon></div>
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
    return {}
  }
}
</script>

<style scoped lang="scss">
.q-layout {
  .q-header {
    height: 128px;
    padding: 0 64px;
    .q-toolbar {
      .toolbar-left,
      .toolbar-right {
        height: 80px;
        font-size: 1.2rem;
        font-weight: bold;
        .q-icon {
          font-size: 2.5rem;
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
