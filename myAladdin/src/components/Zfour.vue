<template>
<div class="content">
  <cc></cc>
  <div class="two2">
    <hr />
    <div class="two2_1">
      奶粉专区
    </div>
  <!--二-->
  <div class="one4">
    <router-link to="/sp"><img src="../../static/img/four1.png" alt=""></router-link>
    <ul class="one4_1">
      <li>
        <router-link to="/milk"><img src="../../static/img/four2.png" alt=""></router-link>
        <p>诺优能幼儿配</p>
        <span>¥59</span>
      </li>
      <li>
        <img src="../../static/img/four2.png" alt="">
        <p>诺优能幼儿配</p>
        <span>¥129</span>
      </li>
      <li>
        <img src="../../static/img/four2.png" alt="">
        <p>诺优能幼儿配</p>
        <span>¥88</span>
      </li>
    </ul>
  </div>
  </div>

  <!--二-->
  <div class="two2">
    <hr />
    <div class="two2_1">
      纸尿裤专区
    </div>
    <!--二-->
    <div class="one4">
      <img src="../../static/img/four3.png" alt="">
      <ul class="one4_1">
        <li>
          <img src="../../static/img/four4.png" alt="">
          <p>不易脱妆口红</p>
          <span>¥59</span>
        </li>
        <li>
          <img src="../../static/img/four4.png" alt="">
          <p>不易脱妆口红</p>
          <span>¥129</span>
        </li>
        <li>
          <img src="../../static/img/four4.png" alt="">
          <p>不易脱妆口红</p>
          <span>¥88</span>
        </li>
      </ul>
    </div>
  </div>
</div>

</template>

<script>
  import  Lb from '@/components/Lb'
    export default {
        name: "Zfour",
      components:{
        cc:Lb
      }
    }
</script>

<style scoped>
  .one4_1>li:nth-child(2)>img{
    padding: 0 0.47rem;
    border-right: solid #cccc;
    border-left: solid #cccc;
  }
  .one4_1 li{
    width: 2.24rem;
    height: 2.45rem;
  }
  .one4_1>li>span{
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
  .one4>a>img{
    width: 100%;
    height: 100%;
  }
  .one4{
    margin-top: 0.6rem;
  }
  /*二*/

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
    background: #ffffff;
    position: relative;
    width: 100%;
    height: 6.5rem;
    overflow: hidden;
  }
</style>
