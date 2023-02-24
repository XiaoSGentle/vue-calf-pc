import request from '@/utils/request'

// 查询文章列表
export function getHouse(query) {
    return request({
        url: '/api/house/list',
        method: 'get',
        params: query
    })
}
