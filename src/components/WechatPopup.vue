<template>
  <q-popup-proxy
    no-parent-event
    :target="target"
    v-model="popUpVisiable"
    @mouseover="inPopUp = true"
    @mouseleave="mouseLeave('popup')"
    v-if="$q.screen.gt.xs"
  >
    <div style="width: 200px; height: 200px; background-color: #fff;">
      二维码
    </div>
  </q-popup-proxy>
</template>

<script>
export default {
  name: 'WechatPopup',
  data() {
    return {
      inPopUp: false
      //   inIcon: false
    }
  },
  methods: {
    mouseLeave(type) {
      if (type === 'icon') {
        setTimeout(() => {
          this.inIcon = false
        }, 600)
      } else {
        setTimeout(() => {
          this.inPopUp = false
        }, 600)
      }
    }
  },
  components: {},
  props: {
    inIcon: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      require: true
    }
  },
  created() {},
  mounted() {},
  computed: {
    popUpVisiable: {
      get: function() {
        return this.inIcon || this.inPopUp
      },
      set: function(newValue) {}
    }
  },
  watch: {}
}
</script>
<style scoped lang="less"></style>
