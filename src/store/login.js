export default {
  state: {
    isLogIn: false
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
      state.isLogIn = false
    }
  }
}
