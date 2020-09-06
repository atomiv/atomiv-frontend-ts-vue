<template>
  <div>
    <h1>Products</h1>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('products')

export default {
  name: 'Products',

  created () {
    this.loadProducts()
  },

  computed: {
    ...mapState({
      products: state => state.products
    })
  },

  methods: {
    ...mapActions({
      loadProducts: 'load'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/-common-/assets/style/settings/_module-settings';

h1 {
  @include fontSizeRem(20, 40);
  text-align: center;
}
</style>
