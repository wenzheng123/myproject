<template>
    <div class="box">
      <div class="top">
        <router-link to="/four"><img src="../../static/img/seek1.png" alt=""></router-link>
        <img src="../../static/img/分享.png" alt="" >
        <p>打造玫瑰般娇嫩肌肤</p>
      </div>
  <div class="content">
    <img src="../../static/img/l1.png" alt="" class="tz">
    <div class="one">
      Rose Hydrosed是一款来自澳大利亚的护肤产品，主
      要功能为深层滋润肌肤，锁住水分，打造玫瑰般娇嫩肌
      肤... <br>
      下面为您推荐一些产品
    </div>
    <div class="one0" v-for="i in 2">
    <div class="one1">
      <img src="../../static/img/f1.png" alt="">
      <p>
       <span>防晒类     第1位</span>
        <img src="../../static/img/f6.png" alt="">
      </p>
      <img src="../../static/img/f2.png" alt="">
      <p>美肤宝 <br> <span>守护肌肤预防紫外线所引发的斑点以及胶原蛋
白变形等，是具有抗老保养效果的全效防晒霜</span></p>
    </div>
    <p class="one_1">
      立即购买
      <img src="../../static/img/f3.png" alt="">
    </p>

      <div class="one2">
        <div class="one2_2"  v-for="item in arr">
        <p @click="fenLei">{{item.z1}}<span>{{item.z2}}</span></p>
        </div>
        <div class="one5">
          <p>所有分类</p>

          <p>防晒  爽肤水×精华 乳液×面霜 卸妆水  散粉蜜粉 眼妆 面膜 粉饼×粉霜 榜上有名
          <span></span>
          </p>
        </div>
      </div>
      <div class="one4">
        <hr>
        <div class="one4_1">往期上榜</div>
      </div>
      <div class="one3 clearfix" >
        <div class="one3_1" v-for="i in 4" >
          <router-link to="/skin">
            <img src="../../static/img/eye1.png" alt="">
          </router-link>
          <p>蜗牛饰容BB霜50g</p>
          <p>￥12.90</p>
          <p>立即购买</p>
        </div>
      </div>
  </div>
  </div>
    </div>
</template>

<script>
    export default {
        name: "Skin",
      data(){
          return{
            arr:[
              {z1:"防嗮",z2:"|"},
              {z1:"爽肤水×精华",z2:"|"},
              {z1:"乳液×面霜",z2:"^"}
            ],
            index:1
          }
      },
      mounted(){
          $(".one2").not($(".one2").eq(0)).css("display","none")
        $(".one4").not($(".one4").eq(0)).css("margin-top",0.4+"rem")
      },
      methods:{
          fenLei(){
            this.index++
            if(this.index % 2 == 0){
              $(".one5").css("display","block")
            }else{
              $(".one5").css("display","none")
            }

          }
      }
    }
</script>

<style scoped>
  .one5 p{
    width: 100%;
    background: #ffffff;
    border-bottom: solid #ccc;
    position: absolute;
    overflow: hidden;
    z-index: 1;
  }
  .one5>p:nth-child(2){
    height: 1.6rem;
    margin-top: 1.26rem;
  }
  .one5>p:nth-child(1){
    height: 0.6rem;
    margin-top: 0.63rem;
  }
  .one5{
    display: none;
  }
  .one3_1 img{
    width: 100%;
    height: 60%;
  }
  .one3_1 p:nth-child(4){
    width: 2.18rem;
    height: 0.3rem;
    background: #f00;
    border-radius: 0.2rem;
    margin-left: 0.6rem;
    color: #ffffff;
  }
  .one3_1 p{
    margin-top: 0.15rem;
  }
  .one3_1{
    float: left;
    font-size: 0.2rem;
    margin: 0.2rem 0 0 0.2rem;
    border: solid #ccc;
    width: 3.2rem;
    height: 4.1rem;
    background: #ffffff;
    text-align: center;
  }
  /*v-for*/
  .one4_1{
    width: 1.6rem;
    height: 0.6rem;
   font-size: 0.25rem;
    background: #feeaf5;
    margin: -0.2rem 0 0  2.8rem;

  }
  .one4 hr{
    width: 2.8rem;
    height: 0.03rem;
    margin-top: 0.3rem;
    background: #ccc;
    margin-left: 2.2rem;
  }
  .one4{
    overflow: hidden;
    width: 100%;
    height: 0.6rem;
    text-align: center;
  }
  .one2_2 p span{
    margin-left:0.25rem;
  }
  .one2_2{
    float: left;
    margin:0.1rem 0.33rem 0 0.5rem;
  }
  .one2 {
    clear: both;
    border-bottom: solid #ccc;
    width: 100%;
    height: 0.6rem;
    background: #ffffff;
    margin-top: 0.4rem;
    font-size: 0.3rem;
  }
  .one_1{
    width: 1.2rem;
    height: 0.3rem;
    padding: 0.05rem;
    margin-left: 2rem;
    margin-top: -0.86rem;
    font-size: 0.2rem;
    color: #ffffff;
    background: #f00;
  }
  .one1 p:nth-of-type(2){
    font-size: 0.25rem;
    margin-left: 1.95rem;
    margin-top: -1.7rem;
  }
   .one1 img:nth-of-type(2){
     margin-left: 0.2rem;
     margin-top: 0.35rem;
   }
  .one1 p:nth-of-type(1){
    font-size:0.25rem;
    color: #c46c25;
    width: 5rem;
    height: 0.6rem;
    margin-left: 1.4rem;
    margin-top: -0.8rem;
  }
  .one1 img:nth-child(1){
    margin-left: 0.3rem;
    margin-top: 0.1rem;
  }
 .one1{
   width: 100%;
   height: 3.1rem;
   background: #ffffff;
   margin: 0.2rem 0 0.2rem 0;
 }
  .one{
    padding: 0.2rem;
    width: 94.5%;
    height: 1.4rem;
    line-height: 0.5rem;
    background: #ffffff;
    margin-top: 0.1rem;
    font-size: 0.25rem;
  }
.tz{
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
  .top>img{
    position: absolute;
    right: 0.24rem;
    top: 0.5rem;
  }
  .top>a:nth-child(1)>img{
    position: absolute;
    left: 0.24rem;
    top: 0.44rem;
  }
  .box{
    width: 100%;
    height: 100%;
    background: #feeaf5;
  }
</style>
