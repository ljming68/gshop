// 管理首页相关数据的vuex 子模块

import {reqCategoryList} from "@/api"

const state ={

    categoryList:[],
    xxx:'aaa',
}

const mutations = {
    aaa(state){ //state 是当前模块

    },

    /**
     * 存储三级分类列表
     */
    SAVE_CATEGORY_LIST(state,categoryList){
        state.categoryList = categoryList

    }
}

const actions = {
    bbb({commit}){// commit 触发的是所有匹配的mutation ,可能是其他模块中的mutation ，也可能是总的mutation

    },
    /**
     * 
     * 读取三级分类列表的异步action
     */
    async getCategoryList({commit}){
        //发送ajax 请求
        const result = await reqCategoryList()
        console.log(result.data)
        if(result.code===200){
            const categoryList = result.data
            commit("SAVE_CATEGORY_LIST",categoryList)
        }
    }

}
const getters = {}

export default{
    state,
    mutations,
    actions,
    getters
}