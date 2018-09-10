<template>
 <div class="box">
   <div class="two" >
     <ul class="one0">
     <li class="one1" v-for="item in obj">
       <img :src="item.img" alt="">
       <p>{{item.z1}}</p>
     </li>
       <li class="one2" v-for="item in obj1">
         <img :src="item.img" alt="">
         <p>{{item.z1}}</p>
       </li>
     </ul>
     <div class="one6" @click="off">
     取消
   </div>
   </div>

 </div>
</template>

<script>

    export default {
        name: "Share",
     data(){
          return{

            obj:[
              {img:"../../static/img/share1.png", z1:"微信朋友圈"},
              {img:"../../static/img/share2.png", z1:"微信好友"},
              {img:"../../static/img/share3.png", z1:"QQ好友"},
            ],
            obj1:[
              {img:"../../static/img/share4.png", z1:"QQ空间"},
              {img:"../../static/img/share5.png", z1:"微博"},
              {img:"../../static/img/share6.png", z1:"复制链接"},
            ]
          }
     },
      methods:{
          off(){

            $(".two").css("display","none")
            $(".end").css("display","none")
          }
      }

    }
</script>

<style scoped>
  .one6{
    width: 1.72rem;
    height: 0.5rem;
    background: #f00;
    position: absolute;
    bottom: 0.2rem;
    left: 2.75rem;
    text-align: center;
    font-size: 0.3rem;
    color: #ffffff;
    line-height: 0.5rem;
    border-radius: 0.1rem;
  }
  .one0{
    margin: 0.4rem 0 0 0.9rem;
  }
  .one2{
    text-align: center;
    float: left;
    margin: 0.45rem 1rem 0 0.285rem;
  }
  .one1{
    text-align: center;
    float: left;
    margin: 0.45rem 1rem 0 0.1rem;
  }
.two{
  width: 100%;
  height: 4.5rem;
  background: #ffffff;
  z-index: 1;
  position: fixed;
  bottom:0;
  left: 0;
  font-size: 0.2rem;

}

</style>
