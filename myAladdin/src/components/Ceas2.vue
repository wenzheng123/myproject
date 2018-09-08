<template>
<div class="box">
  <div class="top">
    <router-link to="/ceas"><img src="../../static/img/seek1.png" alt=""></router-link>
    <router-link to="/ceas">
      <img src="../../static/img/w2.png" alt="" >
    </router-link>
    <p>女汉纸到女神的蜕变</p>
  </div>
  <div class="content">
      <img src="../../static/img/ceas1.png" alt="">
    <div class="one1">
      <p>A  DICTION</p>
      <p>BY   AYAKO</p>
      <p>ADDICTION专为追求自我风格的各年龄层女性而设，<br>
        由<strong>NARS的前彩妆总监Ayako掌舵。</strong><br>每件单品都以崭新的色彩和CHIC的包装呈现，<br>
        质感奢华，宛如定制。<br>上市以来已获得35项彩妆奖项，<br>
        是日本杂志和化妆师力荐品牌。
      </p></div>
  </div>
  <div class="one2" v-for="item in arr">
    <img :src="item.img" alt="">
    <div class="one2_2">
      <strong> ADDICTION单色眼影@cosme 2016综合大赏、
      2016眼影部门第1位。</strong>一直是超热产品，色卡图案
      简直是看得人眼花缭乱，但是却没有一款是多余的。
      色彩饱和度高，易上色，在肌肤上显色鲜亮饱满。粉
      质软弱易晕染，颜色均匀不结块。可以自由组合配色
      初化眼影的人参考官网的专业配色也可以轻松驾驭
    </div>
  </div>
  <div class="one3" v-for="item in arr1">
    <img :src="item.img" alt="">
    <p>ADDDICTION  魅力单色眼影</p>
    <p>￥29.9</p>
    <p>立即购买</p>
  </div>
  <div class="end">
    加载更多
  </div>
</div>
</template>

<script>
    export default {
        name: "Ceas2",
      data(){
          return{
            arr:[
              {img:"../../static/img/ceas2.png"},
              {img:"../../static/img/ceas3.png"},
            ],
            arr1:[
              {img:"../../static/img/ceas4.png"},
              {img:"../../static/img/ceas5.png"},
            ]
          }
      }
    }
</script>

<style scoped>
  .end{
    width: 100%;
    height: 1.45rem;
    text-align: center;
    font-size: 0.3rem;
    line-height: 1.45rem;
    color: #808080;
  }
  .one3 p:nth-child(4){
    width: 1.2rem;
    height: 0.4rem;
    background: #f00;
    border-radius: 0.2rem;
    font-size: 0.22rem;
    text-align: center;
    color: #ffffff;
    line-height: 0.4rem;
   margin-top: 0.5rem;
    margin-left: 2.8rem;
  }
  .one3 p:nth-child(3){
    font-size: 0.3rem;
    color: #f00;
    margin-top:1.24rem;
    margin-left: -4rem;
  }
  .one3 p:nth-child(2){
    font-size: 0.3rem;
    margin: 0.2rem ;
  }
  .one3 p{
    float: left;
  }
  .one3 img{
    height: 1.8rem;
    width: 1.64rem;
    margin: 0.2rem 0.1rem;
    float: left;
  }
  .one3{
    width: 100%;
    height: 2.2rem;
    background: #ffffff;
    border-bottom:2px  solid #ccc;
    margin-top: 0.2rem;
    clear: both;
  }
  .one2_2 strong{
    color: #eb7874;
  }
  .one2_2{
    width: 6.4rem;
    height: 2.4rem;
    padding: 0.2rem;
    border-radius: 0.2rem;
    background: #f2f2f2;
    margin: 0.1rem 0.22rem;
    font-size: 0.27rem;
  }
  .one2 img{
    width: 100%;
    height: 4.87rem;
  }
  .one2{
    margin-top: 0.2rem;
    width: 100%;
    height: 7.9rem;
    background: #ffffff;
    overflow: hidden;
  }
  .one1 p:nth-child(3){
    margin-top: 0.2rem;
    font-size: 0.22rem;
  }
  .one1 p:nth-child(1){
    margin-top: 0.5rem;
    font-size: 0.4rem;
  }
  .one1 p{
    text-align: center;
    line-height: 0.4rem;
  }
  .one1{
    width: 100%;
    height: 4.2rem;
    background: #ffffff;
    overflow: hidden;
  }
  .content img:nth-child(1){
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
  .top>a>img{
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
