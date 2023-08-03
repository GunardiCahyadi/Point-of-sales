<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'
import { RouterLink } from 'vue-router'
export default {
  computed: {
    ...mapWritableState(useCounterStore, ['tableNo'])
  },
  methods: {
    ...mapActions(useCounterStore, ['table'])
  },
  components: { RouterLink }
}
</script>

<template>
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-10 col-sm-8 col-md-6">
        <div class="burger-k row justify-content-center">
          <img
            style="width: 350px; height: 400px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png"
            alt="logo-BK"
          />
        </div>
        <form @submit.prevent="table" class="m-3">
          <div class="form-group">
            <label for="exampleInputEmail1">No Table:</label>
            <input
              v-model="tableNo"
              type="number"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Table Number"
            />
          </div>
          <button type="submit" class="btn btn-primary btn-block">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<!-- <style scoped>
.burger-k {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: -30px;
}
</style> -->
