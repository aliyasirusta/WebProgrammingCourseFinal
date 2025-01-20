<template>
    <div class="favorites-page">
      <h1>Favorilerim</h1>
      <div class="favorites-grid">
        <div v-for="item in favoriteItems" :key="item.id" class="favorite-card">
          <div class="image-container">
            <img :src="item.image" alt="Ürün görseli" class="product-image" />
            <span v-if="item.isPopular" class="popular-badge">ÇOK SATAN</span>
            <button class="favorite-button" @click="toggleFavorite(item.id)">❤️</button>
          </div>
          <div class="product-details">
            <h2 class="product-name">{{ item.name }}</h2>
            <p class="product-price">{{ item.price }} TL</p>
            <div class="product-icons">
              <span v-for="icon in item.icons" :key="icon" class="icon">{{ icon }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        favoriteItems: [
          {
            id: 1,
            name: "Basic Triko Kazak Uzun Kollu Bisiklet Yaka",
            price: 729.99,
            image: "https://ktnimg2.mncdn.com/products/2024/08/09/2970322/e1ab99a8-fba6-4817-b9bb-f9836ad641ba_size708x930.jpg",
            isPopular: false,
            icons: ["👗", "🌟"],
          },
          {
            id: 2,
            name: "Polo Yaka Triko Kazak Uzun Kollu",
            price: 899.99,
            image: "https://ktnimg2.mncdn.com/products/2024/06/28/2941314/38b0a3c3-5747-420d-bcd7-9f96fe87d4b8_size708x930.jpg",
            isPopular: true,
            icons: ["👗", "🌟"],
          },
          {
            id: 3,
            name: "Basic Boğazlı Triko Kazak Uzun Kollu",
            price: 779.99,
            image: "https://ktnimg2.mncdn.com/products/2024/07/23/2957144/97dac457-45ec-4213-b8fe-001adec49ae8_size708x930.jpg",
            isPopular: false,
            icons: ["👗", "🌟"],
          },
          {
            id: 4,
            name: "Saç Örgü Triko Kazak Bisiklet Yaka",
            price: 849.99,
            image: "https://ktnimg2.mncdn.com/products/2024/07/05/2947777/aae13c07-b03a-40ff-b4d2-829a61db8c73_size708x930.jpg",
            isPopular: false,
            icons: ["👗", "🌟"],
          },
          {
            id: 5,
            name: "Koton X Zeynep Bastık - Triko Kazak",
            price: 899.99,
            image: "https://ktnimg2.mncdn.com/products/2024/09/09/2986212/2da74c71-a5d9-497c-8c0b-abf194d73088_size708x930.jpg",
            isPopular: true,
            icons: ["👗", "🌟"],
          },
          {
            id: 6,
            name: "Oversize Kot Ceket Crop Boy",
            price: 1499.99,
            image: "https://ktnimg2.mncdn.com/products/2024/10/25/2994023/68f2b6f0-2245-4430-892a-596b0a58a6bc_size708x930.jpg",
            isPopular: true,
            icons: ["👖", "🌟"],
          },
          {
            id: 7,
            name: "Baggy Kot Pantolon Cep Detaylı",
            price: 1099.99,
            image: "https://ktnimg2.mncdn.com/products/2024/10/25/2994026/4765817b-ab5d-492c-b0db-1a5834ddfc38_size708x930.jpg",
            isPopular: true,
            icons: ["👖", "🌟"],
          },
          {
            id: 8,
            name: "Super Baggy Kot Pantolon Cep Detaylı",
            price: 1099.99,
            image: "https://ktnimg2.mncdn.com/products/2024/10/25/2994025/a26cb37f-09b7-4645-81df-7a6f32be91c9_size708x930.jpg",
            isPopular: false,
            icons: ["👖", "🌟"],
          },
        ],
      };
    },
    methods: {
      toggleFavorite(id) {
        const item = this.favoriteItems.find((item) => item.id === id);
        if (item) item.isFavorite = !item.isFavorite;
      },
    },
  };
  </script>
  
  <style scoped>
  .favorites-page {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .favorites-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .favorite-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    position: relative;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .image-container {
    position: relative;
  }
  
  .product-image {
    width: 100%;
    height: auto;
  }
  
  .popular-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: red;
    color: white;
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 4px;
  }
  
  .favorite-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }
  
  .product-details {
    padding: 10px;
    text-align: center;
  }
  
  .product-name {
    font-size: 16px;
    margin-bottom: 8px;
  }
  
  .product-price {
    font-size: 18px;
    color: #000;
    font-weight: bold;
  }
  
  .product-icons {
    display: flex;
    justify-content: center;
    margin-top: 8px;
  }
  
  .icon {
    margin: 0 5px;
    font-size: 14px;
  }
  </style>
  