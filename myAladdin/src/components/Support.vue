<template>
    <div>
       <div class="top">
         <img src="../../static/img/seek1.png" alt="">
         <span>确认订单</span>
       </div>
      <div class="content">
        <div class="one">
          <img src="../../static/img/购物车2.png" alt="" class="tz">
          <div class="one_1">
            <p>李四  &nbsp;&nbsp;&nbsp;&nbsp;15012340708 <br><span>河南省新乡市红旗区南干道与新中大道
            交叉口B座10楼102室；邮编453000</span>
            </p>
            <img src="../../static/img/购物车8.png" alt="" class="tz3">
          </div>
          <img src="../../static/img/购物车4.png" alt="" @click="fen" class="tz2" >
          <img src="../../static/img/购物车2.png" alt="" class="tz4">
        </div>
        <div class="one1">
          <img src="../../static/img/购物车1.png" alt="">
          <div class="one1_1">
            <p>实名认证 <br>
            <span>李四</span><span>{{"410700000000005"|phoneNum}}</span>
            </p>
            <img src="../../static/img/购物车9.png" alt="">
          </div>
        </div>
        <div class="one2">
          <p>海外直邮订单</p>
          <div class="one2_1">
          <img src="../../static/img/购物车5.png" alt="">
          <p>会呼吸丝滑蜜粉</p>
          <p>规格: 蜜粉</p>
          <p>￥166.06   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>×1件</span></p>
          </div>
          <p class="tz1">显示另外1件（共2件）<img src="../../static/img/购物车6.png" alt=""> </p>
        </div>
        <div class="one3">
          <p v-for="item in obj"> &nbsp; {{item.z1}} <span>{{item.z2}}&nbsp;&nbsp;</span></p>
        </div>
        <div class="one3_1">
         <span>安全提示:</span><span>付款成功后，阿拉灯不会以付款异常、卡单、系统
升级为由联系您。请勿泄露银行卡号、手机验证码，否则会造成
钱款的损失。如有疑问请咨询客服，谨防电话诈骗！</span>
        </div>
        <div class="one3_2">
        配送方式:
      </div>
        <div class="one4">
          <span>共2件商品</span> <p> 应付：<span>￥392.12</span></p>
        </div>
        <div class="one5">
          <img src="../../static/img/购物车7.png" alt="">
          <span>本人同意并接受 <strong>《个人委托协议》</strong>和<strong>《用户协议》</strong></span>
          <p>确认</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Support",
      data(){
          return{
            obj:[
              {z1:"商品金额：",z2:"￥332.12"},
              {z1:"订单邮费：",z2:"￥50.00"},
              {z1:"关税：",z2:"￥10"},
              {z1:"订单金额：",z2:"￥392.12"},
            ]
          }
      },
      mounted(){

      },
      methods:{
          fen(){
            $(".tz2").css("display","none")
            $(".one").css("height","1.8rem")
            $(".one1_1 ,.one_1").css("display","block")
          },

      },
      filters:{
      phoneNum(val){
        var num = '';
        //声明一个函数 一个for循环获取val的长度num+=循环的次数大于三并且小于6三目运算符符合条件的用*号代替,否则显示数字
        for(var i=0;i<val.length;i++){
          num+= i>=3&&i<=10?'*':val[i];
        }
        return num;
      }
        }
    }
</script>

