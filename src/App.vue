<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

import {getFruits} from './api'
export default {
  name: 'APP',
  components:{
    Header,
    Footer,
    
  },
  mounted(){
    // getFruits().then(result =>{
    //   console.log('result',result)
    // })
    this.$store.dispatch('getCategoryList')
  }
}
</script>

<style lang="less" scoped>

</style>
