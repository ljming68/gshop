// 管理首页相关数据的vuex 子模块

import {reqCategoryList,reqBannerList,reqFloorList} from "@/api"

const state ={

    categoryList:[],
    bannerList:[],
    floorList:[],
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

    },
    /**
     * 存储轮播图列表
     */
    SAVE_BANNER_LIST(state,bannerList){
        state.bannerList = bannerList

    },
    /**
     * 存储floor列表
     */
    SAVE_FLOOR_LIST(state,floorList){
        state.floorList = floorList

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
    },

     /**
     * 
     * 读取轮播图列表的异步action
     */
    async getBannerList({commit}){
        //发送ajax 请求
        const result = await reqBannerList()
        console.log(result.data)
        if(result.code===200){
            const bannerList = result.data
            commit("SAVE_BANNER_LIST",bannerList)
        }
    },

    /**
     * 
     * 读取floor列表的异步action
     */
    async getFloorList({commit}){
        //发送ajax 请求
        const result = await reqFloorList()
        console.log(result.data)
        if(result.code===200){
            const floorList = result.data
            commit("SAVE_FLOOR_LIST",floorList)
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