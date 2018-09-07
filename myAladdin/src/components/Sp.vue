<template>
    <div class="box">
      <div class="top">
        <router-link to="/four"><img src="../../static/img/seek1.png" alt=""></router-link>
      <img :src="obj.img" alt="" @click="news">
        <p>{{obj.b1}}</p>
      </div>
      <div class="content">
        <div class="one">
          <p>本周精品</p>
          <p>精选全球好物</p>
        </div>
        <div class="two">
          <img src="../../static/img/tz.png" alt="" class="tz">
        <input type="text" placeholder="请输入商品关键词">
        </div>
        <!--奶粉-->
        <div class="one4" v-for="i in 2">
          <div class="one4_2">奶粉也要玩有机，养成健康北鼻</div>
          <router-link to="/sp"><img src="../../static/img/four1.png" alt="" @click="ht"></router-link>
          <ul class="one4_1">
            <li>
              <img src="../../static/img/four2.png" alt="">
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
      <ul class="three">
        <li v-for="item in arr">
          <img :src="item.img" alt="">  <span>{{item.z1}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Sp",
      data(){
          return{
             obj:{

             },
            brr:[
              {
                b1:"本周商品",
                img:"../../static/img/分享.png"
              },

            ],
            brr1:[
              {
                b1:"必买清单",
                img:"../../static/img/消息.png"
              },
            ],
            arr:[
              {img:"../../static/img/news.png",z1:"消息"},
              {img:"../../static/img/首页.png",z1:"首页"},
              {img:"../../static/img/分享黑.png",z1:"分享"},
              {img:"../../static/img/个人中心.png",z1:"个人中心"},
            ],
            index:1

          }
      },
      mounted(){
        this.obj = this.brr[0]
        $(".one4").not($(".one4").eq(0)).css("margin-top",-0.3+"rem")
      },
     methods:{
        ht(){
          console.log(11)
          this.obj = this.brr1[0]
         $(".one").css("display","none")
          $(".two").css("display","none")
          $(".one4").css("margin-top",0+"rem")
        },
       news(){
          this.index++
         if(this.index % 2 !=0){
           $(".three").animate({
             opacity:1
           },1000)
         }else{
           $(".three").animate({
             opacity:0
           },1000)
         }

         console.log(111)
       }
     }
    }
</script>

<style scoped>
  .three li{
    margin: 0.28rem 0 0 0.1rem;
  }
  .three::after{
    content: '';
    border: 0.3rem solid transparent;
    border-bottom-color: #ffffff;
    display: inline-block;
    position: absolute;
    right: 0.2rem;
    top: -0.55rem;
  }
  .three{
    opacity: 0;
    position: absolute;
    right: 0.2rem;
    top: 0.8rem;
    height: 2.8rem;
    width: 1.6rem;
    background: #ffffff;
    border-radius: 0.3rem;
    border: 1px solid #ccc;
    font-size: 0.25rem;

  }
  /*消息*/
  .one4_2{
    width: 100%;
    height: 0.8rem;
    background: #597d8b;
    opacity: 0.7;
    font-size: 0.3rem;
    color: #ffffff;
    text-align: center;
    line-height: 0.8rem;
    position: absolute;
    top: 2rem;
  }
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
    margin-top: 0.2rem;
    position: relative;
  }
  /*奶粉*/
  .two{
    position: relative;
    text-align: center;
    line-height: 0.5rem;
  }
  .two input{
    width: 6.8rem;
    height: 0.5rem;
    font-size: 0.3rem;

  }
  input::-webkit-input-placeholder{
    color: red;
    text-align: center;
  }
  .tz{
    position: absolute;
    left:2rem;
    top: 0.35rem;
    z-index: 1;
  }
  .one p:nth-child(2){
    margin-left: 0.2rem;
  }
  .one p:nth-child(1){
    color: #f00;
    font-size: 0.4rem;
    margin: 0.2rem 0 0 0.2rem;
  }
  .one{
    overflow: hidden;
    font-size: 0.3rem;
    width: 100%;
    height: 1.2rem;
    background: #ffffff;

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
  .top img:nth-child(2){
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
