import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from "./router"; // Router'ı içeri aktar

const app = createApp(App);
app.use(router); // Router'ı kullan
const pinia = createPinia();

app.use(pinia);
app.mount('#app');
