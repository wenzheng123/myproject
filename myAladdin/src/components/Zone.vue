<template>
  <div class="content">
    <cc></cc>
    <div class="one">
      <div class="one1">
        <span>
          <img src="../../static/img/one1.png" alt=""> 新品上市  促销大庆
        </span></div>
      <div class="one2">
        <div class="one_1">
           <p class="one_3">限时断货</p>
          <img src="../../static/img/one2.png" alt="">
        </div>
        <div class="one_2">
          <img src="../../static/img/one3.png" alt="">
        </div>
        <div class="one_4">
          <img src="../../static/img/one4.png" alt="">
        </div>
      </div>
      <div class="one3">
        <span>
        <img src="../../static/img/two2.png" alt=""> 今日推荐</span>
      </div>
      <div class="one4">
        <router-link to="/eye"><img src="../../static/img/two3.png" alt=""></router-link>
        <ul class="one4_1">
          <li>
            <router-link to="/eye2"> <img src="../../static/img/two4.png" alt=""></router-link>
            <p>不易脱妆口红</p>
            <span>¥59</span>
          </li>
          <li>
            <img src="../../static/img/two5.png" alt="">
            <p>不易脱妆口红</p>
            <span>¥59</span>
          </li>
          <li>
            <img src="../../static/img/two6.png" alt="">
            <p>不易脱妆口红</p>
            <span>¥59</span>
          </li>
        </ul>
      </div>
      <!--二-->
      <div class="one4">
        <router-link to="/eye"><img src="../../static/img/two3.png" alt=""></router-link>
        <ul class="one4_1">
          <li>
           <router-link to="/eye2"> <img src="../../static/img/two4.png" alt=""></router-link>
            <p>不易脱妆口红</p>
            <span>¥59</span>
          </li>
          <li>
            <img src="../../static/img/two5.png" alt="">
            <p>不易脱妆口红</p>
            <span>¥59</span>
          </li>
          <li>
            <img src="../../static/img/two6.png" alt="">
            <p>不易脱妆口红</p>
            <span>¥59</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import  Lb from '@/components/Lb'
    export default {
        name: "Zone",
      components:{
          cc:Lb
      }
    }
</script>

<style scoped>
  .one4_1 li{
    width: 2.24rem;
    height: 2.45rem;
    margin-top: 0.2rem;
    border-right: solid #cccc;
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
  .one3{
    width: 100%;
    height: 0.6rem;
    background: #ffffff;
    font-size: 0.3rem;
    position: relative;
    margin-top: 0.2rem;
  }
  .one_4>img{
    width: 75%;
    height: 100%;
  }
  .one_4{
    position: absolute;
    top: 2.1rem;
    right: 0.1rem;
    width: 4rem;
    height: 1.40rem;
    text-align: center;
  }
  .one_2>img{
    width: 70%;
    height: 100%;
  }
  .one_2{
    text-align: center;
    width: 4rem;
    height: 1.40rem;
    position: absolute;
    right: 0.15rem;
    top: 0.7rem;
    border-bottom:solid #c2c2c2 ;
  }
  .one_3{
    font-size: 0.25rem;
    color: #ffffff;
    text-align: center;
    width: 1.1rem;
    height: 0.4rem;
    background: #f00;
    line-height: 0.4rem;
    position: absolute;
    top: 0.14rem;
    left: 0.2rem;
  }
  .one_1>img{
    width: 80%;
    height: 75%;
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
  .one2{
    margin: 0.1rem auto;
  }
  .one1>span,.one3>span{
    position: absolute;
    left: 0.2rem;
    top: 0.1rem;
  }
  .one1{
    width: 100%;
    height: 0.6rem;
    border-bottom: solid #c2c2c2;
    font-size: 0.3rem;
  }
.one{
  width: 100%;
  height: 3.6rem;
  background-color: #ffffff;
  margin:0.2rem auto;
  border-bottom: solid #c2c2c2;
  position: relative;

}
</style>
