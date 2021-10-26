<template>
  <div>
    <h2>search</h2>
    <p>{{$route.params.msgid}}</p>  
    <p>{{$route.query.content}}</p>
  </div>
</template>

<script>
export default {
  name: 'search',
}
</script>

<style lang="less" scoped>

</style>
