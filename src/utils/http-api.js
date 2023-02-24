import http from '@/utils/http'
// 获取api目录所有js文件
const files = require.context('@/api', true, /\.js$/)

const $u = {
    api: [],
}

const install = (Vue, options) => {
    files.keys().forEach(key => {
        const api = files(key).default
        for (let item in api) {
            $u.api[item] = api[item]
        }
    })
    Vue.prototype.$u = $u
}

export default {
    install
}
