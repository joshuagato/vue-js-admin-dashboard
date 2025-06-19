// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../App.vue';

const routes = [
    { path: '/', component: HomeView },
    // Add more routes as needed
];

const router = createRouter({
    history: createWebHistory(), // or createMemoryHistory() for server-side rendering
    routes,
});

export default router;