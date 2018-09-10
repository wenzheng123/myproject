<template>
  <div class="box">
    <div class="top1">
      <router-link to="/one">
        <img src="../../static/img/seek1.png" alt="" >
      </router-link>
      <div class="right">
        <img src="../../static/img/w1.png" alt="">
          <img src="../../static/img/w2.png" alt="" >
        <img src="../../static/img/w3.png" alt="">
      </div>
      <p>限时断货</p>
    </div>
    <aa></aa>
    <ul class="lbx1">
      <li>
        <span>抢购价:</span>
        &nbsp;
        <span>¥ 129.08</span>
      </li>
      <li>
        <span>今天15:00限量开抢</span>
        <p>提醒我</p>
      </li>
    </ul>
    <ul class="cost">
      <li>
        <div class="costT">
          <img src="../../static/img/english1.png" alt="">&nbsp;&nbsp;
          <span>英国直邮</span>&nbsp;&nbsp;
          <strong>不易脱妆口红</strong>
        </div>
        <div>
          <p>¥ 169</p>
        </div>
        <div>
          <span>关税 : ¥ 10</span>&nbsp;
          <img src="../../static/img/detail.png" alt="">
        </div>
        <div>
          <p>邮费 : ¥ 50</p>
        </div>
      </li>
      <li>
        <img src="../../static/img/integral.png" alt="">
        &nbsp;&nbsp;
        <span>500000积分可抵500元，限购1件</span>
      </li>
      <li>
        <div>
          <img src="../../static/img/circle1.png" alt="">
          <span>不支持7天无忧退换</span>
        </div>
        <div>
          <img src="../../static/img/fly1.png" alt="">
          <span>海外直邮</span>
        </div>
        <div>
          <img src="../../static/img/zheng.png" alt="">
          <span>正品保证</span>
        </div>
        <div><img src="../../static/img/zuoArrow.png" alt=""></div>
      </li>
      <li>
        <img src="../../static/img/english1.png" alt="">
        <span>直邮,下单时需要提供真实姓名和身份证号以及收货地址 请先去添加并填写这些信息</span>
        <span>去添加</span>
      </li>
    </ul>
<!--我的-->
    <ul class="one" >
     <li>商品信息</li>
      <li v-for="item in data1">{{item}}</li>
    </ul>

    <ul class="cost9">
      <li>
        <img src="../../static/img/gang.png" alt="">
        <span class="cost_Nav">服务承诺</span>
      </li>
      <li>
        <div v-for="item in data2">
          <img :src="item.url" alt="">
          <p>{{item.name}}</p>
        </div>
      </li>
    </ul>
    <div class="cost10">
      <img src="../../static/img/xiaotieshi.png" alt="">
      <p>运费相关：英国直邮商品相关运费为50元。</p>
      <p>价格说明：划线价、国内参考价、店头价可能是品牌专柜价、吊 牌价或品牌商提供的指导价等价格，其受国家地区、时间和市场 行情波动的</p>
      <p>价格说明：划线价、国内参考价、店头价可能是品牌专柜价、吊 牌价或品牌商提供的指导价等价格，其受国家地区、时间和市场 行情波动的</p>
    </div>
    <ul class="costEnd">
      <li>
        <img src="../../static/img/kefu.png" alt="">
        <span>在线客服</span>
      </li>
      <li>
        <span>加入购物车</span>
      </li>
    </ul>
    <div class="end">
      <p>热卖推荐</p>
      <img src="../../static/img/b1.png" alt="">
      <img src="../../static/img/b2.png" alt="">
    </div>
  </div>
</template>

<script>
  import Lb2 from "@/components/Lb2"
    export default {
        name: "Eye2",
      components:{
        aa:Lb2
      },

      data(){
        return{
          data2:[
            {name:'正品保证',url:'../../static/img/zzz1.png'},
            {name:'海外直邮',url:'../../static/img/zzz2.png'},
            {name:'超时发货补贴',url:'../../static/img/zzz3.png'},
            {name:'POCC承包',url:'../../static/img/zzz4.png'}
          ],
          data1:[
            "【品    牌】ANFNA","【规    格】128/支","【产    地】英国","【储存方法】常温","【保 质 期】2年","【生产日期】见实物外包装（不断更新中阿拉灯只为        您挑选最新日期）","【快递信息】快递100","【服务信息】由品牌商从英国发货","【温馨提示】本产品为易碎品，请轻拿轻放"
          ]
        }
      },
    }
</script>

