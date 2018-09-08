<template>
<div class="box">
  <div class="top">
    <router-link to="/four"><img src="../../static/img/seek1.png" alt="" ></router-link>
    <img :src="obj.img" alt="" >
    <p>{{obj.z1}}</p>
  </div>
  <div class="content">
    <img src="../../static/img/four1.png" alt="" class="z2" @click="milk">
    <div class="one">
     <span>该模块主要内容是奶粉品牌的介绍</span>， 成立于1924年，
      是日本零食十强之一。制作的曲奇和糕点系列，品质
      远胜于欧洲传统西点，做工研究、精致、高贵、时尚、
      健康是Bourbon一贯的严谨作风，其北日本系列礼盒
      更是夺得了销售冠军，相当受欢迎。
    </div>
      <div class="one3_1 clearfix">
        <div class="one3" v-for="i in 4">
          <img src="../../static/img/milk.png" alt="">
          <p>BOURBON布尔本hellokitty黄油曲奇礼盒54枚
          </p>
          <p>￥12.90</p>
          <p>立即购买</p>
        </div>
      </div>
    <!--那两个-->
  </div>
</div>
</template>

<script>
    export default {
        name: "Milk",
      data(){
          return{
            obj:[],
            arr:{img:"../../static/img/分享.png",z1:"奶粉"},
            arr1:{img:"../../static/img/消息.png",z1:"清单详情"}
          }
      },
      mounted(){
          this.obj = this.arr
      },
      methods:{
          milk(){
            console.log(11)
            this.obj = this.arr1
          }
      }

    }
</script>

<style scoped>
  .one span{
    color: #f00;
  }
  .one{
    width: 97.1%;
    height: 2.1rem;
    background: #e2f6fe;
    font-size: 0.27rem;
    padding-top: 0.3rem;
    padding-left: 0.2rem;
  }
  .one3_1{
    margin: 0.28rem;
  }
  .one3 p:nth-child(4){
    width: 2.2rem;
    height: 0.3rem;
    background: #f00;
    border-radius: 0.3rem;
    margin: 0.18rem auto;
    text-align: center;
    color: #ffffff;
  }
  .one3 p:nth-child(3){
    color: #f00;
    text-align: center;
    margin-top:0.14rem ;
  }
  .one3 p:nth-child(2){
    margin: 0.15rem 0 0 0.25rem;
  }
  .one3{
    width: 3.16rem;
    height: 4.4rem;
    background: #ffffff;
    font-size: 0.2rem;
    float: left;
    border:1.5px solid #ccc;
    margin: 0.1rem 0.06rem;
  }
  .z2{
    width: 100%;
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
