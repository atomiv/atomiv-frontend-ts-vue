<template>
  <div>
    <h1>Customers</h1>
    <template v-if="customersList">
      <Table
        :value="customersList"
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

const { mapState, mapActions } = createNamespacedHelpers('customers')

export default {
  name: 'Customers',

  components: {
    Table
  },

  mixins: [sortMethods],

  data () {
    return {
      columns: [
        { column: 'id', title: 'Id', sortable: true, size: 10 },
        { column: 'firstName', title: 'First Name', sortable: true, size: 25 },
        { column: 'lastName', title: 'Last Name', sortable: true, size: 30 },
        { column: 'orders', title: 'Orders', rowValue: 'View Orders', linkTo: id => {
          return { name: 'Customers', params: { id } }
        }},
        { column: 'action', title: 'Action', rowValue: 'Details', linkTo: id => {
          return { name: 'Customers', params: { id } }
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
      customers: state => state.customers
    }),

    customersList () {
      const list = this.customers?.slice() || []
      return this.sort(list)
    }
  },

  created () {
    this.loadCustomers()
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
</style>
