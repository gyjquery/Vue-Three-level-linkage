<template>
  <div @click="hander">A路由</div>
</template>

<script>
    export default {
      methods:{
        hander(){
          this.$router.push('/b?name=gaoyang')
        }
      }
    }
</script>

<style scoped lang="less">

</style>
