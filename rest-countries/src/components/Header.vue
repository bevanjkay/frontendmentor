<template>
  <header class="header">
      <div class="inner">
          <router-link to="/" class="logo">Where in the World?</router-link>
          <a class="theme-toggle" @click="toggleDark">Dark Mode</a>
      </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toggleDark () {
      this.$emit('toggle-dark')
    }
  }
}
</script>

<style lang="scss" scoped>

.header {
    background: var(--elements);
    box-shadow: 0 0 10px rgba(black, 0.15);

    .inner {
        max-width: 1100px;
        margin: auto;
        display:flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        min-height: 4em;
    }

    .logo {
        font-size: 1.2em;
        font-weight: bold;
    }
}

</style>
