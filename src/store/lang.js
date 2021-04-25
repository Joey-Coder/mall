export default {
  state: {
    lang: 'United States'
  },
  getters: {
    getLang(state) {
      return state.lang
    }
  },
  mutations: {
    changeLang(state, lang) {
      state.lang = lang
    }
  }
}
