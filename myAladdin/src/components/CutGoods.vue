<template>
  <div class="content" >
  <div class="top">
    <router-link to="/">
      <img class="return" src="../../static/img/seek1.png" alt="">
    </router-link>
    <p >这些都是“断货王”···</p>
    <a href="">
      <img src="../../static/img/fenxiang.png" alt="">
    </a>
  </div>
  <ul class="top_1">
  </ul>
  <div class="one4" v-for="num in 3">
    <img src="../../static/img/two3.png" alt="">
    <ul class="one4_1">
      <li>
        <img src="../../static/img/two4.png" alt="">
        <p>不易脱妆口红</p>
        <span>¥59</span>
        <div class="qiang">
          <p>还剩1000件</p>
          <p class="qiang">马上去抢</p>
        </div>
      </li>
      <li>
        <router-link to="/Details">
        <img src="../../static/img/two5.png" alt="">
        <p>花蕊唇彩</p>
        <span>￥129</span>
        <div class="qiang">
          <p>还剩1000件</p>
          <p >马上去抢</p>
        </div>
        </router-link>
      </li>
      <li>
        <img src="../../static/img/two6.png" alt="">
        <p>娇吻玉口红</p>
        <span>￥88</span>
        <div class="qiang">
          <p>还剩1000件</p>
          <p class="qiang">马上去抢</p>
        </div>
      </li>
    </ul>
  </div>
  <End></End>
</div>

</template>

<script>
  import  End from '@/components/End'
  export default {
    name: "CutGoods",
    components:{
      End
    },
    mounted(){
      $('.one4').not($('.one4').eq(0)).css('margin-top',0.2+'rem')
    }
  }
</script>

<style scoped>
  .top_1{
    width: 100%;
    height: 0.6rem;
    padding-top: 1.1rem;
    background-color: #ffffff;
  }
  /*一*/
  .top{
    width: 100%;
    height: 1.1rem;
    background-color: #e53e42;
    position: fixed;
    z-index: 99;
    display: flex;
    justify-content: space-between;
  }
  .top>p{
    width: 100%;
    height: 100%;
    font-size: 0.35rem;
    color: #ffffff;
    text-align: center;
    line-height: 1rem;
  }
  .top a{
    width: 0.35rem;
    height: 1.1rem;
    position: relative;
    margin: 0 0.3rem;
  }
  .top .return{
    width: 0.25rem;
    height: 0.4rem;
  }
  .top img{
    width: 0.35rem;
    height: 0.35rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
  .content{
    margin-bottom: 1rem;
    color: #666666;
  }
  .one4{
   clear: both;
    background-color: #ffffff;
  }

  .one4_1 li{
    width: 2.24rem;
    height: 2.45rem;
    border-right: solid #cccc;
  }
  .one4_1 li a{
    color: #666666;
  }
  .one4_1>li span{
    color: #f00;
  }
  .one4_1 {
    width: 100%;
    height: 3.1rem;
    font-size: 0.25rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .one4>img:nth-child(1){
    width: 100%;
    height: 3rem;
  }

  .one_4>img{
    width: 75%;
    height: 100%;
  }
  .qiang>p:nth-of-type(1){
    margin: 0.05rem 0;
    font-size: 0.2rem;
  }
  .qiang>p:nth-of-type(2){
    width: 1.4rem;
    height: 0.3rem;
    cursor: pointer;
    background-color: #e53e42;
    font-size: 0.2rem;
    color: #ffffff;
    line-height: 0.3rem;
    border-radius: 0.3rem;
    margin: 0.05rem auto;
  }

</style>
