import Vue from 'vue'
import Vuex from 'vuex'

import cart from './cart.js'
import login from './login.js'
import lang from './lang.js'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      cart,
      login,
      lang
    }

    // enable strict mode (adds overhead!)
    // for dev mode only
    // strict: process.env.DEBUGGING
  })

  return Store
}
