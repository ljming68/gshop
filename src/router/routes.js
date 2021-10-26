import Home from '@/views/home'
import Login from '@/views/login'
import Search from '@/views/search'
import Register from '@/views/register'

export default[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/login',
        component: Login,
        meta:{
            isFooter:true
        },
        
    },
    {
        path:'/search/:msgid?', // :msgid 后面一定要加上？号
        component:Search,
        name:'search'
    },
    {
        path:'/register',
        component:Register,
        meta:{
            isFooter:true
        },
       
    },
    {
        path:'/',
        redirect:'home',

        
    }
    
    
]

