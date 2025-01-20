<template>
  <header class="navbar">
    <!-- Üst Başlık ve Logo -->
    <p class="greeting">SÜRPRİZ KUPON FIRSATLARI</p> 
    <div class="top-bar">
      <!-- Sol Menü Yazıları -->
      <div class="menu-container">
        <span class="menu-item">Kadın
          <!-- Kadın alt kategoriler -->
          <div class="submenu">
    <span class="submenu-item">Yeni Gelenler</span>
    <span class="submenu-item">Çok Satanlar</span>
    <span class="submenu-item">Giyim
      <!-- Giyim alt kategorileri yeni bar -->
      <div class="submenu1">
        <span class="submenu1-item">Tüm Ürünler</span>
        <span class="submenu1-item">Dış Giyim</span>
        <span class="submenu1-item">Kaban</span>
        <span class="submenu1-item" @click="navigateToComponent3">Mont</span>
        <span class="submenu1-item">Peluş Mont</span>
        <span class="submenu1-item">Sweatshirt</span>
        <span class="submenu1-item">Kazak & Süveter</span>
        <span class="submenu1-item">Triko Sıcaklığı</span>
        <span class="submenu1-item">Hırka</span>
        <span class="submenu1-item">Elbise</span>
        <span class="submenu1-item">Yelek</span>
        <span class="submenu1-item">Etek</span>
        <span class="submenu1-item">Pantolon</span>
        <span class="submenu1-item">Ceket</span>
        <span class="submenu1-item">Suni Deri Ceket</span>
        <span class="submenu1-item">Blazer Ceket</span>
        <span class="submenu1-item">Gömlek</span>
        <span class="submenu1-item">Bluz</span>
        <span class="submenu1-item">Trençkot</span>
        <span class="submenu1-item">Abiye Davet</span>
        <span class="submenu1-item">Crop</span>
        <span class="submenu1-item">Top/Bluz</span>
        <span class="submenu1-item">Tişört</span>
        <span class="submenu1-item">Eşofman Altı</span>
        <span class="submenu1-item">Tayt</span>
        <span class="submenu1-item">Pijama Takımı</span>
        <span class="submenu1-item">Koton Jeans</span>
        <span class="submenu1-item">Kot Pantolon</span>
        <span class="submenu1-item">Kot Ceket</span>
        <span class="submenu1-item">Tişört Uzun Kol</span>
      </div>
    </span>
    <span class="submenu-item">Genç Kadın</span>
    <span class="submenu-item">Koleksiyonlar</span>
    <span class="submenu-item">Abiye & Davet</span>
    <span class="submenu-item">İç Giyim ve Pijama</span>
    <span class="submenu-item">Spor Giyim</span>
    <span class="submenu-item">Aksesuar</span>
   </div>
  
        </span>
        <span class="menu-item">Genç</span>
        <span class="menu-item">Erkek</span>
        <span class="menu-item">Çocuk</span>
        <span class="menu-item">Bebek</span>    
        <span class="menu-item" @click="navigateToComponent4">Fırsatlar</span>
        <span class="menu-item" @click="navigateToComponent10">Sürdürülebilirlik</span>
      </div>
   

      <div class="logo">
          <button class="logo-button" @click="navigateToComponent1">
            <img src="https://054308f5.cdn.akinoncloud.com/static_omnishop/koton446/img/logo.svg" alt="Koton Logo" />
          </button>
        </div>


      <!-- Sağ Butonlar -->
      <div class="right-side">
        <button class="logo-button" @click="navigateToComponent2">
            <img src="https://054308f5.cdn.akinoncloud.com/static_omnishop/koton446/img/kotonclub.svg" alt="Koton Logo" />
          </button>
        <span class="right-item account-menu">
        Dil
        <div class="submenu">
          <span class="submenu-item">Türkçe</span>
          <span class="submenu-item">English</span>
        </div>
       </span>
        <span class="right-item account-menu">
          <button class="" @click="navigateToComponent6" style="border: none; background: transparent; padding: 0; outline: none;">
          <img src="https://r.resimlink.com/iy7TFA85tSN.png" alt="Sepetim" style="width: 35px; height: 35px;" />
        </button>
        <div class="submenu2">
          <button class="submenu-item2" @click="navigateToComponent6">
          <span class="submenu-item2">KAYIT OL</span>
          </button>
          <button class="submenu-item2" @click="navigateToComponent11">
          <span class="submenu-item2">GİRİŞ YAP</span>
          </button>
        </div>
       </span>     
       <div class="favorites" @click="navigateToComponent9">
         <img src="https://w7.pngwing.com/pngs/501/448/png-transparent-favourite-chart-favorites-heart-rating-top-web-icon-thumbnail.png" 
       alt="Favoriler Logo" 
       class="favorites-logo">
        </div>

      

         <!-- Sepetim -->
      <div class="cart-container">
        <button class="" @click="navigateToComponent8" style="border: none; background: transparent; padding: 0; outline: none;">
          <img src="https://r.resimlink.com/q8XmeOioz.png" alt="Sepetim" style="width: 35px; height: 35px;" />
        </button>
      
        </div>
      </div>
      </div>
    
  
   </header>
   
   <!-- Dinamik Bileşen Alanı -->
   <main class="main-content">
      <component :is="activeComponent" />
    </main>
 
    <footer>
    <div class="top-section">
        <div>
            <img src="https://ktnimg2.mncdn.com/cms/2024/03/12/aecb3f53-77eb-4ab9-b04b-318a8b82aba0.jpg" alt="Koton Club">
            <p>Koton Club</p>
        </div>
        <div>
            <img src="https://ktnimg2.mncdn.com/cms/2024/03/12/0be33e84-e245-465d-9290-8873db4a12ca.jpg" alt="Mağazadan Gel-Al">
            <p>Mağazadan Gel-Al</p>
        </div>
        <div>
            <img src="https://ktnimg2.mncdn.com/cms/2024/03/12/8f302e82-5736-4ff8-8362-6e1fd0c5ead3.jpg" alt="Değişim & İade">
            <p>Mağazada Değişim & İade</p>
        </div>
        <div>
            <img src="https://ktnimg2.mncdn.com/cms/2024/03/12/103585d5-5f51-4a65-9aff-8a1ab00e92ea.jpg" alt="Kapıda Ödeme">
            <p>Kapıda Ödeme</p>
        </div>
        <div>
            <img src="https://ktnimg2.mncdn.com/cms/2024/03/12/00583d8f-e1ca-4630-b441-b07d16141971.jpg" alt="Güvenli Alışveriş">
            <p>Güvenli Alışveriş</p>
        </div>
        <div>
            <img src="https://ktnimg2.mncdn.com/cms/2024/03/12/84786008-e96b-490b-84c9-cdc86a047a10.jpg" alt="Ücretsiz İade">
            <p>Ücretsiz İade</p>
        </div>
    </div>

    <div class="newsletter">
        <h3>En güncel moda haberleri için kaydolun</h3>
        <p>Herkesten önce kaçırılmaması gereken haberleri alın.</p>
        <input type="email" placeholder="E-posta">
        <button>Gönder</button>
    </div>

    <div class="footer-links">
        <div>
            <h4>Kurumsal</h4>
            <ul>
                <li><a href="#">Hakkımızda</a></li>
                <li><a href="#">Koton Blog</a></li>
                <li><a href="#">Yaşama Saygı</a></li>
                <li><a href="#">Projemiz</a></li>
                <li><a href="#">Koton'da Kariyer</a></li>
            </ul>
        </div>
        <div>
            <h4>Yardım</h4>
            <ul>
                <li><a href="#">Sıkça Sorulan Sorular</a></li>
                <li><a href="#">İptal & İade Prosedürü</a></li>
                <li><a href="#">Ücretsiz İade</a></li>
            </ul>
        </div>
        <div>
            <h4>Popüler Kategoriler</h4>
            <ul>
                <li><a href="#">Kadın Elbise</a></li>
                <li><a href="#">Kadın Mont</a></li>
                <li><a href="#">Kadın Kazak</a></li>
            </ul>
        </div>
    </div>

    <div class="social-media">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">TikTok</a>
    </div>
