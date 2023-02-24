import request from '@/utils/request'

const context = '/api'

export default {
    $u: {
        // get请求
        get: (url, params = {}, header = {}) => {
            url = context + url;
            return request({
                method: 'get',
                url,
                header,
                params
            })
        },

        // post请求
        post: (url, data = {}, header = {}) => {
            url = context + url;
            return request({
                url,
                method: 'post',
                header,
                data
            })
        },

        // put请求
        put: (url, data = {}, header = {}) => {
            url = context + url;
            return request({
                url,
                method: 'put',
                header,
                data
            })
        },

        // delete请求
        delete: (url, data = {}, header = {}) => {
            url = context + url;
            return request({
                url,
                method: 'delete',
                header,
                data
            })
        }
    }
}