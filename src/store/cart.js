// import { state } from 'src/boot/country'
import {
  getCartList,
  updateQuantity,
  addCartItem,
  deleteCartItem
} from '../boot/axios'
import { Notify } from 'quasar'
export default {
  state: {
    shoppingCart: []
    // shoppingCart: [
    //   {
    //     id: '', // 购物车id
    //     productId: '1', // 商品id
    //     productName:
    //       'modelo de lichi de Color sólido bufanda bolsa hombroDiagonal bolso', // 商品名称
    //     productPic: '/bu1.jpg', // 商品图片
    //     Hprice: 25.5, // 商品价格
    //     Mprice: 25.0,
    //     Lprice: 24.5,
    //     quantity: 1, // 商品数量
    //     maxquantity: 1000000 // 商品限购数量
    //   },
    //   {
    //     id: '', // 购物车id
    //     productId: '2', // 商品id
    //     productName:
    //       'modelo de lichi de Color sólido bufanda bolsa hombroDiagonal bolso', // 商品名称
    //     productPic: '/bu2.jpg', // 商品图片
    //     Hprice: 28.0, // 商品价格
    //     Mprice: 27.5,
    //     Lprice: 27.0,
    //     quantity: 3, // 商品数量
    //     maxquantity: 1000000 // 商品限购数量
    //   },
    //   {
    //     id: '', // 购物车id
    //     productId: '3', // 商品id
    //     productName:
    //       'modelo de lichi de Color sólido bufanda bolsa hombroDiagonal bolso', // 商品名称
    //     productPic: '/bu3.jpg', // 商品图片
    //     Hprice: 28.0, // 商品价格
    //     Mprice: 27.5,
    //     Lprice: 27.0,
    //     quantity: 3, // 商品数量
    //     maxquantity: 1000000 // 商品限购数量
    //   },
    //   {
    //     id: '', // 购物车id
    //     productId: '4', // 商品id
    //     productName:
    //       'modelo de lichi de Color sólido bufanda bolsa hombroDiagonal bolso', // 商品名称
    //     productPic: '/bu4.jpg', // 商品图片
    //     Hprice: 28.0, // 商品价格
    //     Mprice: 27.5,
    //     Lprice: 27.0,
    //     quantity: 3, // 商品数量
    //     maxquantity: 1000000 // 商品限购数量
    //   },
    //   {
    //     id: '', // 购物车id
    //     productId: '5', // 商品id
    //     productName:
    //       'modelo de lichi de Color sólido bufanda bolsa hombroDiagonal bolso', // 商品名称
    //     productPic: '/bu5.jpg', // 商品图片
    //     Hprice: 28.0, // 商品价格
    //     Mprice: 27.5,
    //     Lprice: 27.0,
    //     quantity: 3, // 商品数量
    //     maxquantity: 1000000 // 商品限购数量
    //   }
    // ]
  },
  getters: {
    getCart(state) {
      return state.shoppingCart
    },
    getTotalPrice(state) {
      var totalPrice = 0
      for (let i = 0; i < state.shoppingCart.length; i++) {
        const temp = state.shoppingCart[i]
        if (temp.quantity > 0 && temp.quantity <= 10) {
          totalPrice += temp.Hprice * temp.quantity
        } else if (temp.quantity <= 999) {
          totalPrice += temp.Mprice * temp.quantity
        } else {
          totalPrice += temp.Lprice * temp.quantity
        }
      }
      return totalPrice
    },
    // 通过让 getter 返回一个函数，来实现给 getter 传参
    /**
     *
     * @param {string} productId
     * @returns
     * 根据id返回对应的购物车商品
     */
    getProductById: state => productId => {
      for (let i = 0; i < state.shoppingCart.length; i++) {
        if (
          state.shoppingCart[i].productId.toString() === productId.toString()
        ) {
          // console.log(state.shoppingCart[i])
          return state.shoppingCart[i]
        }
      }
    },
    // 通过让 getter 返回一个函数，来实现给 getter 传参
    getProductPrice: state =>
      function(productId) {
        var totalPrice = 0
        for (let i = 0; i < state.shoppingCart.length; i++) {
          const temp = state.shoppingCart[i]
          if (temp.productId.toString() === productId.toString()) {
            // console.log(productId)
            if (temp.quantity > 0 && temp.quantity <= 10) {
              totalPrice += temp.Hprice * temp.quantity
            } else if (temp.quantity <= 999) {
              totalPrice += temp.Mprice * temp.quantity
            } else {
              totalPrice += temp.Lprice * temp.quantity
            }
          }
        }
        // console.log(totalPrice)
        this.$store.commit('changePriceById', {
          productId: productId,
          price: totalPrice.toFixed(2)
        })
        // console.log(this.$store)
        return totalPrice.toFixed(2)
      }
  },
  mutations: {
    changePriceById(state, payload) {
      const index = state.shoppingCart.findIndex(
        item => item.productId.toString() === payload.productId.toString()
      )
      if (index !== -1) {
        // console.log('index:', index, '| price:', payload.price)
        state.shoppingCart[index].price = payload.price
      }
    },
    addCartQuantity(state, id) {
      // 增加购物车商品数量
      for (let i = 0; i < state.shoppingCart.length; i++) {
        const temp = state.shoppingCart[i]
        if (temp.id.toString() === id.toString()) {
          temp.quantity++
        }
      }
    },
    removeCartQuantity(state, id) {
      // 减少购物车商品数量
      for (let i = 0; i < state.shoppingCart.length; i++) {
        const temp = state.shoppingCart[i]
        if (temp.id.toString() === id.toString() && temp.quantity > 0) {
          temp.quantity--
          if (temp.quantity === 0) {
            // debugger
            // const list = state.shoppingCart.map(product => {
            //   if (product.id.toString() !== id.toString()) {
            //     return product
            //   }
            // })
            const index = state.shoppingCart.findIndex(
              product => product.id.toString() === id.toString()
            )
            state.shoppingCart.splice(index, 1)
            // this.$store.commit('setCartList', list)
          }
          break
        }
      }
    },
    setCartList(state, cardList) {
      state.shoppingCart = cardList
    },

    /**
     * 往购物车添加新商品
     * @param {*} state
     * @param {*} product
     */
    insertProduct(state, product) {
      state.shoppingCart.push(product)
    }
  },
  actions: {
    async getCartList({ commit }) {
      const { data, code, message } = await getCartList()
      if (code === 200) {
        console.log(data)
        commit('setCartList', data)
      } else {
        Notify.create({
          type: 'danger',
          message: message
        })
      }
    },
    async addCartQuantity({ commit }, productInfo) {
      if (productInfo.quantity < 0) return
      const { code, message } = await updateQuantity(productInfo)
      if (code === 200) {
        commit('addCartQuantity', productInfo.id)
      } else {
        Notify.create({
          type: 'danger',
          message: message
        })
      }
    },
    async removeCartQuantity({ commit }, productInfo) {
      // debugger
      if (productInfo.quantity < 0) return
      if (productInfo.quantity === 0) {
        const { code, message } = await deleteCartItem(productInfo.id)
        if (code === 200) {
          commit('removeCartQuantity', productInfo.id)
        } else {
          Notify.create({
            type: 'danger',
            message: message
          })
        }
      } else {
        const { code, message } = await updateQuantity(productInfo)
        if (code === 200) {
          commit('removeCartQuantity', productInfo.id)
        } else {
          Notify.create({
            type: 'danger',
            message: message
          })
        }
      }
    },
    async insertProduct({ commit }, item) {
      const { code, data } = await addCartItem(item)
      if (code === 200) {
        commit('insertProduct', item)
      } else {
        Notify.create({
          type: 'danger',
          message: data.message
        })
      }
    }
  }
}
