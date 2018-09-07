<template>
  <div class="box">
   <div class="top">
     <img src="../../static/img/tl.png" alt="">
     <img src="../../static/img/tr.png" alt="">
     <img src="../../static/img/tz.png" alt="" class="tz">
     <input  @click = "sou" type="text" placeholder="输入商品关键词">
   </div>
    <ul class="top_1">
      <li>推荐</li>
      <li>贼惦记</li>
      <li>美食</li>
      <li>母婴</li>
    </ul>

  <ul class="end">
    <li>
      <router-link to="/Sort">
        <img src="../../static/img/end1.png" alt="">
      </router-link>

    </li>
    <li><img src="../../static/img/end2.png" alt=""></li>
    <li><img src="../../static/img/end5.png" alt=""></li>
    <li><img src="../../static/img/end4.png" alt=""></li>
    <li><img src="../../static/img/end3.png" alt=""></li>
  </ul>
    <router-view></router-view>
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
    position: fixed;
    z-index: 99;
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
.top_1>li{
  line-height: 0.6rem;
}
.top_1>li:hover{
  color: red;
}
  /*一*/
  .top{
    width: 100%;
    height: 1.1rem;
    background-color: #e53e42;
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
