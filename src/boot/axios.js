import Vue from 'vue'
import axios from 'axios'

const service = axios.create({
  baseURL: 'http://8.135.102.77:8060/',
  headers: {
    get: {
      'content-Type': 'application/x-www-form-urlencoded;charset=utf-9'
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  },
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

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    error.data = {}
    error.data.msg = '服务器异常, 请联系管理员'
    return Promise.reject(error)
  }
)

Vue.prototype.$axios = axios
