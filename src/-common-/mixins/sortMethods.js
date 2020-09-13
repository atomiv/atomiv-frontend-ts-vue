export default {
  methods: {
    sort (list) {
      return list.sort((a, b) => {
        const order = this.sortData.order
        let acol = a[this.sortData.key]
        let bcol = b[this.sortData.key]
        if (typeof acol === 'string' && typeof bcol === 'string') {
          acol = acol.toLowerCase()
          bcol = bcol.toLowerCase()
        }
        let result = 0
        if (order === 'asc') {
          if (acol < bcol) result = -1
          if (acol > bcol) result = 1
        } else {
          if (acol < bcol) result = 1
          if (acol > bcol) result = -1
        }
        return result
      })
    },
    
    sortBy (column) {
      if (column === this.sortData.key) {
        this.sortData.order = (this.sortData.order === 'asc') ? 'desc' : 'asc'
      } else {
        this.sortData.key = column
        this.sortData.order = 'asc'
      }
    }
  }
}
