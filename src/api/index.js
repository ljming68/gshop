/**
 * 包含应用的所有接口的接口请求函数
 * 函数内部调用ajax 函数发送请求
 * 函数返回的是promise 对象
 * 
 */

 import axios from './axios'
 import ajaxMock from "./ajaxMock"


export function reqCategoryList(){

    // return axios('/fruits')   //发送不带参数的get请求

    return axios({
        url:'/categoryList',
        // method:'get',  默认get ,可以不写
    })
}

// 获取轮播图数据  get
// export function reqBannerList(){

//     return axios({
//         url:'/bannerList',
//         method:'get',
//     })
// }

export const reqBannerList = ()=> axios('/bannerList')
    

// mock接口函数

export const reqFloorList = ()=> ajaxMock('/floors')

// reqFloorList().then(result =>{
//     console.log(result)
// })