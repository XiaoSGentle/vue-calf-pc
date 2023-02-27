import request from '@/utils/request'

export function getScoreReport(query) {
    return request({
        url: '/api/score/user/report',
        method: 'get',
        params: query,
    });
}



export function getSCoreListByPage(query) {
    return request({
        url: '/api/score/log/list',
        method: 'get',
        params: query,
    });
}

export function getLivingPersion() {
    return request({
        url: '/api/living/person/list',
        method: 'get',
    });
}
export function addLivingPersion(params) {


    return request({

        url: "/api/living/person",
        method: "post",
        data: params
    })
}

export function delLivingPersionById(id) {
    return request({
        url: "/api/living/person/" + id,
        method: "delete",
    })
}

export function updateLivingPersion(params) {
    return request({
        url: "/api/living/person",
        method: "put",
        data: params
    })
}

export function getPersionById(id) {
    return request({
        url: "/api/living/person/" + id,
        method: "get",
    })
}




