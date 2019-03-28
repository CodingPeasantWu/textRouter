<template>
    <div>
        <h1>接收路由的参数</h1>
        <h1>param.id:{{$route.params}}</h1>
        <h2>query.status{{$route.query.queryId}}</h2>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template> 

<script>
export default {
    name:'Router1',
    data () {
        return {
            
        }
    },
    methods: {
        
    },
    mounted() {
        console.log(this.$router);
        console.log(this.$route);
        console.log(this.$route.query);
        console.log(this.$route.params)
    },
}
</script>

<style scoped>

</style>
