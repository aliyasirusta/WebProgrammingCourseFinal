import { defineStore } from 'pinia';
import { auth } from '@/plugins/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';

export interface UserState {
  user: User | null;
}

export const useUserStore = defineStore<'user', UserState>({
  id: 'user',
  state: () => ({
    user: null,
  }),
  actions: {
    async register(email: string, password: string) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
      } catch (error) {
        console.error('Kayıt Hatası:', error);
      }
    },
    async login(email: string, password: string) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
      } catch (error) {
        console.error('Giriş Hatası:', error);
      }
    },
    async logout() {
      try {
        await signOut(auth);
        this.user = null;
      } catch (error) {
        console.error('Çıkış Hatası:', error);
      }
    },
  },
});
