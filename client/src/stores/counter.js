import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      url: 'http://localhost:3000',
      products: null,
      tableNo: '',
      orders: null,
      order: null
    }
  },
  actions: {
    async table() {
      try {
        console.log(this.tableNo, '<<< table no')
        const response = await axios({
          method: 'POST',
          url: this.url + '/tables',
          data: {
            tableNo: this.tableNo
          }
        })

        localStorage.setItem('orderId', response.data.orderId)
        localStorage.setItem('tableId', response.data.tableId)
        this.router.push('/')
      } catch (err) {
        console.log(err)
      }
    },
    async listProduct() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: this.url + '/products'
        })
        // console.log(data.data, '<<< ini data')
        this.products = data.data
      } catch (err) {
        console.log(err)
      }
    },
    async listOrderDetail() {
      try {
        const orderId = localStorage.getItem('orderId')
        const { data } = await axios({
          method: 'GET',
          url: this.url + '/orderdetails' + `/${orderId}`
        })

        this.orders = data.data
      } catch (err) {
        console.log(err)
      }
    },
    async addOrderDetail(payLoad) {
      try {
        const response = await axios({
          method: 'POST',
          url: this.url + '/orderdetails',
          data: {
            productId: payLoad.productId,
            orderId: localStorage.getItem('orderId'),
            tableId: localStorage.getItem('tableId')
          }
        })
        this.listOrderDetail()
        this.router.push('/order')
      } catch (err) {
        console.log(err)
      }
    },
    async removeItem(payLoad) {
      try {
        const response = await axios({
          method: 'POST',
          url: this.url + '/removecarts',
          data: {
            productId: payLoad.productId,
            orderId: localStorage.getItem('orderId'),
            tableId: localStorage.getItem('tableId')
          }
        })
        this.listOrderDetail()
        this.router.push('/order')
      } catch (err) {
        console.log(err)
      }
    },
    async listOrder() {
      try {
        const orderId = localStorage.getItem('orderId')
        const { data } = await axios({
          method: 'GET',
          url: this.url + '/orders' + `/${orderId}`
        })
        // console.log(data.order, '<<< ini data')
        this.order = data.order
        // this.router.push('/ordersummary')
      } catch (err) {
        console.log(err)
      }
    },
    async midTrans() {
      try {
        const orderId = localStorage.getItem('orderId')
        const { data } = await axios({
          method: 'POST',
          url: this.url + `/generate-midtrans-token/${orderId}`
        })
        this.router.push('/ordersummary')
      } catch (err) {
        console.log(err)
      }
    }
  }
})
