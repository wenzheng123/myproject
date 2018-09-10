<template>
    <div class="box">
      <div class="top">
        <router-link to="/four"><img src="../../static/img/seek1.png" alt="" ></router-link>
        <img src="../../static/img/分享.png" alt="" >
         <p>品牌精选</p>
      </div>
      <div class="content">
        <div class="one"  v-for="i in 2">
        <img src="../../static/img/perfume1.png" alt="" class="z2" >
           <ul class="one1">
             <li class="one1_1" v-for="i in obj">
               <img :src="i.img" alt="">
               <p>HABA White Lady雪白...</p>
               <p>￥266.88</p>
             </li>
           </ul>
        </div>

    </div>
    </div>
</template>

<script>
  export default {
    name: "Perfume",
    data(){
      return{
        obj:[
      { img:"../../static/img/perfume2.png"},
      { img:"../../static/img/perfume2.png"},
      { img:"../../static/img/perfume3.png"},
        ]
      }
    },
   mounted(){
      $(".one").not($(".one").eq(0)).css("margin-top",0.4+"rem")
   }
  }
</script>

<style scoped>
  .one1{
    margin: 0.1rem 0 0 0.1rem;
    clear: both;
  }
  .one1_1 p:nth-child(3){
    color: #f00;
  }
  .one1_1 p{
    margin: 0.2rem 0 0 0.1rem;
  }
  .one1_1{
    width: 2.2rem;
    height: 3.2rem;
    background: #ffffff;
    font-size: 0.15rem;
    float: left;
    margin-left: 0.1rem;
  }
  .z2{
    width: 100%;
  }
  .one{
    width: 100%;
    height: 6.43rem;
  }
  .top{
    width: 100%;
    height: 1.1rem;
    background-color: #e53e42;
    font-size: 0.4rem;
    position: relative;
    text-align: center;
    line-height: 1.3rem;
    color: #ffffff;
  }
  .top img:nth-child(2){
    position: absolute;
    right: 0.24rem;
    top: 0.5rem;
  }
  .top>a:nth-child(1)>img{
    position: absolute;
    left: 0.24rem;
    top: 0.44rem;
  }
</style>
