import { removeToken, getToken } from '../boot/auth'
export default {
  state: {
    isLogIn: !!getToken()
  },
  getters: {
    getIsLogIn(state) {
      return state.isLogIn
    }
  },
  mutations: {
    signIn(state) {
      state.isLogIn = true
    },
    signOut(state) {
      removeToken()
      state.isLogIn = false
    }
  }
}
