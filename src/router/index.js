import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CounterView from '../views/CounterView.vue';

// Routen definieren
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/counter',
        name: 'Counter',
        component: CounterView,
    },
];

// Hash History für WordPress verwenden
const router = createRouter({
    history: createWebHashHistory(), // Hash-basierte URLs
    routes,
});

export default router;
