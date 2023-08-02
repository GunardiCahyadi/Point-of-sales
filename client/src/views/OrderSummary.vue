<script></script>

<template>
  <!-- ORDER SUMMARY -->
  <div class="container mt-5">
    <h2 class="mb-4">Order Summary</h2>
    <div class="row">
      <div class="col-lg-6">
        <!-- Dummy order data -->
        <div class="card mb-3">
          <div class="card-header">
            Jumlah Pax: 4
            <span class="float-right">Order Number: 12345</span>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">Whopper <span class="float-right">Quantity: 2</span></li>
              <!-- Add more ordered items here -->
            </ul>
            <p class="card-text mt-2">Total: 20.000</p>
          </div>
        </div>
        <!-- Add more order cards here -->
        <!-- Dummy order data -->
        <div class="card mb-3">
          <div class="card-header">
            Jumlah Pax: 2
            <span class="float-right">Order Number: 56789</span>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">
                Chicken Sandwich <span class="float-right">Quantity: 3</span>
              </li>
              <!-- Add more ordered items here -->
            </ul>
            <p class="card-text mt-2">Total: 30.000</p>
          </div>
        </div>
        <!-- Add more order cards here -->
      </div>
    </div>
    <!-- Total Price Card -->
    <div class="row">
      <div class="col-lg-6">
        <div class="card mb-3">
          <div class="card-header">Total Price</div>
          <div class="card-body">
            <h4 class="card-title" style="font-size: 1.25rem">Total: 50.000</h4>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Total Price Card -->
    <button class="btn btn-primary" onclick="confirmOrder()">PAY</button>
  </div>
</template>
