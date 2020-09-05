<template>
  <div id="app">
    <header id="nav">
    </header>
    <main id="main">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "@/-common-/assets/style/main";

#app {
  font-family: sans-serif;
  color: $font_color;

  #nav {
    width: 100%;
  }

  #main {
    width: 100%;
    max-width: 144rem;
    margin: 0 auto;
  }
}
</style>
