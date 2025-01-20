<template>
  <div>
    <!-- Logo -->
    <header class="logo-container">
      <img src="@/images/logo.png" alt="Logo" class="logo" />
    </header>

    <!-- Sidebar Menü -->
    <div class="sidebar-container">
      <button class="toggle-btn" @click="toggleSidebar">
        ☰ Menü
      </button>
      <nav class="sidebar" :class="{ open: isSidebarOpen }">
        <!-- Sidebar Kapatma Tuşu -->
        <button class="close-btn" @click="toggleSidebar">✖</button>
        <ul class="menu">
          <li><router-link to="/kadin">KADIN</router-link></li>
          <li><a href="#">ERKEK</a></li>
          <li><a href="#">ÇOCUK</a></li>
          <li><a href="#">BEBEK</a></li>
          <li><a href="#">JEANS</a></li>
          <li><a href="#">TREND KASIM</a></li>
          <li><a href="#">SÜRPRİZ KUPON</a></li>
          <li><a href="#">SÜRDÜREBİLİRLİK</a></li>
        </ul>
      </nav>
    </div>

    <!-- Ana İçerik -->
    <main>
      <h1>Hoş Geldiniz</h1>
      <p>Burası ana sayfa içerik alanıdır.</p>

      <!-- Router View -->
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isSidebarOpen: false, // Sidebar açık/kapalı durumu
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen; // Durumu tersine çevir
    },
  },
};
</script>

<style scoped>
/* Stil kodları burada kalır */
</style>
