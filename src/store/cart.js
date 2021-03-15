export default {
  state: {
    shoppingCart: [
      {
        id: '', // 购物车id
        productID: '1', // 商品id
        productName:
          'modelo de lichi de Color sólido bufanda bolsa hombroDiagonal bolso', // 商品名称
        productImg: '/bu1.jpg', // 商品图片
        Hprice: 25.5, // 商品价格
        Mprice: 25.0,
        Lprice: 24.5,
        num: 1, // 商品数量
        maxNum: 1000000 // 商品限购数量
      },
      {
        id: '', // 购物车id
        productID: '2', // 商品id
        productName:
          'modelo de lichi de Color sólido bufanda bolsa hombroDiagonal bolso', // 商品名称
        productImg: '/bu2.jpg', // 商品图片
        Hprice: 28.0, // 商品价格
        Mprice: 27.5,
        Lprice: 27.0,
        num: 3, // 商品数量
        maxNum: 1000000 // 商品限购数量
      },
      {
        id: '', // 购物车id
        productID: '3', // 商品id
        productName:
          'modelo de lichi de Color sólido bufanda bolsa hombroDiagonal bolso', // 商品名称
        productImg: '/bu3.jpg', // 商品图片
        Hprice: 28.0, // 商品价格
        Mprice: 27.5,
        Lprice: 27.0,
        num: 3, // 商品数量
        maxNum: 1000000 // 商品限购数量
      },
      {
        id: '', // 购物车id
        productID: '4', // 商品id
        productName:
          'modelo de lichi de Color sólido bufanda bolsa hombroDiagonal bolso', // 商品名称
        productImg: '/bu4.jpg', // 商品图片
        Hprice: 28.0, // 商品价格
        Mprice: 27.5,
        Lprice: 27.0,
        num: 3, // 商品数量
        maxNum: 1000000 // 商品限购数量
      },
      {
        id: '', // 购物车id
        productID: '5', // 商品id
        productName:
          'modelo de lichi de Color sólido bufanda bolsa hombroDiagonal bolso', // 商品名称
        productImg: '/bu5.jpg', // 商品图片
        Hprice: 28.0, // 商品价格
        Mprice: 27.5,
        Lprice: 27.0,
        num: 3, // 商品数量
        maxNum: 1000000 // 商品限购数量
      }
    ]
  },
  getters: {
    getCart(state) {
      return state.shoppingCart
    },
    getTotalPrice(state) {
      var totalPrice = 0
      for (let i = 0; i < state.shoppingCart.length; i++) {
        const temp = state.shoppingCart[i]
        if (temp.num > 0 && temp.num < 10) {
          totalPrice += temp.Hprice * temp.num
        } else if (temp.num <= 999) {
          totalPrice += temp.Mprice * temp.num
        } else {
          totalPrice += temp.Lprice * temp.num
        }
      }
      return totalPrice
    },
    // 通过让 getter 返回一个函数，来实现给 getter 传参
    getProductById: state => productID => {
      for (let i = 0; i < state.shoppingCart.length; i++) {
        if (
          state.shoppingCart[i].productID.toString() === productID.toString()
        ) {
          // console.log(state.shoppingCart[i])
          return state.shoppingCart[i]
        }
      }
    },
    // 通过让 getter 返回一个函数，来实现给 getter 传参
    getProductPrice: state => productID => {
      var totalPrice = 0
      for (let i = 0; i < state.shoppingCart.length; i++) {
        const temp = state.shoppingCart[i]
        if (temp.productID.toString() === productID.toString()) {
          if (temp.num > 0 && temp.num < 10) {
            totalPrice += temp.Hprice * temp.num
          } else if (temp.num <= 999) {
            totalPrice += temp.Mprice * temp.num
          } else {
            totalPrice += temp.Lprice * temp.num
          }
        }
      }
      // console.log(totalPrice)
      return totalPrice.toFixed(2)
    }
  },
  mutations: {
    addCartNum(state, productID) {
      // 增加购物车商品数量
      for (let i = 0; i < state.shoppingCart.length; i++) {
        const temp = state.shoppingCart[i]
        if (temp.productID.toString() === productID.toString()) {
          temp.num++
        }
      }
    },
    removeCartNum(state, productID) {
      // 增加购物车商品数量
      for (let i = 0; i < state.shoppingCart.length; i++) {
        const temp = state.shoppingCart[i]
        if (
          temp.productID.toString() === productID.toString() &&
          temp.num > 0
        ) {
          temp.num--
        }
      }
    },

    /**
     * 往购物车添加新商品
     * @param {*} state
     * @param {*} product
     */
    insertProduct(state, product) {
      state.shoppingCart.push(product)
    }
  }
}
