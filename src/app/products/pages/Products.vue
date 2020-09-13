<template>
  <div>
    <h1>Products</h1>
    <template v-if="products">
      <Table
        :value="productsList"
        :columns="columns"
        :sortData="sortData"
        @sort="sortBy" />
    </template>
  </div>
</template>

<script>
import sortMethods from '@/-common-/mixins/sortMethods'
import { createNamespacedHelpers } from 'vuex'

import Table from '@/-common-/components/Table'

const { mapState, mapActions } = createNamespacedHelpers('products')

export default {
  name: 'Products',

  components: {
    Table
  },

  mixins: [sortMethods],

  data () {
    return {
      columns: [
        { column: 'id', title: 'Id', sortable: true, size: 10 },
        { column: 'code', title: 'Code', sortable: true },
        { column: 'name', title: 'Product Name', sortable: true, size: 30 },
        { column: 'price', title: 'Price', sortable: true},
        { column: 'isListed', title: 'Listed', sortable: true},
        { column: 'action', title: 'Action', rowValue: 'Details', linkTo: id => {
          return { name: 'Products', params: { id } }
        }}
      ],

      sortData: {
        key: 'id',
        order: 'asc'
      }
    }
  },

  computed: {
    ...mapState({
      products: state => state.products
    }),

    productsList () {
      const list = this.products?.slice() || []
      return this.sort(list)
    }
  },

  created () {
    this.loadProducts()
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
</style>
