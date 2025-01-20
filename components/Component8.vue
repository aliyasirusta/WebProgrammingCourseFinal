<template>
  <div class="cart-container">
    <h1 class="cart-title">Sepetim</h1>
    <div v-if="isCartEmpty" class="empty-cart-message">Sepetiniz boş.</div>
    <div v-else>
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="item.image" alt="Ürün Resmi" class="cart-item-image" />
        <div class="cart-item-details">
          <h3 class="cart-item-name">{{ item.name }}</h3>
          <p class="cart-item-price">{{ item.price }} x {{ item.quantity }}</p>
          <div class="quantity-controls">
            <button @click="increment(item.id)" class="quantity-btn">+</button>
            <button @click="decrement(item.id)" class="quantity-btn">-</button>
          </div>
          <button @click="remove(item.id)" class="remove-btn">Kaldır</button>
        </div>
      </div>
      <div class="cart-summary">
        <div class="cart-total">
          <h2>Toplam: <span class="total-price">{{ cartTotal }} TL</span></h2>
        </div>
        <div class="checkout-buttons">
          <button class="checkout-btn">Ödeme</button>
          <button class="continue-shopping-btn">Alışverişe Devam Et</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();

// Store'dan reaktif veriler
const cart = cartStore.cart;
const cartTotal = cartStore.cartTotal;
const isCartEmpty = cartStore.isCartEmpty;

// Miktar artırma
function increment(productId) {
  cartStore.incrementQuantity(productId);
}

// Miktar azaltma
function decrement(productId) {
  cartStore.decrementQuantity(productId);
}

// Ürün kaldırma
function remove(productId) {
  cartStore.removeFromCart(productId);
}
</script>

<style scoped>
.cart-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.cart-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.empty-cart-message {
  text-align: center;
  font-size: 1.2rem;
  color: #888;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.cart-item-image {
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
}

.cart-item-details {
  flex-grow: 1;
}

.cart-item-name {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
}

.cart-item-price {
  font-size: 1rem;
  color: #666;
}

.quantity-controls {
  display: flex;
  margin: 10px 0;
}

.quantity-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 15px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin: 0 5px;
  transition: background-color 0.3s;
}

.quantity-btn:hover {
  background-color: #0056b3;
}

.remove-btn {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 8px 15px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.remove-btn:hover {
  background-color: #c82333;
}

.cart-summary {
  margin-top: 30px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.cart-total {
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}

.total-price {
  color: #007bff;
}

.checkout-buttons {
  display: flex;
  justify-content: space-between;
}

.checkout-btn,
.continue-shopping-btn {
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 5px;
  width: 48%;
  transition: background-color 0.3s;
}

.checkout-btn:hover,
.continue-shopping-btn:hover {
  background-color: #218838;
}
</style>
