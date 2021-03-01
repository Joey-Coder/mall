<template>
  <q-img
    :class="['lazy', className, 'lazy-img']"
    :src="defaultImg"
    :data-src="url"
    :data-srcset="`${url} 1x`"
    alt="fordeal"
  />
</template>
<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
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
