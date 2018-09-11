<template>
<div class="GoShop">
  <div class="gTop">
     <span>购物车</span>
    <p>编辑</p>
  </div>
  <div class="con" >
    <div class="cNav">
      <img src="../../static/img/share.png" alt="">
    </div>
    <ul class="conn" >
      <div class="con1">
        <img src="../../static/img/dui1.png" alt="" class="d1">
        <img src="../../static/img/fly.png" alt="">
        <span>日本直邮</span>
      </div>
      <li class="con2 conn2" v-for="(i,index) in 2">
        <img src="../../static/img/dui1.png" alt="" class="d1">
        <div class="con2_1">
          <img src="../../static/img/huafen.png" alt="" class="hf1">
          <div>
            <p>会呼吸丝滑蜜粉</p>
            <p>规格：蜜粉</p>
            <p class="fontC">￥166.06</p>
          </div>
        </div>
        <div  class="con2_2">
          <p @click="less(index,num[index])" class="coun">-</p>
          {{num[index]}}
          <p @click="add(index,num[index])" class="coun">+</p>
        </div >
      </li>
      <div class="con3">
        商品金额

        <p class="fontC">￥{{(166.06*this.num[0]+166.06*this.num[1]).toFixed(2)}}</p>
      </div>
      <div class="con3">
        综合税总额
        <p class="fontC">￥{{(0.11*this.num[0]+0.11*this.num[1]).toFixed(2)}}</p>
      </div>
      <div class="con3">
        应付总金额
        <p class="fontC">￥{{this.end=((166.06*this.num[0]+166.06*this.num[1]).toFixed(2)/1+(0.11*this.num[0]+0.11*this.num[1]).toFixed(2)/1).toFixed(2)}}</p>
      </div>
      <div class="con3">
        <p class="count">
          <router-link style="color: #ffffff" :to="{
        path:'/Support',
        query:{end:end}
        }">
          结算 ({{this.num.length}})
          </router-link>
        </p>
      </div>
    </ul>
    <ul class="conn" >
      <div class="con1">
        <img src="../../static/img/dui1.png" alt="" class="d1">
        <img src="../../static/img/fly.png" alt="">
        <span>韩国直邮</span>
      </div>
      <li class="con2" v-for="item1 in data1">
        <img src="../../static/img/dui1.png" alt="" class="d1">
        <div class="con2_1">
          <img :src="item1.url" alt="" class="hf1">
          <div>
            <p>{{item1.con}}</p>
            <p>{{item1.spec}}</p>
            <p class="fontC">￥{{item1.pric}}</p>
          </div>
        </div>
        <div  class="con2_2">
          <p @click="less1()" class="coun">-</p>
          {{num1}}
          <p @click="add1()" class="coun">+</p>
        </div >
    </li>
      <div class="con3">
        商品金额
        <p class="fontC">￥{{(this.data1[0].pric*this.num1).toFixed(2)}}</p>
      </div>
      <div class="con3">
        综合税总额
        <p class="fontC">￥{{0.11*this.num1}}</p>
      </div>
      <div class="con3">
        应付总金额
        <p class="fontC">￥{{(this.data1[0].pric*this.num1+0.11*this.num1).toFixed(2)}}</p>
      </div>
      <div class="con3">
        <p class="count">结算 (1)</p>
      </div>
    </ul>
    <div class="con4">
      <div class="con4_0">
        <img src="../../static/img/shixiao.png" alt="">
        <span>失效商店</span>
      </div>
      <div class=" con4_1">
        <img src="../../static/img/huafen.png" alt="" class="d2">
        <div>
          <p>会呼吸丝滑蜜粉</p>
          <p>规格：蜜粉</p>
          <div class="con4_2">
          <span class="fontC">￥166.06</span>
            &nbsp;&nbsp;
          <span>X1件</span>
          </div>
        </div>
      </div>
      <div class="con4_3">
        <p @click="qingchu()">清除失效商店</p>
      </div>
    </div>
    <div class="con5">
      <p>-猜你喜欢-</p>
      <ul v-for="i in 2">
      <li class="con5_0" v-for="item2 in data2">
        <div class="con5_1">
        <img :src="item2.url" alt="">
        </div>
        <p>{{item2.name}}</p>
        <p class="fontC">¥{{item2.price}}</p>
      </li>
      </ul>
      <p class="con5_2">加载更多</p>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: "GoShop",
    data(){
      return {
        num:[1,1],
        num1:1,
        data1:[
          {con:'会呼吸丝滑蜜粉',spec:'规格：蜜粉',pric:166.06,url:'../../static/img/huafen.png'}
        ],
        data2:[
          {url:'../../static/img/kouhong111.png',name:'不易脱妆口红',price:59},
          {url:'../../static/img/chencai11.png',name:'花蕊唇彩',price:129},
          {url:'../../static/img/kouhong11.png',name:'娇吻玉口红',price:88},
          {url:'../../static/img/chencai111.png',name:'丰唇蜜口红',price:99}
        ],
        end:'',
        job:[]
      }
    },
    methods:{
      qingchu(){
        $('.con4').remove()
      },
      add(index){
        if(index==0){
         var nn = ++this.num[index]
          this.$set(this.num,index,nn)
        }else if(index==1){
          var nn = ++this.num[index]
          this.$set(this.num,index,nn)
        }
      },
      less(index){
        var nn = --this.num[index]
        if(nn<=0){
          nn = 0
          // console.log(index)
          // this.num.splice(index,1)
          // $('.conn2').eq(index).remove()
        }
        if(index==0){
          this.$set(this.num,index,nn)
        }else if(index==1){
          this.$set(this.num,index,nn)
        }

      },
      add1(){
        ++this.num1
      },
      less1(){
        --this.num1
        if(this.num1<=0){
          this.num1 = 0
        }
      }
    },
   mounted(){
      $('.xian').eq(-1).css('border-right','none')
   }
  }