<style scoped>
  .end img{
    float: left;
    margin: 0.1rem 0.2rem;
  }
  .end p{
    margin: 0.2rem 0.2rem;
  }
  .end{
    overflow: hidden;
    font-size: 0.3rem;
    width: 100%;
    height: 4.9rem;
    background: #ffffff;
    border-bottom: solid #ccc;
  }
  .one li{
    margin-top: 0.1rem;
    margin-left: 0.23rem;
  }
  .one{
    width: 100%;
    height: 5.6rem;
    background: #ffffff;
    margin: 0.2rem 0;
    font-size: 0.25rem;
  }
  .top>p{
    width: 100%;
    height: 100%;
    font-size: 0.35rem;
    color: #ffffff;
    text-align: center;
    line-height: 1rem;
  }
  .top a:nth-of-type(1){
    width: 0.35rem;
    height: 1.1rem;
    position: relative;
    margin-left:0.3rem;
  }
  .top a{
    width: 0.35rem;
    height: 1.1rem;
    position: relative;
    margin-right:0.4rem;
  }
  .top img{
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
  .lbx1{
    height: 1rem;
    padding: 0 0.2rem;
    background-color: #e53e42;
    font-size: 0.25rem;
    color: #ffffff;
    line-height: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .lbx1>li:nth-of-type(2){
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .lbx1>li:nth-of-type(2) p{
    width: 1.2rem;
    height: 0.45rem;
    color: #e53e42;
    text-align: center;
    line-height: 0.45rem;
    background-color: #ffffff;
    border-radius: 0.45rem;
    position: relative;
    top: 0;
    bottom: 0;
    margin: auto 0.2rem;
  }
  .cost>li{
    color: #333333;
    font-size: 0.3rem;
    padding: 0 0.2rem;
    background-color: #ffffff;
    border-bottom: 1px solid #949494;
  }
  .cost>li:nth-of-type(1){
    height: 2.5rem;
    font-size: 0.3rem;
  }
  .cost>li:nth-of-type(1)>div{
    margin-top: 0.1rem;
  }
  .costT>img{
    width: 0.4rem;
    height: 0.3rem;
  }
  .costT>span{
    color: #e53e42;
  }
  .cost>li:nth-of-type(1)>div:nth-of-type(2){
    color: #e53e42;
  }
  .cost>li:nth-of-type(1)>div:nth-of-type(3)>img{
    width: 0.6rem;
    height: 0.3rem;
  }
  .cost>li:nth-of-type(2){
    height: 0.65rem;
    line-height: 0.65rem;
  }
  .cost>li:nth-of-type(3){
    height: 0.4rem;
    font-size: 0.25rem;
    padding: 0.2rem;
    display: flex;
    justify-content: space-between;
  }
  .cost>li:nth-of-type(4){
    height: 1rem;
    color: #e53e42;
    font-size: 0.15rem;
    line-height: 0.5rem;
    padding: 0.1rem 0.2rem;
  }
  .cost>li:nth-of-type(4)>img{
    width: 0.4rem;
    height: 0.3rem;

  }
  .cost>li:nth-of-type(4)>span:nth-of-type(2){
    font-size: 0.2rem;
    width: 0.8rem;
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    display: inline-block;
    border: 1px solid #e53e42;
    margin-left: 0.7rem;
  }

  .cost9{
    background-color: #ffffff;
  }
  .cost9>li:nth-of-type(1){
    height: 0.6rem;
    line-height: 0.6rem;
    font-weight: bold;
    font-size: 0.3rem;
    margin: 0.2rem 0;
    border-bottom:1px solid #666666;
  }
  .cost9>li:nth-of-type(2){
    display: flex;
    justify-content: space-around;
  }
  .cost9>li:nth-of-type(2)>div{
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.3rem;
    margin: 0.3rem 0;
    width: 0.8rem;
    height: 1rem;
  }
  .cost10{
    font-size: 0.18rem;
    color: #797979;
    line-height: 0.3rem;
    text-align: center;
    margin: 0.2rem;
  }
  .cost10>img{
    height: 0.6rem;

  }
  .costEnd{
    width: 100%;
    height: 1rem;
    color: #4d4d4d;
    background-color: #ffffff;
    font-size: 0.3rem;
    position: fixed;
    bottom: 0;
  }
  .costEnd>li{
    width: 50%;
    float: left;
    text-align: center;
    line-height: 1rem;
  }
  .costEnd>li:nth-of-type(1) img{
    width: 0.4rem;
    height: 0.4rem;
    margin: 0.15rem;
    vertical-align: middle;
  }
  .costEnd>li:nth-of-type(2){
    background-color: #e53e42;
    color: #ffffff;
  }
  /*中间*/
  .top1{
    width: 100%;
    height: 1.1rem;
    background-color: #e53e42;
    font-size: 0.4rem;
    position: relative;
    text-align: center;
    line-height: 1.3rem;
    color: #ffffff;
    z-index: 3;
  }
  .right{
    position: absolute;
    right: 0.24rem;
    top: 0rem;
  }
  .top1>a>img{
    position: absolute;
    left: 0.24rem;
    top: 0.44rem;
  }

</style>
