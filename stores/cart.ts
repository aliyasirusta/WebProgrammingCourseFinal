import { defineStore } from 'pinia';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, auth } from '~/plugins/firebaseConfig';

interface Product {
  id?: string;
  name: string;
  image: string;
  price: string;
  quantity: number;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as Product[],
  }),

  getters: {
    isCartEmpty: (state) => state.cart.length === 0,
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace('TL', '').trim());
        return total + price * item.quantity;
      }, 0);
    },
  },

  actions: {
    async addToCart(product: Product) {
      const user = auth.currentUser;
      if (!user) return;

      const productId = product.id ? product.id : Date.now().toString();
      const productWithId = { ...product, id: productId };

      const existingProduct = this.cart.find(item => item.id === productId);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.cart.push(productWithId);
      }
      this.updateCartState();
      await this.saveCart(user.uid);
    },
    async removeFromCart(productId: string) {
      const user = auth.currentUser;
      if (!user) return;

      const index = this.cart.findIndex((item) => item.id === productId);
      if (index !== -1) {
        this.cart.splice(index, 1);
        this.updateCartState();
        await this.saveCart(user.uid);
      }
    },

    async updateQuantity(productId: string, newQuantity: number) {
      const user = auth.currentUser;
      if (!user) return;

      const product = this.cart.find(item => item.id === productId);
      if (product && newQuantity > 0) {
        product.quantity = newQuantity;
        this.updateCartState();
        await this.saveCart(user.uid);
      }
    },

    async incrementQuantity(productId: string) {
      const user = auth.currentUser;
      if (!user) return;

      const product = this.cart.find(item => item.id === productId);
      if (product) {
        product.quantity += 1;
        this.updateCartState();
        await this.saveCart(user.uid);
      }
    },

    async decrementQuantity(productId: string) {
      const user = auth.currentUser;
      if (!user) return;

      const productIndex = this.cart.findIndex(item => item.id === productId);

      if (productIndex !== -1) {
        const product = this.cart[productIndex];

        if (product.quantity > 1) {
          product.quantity -= 1;
          this.updateCartState();
        } else {
          this.cart.splice(productIndex, 1);
          this.updateCartState();
        }
      }
      await this.saveCart(user.uid);
    },

    updateCartState() {
      this.cart = [...this.cart];
    },
    async fetchCartItems() {
      const user = auth.currentUser;
      if (!user) return;

      try {
        const cartRef = doc(db, 'carts', user.uid);
        const cartDoc = await getDoc(cartRef);
        if (cartDoc.exists()) {
          this.cart = cartDoc.data().items;
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    },
    async saveCart(userId: string) {
      try {
        const cartRef = doc(db, 'carts', userId);
        await setDoc(cartRef, { items: this.cart });
      } catch (error) {
        console.error('Error saving cart:', error);
      }
    },
    async removeProduct(productId: string) {
      await this.removeFromCart(productId);
    },
  },
});