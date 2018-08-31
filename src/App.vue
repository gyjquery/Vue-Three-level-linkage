<template>
  <div id="app">
    <el-select v-model="value" placeholder="请选择省" @change="hander(1)">
      <el-option v-for="(item,index) in options" :key="index" :label="item.name" :value="item.name">
      </el-option>
    </el-select>
    <el-select v-model="value1" placeholder="请选择市" @change="hander(2)">
      <el-option v-for="(item,index) in city" :key="index" :label="item.name" :value="item.name">
      </el-option>
    </el-select>
    <el-select v-model="value2" placeholder="请选择区">
      <el-option v-for="(item,index) in area" :key="index" :label="item" :value="item">
      </el-option>
    </el-select>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
export default {
  name: 'App',
  data(){
    return{
      options: [],
      value: '',
      value1:'',
      value2:'',
      city:[],
      area:[]
    }
  },
  computed:{
    ...mapState(['place']),

  },
  mounted(){
    this.$store.dispatch('getPlace')
  },
  methods:{
    hander(index){
      if(index==1){
        const city=this.options.find((item,index)=>(
          item.name==this.value
        ))
        this.city=city.city
        if(this.value1){
           this.value1=""
           this.value2=""
           this.area=[]

        }
      }else if(index==2){
        const area=this.city.find((item,index)=>(
          item.name==this.value1
        ))
        this.area=area.area
        this.value2=""
      }
    },
    hander1(value){
      console.log(value)
    }
  },
  watch:{
    place(value){
      this.options=value
    }
  }
}
</script>

<style scoped>
  .el-select{
    width:120px;
    margin-right:20px;
  }

</style>
