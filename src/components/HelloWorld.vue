<template>
  <div>
    <h1 @click="handleClick">从这个路由传参到别的路由</h1>
    <router-link  :to="{name:'Router1',params:{id:status3},query:{queryId:status2}}">
      router-link带参数跳转
    </router-link>  
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      status:110,
      status2:120,
      status3:119
    }
  } ,
  methods: {
    handleClick(){
      this.$router.push({name:'Router1',params:{id:this.status3},query:{queryId:this.status2}});
    }
    
  }, 
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
