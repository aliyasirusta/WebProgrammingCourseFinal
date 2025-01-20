import { createRouter, createWebHistory } from "vue-router";
import TheGirisPage from "~/pages/TheGirisPage.vue"; // Component 3
import CartPage from "@/components/Component8.vue"; // Component 8

const routes = [
  {
    path: "/TheGirisPage",
    name: "TheGirisPage",
    component: TheGirisPage, // Ürün Listesi Sayfası
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartPage, // Sepet Sayfası
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
