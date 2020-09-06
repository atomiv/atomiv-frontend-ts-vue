<template>
  <div>
    <h1>Customers</h1>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('customers')

export default {
  name: 'Customers',

  created () {
    this.loadCustomers()
  },

  computed: {
    ...mapState({
      customers: state => state.customers
    })
  },

  methods: {
    ...mapActions({
      loadCustomers: 'load'
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
