export default {
  state: {
    shoppingCart: [
      {
        id: '', // 购物车id
        productID: '1', // 商品id
        productName:
          'modelo de lichi de Color sólido bufanda bolsa hombroDiagonal bolso', // 商品名称
        productImg: '', // 商品图片
        price: '25.50', // 商品价格
        num: '1', // 商品数量
        maxNum: '100' // 商品限购数量
      },
      {
        id: '', // 购物车id
        productID: '2', // 商品id
        productName:
          'modelo de lichi de Color sólido bufanda bolsa hombroDiagonal bolso', // 商品名称
        productImg: '', // 商品图片
        price: '28.00', // 商品价格
        num: '3', // 商品数量
        maxNum: '100' // 商品限购数量
      },
      {
        id: '', // 购物车id
        productID: '3', // 商品id
        productName:
          'modelo de lichi de Color sólido bufanda bolsa hombroDiagonal bolso', // 商品名称
        productImg: '', // 商品图片
        price: '28.00', // 商品价格
        num: '3', // 商品数量
        maxNum: '100' // 商品限购数量
      },
      {
        id: '', // 购物车id
        productID: '4', // 商品id
        productName:
          'modelo de lichi de Color sólido bufanda bolsa hombroDiagonal bolso', // 商品名称
        productImg: '', // 商品图片
        price: '28.00', // 商品价格
        num: '3', // 商品数量
        maxNum: '100' // 商品限购数量
      },
      {
        id: '', // 购物车id
        productID: '5', // 商品id
        productName:
          'modelo de lichi de Color sólido bufanda bolsa hombroDiagonal bolso', // 商品名称
        productImg: '', // 商品图片
        price: '28.00', // 商品价格
        num: '3', // 商品数量
        maxNum: '100' // 商品限购数量
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
        totalPrice += temp.price * temp.num
      }
      return totalPrice
    }
  },
  mutations: {
    addCartNum(state, productID) {
      // 增加购物车商品数量
      for (let i = 0; i < state.shoppingCart.length; i++) {
        const temp = state.shoppingCart[i]
        if (temp.productID === productID) {
          temp.num++
        }
      }
    },
    removeCartNum(state, productID) {
      // 增加购物车商品数量
      for (let i = 0; i < state.shoppingCart.length; i++) {
        const temp = state.shoppingCart[i]
        if (temp.productID === productID && temp.num > 0) {
          temp.num--
        }
      }
    }
  }
}
