<template>
    <div class="box">
      <div class="top">
        <router-link to="/"><img src="../../static/img/seek1.png" alt=""></router-link>
        <p><router-link to="/mo">搜索</router-link></p>
        <img src="../../static/img/seek2.png" alt="" class="tz">
        <input type="text" placeholder="输入商品关键词" v-model="aa">
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Seek",
      data(){
          return{
            aa:''
          }
      },
      methods:{
        sou(){
          var tz = document.getElementsByClassName("tz")
          console.log(tz)
          tz[0].style.display = "none"
        },

      },
      watch:{
          aa(newaa,oldaa){
            if(newaa=="唇彩"){
                location.replace('http://10.90.81.229:8080/#/mo')
            }
          }
      },

    }
</script>

<style scoped>

  .top>p>a{
    position: absolute;
    right: 0.22rem;
    bottom: 0.24rem;
    color: #ffffff;
  }
  .top{
    width: 100%;
    height: 1.1rem;
    background-color: #e53e42;
    font-size: 0.4rem;
    position: relative;
  }
  .top>a>img{
    position: absolute;
    left: 0.24rem;
    top: 0.44rem;
  }

  .top input{
    width: 4.8rem;
    height: 0.48rem;
    border-radius: 0.1rem;
    padding-left: 0.46rem;
    position: absolute;
    top: 0.34rem;
    left: 0.7rem;
    font-size: 0.3rem;
  }
  input::-webkit-input-placeholder{
    color: red;
  }
  .tz{
    position: absolute;
    left:0.85rem;
    bottom: 0.34rem;
    z-index: 1;
  }
</style>
