<template>
    <div class="product-grid">
      <!-- Ürün Kartları -->
      <div class="product-card" v-for="(product, index) in products" :key="index">
        <!-- Ürün Resmi -->
        <div class="product-image">
          <img :src="product.image" :alt="product.name" />
        </div>
        <!-- Ürün Bilgileri -->
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p class="price">{{ product.price }}</p>
          <a href="#" class="details-link">Daha Fazla Detay</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Component5",
    data() {
      return {
        products: [
          {
            image: "https://ktnimg2.mncdn.com/products/2024/10/03/2995762/876725aa-2d8e-4d63-ac6f-ad5a47e5c8ba_size708x930.jpg",
            name: "Ürün 1",
            price: "₺399.99",
          },
          {
            image: "https://ktnimg2.mncdn.com/products/2024/08/21/2976717/9c53cabc-b488-4326-88dc-54f6411ff805_size708x930.jpg",
            name: "Ürün 2",
            price: "₺299.99",
          },
          {
            image: "https://ktnimg2.mncdn.com/products/2024/09/09/2986416/4a0bd748-d956-4d79-b607-c21d9cd4aae2_size708x930.jpg",
            name: "Ürün 3",
            price: "₺199.99",
          },
          {
            image: "https://ktnimg2.mncdn.com/products/2024/04/15/2906430/54d7f68d-1303-4511-9c23-4d637911a9a3_size708x930.jpg",
            name: "Ürün 4",
            price: "₺499.99",
          },
          {
            image: "https://ktnimg2.mncdn.com/products/2024/07/30/2962574/88db415e-85dd-4284-8095-c422f856281e_size708x930.jpg",
            name: "Ürün 5",
            price: "₺99.99",
          },
          {
            image: "https://ktnimg2.mncdn.com/products/2024/07/18/2955017/e331f0c5-efff-4f6e-ab96-59ce507a5fe5_size708x930.jpg",
            name: "Ürün 6",
            price: "₺129.99",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 20px;
  }
  
  .product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .product-image img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  
  .product-info {
    padding: 10px;
  }
  
  .product-info h3 {
    font-size: 16px;
    font-weight: 600;
    margin: 10px 0;
  }
  
  .price {
    color: #e63946;
    font-size: 18px;
    font-weight: bold;
  }
  
  .details-link {
    text-decoration: none;
    color: #007bff;
    font-size: 14px;
  }
  
  .details-link:hover {
    text-decoration: underline;
  }
  </style>
  