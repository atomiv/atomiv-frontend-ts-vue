<template>
  <div id="app">
    <Header />
    <main id="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from '@/-common-/components/Header'

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
    padding: 6rem 0 3rem;
    margin: 0 auto;
    @include breakpoint(desktop) {
      padding: 10rem 0 5rem;
    }

    h1 {
      @include fontSizeRem(20, 40);
      text-align: center;
      margin-bottom: 1rem;
      @include breakpoint(desktop) {
        margin-bottom: 2rem;
      }
    }
  }
}
</style>
