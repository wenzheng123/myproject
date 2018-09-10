<template>

    <div class="Facial" >
      <div class="top">
        <div>
          <router-link to="/Details">
            <img src="../../static/img/Arrow.png" alt="" class="top_1">
          </router-link>
          <span>品牌名字</span>
          <router-link to="###">
            <img src="../../static/img/fenxiang.png" alt="" class="top_2">
          </router-link>
        </div>
      </div>
      <div class="pot">
        <img src="../../static/img/l1.png" alt="">
        <ul class="pot1">
          <div>品牌<br/>标志</div>
          <li class="pot2">
            <p>品牌名字品牌名字</p>
            <p>来自英国</p>
          </li>
          <li class="pot3">
            <p :class="{pot5:bol}">品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌
              介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌
              介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌</p>
            <div>
              <img src="../../static/img/xiala.png" alt="" class="pot4" @click="xial()">
            </div>
          </li>
        </ul>
      </div>
      <div class="listTop">全部商品</div>

      <div :class="{listt:isbol}">
        <ul v-for="item in data" class="list">
          <li>
            <div class="list1">
              <img src="../../static/img/Gloss.png" alt="">
            </div>
            <div class="list2">
              <h3>焕彩萃璨花蕊唇彩4.8g</h3>
              <p>焕彩萃璨花蕊唇彩4.8g焕彩萃璨花蕊唇彩4.8g</p>
              <p>焕彩萃璨花蕊唇彩4.8g</p>
              <div class="list3">
                <div>
                  <img src="../../static/img/Japan.png" alt="">
                  <img src="../../static/img/fly.png" alt="">
                  <span>海外直邮</span>
                </div>
                <p >¥{{item}}</p>
              </div>
            </div>
          </li>
        </ul>

      </div>
      <div class="bot" @click="xiala1()">
        <p class="bot1">加载更多</p>
      </div>



      <transition name="slide-fade">
        <router-view/>
      </transition>

    </div>
</template>

<script>
  export default {

    name: "Goodsname",
    data(){
      return{
        data:['166.00','163.00','164.00','165.00','166.00'],
        bol:true,
        isbol:true
      }
    },
methods:{
  xial(){
     this.bol = !this.bol
  },
  xiala1(){
    this.isbol = !this.isbol
  }
}
  }
</script>

<style scoped>
  .pot1{
    position: relative;
  }
  .pot1>div{
    width: 0.7rem;
    height: 0.7rem;
    font-size: 0.25rem;
    border: 1px solid #666666;
    text-align: center;
    padding: 0.2rem;
    background-color: #ffffff;
    position: absolute;
    top: -0.3rem;
    left: 0.2rem;
  }
  .pot2{
    padding-left: 1.7rem;
    font-size: 0.3rem;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #666666;
  }
  .pot2>p:nth-of-type(2){
    font-size: 0.22rem;
    color: #666666;
  }
  .pot3{
    padding: 0.2rem;
    font-size: 0.2rem;
    background-color: #ffffff;
  }
  .pot3>div{
    width: 100%;
    text-align: center;
  }
  .pot5{
    height: 0.8rem;
    overflow: hidden;
  }
  .pot3 .pot4{
    width: 0.3rem;
    height: 0.2rem;
    vertical-align: middle;
  }
  .listTop{
    height:0.8rem;
    line-height: 0.8rem;
    background-color: #ffffff;
    padding-left: 0.2rem;
    margin-top: 0.2rem;
    border-bottom: 2px solid #666666;
  }
  .Facial{
    height: 100%;
    font-size: 0.3rem;
    color: #4d4d4d;
  }
  .top{
    width: 100%;
    height: 1.1rem;
    line-height: 1.1rem;
    text-align: center;
    background-color: #e53e42;
    position: relative;
    font-size: 0.36rem;
    color: #ffffff;
  }
  .top_1{
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: 0.2rem;
  }
  .top_2{
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    right: 0.2rem;
  }
  .listt{
    height:7rem;
    overflow: hidden;
  }
  .list{
    padding-right: 0.2rem;
    border-bottom: 3px solid #cccccc;
    background-color: #ffffff;
    margin-bottom: 0.2rem;
  }
  .list>li{
    height: 1.4rem;
    font-size: 0.22rem;
    padding: 0.1rem;
    display: flex;
    justify-content: space-between;
  }
  .list1{
    width: 1.8rem;
    height: 1.4rem;
    text-align: center;
  }
  .list1 img{
    height: 1.2rem;
    overflow: hidden;
  }
  .list2{
    width: 5rem;
    font-size: 0.22rem;
    line-height: 0.33rem;
  }
  .list3 img{
    width: 0.35rem;
    margin-left: 0.1rem;
  }
  .list3{
    display: flex;
    line-height: 0.5rem;
    margin-top: 0.05rem;
    justify-content: space-between;
    font-size: 0.3rem;
  }

  .pot img{
    width: 100%;
    height: 3rem;
  }
  .bot>.bot1{
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: 0.26rem;
  }
</style>

