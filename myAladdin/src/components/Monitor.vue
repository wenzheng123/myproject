<template>
  <div class="box">
    <div class="top">
      <router-link to="/"><img src="../../static/img/seek1.png" alt=""></router-link>
      <p><router-link to="/">搜索</router-link></p>
      <img src="../../static/img/seek2.png" alt="" class="tz">
      <input   type="text" placeholder="输入商品关键词">
    </div>
    <div class="content">
      <div class="one0">
      <div class="one" v-for="item in arr">
         <p>{{item}}</p>

      </div>
      <img src="../../static/img/m1.png" alt=""></div>
    </div>
    <div class="one2" v-for="item in arr1">
      <img :src="obj.img" alt="">
      <div class="one3">
      <p>{{obj.z1}}<br><span>{{obj.z2}}</span></p>
      <p>
        <span>{{obj.z3}}</span>  <img :src="obj.img1" alt="">
        <span class="p1">{{item.num}}</span>
      </p>
      </div>

    </div>
    <img src="../../static/img/l1.png" alt="" class="m1">
    <p class="m2" @click="tan">加载更多</p>
  </div>
</template>

<script>
    export default {
        name: "Monitor",
      data(){
          return{
            arr:[
              "默认","价格","销售","筛选"
            ],
            obj:{
              img:"../../static/img/two5.png",
              z1:"焕彩萃璨花蕊唇彩4.8g",
              z2:"焕彩萃璨花蕊唇彩4.8g焕彩萃璨花蕊唇彩4.8g\n" +
              "焕彩萃璨花蕊唇彩4.8g",
              z3:"海外直邮",
              img1:"../../static/img/m2.png",
            },
            arr1:[
              {
                num:"￥165.06"
              },
              {
                num:"￥164.06"
              },
              {
                num:"￥163.06"
              },
              {
                num:"￥162.06"
              },
      ]
          }
      },
      mounted(){
          $(".one2").not( $(".one2").eq(0)).css('margin-top',0.2+'rem')
      },
      methods:{
          tan(){
            alert("没有更多了")

          }
      }
    }
</script>

<style scoped>
  .m2{
    color: #808080;
    font-size: 0.3rem;
    text-align: center;
  }
  .m1{
    width: 100%;

  }
  .p1{
    color: #f00;
  }
  .one3{
    position: absolute;
    left: 2.2rem;
    top: 0.1rem;
  }
  .one2 p:nth-child(1)>span{
    color: #666666;
  }
  .one2 p{
    font-size: 0.25rem;
    margin-top: 0.15rem;
  }
  .one2 img:nth-child(1){
    position: absolute;
    left: 0.8rem;
    top: 0.2rem;
  }
  .one2{
    width: 100%;
    height: 2rem;
    border-top: solid #ccc;
    border-bottom: solid #ccc;
    background: #ffffff;
    margin-top: 0.8rem;
    position: relative;
  }
  .one0 img{
    position: absolute;
    left: 3.2rem;
    top: 0.33rem;
  }
  .one0{
    position: relative;
  }
  .one p{
    font-size: 0.3rem;
  }
  .one{
    width: 25%;
    text-align: center;
    line-height: 0.8rem;
    height: 0.8rem;
    background: #ffffff;
    float: left;
  }
  .top>p>a{
    position: absolute;
    right: 0.22rem;
    bottom: 0.24rem;
    color: #ffffff;
  }
  .top{
    width: 100%;
    height: 1.1rem;
    background-color: #e53e42;
    font-size: 0.4rem;
    position: relative;
  }
  .top>a>img{
    position: absolute;
    left: 0.24rem;
    top: 0.44rem;
  }

  .top input{
    width: 4.8rem;
    height: 0.48rem;
    border-radius: 0.1rem;
    padding-left: 0.46rem;
    position: absolute;
    top: 0.34rem;
    left: 0.7rem;
    font-size: 0.3rem;
  }
  input::-webkit-input-placeholder{
    color: red;
    text-align: left;
    line-height: 0.08rem;
    font-size: 0.1rem;
  }
  .tz{
    position: absolute;
    left:0.85rem;
    bottom: 0.34rem;
    z-index: 1;
  }
</style>
