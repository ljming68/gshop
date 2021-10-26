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
export default {
  name: 'home',
  components:{
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  }
}
</script>

<style lang="less" scoped>
</style>
