<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>
<script>
export default {
  provide() {
    return {
      reload: this.reload,
    }
  },
  data() {
    return {
      isRouterAlive: true,
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = true;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      })
    }
  }
}
</script>
<style>
#app {
  background-color: #f5f5f5;
}
</style>
