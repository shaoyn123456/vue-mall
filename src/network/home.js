import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

//获取商品列表
export function goodListsdata(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
