<template>
  <q-page>
    <section class="left">
      <h4 class="title">My Account</h4>
      <q-list padding class="menu-list">
        <q-item
          clickable
          v-ripple
          @click="orderVisiable = true"
          :class="[orderVisiable ? 'active' : '']"
        >
          <q-item-section>
            My Orders
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          @click="orderVisiable = false"
          :class="[orderVisiable ? '' : 'active']"
        >
          <q-item-section>
            Account Setting
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>
            Sign Out
          </q-item-section>
        </q-item>
      </q-list>
    </section>

    <section class="right">
      <div class="order-wrapper" v-if="orderVisiable">
        <h4 class="title">My Orders</h4>
        <!-- <q-scroll-area horizontal visible class="scroll-wrapper"> -->
        <q-list bordered separator padding="flase" class="order-list">
          <q-item class="bg-grey-3">
            <q-item-section class="col-4">Order Information</q-item-section>
            <q-item-section class="col-2">Grand Total</q-item-section>
            <q-item-section class="col-3">Oreder Status</q-item-section>
            <q-item-section class="col-3 q-pr-xs">Create Time</q-item-section>
          </q-item>

          <q-item v-for="item in orderList" :key="item.id">
            <q-item-section class="col-4" style="word-break:break-all">{{
              item.id
            }}</q-item-section>
            <q-item-section class="col-2">${{ item.price }}</q-item-section>
            <q-item-section class="col-3">{{ item.status }}</q-item-section>
            <q-item-section class="col-3 q-pr-xs">{{ item.time }}</q-item-section>
          </q-item>
        </q-list>
        <!-- </q-scroll-area> -->
        <!-- 分页器 -->
        <div class="pagination row justify-center">
          <div class="row pagination-wrapper">
            <a
              href="javascript:void(0)"
              class="pre"
              @click="
                if (currentPage > 1) {
                  currentPage = currentPage - 1
                }
              "
            >
              <q-icon name="arrow_back_ios_new"> </q-icon>
              <span>Previous</span>
            </a>
            <a
              href="javascript:void(0)"
              :class="['page', i === currentPage ? 'active-page' : '']"
              v-for="i in pageRange"
              :key="i"
              @click="currentPage = i"
              >{{ i }}</a
            >
            <!-- <a href="" class="page">2</a> -->
            <a
              href="javascript:void(0)"
              class="next"
              @click="
                if (currentPage < maxPage) {
                  currentPage = currentPage + 1
                }
              "
              ><span>Next</span>
              <q-icon name="arrow_forward_ios"></q-icon>
            </a>
          </div>
        </div>
      </div>
      <div class="account-wrapper" v-else>
        <h4 class="title">Account Setting</h4>
        <q-separator class="q-my-md" />
        <div class="form-wrapper">
          <p>Change your password</p>
          <q-form @submit="onSubmit" class="q-gutter-md">
            <q-input
              outlined
              v-model="password"
              label="Existing Password"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
            />

            <q-input
              outlined
              v-model="newPassword"
              label="New Password"
              lazy-rules
              :rules="[
                val => (val && val.length > 0) || 'Please type something'
              ]"
            />
            <q-input
              outlined
              v-model="confirmPw"
              label="Re-Enter Password"
              lazy-rules
              :rules="[
                val =>
                  (val && val.length === newPassword) ||
                  'Please type same password'
              ]"
            />

            <div>
              <q-btn
                label="Save"
                unelevated
                type="submit"
                color="red-6"
                style="width: 30%"
              />
            </div>
          </q-form>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      orderVisiable: true,
      currentPage: 1,
      maxPage: 10,
      showPage: 4,
      orderList: [
        {
          id: '108912093814293847',
          price: 54.99,
          status: 'Waiting for payment',
          time: '2021/2/2 18:00:00'
        },
        {
          id: '108912093814293848',
          price: 54.99,
          status: 'Waiting for payment',
          time: '2021/2/2 18:00:00'
        },
        {
          id: '108912093810993849',
          price: 54.99,
          status: 'Waiting for payment',
          time: '2021/2/2 18:00:00'
        },
        {
          id: '108912093814292849',
          price: 54.99,
          status: 'Waiting for payment',
          time: '2021/2/2 18:00:00'
        },
        {
          id: '108912093814493849',
          price: 54.99,
          status: 'Waiting for payment',
          time: '2021/2/2 18:00:00'
        },
        {
          id: '108912093814293232',
          price: 54.99,
          status: 'Waiting for payment',
          time: '2021/2/2 18:00:00'
        },
        {
          id: '108922093814293232',
          price: 54.99,
          status: 'Waiting for payment',
          time: '2021/2/2 18:00:00'
        },
        {
          id: '108922093814793232',
          price: 54.99,
          status: 'Waiting for payment',
          time: '2021/2/2 18:00:00'
        },
        {
          id: '106922093814293232',
          price: 54.99,
          status: 'Waiting for payment',
          time: '2021/2/2 18:00:00'
        },
        {
          id: '808912093814293232',
          price: 54.99,
          status: 'Waiting for payment',
          time: '2021/2/2 18:00:00'
        }
      ],
      password: null,
      newPassword: null,
      confirmPw: null
    }
  },
  methods: {
    onSubmit() {}
  },
  components: {},
  props: {},
  created() {},
  mounted() {},
  computed: {
    pageRange: function() {
      var rangeArr = []
      var start = this.currentPage - this.showPage / 2
      if (start < 1) {
        start = 1
      }
      var end = this.currentPage + this.showPage / 2
      if (end > this.maxPage) {
        end = this.maxPage
      }
      for (let i = start; i <= end; i++) {
        rangeArr.push(i)
      }
      return rangeArr
    }
  },
  watched: {}
}
</script>
<style scoped lang="scss">
.q-page {
  display: grid;
  grid-template-columns: 1fr 4fr;
  column-gap: 2vw;
  padding: 5vw 15vw;
  .left {
    border: 1px solid $grey-4;
    background-color: $grey-2;
    padding: 2vw 1vw;
    .title {
      padding-left: 1rem;
      font-size: 1.5rem;
    }
    .menu-list {
      margin-top: 1rem;
      .q-item {
        ::v-deep .q-item__section {
          color: $grey-6;
        }
      }
      .active {
        background-color: $grey-5;
        ::v-deep .q-item__section {
          color: white;
        }
      }
    }
  }
  .right {
    padding: 2vw 1vw;
    .title {
      font-size: 1.5rem;
    }
    .order-wrapper {
      display: grid;
      grid-template-rows: auto 6fr 1fr;
      .title {
        margin-bottom: 1.5rem;
      }
      .scroll-wrapper {
        height: 100% !important;
        ::v-deep .full-height {
          width: 100%;
          border-bottom: 1px solid $grey-4;
          .order-list {
            // margin: 1.5rem 0;
          }
        }
      }
      .pagination {
        padding: 2rem 0;
        .pagination-wrapper {
          //   width: 30%;
          height: 2rem;
          a {
            display: block;
            // width: 2rem;
            // padding: 0 12px;
            height: 100%;
            line-height: 2rem;
            text-align: center;
            margin-left: 10px;
            border-radius: 4px;
            background-color: white;
            border: $grey-5 1px solid;
            color: $dark;
          }
          .next,
          .pre {
            display: flex;
            align-items: center;
            padding: 0 12px;
          }
          .page {
            width: 2rem;
          }
          .active-page {
            background-color: $dark;
            color: #fff;
          }
        }
      }
    }
    .account-wrapper {
      .form-wrapper {
        display: grid;
        grid-template-columns: 1fr 3fr;
        padding-top: 5px;
        p {
          color: $grey-8;
        }
        .q-form {
          width: 80%;
        }
      }
    }
  }
}
@media (max-width: 1280px) {
  .q-page {
    padding: 5vw 10vw;
  }
}

