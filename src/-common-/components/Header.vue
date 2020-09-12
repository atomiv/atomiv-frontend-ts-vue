<template>
  <header id="header">
    <div class="company-holder">
      <img />
      COMPANY NAME
    </div>

    <div
      class="nav-button"
      @click="navIsActive = !navIsActive">
      <div
        id="line-1"
        :class="{ 'is-active': navIsActive }" />
      <div
        id="line-2"
        :class="{ 'is-active': navIsActive }" />
      <div
        id="line-3"
        :class="{ 'is-active': navIsActive }" />
    </div>

    <nav
      id="nav"
      :class="{ 'is-active': navIsActive }">
      <router-link
        :to="{ name: 'Customers' }"
        class="nav-item">
        Customers
      </router-link>
      <router-link
        :to="{ name: 'Products' }"
        class="nav-item">
        Products
      </router-link>
      <router-link
        :to="{ name: 'Orders' }"
        class="nav-item">
        Orders
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data () {
    return {
      navIsActive: false
    }
  },

  watch: {
    '$route': {
      handler () {
        this.navIsActive = false
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/-common-/assets/style/settings/_module-settings';

#header {
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  background-color: $blue;
  color: $white;
  @include fontSizeRem(14, 20);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include breakpoint(desktop) {
    height: 6rem;
    padding: 0 2rem;
  }

  .company-holder {
    display: flex;
    align-items: center;

    img {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 1rem;
      border: 1px $white solid;
      border-radius: 50%;
      @include breakpoint(desktop) {
        width: 4rem;
        height: 4rem;
        margin-right: 2rem;
      }
    }
  }

  .nav-button {
    width: 2.4rem;
    cursor: pointer;
    transition: all .25s linear;
    @include breakpoint(desktop) {
      display: none;
    }
    
    #line-1,#line-2,#line-3 {
      width: 100%;
      background: $white;
      height: 2px;
      margin: 4px auto;
      transition: all .25s linear;
    }
    #line-1.is-active {
      width: 75%;
      transform: translate(5px, 6px) rotate(45deg);
    }
    #line-2.is-active {
      opacity: 0;
    }
    #line-3.is-active {
      width: 75%;
      transform: translate(5px, -6px) rotate(-45deg);
    }
  }
}

#nav {
  background-color: $blue;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 4rem;
  padding: 1rem;
  margin-left: -1rem;
  border-bottom-left-radius: 5px;
  transition: all .25s ease;
  transform: translateX(100%);
  will-change: transform;
  &.is-active {
    @include breakpoint(mobile) {
      transform: translateX(50%);
    }
  }
  @include breakpoint(desktop) {
    position: static;
    flex-direction: row;
    width: auto;
    padding: 0;
    border-bottom-left-radius: 0;
    transform: none;
  }

  .nav-item {
    padding: .5rem 0;
    margin-left: 1rem;
    @include breakpoint(desktop) {
      padding: 0;
      margin-left: 2rem;
    }
  }
}
</style>
