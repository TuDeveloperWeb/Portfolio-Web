import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'layout',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [
            {
              path: '',
              name: 'home',
              component: () => import('@/pages/HomePage.vue') // Se inyecta en MainLayout
            }
        ]
    }

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router