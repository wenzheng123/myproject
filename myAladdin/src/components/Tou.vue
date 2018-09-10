<template>
  <div class="box">
   <div class="top">
     <router-link to="/" class="nav1">
     <img src="../../static/img/tl.png" alt="">
     </router-link>
     <router-link to="/news"><img src="../../static/img/tr.png" alt="" class="news"></router-link>
     <img src="../../static/img/tz.png" alt="" class="tz">
     <router-link to="/seek"><input  @click = "sou" type="text" placeholder="输入商品关键词"></router-link>
   </div>
    <ul class="top_1">
      <li><router-link to="/one">推荐</router-link></li>
      <li><router-link to="/two">贼惦记</router-link></li>
      <li><router-link to="/three">美食</router-link></li>
      <li><router-link to="/four">母婴</router-link></li>
    </ul>
    <zz></zz>
  </div>
</template>

<script>
  import End from "@/components/End"
    export default {
        name: "Tou",
      components:{
        zz:End,
      },

      methods:{
          sou(){
            var tz = document.getElementsByClassName("tz")
            console.log(tz)
           tz[0].style.display = "none"
          }
      },

    }
</script>

<style scoped>

  /*end*/

/*二*/
.top_1{
  width: 100%;
  height: 0.6rem;
  font-size: 0.3rem;
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
}
.top_1 li{
  line-height: 0.6rem;
}
  .top_1>li>a{
    color: #000;
  }
.top_1>li>a:hover{
  color: red;
}
  /*一*/
  .top{
    width: 100%;
    height: 1.1rem;
    background-color: #e53e42;
    position: fixed;
    position: relative;
  }
  .nav1 img{
     position: absolute;
     left: 0.24rem;
     top: 0.44rem;
   }
  .news{
    position: absolute;
    right: 0.2rem;
    top: 0.4rem;
  }
  .top input{
    width: 4rem;
    height: 0.48rem;
    border-radius: 0.1rem;
    position: absolute;
    top: 0.36rem;
    left: 1.94rem;
    font-size: 0.3rem;
  }
  input::-webkit-input-placeholder{
    color: red;
    text-align: center;
  }
  .tz{
    position: absolute;
    left:2.44rem;
    top: 0.45rem;
    z-index: 1;
  }


</style>