@media (max-width: 1100px) {
  .q-page {
    padding: 5vw;
    .right {
      .order-wrapper {
        .scroll-wrapper {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

@media (max-width: 998px) {
  .q-page {
    padding: 5vw;
    grid-template-columns: 1fr;
    .left {
      display: flex;
      padding: 0;
      justify-content: center;
      .title {
        display: none;
      }
      .menu-list {
        display: flex;
        margin-top: 0;
      }
    }
    .right {
      .order-wrapper {
        // display: grid;
        // grid-template-rows: auto 5fr 1fr;
        .scroll-wrapper {
          width: 100%;
          height: 500px;
          ::v-deep .full-height {
            width: 100%;
            .order-list {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .account-wrapper {
        .form-wrapper {
          grid-template-columns: 1fr;
        }
      }
    }
  }
}

@media (max-width: 700px) {
  .q-page {
    padding: 1vw;
    .right {
      .order-wrapper {
        .scroll-wrapper {
          width: 100%;
          height: 500px;
          ::v-deep .full-height {
            width: 100%;
            .order-list {
              //   min-width: 650px;
              width: 100%;
              height: 100%;
            }
          }
        }
        .pagination {
          .pagination-wrapper {
            .pre,
            .next {
              span {
                display: none;
              }
            }
          }
        }
      }
      .account-wrapper {
        .form-wrapper {
          margin-bottom: 5rem;
          .q-form {
            width: 90%;
          }
        }
      }
    }
  }
}

@media (max-width: 599px) {
  .q-page {
    .right {
      .account-wrapper {
        .form-wrapper {
          .q-form {
            width: 95%;
          }
        }
      }
    }
  }
}
</style>
