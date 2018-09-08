<template>
 <div class="content">
    <cc></cc>
   <div class="two2">
     <hr />
     <div class="two2_1">
       热销项目
     </div>
     <router-link to="/five">
     <div class="two3">
     <div class="two2_2" v-for="item in arr">
     <img :src="item.src" alt="">
     <p>{{item.z}}</p>
     </div>
 </div> </router-link>
   </div>

   <div class="two4">
     <hr />
     <div class="two2_1">
       爆品推荐
     </div>
     <div class="two3">
       <div class="two4_1" v-for="item in arr1">
         <img :src="item.src" alt="">
       </div>
     </div>
   </div>
 </div>
</template>

<script>
  import  Lb from '@/components/Lb'
    export default {
        name: "Zthree",
      components:{
        cc:Lb
      },
      data(){
        return{
          arr:[
            {src:"../../static/img/three1.png",z:"糖果"},
            {src:"../../static/img/three2.png",z:"膨化"},
            {src:"../../static/img/three3.png",z:"方便面"},
            {src:"../../static/img/three4.png",z:"巧克力"},
          ],
          arr1:[
            {src:"../../static/img/b1.png"},
            {src:"../../static/img/b2.png"},
            {src:"../../static/img/b1.png"},
            {src:"../../static/img/b2.png"},
            {src:"../../static/img/b1.png"},
            {src:"../../static/img/b2.png"},
          ]
        }
      }
    }
</script>

<style scoped>
  .two4_1{
    float: left;
    margin-right: 0.15rem;
  }
  .two4 {
    position: relative;
    margin-top: 0.2rem;
    background: #ffffff;
    width: 100%;
    height: 11rem;
  }
  .two2_2{
    float: left;
    margin-right: 0.55rem ;
  }
  .two3{
    position: absolute;
    left: 0.4rem;
    top: 1.34rem;
    overflow: hidden;
  }
 .two2_2 p{
   font-size: 0.3rem;
 }
 .two2_2 p{
   margin-left: 0;
 }
 hr{
   width: 2.7rem;
   height: 0;
   position: absolute;
   left: 2.25rem;
   top: 0.31rem;
 }
 .two2_1{
   width: 1.54rem;
   font-size: 0.3rem;
   background: #ffffff;
   position: absolute;
   top: 0.1rem;
   left: 2.85rem;
 }
  .two2{
    margin-top: 0.2rem;
    text-align: center;
    width: 100%;
    height: 4rem;
    background: #ffffff;
    position: relative;
  }
</style>
