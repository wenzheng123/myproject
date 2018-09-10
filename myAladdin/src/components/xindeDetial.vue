<template>
  <div class="xinde1">
      <div class="Xnav">
        <div class="top">
          <router-link to="/Xinde">
            <img class="return" src="../../static/img/seek1.png" alt="">
          </router-link>
          <p> 阿拉粉心得</p>
          <router-link to="###">
            <img src="../../static/img/w2.png" alt="">
          </router-link>
        </div>
      </div>
    <div :class="{chao:bol}">
      <ul class="xinde1_1" v-for="item in data">
        <li>
          <div>
            <img src="../../static/img/name5.png" alt="">
            <span>{{item.name}}</span>
          </div>
        </li>
        <li>
          <span>{{item.con}}</span>
          <img :src="item.conImg" alt="" class="conI">
        </li>
        <li>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8小时前</p>
          <div class="conI conI1">
          <img :src="item.conImg" alt="" >
            <div>
              <p>焕彩萃璨花蕊唇彩4.8g</p>
              <div>
                <img src="../../static/img/english1.png" alt="">
                <img src="../../static/img/fly1.png" alt="">
                <span>海外直邮</span>
                <p>¥166.06</p>
              </div>
            </div>
          </div>
        </li>
      </ul >
      <div class="xinde1_2">
        <p>用户评论(1)</p>
        <ul>
          <li class="xinde1_4">
            <img src="../../static/img/name5.png" alt="">
            <div>
              <p>昵称</p>
              <p>刚刚</p>
            </div>
          </li>
          <li class="xinde1_5">
            <p>该模块主要内容是其他顾客对该商品的评论...该模块主要内容是 其他顾客对该商品的评论</p>
          </li>
      <li class="xinde1_3">
        <div>
          <img src="../../static/img/zan.png" alt="">
          <p>点赞</p>
        </div> <span class="gg"></span>
        <div>
          <img src="../../static/img/pinglun.png" alt="">
          <p>写评论</p>
        </div> <span class="gg"></span>
        <div>
          <img src="../../static/img/fenxiang5.png" alt="">
          <p>分享</p>
        </div>
      </li>
        </ul>
      </div>
    </div>
    <p class="jia" @click="jia()">加载更多</p>
  </div>
</template>

<script>
  export default {
    name: "xindeDetial",
    data(){
      return {
        bol:true,
        data:[
          {name:'昵称',time:'2017-06-28',con:'该模块主要内容是顾客对购买的商品的评价...该模块主要内容是 顾客对购买的商品的评价...',conImg:'../../static/img/chencai.png'},
        ]
      }
    },
    methods:{
      jia(){
        this.bol = !this.bol
      }
    }
  }
</script>

<style scoped>
  .chao{
    height: 13.5rem;
    overflow: hidden;
  }
  .top{
    width: 100%;
    height: 1.1rem;
    background-color: #e53e42;
    display: flex;
    justify-content: space-between;
  }
  .top>p{
    width: 100%;
    height: 100%;
    font-size: 0.35rem;
    color: #ffffff;
    text-align: center;
    line-height: 1rem;
  }
  .top a{
    width: 0.35rem;
    height: 1.1rem;
    position: relative;
    margin: 0 0.3rem;
  }
  .top img{
    width: 0.25rem;
    height: 0.4rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
  .top>a:nth-of-type(2)>img{
    width: 0.4rem;
    height: 0.4rem;
  }
  .jia{
    height: 0.4rem;
    margin-top: 0.1rem;
    font-size: 0.25rem;
    text-align: center;
    line-height: 0.4rem;
    color: #808080;
  }
  .xinde1{
    overflow: scroll;
    font-size: 0.3rem;
  }
  .xinde1_1{
    background-color: #ffffff;
    margin-bottom: 0.2rem;
  }
  .xinde1_1>li:nth-of-type(1){
    padding: 0 0.2rem;
    height: 1.2rem;
    line-height: 1.2rem;
    display: flex;
    justify-content: space-between;
  }
  .xinde1_1>li:nth-of-type(1) img{
    width: 0.5rem;
    vertical-align: middle;
    margin: 0 0.2rem;
  }
  .xinde1_1>li:nth-of-type(2){
    color: #808080;
    padding: 0 0.2rem 0.5rem 0.2rem;
  }
  .gg{
    width: 0.02rem;
    height: 0.6rem;
    background-color: #666666;
    display: inline-block;
  }
  .xinde1_2{
    padding: 0.2rem;
    background-color: #ffffff;
  }
  .xinde1_2>p{
    height: 0.8rem;
    line-height: 0.8rem;
    border-bottom: 1px solid #666666;
  }
  .xinde1_4{
    height: 1rem;
    line-height: 0.8rem;
    padding-top: 0.2rem;
  }

  .xinde1_4>div{
    width: 85%;
    line-height: 0.4rem;
    float: right;
  }
  .xinde1_4>img{
    width: 0.8rem;
    height: 0.8rem;
    vertical-align: middle;
  }
  .xinde1_5{
    line-height: 0.4rem;
    margin-bottom: 0.2rem;
  }
  .xinde1_3>div{
    width: 30%;
    height: 0.8rem;
    line-height: 0.45rem;
    display: inline-block;
    text-align: center;
    margin: 0.2rem 0;
  }
  .xinde1_3>div>img{
    width: 0.3rem;

    vertical-align: middle;
  }
  .conI{
    margin: 0.2rem;
    display: block;
    padding: 0.2rem;

  }
  .conI1>img{
    width: 0.8rem;
    padding: 0.1rem 0.6rem;
    border: 1px solid #666666;
  }
  .conI1>div{
    width: 58.9%;
    padding: 0.1rem 0.3rem;
    border: 1px solid #666666;
    border-left: 0px solid #666666 ;
    line-height: 0.6rem;
    float: right;
  }
</style>
