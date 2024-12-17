import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

document.addEventListener('DOMContentLoaded', () => {
    const app = createApp(App);
    app.use(router); // Vue Router einbinden
    app.mount('#vue-app');
});