</footer>


</template>

<script setup>
import { useCartStore } from "~/stores/cart";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { ref } from 'vue';
import Component2 from '~/components/Component2.vue';
import Component10 from '~/components/Component10.vue';
import Component4 from '~/components/Component4.vue';
import Component6 from '~/components/Component6.vue';
import Component7 from '~/components/Component7.vue';
import Component8 from '~/components/Component8.vue';
import Component9 from '~/components/Component9.vue';
import Component1 from '~/components/Component1.vue';
import Component3 from '~/components/Component3.vue';
import RegisterPage from "./components/registerPage.vue";
import LoginPage from "./pages/TheGirisPage.vue";



const activeComponent = ref(null);
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

const navigateToComponent2 = () => {
  activeComponent.value = Component2;//+
};
const navigateToComponent3 = () => {
  activeComponent.value = Component3;//+
};

const navigateToComponent10 = () => {
  activeComponent.value = Component10;//+
};

const navigateToComponent6 = () => {//+
  activeComponent.value = RegisterPage;
};
const navigateToComponent11 = () => {//+
  activeComponent.value = LoginPage;
};

const navigateToComponent4 = () => {//+
  activeComponent.value = Component4;
};

const navigateToComponent7 = () => {
  activeComponent.value = Component7;//+
};

