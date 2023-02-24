import Page404 from '@/views/error/404.vue'
import Home from '@/views/Home.vue'

export default [
    {
        path: '/',
        redirect: { name: "Home" }
    },
    {
        path: '/index',
        name: 'index',
        redirect: { name: "Home" }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '*',
        name: 'Page404',
        component: Page404
    },
]