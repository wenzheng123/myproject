<template>
  <div class="content">
    <div class="one2">
      <div class="one_1">
        <router-link to="/ceas"><img src="../../static/img/g1.png" alt=""></router-link>
      </div>
      <div class="one_2">
        <img src="../../static/img/g2.png" alt="">
      </div>
      <div class="one_4">
        <img src="../../static/img/g3.png" alt="">
      </div>
    </div>
    <div class="two">
      <div class="two1">即将开售</div>
      <div class="two2">
        <hr />
        <div class="two2_1">
         美妆专区
        </div>
        <div class="two3">
        <div class="two2_2" v-for="item in arr">
          <img :src="item.src" alt="">
          <p>即将开始</p>
          <span>倒计时: <span class="red">00</span>时<span class="red">00</span>分<span class="red">00</span>秒</span>
        </div>
      </div>
      </div>
      <!--二-->
      <div class="two4">
        <hr />
        <div class="two2_1">
          美妆专区
        </div>
        <div class="two3">
          <div class="two2_2" v-for="item in arr">
            <img :src="item.src" alt="">
            <p>即将开始</p>
            <span>倒计时: <span class="red">00</span>时<span class="red">00</span>分<span class="red">00</span>秒</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Ztwo",
      data(){
          return{
            arr:[
              {src:"../../static/img/r1.png"},
              {src:"../../static/img/r2.png"},
              {src:"../../static/img/r3.png"},
              {src:"../../static/img/r4.png"},
              {src:"../../static/img/r5.png"},
              {src:"../../static/img/r6.png"},
            ]
          }
      }
    }
</script>

<style scoped>

   .two4{
     position: relative;
     top: 7rem;
   }
  .two2_2 p{
    margin-left: 0;
  }
  .two2_2{
    width: 2rem;
    height: 2.9rem;
    float: left;
    margin-right: 0.25rem;
  }
  .two3{
    position: absolute;
    left: 0.35rem;
    top: 1.35rem;
    font-size: 0.17rem;
    overflow: hidden;
  }
  .red{
    color: #f00;
  }
  hr{
    width: 2.7rem;
    height: 0;
    position: absolute;
    left: 2.25rem;
    top: 1.08rem;
  }
  .two2_1{
    width: 1.54rem;
    font-size: 0.3rem;
    background: #ffffff;
    position: absolute;
    top: 0.85rem;
    left: 2.85rem;
  }
  .two1{
    margin-top: 0.2rem;
    font-size: 0.35rem;
    color: #f00;
    text-align: center;
  }
 .two{
   margin-top: 0.2rem;
   height: 14.8rem;
   position: relative;
   background: #ffffff;
   text-align: center;
   /*overflow: hidden;*/
 }
  /*二*/
  .content{
    position: relative;
  }
  .one_4>img{
    width: 80%;
    height: 100%;
  }
  .one_4{
    position: absolute;
    top: 1.5rem;
    right: 0.1rem;
    width: 4rem;
    height: 1.40rem;
    text-align: center;
  }

  .one_1>a>img{
    width: 80%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0.3rem;
  }
  .one_1{
    width: 2.9rem;
    height: 2.8rem;
    border-right: solid #c2c2c2;
    position: relative;
  }
  .one_2>img{
    width: 80%;
    height: 100%;
  }
  .one_2{
    text-align: center;
    width: 4rem;
    height: 1.40rem;
    position: absolute;
    right: 0.15rem;
    top: 0.05rem;
    border-bottom:solid #c2c2c2 ;

  }
  .one2{
    /*margin: 0.1rem auto;*/
    border-bottom:solid #c2c2c2 ;
    border-top:solid #c2c2c2 ;
    padding: 0.1rem 0;
    background: #ffffff;
  }
</style>
