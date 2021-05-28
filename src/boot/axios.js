import Vue from 'vue'
import axios from 'axios'
import { getToken } from './auth.js'

const service = axios.create({
  // baseURL: 'http://8.135.102.77:8060/',
  baseURL: process.env.DEV ? 'api/' : 'http://8.135.102.77:8060/',
  headers: {
    get: {
      'content-Type': 'application/x-www-form-urlencoded;charset=utf-9'
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  },
  /**
   * 对响应状态码进行校验，一般除了200-300，304，其余都reject
   * 这里设置成所有状态码均resolve
   * @returns Boolern
   */
  validateStatus: function() {
    // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
    return true
  },
  timeout: 5000,
  // 格式化request
  transformRequest: [
    function(data) {
      data = JSON.stringify(data)
      return data
    }
  ],
  // 格式化response
  transformResponse: [
    function(data) {
      if (typeof data === 'string' && data.startsWith('{')) {
        data = JSON.parse(data)
      }
      return data
    }
  ]
})

// const showStatus = status => {
//   let message = ''
//   switch (status) {
//     case 400:
//       message = '请求错误'
//   }
// }

// 请求拦截器
service.interceptors.request.use(
  config => {
    config.headers.Authorization = getToken()
    return config
  },
  error => {
    error.data = {}
    error.data.message = '服务器异常, 请联系管理员'
    return Promise.resolve(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    error.data = {}
    if (!error.response) {
      error.data.message = '断网了'
    }
    if (error.message.includes('timeout')) {
      error.data.message = '超时'
    }
    return Promise.resolve(error)
  }
)

// api

/**
 * 获取手机验证码
 * @param {String|Number} phone
 */
export function getAuthCode(phoneInfo) {
  return service({
    method: 'get',
    url: '/user/getAuthCode',
    params: phoneInfo
  })
}

/**
 * 会员注册
 * @param {Object} userInfo
 * @returns
 */
export function register(userInfo) {
  return service({
    method: 'post',
    url: '/user/register',
    data: userInfo
  })
}

/**
 * 会员登录
 * @param {Object} userInfo
 * @returns Object
 */
export function login(userInfo) {
  return service({
    method: 'post',
    url: '/user/login',
    data: userInfo
  })
}

/**
 * 获取用户信息
 * @param {String} name
 * @returns Object
 */
export function getUserInfo(name) {
  return service({
    method: 'get',
    url: '/user/info',
    params: { name }
  })
}

/**
 * 重置密码
 * @param {Object} userInfo
 * @returns Object
 */
export function updatePassword(userInfo) {
  return service({
    method: 'post',
    url: '/user/updatePassword',
    data: userInfo
  })
}

/**
 * 获取已登录用户的购物车列表
 * @returns Object
 */
export function getCartList() {
  return service({
    method: 'get',
    url: '/cartItem/list'
  })
}

/**
 * 更新购物车商品数量
 * @param {Object} productInfo
 * @returns
 */
export function updateQuantity(productInfo) {
  return service({
    method: 'get',
    url: '/cartItem/update/quantity',
    params: productInfo
  })
}

/**
 * 往购物车添加商品
 * @param {Object} item
 * @returns Object
 */
export function addCartItem(item) {
  return service({
    method: 'post',
    url: '/cartItem/add',
    data: item
  })
}

/**
 * 删除购物车中的商品
 * @param {Object} productInfo
 * @returns Object
 */
export function deleteCartItem(ids) {
  return service({
    method: 'post',
    url: `/cartItem/delete?ids=${ids}`
    // data: productInfo,
  })
}

/**
 * 获取首页数据
 * @returns Object
 */
export function getHome() {
  return service({
    method: 'post',
    url: '/home/get'
  })
}

/**
 * 获取首页分类
 * @param {Number} pageSize
 * @param {Number} pageNum
 * @returns Object
 */
export function getCategory(pageSize, pageNum) {
  return service({
    method: 'get',
    url: '/productCategory/getList',
    params: {
      pageSize,
      pageNum
    }
  })
}

/**
 * 重置密码
 * @param {Object} updateForm
 */
export function changePassword(updateForm) {
  return service({
    method: 'post',
    url: '/user/updatePassword',
    data: updateForm
  })
}

/**
 * 根据id获取商品详情
 * @param {Number} id
 * @returns
 */
export function getProductDetail(id) {
  return service({
    method: 'get',
    url: '/product/detail',
    params: { id }
  })
}

Vue.prototype.$axios = axios
