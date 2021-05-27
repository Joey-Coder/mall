export default class LazyImage {
  constructor(selector) {
    // 懒记载图片列表，将伪数组转为数组，以便可以使用数组的api
    this.imageElements = Array.prototype.slice.call(
      document.querySelectorAll(selector)
    )
    // console.log(this.imageElements)
    this.init()
  }

  setQImg(ele) {
    const style = ele.children[1].style
    style.setProperty('background-image', `url(${ele.dataset.src})`)
    style.setProperty('background-size', 'cover')
    style.setProperty('background-position', '50% 50%')
  }

  setImg(ele) {
    ele.src = ele.dataset.src
  }

  inViewShow() {
    var len = this.imageElements.length
    for (let i = 0; i < len; i++) {
      const imageElement = this.imageElements[i]
      const rect = imageElement.getBoundingClientRect()
      // 出现在视野的时候加载图片
      if (rect.top < document.documentElement.clientHeight) {
        if (imageElement.className.includes('q-img')) this.setQImg(imageElement)
        else this.setImg(imageElement)
        // imageElement.src = imageElement.dataset.src

        // console.log('before:', imageElement.children[1].style.backgroundImage)

        // imageElement.children[1].setAttribute(
        //   'style',
        //   `background-size: cover; background-position: 50% 50%; background-image: url(${imageElement.dataset.src})");`
        // )
        // console.log('after:', imageElement.children[1].style.backgroundImage)
        // 移除掉已经显示的
        this.imageElements.splice(i, 1)
        len--
        i--
        if (this.imageElements.length === 0) {
          // 如果全部都加载完 则去掉滚动事件监听
          document.removeEventListener('scroll', this._throttleFn)
        }
      }
    }
  }

  throttle(fn, delay = 15, mustRun = 30) {
    var tStart = null
    var timer = null
    const context = this
    return function() {
      const tCurrent = +new Date()
      const args = Array.prototype.slice.call(arguments)
      clearTimeout(timer)
      if (!tStart) {
        tStart = tCurrent
      }
      if (tCurrent - tStart > mustRun) {
        fn.apply(context, args)
        tStart = tCurrent
      } else {
        timer = setTimeout(() => {
          fn.apply(context, args)
        }, delay)
      }
    }
  }

  init() {
    // 通过IntersectionObserver api判断图片是否出现在可视区域内，不需要监听Scroll来判断
    // if ('IntersectionObserver' in window) {
    //   const lazyImageObserver = new IntersectionObserver(
    //     (entries, observer) => {
    //       entries.forEach((entry, index) => {
    //         // 如果元素可见
    //         if (entry.isIntersecting) {
    //           const lazyImage = entry.target
    //           lazyImage.src = lazyImage.dataset.src
    //           lazyImage.classList.remove('lazyImage')
    //           lazyImageObserver.unobserve(lazyImage)
    //           // this.lazyImages.splice(index, 1)
    //         }
    //       })
    //     }
    //   )
    //   this.imageElements.forEach(function(lazyImage) {
    //     lazyImageObserver.observe(lazyImage)
    //   })
    // } else {
    this.inViewShow()
    this._throttleFn = this.throttle(this.inViewShow)
    document.addEventListener('scroll', this._throttleFn.bind(this))
    // }
  }
}
