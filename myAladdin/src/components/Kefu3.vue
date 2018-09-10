<template>
<div class="box">
  <div class="top">
    <router-link to="/kefu1"><img src="../../static/img/seek1.png" alt="" ></router-link>
    <p>订单详情</p>
  </div>
  <div class="one" v-for="i in 4">
    <img src="../../static/img/kefu2.png" alt="">
    <div class="one_1">
    <p>会呼吸丝滑蜜粉</p>
    <p>规格：蜜粉</p>
    <p><span class="tz">￥166.06 </span> &nbsp;&nbsp;&nbsp; ×1件</p>
    </div>
    <p class="tz1">申请退款</p>
  </div>
</div>
</template>

<script>
    export default {
        name: "Kefu3"
    }
</script>

<style scoped>
  .tz1{
    float: right;
    margin: 1.4rem 0.2rem 0 0 ;
    width: 1.2rem;
    height: 0.44rem;
    text-align: center;
    line-height: 0.44rem;
    background: #f00;
    border-radius: 0.2rem;
    color: #ffffff;
    font-size: 0.25rem;
  }
.tz{
  color: #f00;
}
  .one_1 p:nth-of-type(2),.one_1 p:nth-of-type(3){
    font-size: 0.28rem;
    color: #666666;
    margin-top: 0.18rem;
  }
  .one_1{
    float: left;
    margin-top: 0.3rem;
    font-size: 0.3rem;
  }
  .one img{
    margin: 0.5rem 0.6rem;
    float: left;
  }
  .one{
    width: 100%;
    height: 2rem;
    background: #ffffff;
    border-bottom: solid #ccc;
    margin-top: 0.2rem;
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
  .top>a:nth-child(1)>img{
    position: absolute;
    left: 0.24rem;
    top: 0.44rem;
  }
</style>
