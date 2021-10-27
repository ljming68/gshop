import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'


//  1.配置通用的基础路径和超时
// service 是一个可以发送任意ajax 请求的函数，当然可以作为对象使用
const service = axios.create({
   baseURL:'/mock', //基础路径   唯一与axios 不同的地方
   timeout:20000,// 超时时间
})

// 添加请求拦截器
service.interceptors.request.use((config)=>{
   //2.显示请求进度条,在请求拦截器中
   Nprogress.start()





   // 必须返回config ,后面会根据返回的config ，使用xhr对象发送 ajax请求
   return config
},()=>{})



// 添加响应拦截器
service.interceptors.response.use(
response=>{//请求成功返回的回调
   // 2.隐藏请求进度条,在响应拦截器中
   Nprogress.done()


   
   // 3.成功返回的数据不再是response，而是response.data
   return response.data
},
error=>{//请求失败返回的回调
   // 2.隐藏请求进度条,在响应拦截器中
   Nprogress.done()


   // 4.统一处理请求错误 ，具体请求可以选择处理或不处理
   alert(error.message||"未知请求错误")
   // throw error
   return Promise.reject(error)
})





// 暴露 service
export default service