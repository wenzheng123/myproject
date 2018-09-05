<template>
  <div class="box">
   <div class="top">
     <img src="../../static/img/tl.png" alt="">
     <img src="../../static/img/tr.png" alt="">
     <img src="../../static/img/tz.png" alt="" class="tz">
     <input  @click = "sou" type="text" placeholder="输入商品关键词">
   </div>
    <ul class="top_1">
      <li><router-link to="/one">推荐</router-link></li>
      <li><router-link to="/two">贼惦记</router-link></li>
      <li><router-link to="/three">美食</router-link></li>
      <li><router-link to="/four">母婴</router-link></li>
    </ul>

  <ul class="end">
    <li><img src="../../static/img/end1.png" alt=""></li>
    <li><img src="../../static/img/end2.png" alt=""></li>
    <li><img src="../../static/img/end5.png" alt=""></li>
    <li><img src="../../static/img/end4.png" alt=""></li>
    <li><img src="../../static/img/end3.png" alt=""></li>
  </ul>

  </div>
</template>

<script>
    export default {
        name: "Tou",

      methods:{
          sou(){
            var tz = document.getElementsByClassName("tz")
            console.log(tz)
           tz[0].style.display = "none"
          }
      }
    }
</script>

<style scoped>
  .end>li:nth-child(3){
    margin-top: -0.3rem;
  }
   .end>li{
   margin-top: -0.1rem;
     z-index: 1;
   }
  .end{
    width: 100%;
    height: 0.98rem;
    border-top:solid #e6e6e6 ;
    border-bottom:solid #e6e6e6;
    z-index: 3;
    background: #ffffff;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;

  }
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
  .top>img:nth-child(1){
     position: absolute;
     left: 0.24rem;
     top: 0.44rem;
   }
  .top>img:nth-child(2){
    position: absolute;
    right: 0.2rem;
    top: 0.4rem;
  }
  .top input{
    width: 4rem;
    height: 0.48rem;
    /*margin-top: 0.15rem;*/
    border-radius: 0.1rem;
    position: absolute;
    top: 0.36rem;
    left: 1.94rem;
  }
  input::-webkit-input-placeholder{ /*WebKit browsers*/
    color: red;
    font-size: 0.1rem;
    text-align: center;
    line-height: 0.08rem;
  }
  .tz{
    position: absolute;
    left:2.44rem;
    top: 0.45rem;
    z-index: 1;
  }


</style>
