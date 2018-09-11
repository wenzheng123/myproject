<template>
    <div class="box">
      <div class="top">
        <router-link to="/"><img src="../../static/img/seek1.png" alt=""></router-link>
        <p @click="cZ">搜索</p>
        <img src="../../static/img/seek2.png" alt="" class="tz">
        <input class="cc" type="text" placeholder="输入商品关键词" v-model="aa">
      </div>
      <!--<router-view></router-view>-->
      <Seekx1 @change-name="cname($event)">

      </Seekx1>
      <!--父传子-->
      <Seekx2 class="seek" :inputName="name"></Seekx2>
    </div>
</template>

<script>
  import  Seekx1 from "@/components/Seekx1"
  import  Seekx2 from "@/components/Seekx2"
    export default {
        name: "Seek",
      components:{
          Seekx1,
          Seekx2
      },
      data(){
          return{
            aa:'',
            name:''
          }
      },

      methods:{
        sou(){
          var tz = document.getElementsByClassName("tz")
          console.log(tz)
          tz[0].style.display = "none"
        },
        cname(name){
         $(".cc").val(name)
        },
        cZ(){
          this.name = this.aa
          this.aa = ""
          $(".seek").css("display","block")
        }

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

  .top>p{
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
