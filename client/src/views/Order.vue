<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
import { RouterLink } from 'vue-router'
export default {
  computed: {
    ...mapState(useCounterStore, ['quantity', 'OrderId', 'ProductId', 'price', 'orders'])
  },
  methods: {
    ...mapActions(useCounterStore, ['addOrderDetail', 'listOrder', 'removeItem'])
    // handleAdd(data) {
    //   this.addOrderDetail(data)
    // }
  },
  created() {
    this.addOrderDetail()
    this.listOrder()
  }
  // watch: {
  //   orders(newOrder) {}
  // }
}
</script>

<template>
  <!-- ORDER -->
  <div class="container mt-5">
    <h2 class="mb-4">Order</h2>

    <RouterLink to="/">
      <button class="btn btn-primary" onclick="confirmOrder()">ADD MORE ITEM</button>
    </RouterLink>

    <br />
    <br />
    <div class="row" v-for="order in orders" :key="order.id">
      <div class="col-lg-6">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{{ order.Product.productName }}</h5>
            <p class="card-text">Price: {{ order.Product.price }}</p>
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  @click="removeItem({ productId: order.Product.id })"
                  class="btn btn-outline-secondary"
                  type="button"
                >
                  -
                </button>
              </div>
              <div>{{ order.quantity }}</div>
              <div class="input-group-append">
                <button
                  @click="addOrderDetail({ productId: order.Product.id })"
                  class="btn btn-outline-secondary"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-primary" onclick="confirmOrder()">Confirm Order</button>
  </div>
</template>
