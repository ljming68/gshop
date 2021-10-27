<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <TodayRecommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from './listContainer'
import TodayRecommend from './todayRecommend'
import Rank from './rank'
import Like from './like'
import Floor from './floor'
import Brand from './brand'

import {mapState} from 'vuex'

export default {
  name: 'home',
  components:{
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  },

  computed:{
    ...mapState({
      floorList: state => state.home.floorList
    })
  },

  mounted(){
    this.$store.dispatch('getFloorList')
  }
}
</script>

<style lang="less" scoped>
</style>
