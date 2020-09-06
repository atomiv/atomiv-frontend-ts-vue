<template>
  <div>
    <h1>Orders</h1>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('orders')

export default {
  name: 'Orders',

  created () {
    this.loadOrders()
  },

  computed: {
    ...mapState({
      orders: state => state.orders
    })
  },

  methods: {
    ...mapActions({
      loadOrders: 'load'
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
