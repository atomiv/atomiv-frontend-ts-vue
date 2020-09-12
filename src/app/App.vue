<template>
  <div id="app">
    <Header />
    <main id="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from '../-common-/components/Header'

export default {
  name: 'App',

  components: {
    Header
  }
}
</script>

<style lang="scss">
@import "@/-common-/assets/style/main";

#app {
  font-family: sans-serif;
  color: $font_color;

  #main {
    width: 100%;
    max-width: 144rem;
    padding: 5rem 0 3rem;
    margin: 0 auto;
    @include breakpoint(desktop) {
      padding: 8rem 0 4rem;
    }
  }
}
</style>
