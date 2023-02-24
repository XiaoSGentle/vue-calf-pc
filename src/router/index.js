import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
]
// 获取router目录所有js文件
const files = require.context('@/router', true, /\.js$/)
files.keys().forEach(key => {
    const route = files(key).default
    if (route) {
        for (let item of route) {
            routes.push(item)
        }
    }
})

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
