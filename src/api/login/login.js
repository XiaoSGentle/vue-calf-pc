import request from '@/utils/request'

// 查询文章列表
export function login(query) {
    return request({
        url: '/api/login',
        method: 'post',
        data: query
    })
}


// 查询文章列表
export function getUserInfo() {
    return request({
        url: '/api/user/getInfo',
        method: 'get'
    })
}



