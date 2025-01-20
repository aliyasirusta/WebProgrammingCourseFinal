<template>
  <div>
    <h1 style="text-align: center; margin: 0 auto;">Kadın Mont, Şişme Mont, Kadın Uzun Mont, Peluş Mont Modelleri</h1>


    <div v-if="products.length === 0">Ürün bulunamadı.</div>
    
    <!-- Sıralama dropdown menüsü -->
    <div class="sort-container">
      
      <select v-model="sortOrder" @change="sortProducts" id="sort">
        <option value="asc">Fiyat Artan</option>
        <option value="desc">Fiyat Azalan</option>
      </select>
    </div>
    
    <div class="product-container">
      <div v-for="product in products" :key="product.id" class="product">
        <img :src="product.image" alt="Ürün Resmi" class="product-image" />
        <h3>{{ product.name }}</h3>
        <p class="price">{{ product.price }}</p>
        <button @click="addToCart(product)" class="add-to-cart-button">Sepete Ekle</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "~/stores/cart";

// Örnek ürün listesi
const products = ref([
  { id: "1", name: "Su Geçirmez Cepli Kapüşonlu Kayak Montu", image: "https://ktnimg2.mncdn.com/products/2024/11/20/3012624/7b3c6627-4ce9-4d08-bda4-15c6aa72fa34_size708x930.jpg", price: "2399,99 TL", quantity: 1 },
  { id: "2", name: "İçi Polarlı Su Geçirmez Önden Fermuarlı Kayak Tulumu", image: "https://ktnimg2.mncdn.com/products/2024/11/20/3012618/0210bd97-79f8-4564-9e76-88eee19ab759_size708x930.jpg", price: "2250 TL", quantity: 1 },
  { id: "3", name: "İçi Polarlı Su Geçirmez Kemerli Cepli Kayak Pantolonu", image: "https://ktnimg2.mncdn.com/products/2024/11/20/3012610/6b9f4953-2bbe-4847-92f9-fc59ac86f558_size708x930.jpg", price: "1999,99 TL", quantity: 1 },
  { id: "4", name: "Kapşonlu Cepli Fermuarlı Oversize Şişme Mont", image: "https://ktnimg2.mncdn.com/products/2024/09/13/2988817/7ad6f187-14ef-41ba-aec5-512d178ff541_size708x930.jpg", price: "2280 TL", quantity: 1 },
  { id: "5", name: "Kapüşonlu Fermuarlı Cep Detaylı Kapitone Crop Şişme Mont", image: "https://ktnimg2.mncdn.com/products/2024/11/20/3012592/c7911f17-8985-4bd3-bd70-c9310b7cf957_size708x930.jpg", price: "2699,99 TL", quantity: 1 },
  { id: "6", name: "Kısa Şişme Mont Fermuarlı Peluş Detaylı Cepli", image: "https://ktnimg2.mncdn.com/products/2024/11/19/3016613/8b0ef271-43f6-40e4-9c1d-b0eb807b74f9_size708x930.jpg", price: "2299,99 TL", quantity: 1 },
]);

const cartStore = useCartStore();

// Fiyat sıralama tercihini tutan değişken
const sortOrder = ref('asc'); // Varsayılan sıralama: artan

// Sepete ürün ekleme
function addToCart(product) {
  cartStore.addToCart(product);
  alert(`${product.name} sepete eklendi!`);
}

// Ürünleri sıralama fonksiyonu
function sortProducts() {
  const order = sortOrder.value;
  const sortedProducts = [...products.value];
  
  sortedProducts.sort((a, b) => {
    const priceA = parseFloat(a.price.replace(' TL', '').replace(',', '.'));
    const priceB = parseFloat(b.price.replace(' TL', '').replace(',', '.'));
    
    if (order === 'asc') {
      return priceA - priceB; // Fiyat artan sıralama
    } else {
      return priceB - priceA; // Fiyat azalan sıralama
    }
  });
  
  products.value = sortedProducts;
}
</script>

<style>
.product-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}

.product {
  width: calc(33.33% - 20px);
  box-sizing: border-box;
  margin-bottom: 20px;
  text-align: center;
}

.product-image {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.price {
  font-size: 18px;
  font-weight: bold;
  color: #e74c3c; /* Kırmızı renk */
  margin: 10px 0;
}

.add-to-cart-button {
  padding: 12px 24px;
  font-size: 16px;
  background-color: #3498db; /* Mavi renk */
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.add-to-cart-button:hover {
  background-color: #2980b9; /* Koyu mavi */
  transform: scale(1.05); /* Butonu biraz büyütme */
}

.add-to-cart-button:active {
  background-color: #1f6f8b; /* Tıklama sırasında daha koyu mavi */
}

.sort-container {
  margin-bottom: 20px;
  text-align: right; /* Sağ tarafa hizalar */
}

.sort-container label {
  margin-right: 10px;
}

.sort-container select {
  padding: 5px 10px;
  font-size: 16px;
}

.sort-options {
  margin-top: 10px;
}

.sort-option {
  padding: 5px 10px;
  margin: 5px 0;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  cursor: pointer;
}

.sort-option:hover {
  background-color: #ddd;
}

</style>
