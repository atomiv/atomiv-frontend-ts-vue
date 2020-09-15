<template>
  <div>
    <h1>Orders</h1>
    <template v-if="ordersList">
      <Table
        :value="ordersList"
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

const { mapState: mapOrdersState, mapActions: mapOrdersActions } = createNamespacedHelpers('orders')
const { mapState: mapCustomersState, mapActions: mapCustomersActions } = createNamespacedHelpers('customers')

export default {
  name: 'Orders',

  components: {
    Table
  },

  mixins: [sortMethods],

  data () {
    return {
      columns: [
        { column: 'id', title: 'Id', sortable: true, size: 10 },
        { column: 'customerId', title: 'Customer Id', sortable: true },
        { column: 'customerName', title: 'Customer Name', sortable: true, size: 30 },
        { column: 'action', title: 'Action', rowValue: 'View Order', linkTo: id => {
          return { name: 'Orders', params: { id } }
        }}
      ],

      sortData: {
        key: 'id',
        order: 'asc'
      }
    }
  },

  computed: {
    ...mapOrdersState({
      orders: state => state.orders
    }),

    ...mapCustomersState({
      customers: state => state.customers
    }),

    ordersList () {
      let list = this.orders?.slice() || []
      if (list.length && this.customers?.length) {
        list = list.map(item => {
          const customerFound = this.customers.find(customer => customer.id === item.customerId)
          item.customerName = `${customerFound.firstName} ${customerFound.lastName}`
          return item
        })
      }
      return this.sort(list)
    }
  },

  created () {
    this.loadOrders()
    this.loadCustomers()
  },

  methods: {
    ...mapOrdersActions({
      loadOrders: 'load'
    }),

    ...mapCustomersActions({
      loadCustomers: 'load'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/-common-/assets/style/settings/_module-settings';
</style>
