<template>
  <div id="app">
    <Header @toggle-dark="toggleDark" />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },
  methods: {
    toggleDark () {
      document.querySelector('#app').classList.toggle('dark')
    }
  }
}
</script>

<style lang="scss">
  #app {
    background: var(--background);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transition: opacity 2s;
  }
</style>
