import router from "./router";
import store from "./store"

// 白名单
const whiteList = ['/home', '/article/strategy/list', '/login']
// 路由判断登录 根据路由配置文件的参数
router.beforeEach((to, from, next) => {
  if (whiteList.indexOf(to.path) !== -1) {
    // 在免登录白名单，直接进入
    next()
  } else {
    const token = store.state.token
    if (token) { // 判断当前的token是否存在 ； 登录存入的token
      next()
    } else {
      //next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
      next({ path: '/login' })
    }
  }
})