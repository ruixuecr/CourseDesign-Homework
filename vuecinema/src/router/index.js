import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/index',
        name: 'Index',
        component: () => import('../views/Index.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import('../views/Home.vue')
            },
            {
                path: '/info',
                name: 'Info',
                component: () => import('../views/Info.vue')
            },
            {
                path: '/history',
                name: 'History',
                component: () => import('../views/History.vue')
            },
            {
                path: '/morelist',
                name: 'MoreList',
                component: () => import('../views/MoreList.vue')
            },
            {
                path: '/videoview',
                name: 'VideoView',
                component: () => import('../views/VideoView.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
