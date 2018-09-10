<template>
  <div class="xinde1">
    <div :class="{chao:bol}">
      <ul class="xinde1_1" v-for="item in data">
        <li>
          <div>
            <img src="../../static/img/name5.png" alt="">
            <span>{{item.name}}</span>
          </div>
          <div>
            <span>{{item.time}}</span>
          </div>
        </li>
        <li>
          <span>{{item.con}}</span>
          <img :src="item.conImg" alt="" class="conI">
        </li>
        <li>
          <div>
            <img src="../../static/img/zan.png" alt="">
            <span>1</span>
          </div> |
          <div>
            <img src="../../static/img/pinglun.png" alt="">
            <span>10</span>
          </div> |
          <div>
            <img src="../../static/img/fenxiang5.png" alt="">
            <span>26</span>
          </div>
        </li>
      </ul>
    </div>
    <p class="jia" @click="jia()">加载更多</p>
  </div>
</template>

<script>
  export default {
    name: "xinde2",
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
    height: 8rem;
    overflow: hidden;
  }
  .jia{
    height: 0.5rem;
    margin-top: 1rem;
    font-size: 0.25rem;
    text-align: center;
    line-height: 0.5rem;
    color: #808080;
  }
  .xinde1{
    margin-top:1.9rem ;
    overflow: scroll;
    font-size: 0.26rem;
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
    border-bottom: 1px solid #666666;
  }
  .xinde1_1>li:nth-of-type(3)>div{
    width: 30%;
    height: 0.8rem;
    display: inline-block;
    text-align: center;
    line-height: 0.8rem;
  }
  .xinde1_1>li:nth-of-type(3)>div>img{
    width: 0.3rem;
    vertical-align: middle;
    margin: 0 0.2rem;
  }
  .conI{
    margin: 0.2rem;
    display: block;
    padding: 0.2rem;
  }
</style>
