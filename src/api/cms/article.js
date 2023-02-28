import request from '@/utils/request'

// 查询文章列表
export function getArticleList(query) {
  return request({
    url: '/api/cms/article/list',
    method: 'get',
    params: query
  })
}

export function getArticleD(query) {
  return request({
    url: '/api/cms/article/detail/' + query,
    method: 'get'
  })
}


export function addArtical(query) {

  return request({

    url: '/api/cms/article',
    method: 'post',
    data: query
  })
}