<style scoped>
  .one1_1 img{
    width: 2.15rem;
    height: 0.4rem;
    position: absolute;
    right: -4.2rem;
    bottom: 0.06rem;
  }
  .one1_1{
    display: none;
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    font-size: 0.3rem;
  }
  .one_1 p span{
    color:#666666;
    margin-top:0.5rem;
  }
  .one_1 p{
    float: left;
    width: 4.28rem;
    height: 1.28rem;
    font-size: 0.25rem;
    margin-left: 0.2rem;
  }
  .one_1 {
    display: none;
  }
  .tz3{
    float: right;
    margin: 0.2rem 0.6rem;
  }
  .one5 p{
    width: 6.8rem;
    height: 0.4rem;
    margin: 0.2rem auto;
    background: #f00;
    color: #ffffff;
    border-radius: 0.2rem;
    line-height: 0.35rem;
  }
 .one5 strong{
   color: #f00;
 }
  .one5 {
    width: 100%;
    height: 1.6rem;
    background: #ffffff;
    text-align: center;
    font-size: 0.28rem;
    line-height: 0.8rem;
  }
  .one4 p{
    margin-right:0.2rem ;
    float: right;
  }
  .one4 p span{
    color: #f00;
  }
  .one4{
    font-size: 0.3rem;
    margin-top: 0.8rem;
    width: 97%;
    height: 0.82rem;
    background: #ffffff;
    border-top:2px solid #ccc;
    border-bottom:2px solid #ccc;
    line-height: 0.8rem;
    padding-left: 0.2rem;
  }
  .one3_2{
    line-height: 0.6rem;
    padding-left: 0.2rem;
    font-size: 0.3rem;
    margin-top:0.2rem;
    width: 97%;
    height: 0.6rem;
    background: #ffffff;
  }
  .one3_1 span:nth-of-type(2){
    color: #666666   ;
    font-size: 0.25rem;
    margin: 0.2rem;
  }
  .one3_1 span:nth-of-type(1){
    color: #f00;
    font-size: 0.3rem;
    margin: 0.2rem;
  }
  .one3_1 {
    padding: 0.2rem;
    width: 94.5%;
    height: 1.3rem;
    background: #ffffff;
  }
  .one3 p span{
    color: #f00;
    float: right;
  }
  .one3{
    margin-top:0.2rem;
    overflow: hidden;
  }
  .one3 p{
    width: 100%;
    height: 0.6rem;
    line-height: 0.65rem;
    font-size: 0.3rem;
    float: left;
    background: #ffffff;
    border-bottom: solid #ccc;
  }
  .tz1{
    text-align: center;
    line-height: 0.48rem;
    color: #666666 ;
    font-size: 0.25rem;
  }
  .one2 p:nth-of-type(1){
    margin: 0.25rem 0.2rem;
    font-size: 0.25rem;
  }
  .one2_1 p:nth-of-type(3) span{
    color: #ccc;
  }
  .one2_1 p:nth-of-type(3){
    font-size: 0.23rem;
    color: #f00;
    margin-top:0.3rem;
  }
  .one2_1 p:nth-of-type(2){
    font-size: 0.25rem;
    color: #ccc;
    margin-top:0.2rem;
  }
  .one2_1 p:nth-of-type(1){
    font-size: 0.3rem;
    margin-top: 0.3rem;
  }
  .one2_1 img{
    margin: 0.5rem 0.68rem;
    float: left;
  }
  .one2_1 {
    width: 100%;
    height: 2.04rem;
    border-top: solid #ccc;
    border-bottom: solid #ccc;
  }
  .one2{
    overflow: hidden;
    width: 100%;
    height: 3.45rem;
    background: #ffffff;
  }
  .one1 img,.tz,.tz4{
    width: 100%;
  }
  .one1{
    width: 100%;
    height: 1.2rem;
    background: #ffffff;
    margin-bottom:0.2rem;
    position: relative;
  }
  .tz2{
    margin: 0.25rem;
  }
  .tz4{
    position: absolute;
    left: 0;
    bottom: 0;
  }
.one{
  position: relative;
  width: 100%;
  height: 1.2rem;
  background: #ffffff;
  margin: 0.2rem auto;
}
  /*中间*/
 .top{
   height: 0.96rem;
   width: 100%;
   background-color: #e53e42;
   font-size: 0.3rem;
   color: #f2f2f2;
   line-height: 0.96rem;
   text-align: center;
 }
  .top img{
    vertical-align: middle;
    margin-left: 0.2rem;
    float: left;
    margin-top: 0.3rem;
  }
  </style>
