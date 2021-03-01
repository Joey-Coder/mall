<template>
  <q-img
    :class="[className, 'lazy-img']"
    :src="defaultImg"
    :data-src="url"
    :data-srcset="`${url} 1x`"
    alt="fordeal"
    transition="scale"
    ref="lazyImgRef"
  />
</template>
<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {
    reload() {
      this.$refs.lazyImgRef.src = this.url
    }
  },
  components: {},
  props: {
    url: {
      type: String
    },
    defaultImg: {
      type: String,
      default: '/zzf.jpeg'
    },
    className: {
      type: String,
      default: ''
    }
  },
  created() {},
  mounted() {},
  computed: {},
  watched: {}
}
</script>
<style scoped lang="scss"></style>
