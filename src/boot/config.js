// import something here
// import '../assets/iconfont.css'
import Vue from 'vue'

import vueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(vueSmoothScroll)

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async (/* { app, router, Vue ... } */) => {
  // something to do
  // 定义回到顶部的指令
  Vue.directive('to-top', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: el => {
      // console.log(el);
      var topBarEl = document.querySelector('#top-bar')
      // const header = document.querySelector('.q-header')
      // console.log(topBarEl)
      window.addEventListener('scroll', () => {
        const sTop =
          document.body.scrollTop || document.documentElement.scrollTop
        if (sTop > 600) {
          topBarEl.style.display = 'block'
        } else {
          topBarEl.style.display = 'none'
        }
      })
    }
  })
}
