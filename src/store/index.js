import Vuex from "vuex"
import vue from "vue"
vue.use(Vuex)

import home from "./modules/home"
import user from "./modules/user"

const mutations = {
    xxx(state){ //总的state

    }
}

const actions = {
    yyy({commit}){

    }
}

const getters = {
    zzz(state){
        return state.home.xxx.length
    }
}

export default new Vuex.Store({
    
    mutations,
    actions,
    getters,
    modules:{
        home,
        user
    }
})