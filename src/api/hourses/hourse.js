import request from '@/utils/request'

// 查询文章列表
export function getHouse(query) {
    return request({
        url: '/api/house/list',
        method: 'get',
        params: query
    })
}
// 获取民宿细节
export function getHouseDetials(query) {
    return request({
        url: '/api/house/' + query,
        method: 'get',
    })
}
// 根据民宿ID获取民宿问答
export function getHourseQuestions(params) {

    return request({
        url: '/api/question/list',
        method: 'get',
        params: params
    })

}
// 根据民宿ID获取民宿问答
export function getHourseIsLike(params) {
    return request({
        url: '/api/house/collect/check',
        method: 'get',
        params: params
    })

}

// 收藏民宿
export function collectHouse(params) {
    return request({
        url: '/api/house/collect/' + params,
        method: 'post'
    })
}

// 取消收藏民宿
export function cancelCollectHouse(params) {
    return request({
        url: '/api/house/collect/cancel/' + params,
        method: 'post'
    })
}

//获取民宿收藏的列表
export function getLoveHomeList() {
    return request({
        url: '/api/house/collect/list',
        method: 'get'
    })


}




