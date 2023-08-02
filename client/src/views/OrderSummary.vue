<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  computed: {
    ...mapState(useCounterStore, ['order'])
  },
  methods: {
    ...mapActions(useCounterStore, ['listOrder'])
  },
  created() {
    this.listOrder()
  }
}
</script>

<template>
  <!-- ORDER SUMMARY -->
  <div class="container mt-5">
    <h2 class="mb-4">Order Summary</h2>
    <!-- {{ order }} -->
    <div class="row">
      <div class="col-lg-6">
        <!-- Dummy order data -->
        <div class="card mb-3" v-for="ord in order.OrderDetails" :key="ord.id">
          <div class="card-header">
            <span class="float-right">Order Number: {{ order.orderNo }}</span>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">
                {{ ord.Product.productName }}
                <span class="float-right">Quantity: {{ ord.quantity }}</span>
              </li>
              <!-- Add more ordered items here -->
            </ul>
            <p class="card-text mt-2">Total: {{ ord.Product.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Total Price Card -->
    <div class="row">
      <div class="col-lg-6">
        <div class="card mb-3">
          <div class="card-header">Total Price</div>
          <div class="card-body">
            <h4 class="card-title" style="font-size: 1.25rem">Total: {{ order.grandTotal }}</h4>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Total Price Card -->
    <button class="btn btn-primary" onclick="confirmOrder()">PAY</button>
  </div>
</template>
