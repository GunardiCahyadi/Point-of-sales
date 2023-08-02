<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  computed: {
    ...mapState(useCounterStore, ['qrCode'])
  },
  methods: {
    ...mapActions(useCounterStore, ['listProduct'])
  },
  created() {
    this.listProduct()
  }
}
</script>

<template>
  <!-- {{ qrCode }} -->
  <BR></BR>
  <h4 style="text-align: center">SCAN QR BERIKUT UNTUK MEMBUKA MENU</h4>
  <div style="display: flex; justify-content: center">
    <span v-html="qrCode" style="display: inline-block; width: 350px; height: 100px"></span>
  </div>
</template>
