
import request from '@/utils/request'

//提交民宿订单

export function createOrder(params) {
    return request({
        url: '/api/order/create',
        method: 'post',
        data: params
    })
}

// 获取民宿订单列表
export function getOrderList() {
    return request({
        url: '/api/order/list',
        method: 'get'
    })
}
// 删除订单


export function delOrder(id) {
    return request({
        url: '/api/order/' + id,
        method: 'delete'
    })
}


// 支付订货


export function payOrder(params) {
    return request({
        url: '/api/order/pay',
        method: 'post',
        data: params
    })
}



