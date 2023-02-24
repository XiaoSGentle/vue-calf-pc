import request from '@/utils/request'

export function getAdvList(query) {
    return request({
        url: '/api/adv/list',
        method: 'get',
        params: query,
    });
}

// 查询文章列表
export function getCitys() {
    return request({
        url: '/api/location/city/tree',
        method: 'get',
    })
}