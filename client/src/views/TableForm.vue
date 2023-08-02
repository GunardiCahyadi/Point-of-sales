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
          <RouterLink to="/qrcode">
            <button type="submit" class="btn btn-primary btn-block">Submit</button>
          </RouterLink>
        </form>
      </div>
    </div>
  </div>
</template>
