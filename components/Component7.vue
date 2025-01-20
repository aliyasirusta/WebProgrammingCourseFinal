<template>
  <div class="account-page">
    <!-- Sol Menü -->
    <div class="sidebar">
      <h2 class="sidebar-title">Hesabım</h2>
      <ul class="menu-list">
        <li class="menu-item">
          <strong>KotonClub</strong>
        </li>
        <li class="menu-item">Siparişlerim</li>
        <li class="menu-item">İptal ve iade süreci</li>
        <li class="menu-item">
          Profil Bilgileri
          <ul class="submenu">
            <li class="submenu-item">Bilgilerim</li>
            <li class="submenu-item">Adreslerim</li>
            <li class="submenu-item">E-posta Değiştir</li>
            <li class="submenu-item">Şifre Değiştir</li>
            <li class="submenu-item">Bildirim Ayarları</li>
          </ul>
        </li>
        <li class="menu-item">Favorilerim</li>
        <li class="menu-item">Kuponlarım</li>
        <li class="menu-item">SSS</li>
        <li class="menu-item">Bize Ulaşın</li>
        <li class="menu-item logout">Çıkış Yap</li>
      </ul>
    </div>

    <!-- Sağ İçerik -->
    <div class="content">
      <h2>Siparişlerim</h2>
      <div v-if="orders.length > 0">
        <ul class="order-list">
          <li class="order-item" v-for="order in orders" :key="order.id">
            <strong>Sipariş Numarası:</strong> {{ order.id }}<br />
            <strong>Tarih:</strong> {{ order.date }}<br />
            <strong>Toplam Tutar:</strong> {{ order.total }}₺
          </li>
        </ul>
      </div>
      <p class="no-order-text" v-else>
        Henüz bir siparişiniz yok.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: "ORD12345",
          date: "2024-12-01",
          total: 259.99,
        },
        {
          id: "ORD12346",
          date: "2024-11-25",
          total: 499.50,
        },
      ],
    };
  },
};
</script>

<style scoped>
.account-page {
  display: flex;
  flex-direction: row;
  font-family: Arial, sans-serif;
}

/* Sol Menü */
.sidebar {
  width: 300px;
  padding: 20px;
  border-right: 1px solid #ccc;
  background-color: #f9f9f9;
}

.sidebar-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.menu-list {
  list-style: none;
  padding: 0;
}

.menu-item {
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  font-weight: normal;
  transition: color 0.3s ease;
}

.menu-item:hover {
  color: #ff6200;
  font-weight: bold;
}

.submenu {
  list-style: none;
  padding-left: 20px;
  margin-top: 5px;
}

.submenu-item {
  font-size: 14px;
  margin: 5px 0;
  cursor: pointer;
  transition: color 0.3s ease;
}

.submenu-item:hover {
  color: #ff6200;
}

.logout {
  color: red;
  font-weight: bold;
}

/* Sağ İçerik */
.content {
  flex-grow: 1;
  padding: 20px;
  text-align: right;
}

.content h2 {
  font-size: 24px;
  margin-bottom: 10px;
  text-align: left;
}

.no-order-text {
  font-size: 16px;
  color: #555;
  margin-top: 10px;
}

.order-list {
  list-style: none;
  padding: 0;
}

.order-item {
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}
</style>
  