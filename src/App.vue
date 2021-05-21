<template>
  <div id="q-app">
    <keep-alive>
      <router-view v-if="isRouterAlive" :key="$route.fullPath" />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function() {
        this.isRouterAlive = true
      })
    }
  }
}
</script>
<style scoped lang="scss"></style>
