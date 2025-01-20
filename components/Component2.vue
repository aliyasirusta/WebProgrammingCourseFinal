<template>
   <div class="grid-container">
        <div class="grid-item">
            <img src="https://ktnimg2.mncdn.com/cms/2024/09/18/17fc06a9-c508-4c16-ba60-c43c90446ed6.png" alt="Dis Giyim">
            
        </div>
        <div class="grid-item">
            <img src="https://ktnimg2.mncdn.com/cms/2024/06/11/35c4390c-c869-4c4a-bdea-be12f882eba0.png" alt="Triko">
            
        </div>
        <div class="grid-item">
            <img src="https://ktnimg2.mncdn.com/cms/2025/01/03/4e30e2a7-7e96-4d77-8e06-9f5a83a3486e.png" alt="Jean">
            
        </div>
        
        <div class="grid-item">
            <img src="https://ktnimg2.mncdn.com/cms/2025/01/14/a650d68f-312f-4d55-b5c5-439513f1496d.jpg" alt="Naturel Tonlar">
            
        </div>
        
      </div>
  </template>
  
  <script>
  export default {
    name: "Component2",
    data() {
      return {
        images: [
          
          
        ],
        
      };
    },
    methods: {
     
    },
  };
  </script>
  <style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr; /* Tek sütun (alt alta düzen) */
    gap: 10px; /* Aralarındaki boşluk */
    width: 100%; /* Tüm ekranı kaplasın */
    max-width: 100%; /* Ekran genişliğini aşmasın */
    margin: 0 auto; /* Ortalamak için */
}

.grid-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    width: 100%; /* Tam genişlik */
}

.grid-item img {
    width: 100%;
    height: auto; /* Resmin yüksekliği oranına göre ayarlansın */
    object-fit: cover;
    transition: transform 0.3s ease;
}



  </style>