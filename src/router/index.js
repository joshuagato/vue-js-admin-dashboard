// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../App.vue';
import Layout from "../components/Layout.vue";

const routes = [
    { path: '/', component: Layout },
    { path: '/url(.*)*', component: Layout },
    // { path: '/', component: Layout },
    // { path: '/users', children: [ { path: 'userType(.*)*', component: Layout } ] },
    // Add more routes as needed
];

const router = createRouter({
    history: createWebHistory(), // or createMemoryHistory() for server-side rendering
    routes,
});

export default router;