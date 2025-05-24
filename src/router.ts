// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import UserPage from './views/users.vue';


const routes = [
    {
        path: "/users",
        name: "user",
        component: UserPage,
    },
]
// Import other components as needed


const router = createRouter({
    history: createWebHistory(), // This is for Vite projects
    routes,
  });
  
  export default router;
