<template>
<div class="box">
  <div class="top">
    <router-link to="/ceas"><img src="../../static/img/seek1.png" alt=""></router-link>
    <router-link to="/ceas">
      <img src="../../static/img/w2.png" alt="" >
    </router-link>
    <p>这些都是“断货王”···</p>
  </div>
  <div class="content">
    <div class="one">
      <div class="one0" v-for="i in 3">
      <img src="../../static/img/two3.png" alt="" class="tz">
      <div class="one1">
        <div class="one2" v-for="item in arr">
          <img :src="item.img" alt="" class="tz1">
          <p>{{item.z1}}</p>
          <p class="dan">{{item.z2}}</p>
          <p>还剩1000件</p>
          <p>马上去抢</p>
        </div>
      </div>
      </div>
    </div>
  </div>
  <aa></aa>
</div>
</template>

<script>
  import End from "@/components/End"
    export default {
        name: "Eye1",
      components:{
        aa:End
      },
      data(){
          return{
            arr:[
              {img:"../../static/img/two4.png",z1:"不易脱妆口红",z2:"￥59"},
              {img:"../../static/img/two5.png",z1:"花蕊唇彩",z2:"￥129"},
              {img:"../../static/img/two6.png",z1:"娇吻玉口红",z2:"￥88"},
            ]
          }
      },
      mounted(){
          $(".tz1").not($(".tz1").eq(2)).css({
            borderRight:"solid #ccc",
            paddingRight:"0.6rem",
            marginLeft:"0.6rem"
          })

      }
    }
</script>

<style scoped>

  .one2 p:nth-of-type(3){
    margin: 0.1rem 0;
  }
  .one2 p:nth-of-type(4){
    width: 1.36rem;
    height: 0.3rem;
    background: #f00;
    color: #ffffff;
    line-height: 0.28rem;
    border-radius: 0.2rem;
    margin-left: 0.32rem;
  }
  .dan{
    width: 1.5rem;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    border-bottom:2px solid #ccc;
    color: #f00;
    margin-left: 0.28rem;
  }
  .one2{
    float: left;
    margin-right: 0.2rem;
    width: 2rem;
    height: 3.2rem;
    font-size: 0.2rem;
    text-align: center;
  }
  .one1{
    margin: 0.2rem 0 0 0.4rem;
  }
      .tz{
    width: 100%;
    margin-top: 0.6rem;
    border-top: solid #ccc;
  }
  .one{
    width: 100%;
    height: 7.2rem;
    background: #ffffff;

    border-bottom: solid #ccc;
  }
  /*中间*/
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
  .top>a>img{
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