const navigateToComponent8 = () => {//+
  activeComponent.value = Component8;
};

const navigateToComponent1 = () => {
  activeComponent.value = Component1; //+
};

const navigateToComponent9 = () => { //+
  activeComponent.value = Component9;
};
</script>

<style scoped>
 * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
        }

        footer {
            background-color: #fff;
            padding: 20px 50px;
        }

        .top-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ddd;
            padding-bottom: 20px;
            margin-bottom: 20px;
        }

        .top-section div {
            text-align: center;
            flex: 1;
        }

        .top-section div img {
            max-width: 40px;
            margin-bottom: 10px;
        }

        .newsletter {
            text-align: center;
            margin-bottom: 20px;
        }

        .newsletter h3 {
            font-size: 1.2rem;
            margin-bottom: 10px;
        }

        .newsletter input[type="email"] {
            padding: 10px;
            width: 300px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-right: 10px;
        }

        .newsletter button {
            padding: 10px 20px;
            background-color: black;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .footer-links {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-bottom: 20px;
        }

        .footer-links div {
            flex: 1;
            min-width: 200px;
            margin: 10px;
        }

        .footer-links h4 {
            font-size: 1rem;
            margin-bottom: 10px;
            color: black;
        }

        .footer-links ul {
            list-style: none;
        }

        .footer-links ul li {
            margin-bottom: 5px;
        }

        .footer-links ul li a {
            text-decoration: none;
            color: #555;
            font-size: 0.9rem;
        }

        .footer-links ul li a:hover {
            text-decoration: underline;
        }

        .social-media {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #ddd;
        }

        .social-media a {
            margin: 0 10px;
            text-decoration: none;
            font-size: 1.2rem;
            color: #555;
        }

        .social-media a:hover {
            color: black;
        }

        .navbar {
  position: sticky;
  top: 0;
  z-index: 1000; /* Diğer öğelerin üstünde olması için yüksek bir z-index değeri kullanın */
  width: 100%;
  background-color: #fff; /* İstediğiniz arka plan rengini ekleyebilirsiniz */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Başlık üzerine gölge ekleyebilirsiniz */
}


        .navbar-header {
  background-color: #f8f8f8;
  padding: 5px 20px;
  font-size: 12px;
  border-bottom: 1px solid #ddd;
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
.favorites {
display: flex;
align-items: center;  /* Logoyu ve metni dikeyde ortalar */
}

.favorites-logo {
width: 20px;  /* Logonun genişliğini ayarlayın */
height: auto;  /* Yüksekliği orantılı olarak ayarlayın */
margin-right: 10px;  /* Logonun sağında biraz boşluk bırakın */
}
/* Sepetim Dropdown */
.cart-container {
  position: relative;
}

.cart-dropdown {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  width: 300px; /* Dropdown genişliğini artırabilirsiniz */
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1000;
}

.cart-item-image {
  width: 50px; /* Resim genişliği */
  height: 50px; /* Resim yüksekliği */
  object-fit: cover; /* Resmin düzgün bir şekilde çerçeveye sığması */
  border-radius: 4px; /* Köşelerin yuvarlatılması */
}

.cart-dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-dropdown ul li {
  display: flex; /* Resim ve bilgileri yan yana hizalama */
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}

.cart-item-info {
  margin-left: 10px; /* Resim ile bilgi arasındaki boşluk */
}

.checkout-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff; /* Buton arkaplan rengi */
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
}

.cart-container:hover .cart-dropdown {
  display: block;
}
.quantity-controls {
  display: flex; /* Butonları yatay olarak hizalar */
  align-items: center;
  gap: 10px; /* Butonlar arasındaki boşluk */
}

.quantity-btn {
  width: 35px; /* Buton genişliği */
  height: 35px; /* Buton yüksekliği */
  background-color: #007bff; /* Buton arkaplan rengi (mavi) */
  color: white; /* Buton yazı rengi */
  border: none; /* Kenar çizgisi kaldırılır */
  border-radius: 50%; /* Butonları yuvarlak hale getirir */
  font-size: 20px; /* Yazı boyutu */
  font-weight: bold; /* Yazıyı kalın yapar */
  cursor: pointer; /* Fare işaretçisi "pointer" olur */
  display: flex; /* İçeriği hizalamak için flexbox kullanılır */
  justify-content: center; /* "+" ve "-" yazılarını ortalar */
  align-items: center; /* "+" ve "-" yazılarını dikeyde ortalar */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Hover efekti için geçiş */
}

.quantity-btn:hover {
  background-color: #0056b3; /* Hover sırasında daha koyu mavi */
  transform: scale(1.1); /* Hover sırasında hafif büyütme efekti */
}

.quantity-btn:active {
  transform: scale(0.95); /* Tıklama sırasında hafif küçülme efekti */
}
.remove-btn {
  background-color: #ff4d4d; /* Kırmızı arkaplan rengi */
  color: white; /* Yazı rengi */
  border: none; /* Kenar çizgisi kaldırılır */
  border-radius: 8px; /* Köşeleri yuvarlatma */
  padding: 8px 16px; /* İç boşluk (buton boyutunu ayarlar) */
  font-size: 14px; /* Yazı boyutu */
  font-weight: bold; /* Yazıyı kalın yapar */
  cursor: pointer; /* Fare işaretçisi "pointer" olur */
  transition: background-color 0.3s ease, transform 0.2s ease; /* Hover ve tıklama efektleri */
}

.remove-btn:hover {
  background-color: #cc0000; /* Hover sırasında daha koyu kırmızı */
  transform: scale(1.05); /* Hover sırasında buton hafif büyür */
}

.remove-btn:active {
  transform: scale(0.95); /* Tıklama sırasında buton hafif küçülür */
}

.remove-btn:focus {
  outline: 2px solid #ff9999; /* Klavye odak efektine açık kırmızı kenarlık eklenir */
  outline-offset: 2px; /* Kenarlığın butondan uzaklığı */
}


/* Sayfanın en üstündeki "Sürpriz" yazısı */
.greeting {
  text-align: left; /* Yazıyı sağa hizalar */
  font-size: 12px;
  font-weight: bold;
  color: #000000;
  margin-top: 2px;
  margin-right: 600px; /* Sağdan biraz boşluk bırakmak için */
  margin-bottom: 0;
}
/* Kadın menüsünün altındaki kategori barı (submenu) gizli */
.submenu {
display: none; /* Başlangıçta gizli */
position: absolute;
top: 100%;
left: 0;
background-color: #fbfbfb;
border-radius: 4px;
padding: 5px 0;
z-index: 1;
width: 200px;
}
.submenu2 {
    display: none; /* Varsayılan olarak gizle */
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #ffffff;
    border: 1px solid #ffffff;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 10px;
    width: 150px; /* Menü genişliği */
    z-index: 1000;
  }
 .submenu-item2 {
    display: block;
    width: 100%;
    background-color: #ffffff; /* Buton rengi */
    color: rgb(0, 0, 0);
    text-align: center;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #0a0a0a;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  .submenu-item2:hover {
    background-color: #000000; /* Hover rengi */
    color: rgb(255, 255, 255);
    transform: scale(1.05); /* Hafif büyütme efekti */
  }
/* Kadın Menü Elemanına Hover Yapıldığında Alt Menüyü Göster */
.account-menu:hover .submenu2 {
  display: block; /* Alt menüyü görünür hale getirir */
  position: absolute; /* Alt menüyü konumlandırmak için gerekli */
  left: -50px; /* Sağ tarafa kaydırmak için değer (arttırabilirsiniz) */
  top: 50; /* Dikey hizalama (isteğe bağlı düzenleyebilirsiniz) */
}
/* Kadın menüsünün altındaki kategori barı (submenu) görünür */
.menu-item:hover .submenu {
display: block; /* Kadın menüsüne hover yapıldığında alt menü gösterilsin */
}

/* Giyim alt menüsünün görünür olacağı kurallar */
.submenu1 {
display: none; /* Başlangıçta gizli */
position: absolute;
top: 0;
left: 100%; /* Giyim'in sağında göstermek için */
background-color: #fefefe;
border-radius: 4px;
padding: 5px 0;
z-index: 2;
width: 200px;
}
/* Giyim alt menüsüne hover yapılınca göster */
.submenu-item:hover .submenu1 {
display: block; /* Giyim alt menüsüne hover yapıldığında daha fazla kategori göster */
}


.submenu1-item {
color: rgb(0, 0, 0);
font-size: 10px;
padding: 8px 10px;
cursor: pointer;
transition: background-color 0.3s;
display: block;
}


/* Üst Başlık ve Logo Konteyneri */
.top-bar {
  display: flex;
  position: relative;
  z-index: 100;
  align-items: center; /* Her öğeyi dikeyde ortala */
  justify-content: space-between; /* Sol menü ve sağ butonlar arasındaki mesafeyi eşitle */
  width: 100%; /* Tüm genişlik kullanılsın */
  padding: 5px 5px; /* Üstte biraz boşluk bırak */
  background-image: url('');
  background-size: 1300px 600px; /* Genişlik 400px, yükseklik 200px */
  border-radius: 4px; /* Kenarları yuvarlamak için */
  transition: background-color 0.3s; /* Arka plan renginin geçiş efekti */
}

.logo-button {
  border: none;          /* Butonun etrafındaki çizgiyi kaldırır */
  background: none;      /* Butonun arka planını kaldırır */
  padding: 0;            /* Butonun etrafındaki boşluğu kaldırır */
  outline: none;         /* Butona tıklandığında oluşan kenarlığı kaldırır */
}

.logo img {
  height:30px;
  border: none;
  text-decoration: none; 
}
.logo {
  width: 150px; /* Logoyu küçültmek için */
  height: auto;
  border: none;
}

/* Menü Yazıları */
.menu-container {
  position: relative;
  display: flex;
  justify-content: flex-start; /* Menüleri sola hizala */
  flex-wrap: wrap; /* Eğer butonlar çoksa satırlara geçmesini sağlar */
  padding: 2px 2px; /* Menüye iç boşluk eklemek için */
}

/* Menü Elemanları */
.menu-item {
  position: relative; /* Alt menünün konumlandırılması için gerekli */
  color: rgb(3, 3, 3);
  font-size: 10px; /* Font boyutunu küçültmek için */
  margin: 2px 8px; /* Butonlar arasında mesafe */
  cursor: pointer;
  text-transform: uppercase; /* Yazıyı büyük yapmak için */
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s; /* Renk değişimini yumuşatmak için */
}
.menu-item:hover {
  background-color: #000000; /* Arka plan rengini değiştir */
  color: #ffffff; /* Yazı rengini değiştir */
}

/* Kadın menüsünün altındaki kategori barı (submenu) gizli */
.submenu {
display: none; /* Başlangıçta gizli */
position: absolute;
top: 100%;
left: 0;
background-color: #fefefe;
border-radius: 4px;
padding: 5px 0;
z-index: 1; /* Üstte görünmesini sağlar */
width: 200px; /* Alt menü genişliği */
}

/* Submenu Item (Alt menü elemanları) */
.submenu-item {
color: rgb(6, 6, 6);
font-size: 10px;
padding: 8px 10px; /* Dikeyde daha geniş bir padding ekleyelim */
cursor: pointer;
transition: background-color 0.3s;
display: block; /* Alt menü öğelerinin alt alta sıralanması için block yapalım */
}

/* Kadın Menü Elemanına Hover Yapıldığında Alt Menüyü Göster */
.menu-item:hover .submenu {
display: block; /* Alt menüyü görünür hale getirir */
}
.account-menu:hover .submenu {
display: block;
}
/* Giyim Alt Menü Elemanına Hover Yapıldığında Alt Menüyü Göster */
.submenu-item:hover .submenu {
display: block; /* Giyim alt menüsüne hover yapıldığında daha fazla kategori göster */
}

/* Sağ Taraf Yazıları */
.right-side {
  display: flex;
  justify-content: flex-end; /* Sağ tarafa hizala */
  align-items: center; /* Arama barı ve butonları dikeyde hizala */
}

/* Arama Barı */
.search-bar {
  width: 120px; /* Genişliği küçülttüm */
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 12px;
}
.right-item {
  margin: 0px 10px 0px 0px; /* Sağdan mesafeyi artırmak için sağ marj */
  padding-right: 0px; /* İçeriğin sağdan uzaklaşması */
}
/* Sağ Taraf Elemanları */
.right-item {
  color: rgb(0, 0, 0);
  font-size: 12px; /* Font boyutunu küçültmek için */
  margin: 0px 10px; /* Butonlar arasında mesafe */
  cursor: pointer;
  text-transform: uppercase; /* Yazıyı büyük yapmak için */
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s; /* Renk değişimini yumuşatmak için */
}

/* Logo Linki */
.right-side .logo {
  width: 10;  /* Orantılı genişlik */
  height: 10px;  /* Logo yüksekliği */
}

/* Logo Linki */
.right-side .aramabari {
  width: 10;  /* Orantılı genişlik */
  height: 30px;  /* Logo yüksekliği */
}

.account-menu {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }
</style>
