
// 使用mockjs 来mock数据接口

import Mock from "mockjs"
import floors from "./floors.json"

Mock.mock('/mock/floors',{
    code:200,
    message:'请求成功',
    data:floors
})

console.log('mockServer')