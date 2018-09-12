<template>
<div class="box">
  <div class="top">
    <span>确认订单</span>
  </div>
  <div class="content">
    <div class="one_1">
      <p>李四  &nbsp;&nbsp;&nbsp;&nbsp;15012340708 <br><span>河南省新乡市红旗区南干道与新中大道
            交叉口B座10楼102室；邮编453000</span>
      </p>
      <img src="../../static/img/购物车8.png" alt="" class="tz3">
    </div>
    <div class="one1">
      <p>本单支付</p>
      <p>￥392.12</p>
    </div>
    <div class="one2">
      <p>使用第三方支付平台：</p>
    </div>
    <div class="one3" v-for="(item,index) in arr">
      <img :src="item.img" alt="">
      <p>{{item.z1}}</p>
      <img class="simg" @click="select(index)" src="../../static/img/jiea.png"  alt="">
    </div>
    <div class="one4">
      <span>收起</span>
      <img src="../../static/img/jie3.png" alt="" >
    </div>
    <router-link to="/one">
    <div class="one5">
       确认支付
    </div></router-link>
  </div>
</div>
</template>

<script>
    export default {
      name: "Jie",
      data() {
        return {
          arr: [
            {img: "../../static/img/jie.png", z1: "支付宝支付"},
            {img: "../../static/img/jie1.png", z1: "微信支付"},
          ],
        }
      },
      methods: {
        select(index) {
          $('.simg').eq(index).attr('src','../../static/img/jieh.png')
          $('.simg').not( $('.simg').eq(index)).attr('src','../../static/img/jiea.png')
        }
      }
    }
</script>

<style scoped>
  .one5{
    margin: 1.4rem auto;
    line-height: 0.7rem;
    width: 6.2rem;
    height: 0.67rem;
    background: #f00;
    text-align: center;
    font-size: 0.35rem;
    color: #ffffff;
    border-radius: 0.4rem;
  }
  .one4{
    width: 100%;
    height: 0.6rem;
    background: #ffffff;
    text-align: center;
    font-size: 0.25rem;
    line-height: 0.6rem;
  }
  .one3 img:nth-of-type(2){
    float: right;
    margin:0.4rem 0.2rem;
  }
  .one3 p{
    font-size: 0.3rem;

  }
  .one3 img:nth-of-type(1),.one3 p{
    float: left;
    margin:0.25rem 0.2rem;
  }
  .one3{
    overflow: hidden;
    width: 100%;
    height: 1rem;
    background: #ffffff;
    border-bottom: solid #ccc;
  }

  .one2 p{
    margin-left: 0.3rem;
  }
  .one1 p:nth-of-type(2){
    float: right;
    color: #f00;
    margin-right: 0.2rem;
  }
  .one1 p:nth-of-type(1){
    float: left;
    margin-left: 0.2rem;
  }
  .one1,.one2{
    padding-top:0.3rem;
    width: 100%;
    height: 0.7rem;
    margin-top: 0.2rem;
    background: #ffffff;
    font-size: 0.3rem;
    border-top:solid #ccc;
    border-bottom:solid #ccc;
  }
 .one_1{
   width: 100%;
   height: 1.8rem;
   background: #ffffff;
 }
  .tz3{
    float: right;
    margin: 0.4rem 0.6rem;
  }
  .one_1 p span{
    color:#666666;
    margin-top:0.8rem;
  }
  .one_1 p{
    float: left;
    width: 4.28rem;
    height: 1.28rem;
    font-size: 0.25rem;
    margin-left: 0.2rem;
    margin-top: 0.2rem;
  }
  /*中间*/
  .top{
    height: 0.96rem;
    width: 100%;
    background-color: #e53e42;
    font-size: 0.3rem;
    color: #f2f2f2;
    line-height: 1rem;
    text-align: center;
  }
</style>
