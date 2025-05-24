// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import UserPage from './views/users.vue';
import FormPage from './views/form.vue';

const routes = [
    {
        path: "/users",
        name: "user",
        component: UserPage,
    },
    {
        path: "/form",
        name: "form",
        component: FormPage,
    }
]
// Import other components as needed


const router = createRouter({
    history: createWebHistory(), // This is for Vite projects
    routes,
  });
  
  export default router;
