import vue from 'vue'
import vueRouter from 'vue-router'
vue.use(vueRouter)

import routes from './routes'

export default new vueRouter({
    mode:'history',
    routes,
})