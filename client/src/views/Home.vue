<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  computed: {
    ...mapState(useCounterStore, ['products', 'totalPage'])
  },
  methods: {
    ...mapActions(useCounterStore, ['listProduct', 'addOrderDetail'])
  },
  created() {
    this.listProduct(this.$route.query.page)
  }
}
</script>

<template>
  <!-- {{ products }} -->
  <div class="container mt-5">
    <h2 class="mb-4">Product List</h2>
    <div class="row">
      <!-- Dummy data -->
      <div class="col-lg-4 col-md-6 mb-4" v-for="product in products" :key="product.id">
        <div class="card">
          <img
            style="height;: 100px"
            height="100px"
            object-fit="cover"
            :src="product.imageUrl"
            class="card-img-top img-fluid"
            alt="Whopper"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.productName }}</h5>
            <p class="card-text">
              {{ product.description }}
            </p>
            <p class="card-text">Price: {{ product.price }}</p>
            <button @click="addOrderDetail({ productId: product.id })" class="btn btn-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <nav>
    <ul class="pagination justify-content-center">
      <!-- Loop through pages with RouterLink -->
      <RouterLink
        @click="listProduct(page)"
        :to="`?page=${page}`"
        v-for="page in totalPage"
        :key="page"
        class="page-item"
      >
        <a class="page-link">{{ page }}</a>
      </RouterLink>
    </ul>
  </nav>
</template>

<!-- // tambahin h fotony, tambahin object-fit:cover -->