</script>

<style scoped>
  .con5>ul{
    padding: 0.3rem;
    display: flex;
    overflow: hidden;
    justify-content: space-between;
    background-color: #ffffff;
  }
  .con5>p:nth-of-type(1){
    text-align: center;
    padding-top: 0.3rem;
    line-height: 0.5rem;
    background-color: #ffffff;
  }
  .con5_2{
    text-align: center;
    line-height: 0.5rem;
    background-color: #ffffff;
  }
  .con5_1>img{
    padding:0  0.5rem;
    height: 1.5rem;
    border-right: 1px solid #666666;
    display: inline-block;
  }
  .con5_0>p{
    font-size: 0.22rem;
    line-height: 0.3rem;
    width: 1.5rem;
    text-align: center;
  }

  .con4{
    color: #666666;
    margin-bottom: 0.2rem;
    background-color: #ffffff;
  }
  .con4_0{
    padding: 0.3rem;
    border-bottom: 1px solid #666666;
  }
  .con4_1{
    display: flex;
    justify-content: space-between;
    padding: 0.3rem;
    width: 3.6rem;
  }
  .con4_2{
    width: 3rem;
  }
  .con4_3{
    width: 100%;
    height: 0.8rem;
    border-top: 1px solid #666666;
  }
  .fontC{
    color: #e53e42;
  }
  .con4_3>p{
    width: 3rem;
    height: 0.5rem;
    line-height: 0.5rem;
    margin: 0.15rem auto;
    text-align: center;
    border: 1px solid #666666;
    border-radius: 0.5rem;
  }
  .GoShop{
    font-size: 0.3rem;
  }
.gTop{
  height: 1.1rem;
  padding: 0 0.2rem;
  color: #ffffff;
  background-color: #e53e42;
  line-height: 1.1rem;
  text-align: center;
}
  .gTop>p{
    float: right;
  }
  .cNav img{
    height: 1.8rem;
  }
  .conn{
   color: #4d4d4d;
    margin-bottom: 0.2rem;
   background-color: #ffffff;
  }
  .con1{
    height: 0.85rem;
    font-size: 0.3rem;
    line-height: 0.85rem;
    padding: 0.2rem;
    position: relative;
    border-bottom: 1px solid #666666;
  }

  .con1>img:nth-of-type(2){
    margin-left: 0.2rem;
    vertical-align: middle;
  }
  .con2{
    padding: 0.3rem;
    border-bottom: 1px solid #666666;
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .con2_1{
    display: flex;
    justify-content: space-between;
  }
  .hf1{
    height: 1rem;
    margin-top: 0.2rem;
    vertical-align: middle;
    margin-right: 0.6rem;
  }
  .d1{
    height: 0.3rem;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
  .d2{
    height: 1rem;
    margin-right: 0.5rem;
  }
  .con2_1>div>p{
    line-height: 0.5rem;
  }
  .con2_2{
    width: 1.6rem;
    height: 0.5rem;
    line-height: 0.5rem;
    border: 1px solid #666666;
    border-radius: 0.5rem;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .con2_2>.coun{
      width: 0.4rem;
      height: 0.4rem;
     margin: 0.04rem;
     font-size: 0.4rem;
      line-height: 0.4rem;
       text-align: center;
      border: 1px solid #666666;
      border-radius: 0.4rem;
  }
  .con3{
    padding: 0 0.3rem;
    height: 1rem;
    line-height: 1rem;
    border-bottom: 1px solid #666666;
  }
  .con3>p{
    float: right;
  }
  .count{
    width: 1.5rem;
    height: 0.5rem;
    color: #ffffff;
    text-align: center;
    line-height: 0.5rem;
    background-color: #e53e42;
    border-radius: 0.5rem;
    margin-top: 0.3rem;
  }

</style>
