/**
 * 包含应用的所有接口的接口请求函数
 * 函数内部调用ajax 函数发送请求
 * 函数返回的是promise 对象
 * 
 */

 import axios from './axios'


export function reqCategoryList(){

    // return axios('/fruits')   //发送不带参数的get请求

    return axios({
        url:'/categoryList',
        method:'get',
    })
}