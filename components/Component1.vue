<template>
 <!-- Slider -->
 <div class="slider">
      <div class="slider-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="slide">
          <img src="https://ktnimg2.mncdn.com/cms/2025/01/02/e77c195e-233d-4ac4-a5fb-43fd2f3852fc.png" alt="Slide 1" />
        </div>
        <div class="slide">
          <img src="https://ktnimg2.mncdn.com/cms/2025/01/15/711a0ffe-2ba8-4a97-9659-65783ce30774.jpg" alt="Slide 2" />
        </div>
        <div class="slide">
          <img src="https://ktnimg2.mncdn.com/cms/2025/01/02/5fecc19c-2ef3-43b1-84e1-eff36a8bf29e.jpg" alt="Slide 3" />
        </div>
      </div>
      <!-- Butonlar -->
      <button class="prev-button" @click="prevSlide">‹</button>
      <button class="next-button" @click="nextSlide">›</button>
    </div>
    <div class="grid-container">
        <div class="grid-item">
            <img src="https://ktnimg2.mncdn.com/cms/2025/01/06/a1302dc7-4524-4dd4-8aad-eb740dd6359a.png" alt="Dis Giyim">
            
        </div>
        <div class="grid-item">
            <img src="https://ktnimg2.mncdn.com/cms/2025/01/06/74e1c05d-a178-4220-a1f0-daab56a7220f.png" alt="Triko">
            
        </div>
        <div class="grid-item">
            <img src="https://ktnimg2.mncdn.com/cms/2025/01/06/ea15875f-9cb3-4e1c-b35d-7f54b2ac0b28.png" alt="Jean">
            
        </div>
        <div class="grid-container2">
        <div class="grid-item2">
            <img src="https://ktnimg2.mncdn.com/cms/2025/01/06/2b56b0d7-7c4f-4e0f-8cf2-43b3988d7586.png" alt="Naturel Tonlar">
            
        </div>
        <div class="grid-item2">
            <img src="https://ktnimg2.mncdn.com/cms/2025/01/06/756a4137-401c-49f8-838a-ffe6d82027a7.png" alt="Sweatshirt">
            
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "Component1",
  data() {
    return {
      currentIndex: 0,
      totalSlides: 3,
      autoSlideInterval: null,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(this.nextSlide, 8000); // 8 saniyede bir geçiş
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    this.stopAutoSlide();
  },
};
</script>


<style scoped>       
/* Slider */
.slider {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slider-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
}

.slide img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            width: 300%;
            max-width: 1500px;
        }

        .grid-item {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
        }

        .grid-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .grid-item:hover img {
            transform: scale(1.1);
        }

        .grid-item .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .grid-item:hover .overlay {
            opacity: 1;
        }

        .overlay h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .overlay a {
            color: white;
            text-decoration: none;
            font-size: 1rem;
            border: 2px solid white;
            padding: 5px 15px;
            border-radius: 5px;
            transition: background 0.3s ease;
        }

        .overlay a:hover {
            background: white;
            color: black;
        }
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            width: 300%;
            max-width: 1500px;
        }

        .grid-item {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
        }

        .grid-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .grid-item:hover img {
            transform: scale(1.1);
        }

        .grid-item .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .grid-item:hover .overlay {
            opacity: 1;
        }

        .overlay h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .overlay a {
            color: white;
            text-decoration: none;
            font-size: 1rem;
            border: 2px solid white;
            padding: 5px 15px;
            border-radius: 5px;
            transition: background 0.3s ease;
        }

        .overlay a:hover {
            background: white;
            color: black;
        }
        .grid-container2 {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            width: 1500%;
            max-width: 1500px;
        }

        .grid-item2 {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
        }

        .grid-item2 img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }

        .grid-item2:hover img {
            transform: scale(1.1);
        }

        .grid-item2 .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .grid-item2:hover .overlay {
            opacity: 1;
        }

        .overlay h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .overlay a {
            color: white;
            text-decoration: none;
            font-size: 1rem;
            border: 2px solid white;
            padding: 5px 15px;
            border-radius: 5px;
            transition: background 0.3s ease;
        }

        .overlay a:hover {
            background: white;
            color: black;
        }
        


/* Butonlar */
.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(166, 154, 154, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

.prev-button:hover,
.next-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
.cart-dropdown ul {
list-style: none;
padding: 0;
margin: 0;
}

.cart-dropdown ul li {
padding: 5px 0;
border-bottom: 1px solid #eee;
}

.checkout-button {
display: block;
width: 100%;
padding: 10px;
background-color: #ffffff;
border: none;
border-radius: 5px;
color: white;
font-weight: bold;
cursor: pointer;
text-align: center;
}
</style>
