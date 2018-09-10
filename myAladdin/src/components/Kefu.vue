<template>
    <div class="box">
      <div class="top">
        <router-link to="/kefu"><img src="../../static/img/seek1.png" alt="" ></router-link>
        <p class="tz">反馈</p>
        <p>客服与反馈</p>
      </div>
      <div class="content">
        <div class="one">
         <p> <strong>安全提醒：</strong>阿拉灯不会以付款异常、系统升级等原因让顾客进
          行银行账户修改。请勿相信陌生电话、短信内容，阿拉灯提醒您
          谨防网络诈骗！查看详情》</p>
        </div>
        <div class="one1">
         <p>联系客服</p>
          <p>工作时间：<span>9:00—24:00</span></p>
        </div>
        <ul class="one2">

          <li v-for="item in obj">
            <router-link :to="item.aa">
            <img :src="item.img" alt="">
            <p class="tz1"><span>{{item.z1}}</span><br><span>{{item.z2}}</span></p>
            <img src="../../static/img/客服2.png" alt=""></router-link>
          </li>
        </ul>
        <div class="one3">
          <p>常见问题</p>
          <ul v-for="item in obj1" >
            <li><span>{{item}}</span>
              <img src="../../static/img/客服4.png" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>

    export default {
        name: "Kefu",

      data(){
          return{
            obj :[
              {img:"../../static/img/客服1.png",z1:"订单查询",z2:"订单修改、取消订单、订单查询",aa:"/kefu1"},
              {img:"../../static/img/客服1.png",z1:"物流咨询",z2:"物流信息查询、催物流",aa:""},
              {img:"../../static/img/客服1.png",z1:"售后咨询",z2:"商品质疑、退换货、投诉与建议",aa:""},{img:"../../static/img/客服1.png",z1:"其他咨询",z2:"购买问题,其他问题",aa:""}
            ],
            obj1:[
              "食品安全科普","为什么还没发货？","发货了为什么还没收到？","其他问题"
            ]
          }
      }
    }
</script>

<style scoped>
  .one3 img{
    float: right;
    margin: 0.17rem 0.2rem;
  }
  .one3 span{
    float: left;

    margin-left:0.2rem ;
   padding-bottom: 0.2rem;
  }
  .one3 li{
    overflow: hidden;
    line-height: 0.62rem;
    font-size: 0.3rem;
    width: 100%;
    height: 0.6rem;
    background: #ffffff;
    border-bottom: solid #ccc;
  }
  .one3 p{
    font-size: 0.28rem;
    margin-left: 0.2rem;
    margin-bottom: 0.1rem;
  }
  .tz1 span:nth-of-type(2){
    font-size: 0.2rem;
    color: #666666;

  }
  .tz1 span:nth-of-type(1){
    font-size: 0.3rem;
  }
  .tz1{
    line-height: 0.4rem;
    margin-top: 0.3rem;
  }
  .one2 li img:nth-of-type(2){
    float: right;
    margin: -0.55rem  0.2rem 0 0 ;
  }
  .one2 li img:nth-of-type(1){
    float: left;
     margin:0.3rem 0.2rem;
  }
  .one2 li{
    overflow: hidden;
    margin: 0.3rem auto ;
    width: 6.92rem;
    height: 1.37rem;
    background: #ffffff;
    border-bottom: solid #ccc;
    border-top: solid #ccc;
  }
  .one1 p:nth-of-type(2) span{
    color: #f00;
  }
  .one1 p:nth-of-type(2){
    float: right;
  }
  .one1 p:nth-of-type(1){
    float: left;
  }
  .one1{
    margin: 0.2rem auto;
    width: 6.79rem;
    height: 0.3rem;
    font-size: 0.28rem;
  }
  .one p{
    margin: 0.1rem;
  }
  .one strong{
    font-size: 0.3rem;
    color: #f00;
  }
  .one{
    overflow: hidden;
    width: 100%;
    height: 1.3rem;
    color: #666666;
    background: #f9d3d4;
    font-size: 0.25rem;
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
  .tz{
    position: absolute;
    right: 0.24rem;
    top: 0rem;
  }
  .top>a:nth-child(1)>img{
    position: absolute;
    left: 0.24rem;
    top: 0.44rem;
  }
</style>
