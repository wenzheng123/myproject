<template>
<div class="box">
  <div class="top">
    <router-link to="/one"><img src="../../static/img/seek1.png" alt=""></router-link>
    <router-link to="/ceas">
      <img src="../../static/img/w2.png" alt="" >
    </router-link>
    <p>绚丽女装</p>
  </div>
  <div class="content">
    <router-link to="/eye1">
      <img src="../../static/img/two3.png" alt="" class="tz">
    </router-link>
    <div class="one">
      <div  class="one1 clearfix">
        <div class="one_1" v-for="(item,index) in arr">
          <span @click="se(index)" :class="{red:changeC==index}">{{item.z1}}</span><span>{{item.z2}}</span>
        </div>
      </div>
      <div class="one0" v-for="i in 2">
      <div class="one2">
        <img src="../../static/img/五角星.png" alt="">
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
</div>
</template>

<script>
  import axios from "axios"
    export default {
        name: "Eye",
      data(){
          return{
            arr:[
              {z1:"防嗮必备",z2:"|"},
              {z1:"随身面膜",z2:"|"},
              {z1:"分装瓶",z2:"|"},
              {z1:"化妆水",z2:"^"},
            ],
            obj: [],//预先创建一个数组，用于存放请求得到的数据
          changeC:-1
          }
      },
      methods:{
        cFun(aa){
          var params = new URLSearchParams();
          params.append('name', aa);
          axios.post('localhost',params).then(function (res){
            this.obj = res.data[0];
            Bus.$emit('aa', this.obj);
          }.bind(this));
        },
        se(index){
          this.changeC = index
        console.log(1)
        }
      },


      mounted(){
          $(".one0").not($(".one0").eq(1)).css("margin-top",0.2+"rem")
      }
    }
</script>

<style scoped>
  .red {
    color: #f00;
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
.one2 img{
  width: 6.8rem;
  height: 0.3rem;
  margin-top: 0.2rem;
}
  .one2{
    margin:0.26rem auto;
    width: 6.8rem;
    height: 0.36rem;
    text-align: center;
    font-size: 0.3rem;
  }
  .one_1 span:nth-child(1){
    margin-right: 0.3rem;
    margin-left: 0.28rem;
  }
  .one_1 span{
    font-size: 0.3rem;
    float: left;
    margin-top: 0.1rem;
  }
  .one {
    width: 100%;
    height: 0.6rem;
    background: #ffffff;
    border-bottom:solid #ccc ;
    margin-top: 0.22rem;
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
