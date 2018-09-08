<template>
  <v-touch v-on:swipeup="swipeup" class="vTouch">
  <div class="content" >
    <div class="top">
      <router-link to="/CutGoods">
        <img class="return" src="../../static/img/seek1.png" alt="">
      </router-link>
      <p> 商品详情</p>
      <router-link to="###">
        <img src="../../static/img/w1.png" alt="">
      </router-link>
      <router-link to="###">
        <img src="../../static/img/w2.png" alt="">
      </router-link>
        <router-link to="/">
        <img src="../../static/img/w3.png" alt="">
        </router-link>
    </div>
     <Goodslb></Goodslb>
    <ul class="lbx1">
      <li>
      <span>抢购价:</span>
        &nbsp;
      <span>¥ 129.08</span>
      </li>
      <li>
        <span>今天15:00限量开抢</span>
        <p>提醒我</p>
      </li>
    </ul>
    <ul class="cost">
      <li>
        <div class="costT">
        <img src="../../static/img/english1.png" alt="">&nbsp;&nbsp;
        <span>英国直邮</span>&nbsp;&nbsp;
        <strong>焕彩萃璨花蕊唇彩4.8g焕彩萃璨花 蕊唇彩4.8g 焕彩萃璨花蕊唇彩4.8g</strong>
        </div>
        <div>
        <p>¥ 169</p>
        </div>
        <div>
          <span>关税 : ¥ 10</span>&nbsp;
          <img src="../../static/img/detail.png" alt="">
        </div>
        <div>
        <p>邮费 : ¥ 50</p>
        </div>
      </li>
      <li>
        <img src="../../static/img/integral.png" alt="">
        &nbsp;&nbsp;
        <span>500000积分可抵500元，限购1件</span>
      </li>
      <li>
        <div>
          <img src="../../static/img/circle1.png" alt="">
          <span>不支持7天无忧退换</span>
        </div>
        <div>
          <img src="../../static/img/fly1.png" alt="">
          <span>海外直邮</span>
        </div>
        <div>
          <img src="../../static/img/zheng.png" alt="">
          <span>正品保证</span>
        </div>
        <div><img src="../../static/img/zuoArrow.png" alt=""></div>
      </li>
      <li>
        <img src="../../static/img/english1.png" alt="">
        <span>直邮,下单时需要提供真实姓名和身份证号以及收货地址 请先去添加并填写这些信息</span>
        <span>去添加</span>
      </li>
    </ul>
    <div class="cost1">
      <ul class="cost2">
        <li>
          <img src="../../static/img/gang.png" alt="">
          <span>阿拉粉心得</span>
        </li>
        <li>
          <span>查看更多</span>
          <img src="../../static/img/zuoArrow.png" alt="">
        </li>
      </ul>
      <ul class="cost3">
        <li v-for="item in data">
          <p>{{item.con}}</p>
          <div>
            <img :src="item.url" alt="">
            <span>{{item.name}}</span>
          </div>
        </li>
      </ul>
    </div>
      <ul class="cost4">
        <li class="cost5">
          <div>
            <div>
            <p>品牌<br/>介绍</p>
              <div>
              <p>
                <strong>品牌名字品牌名字</strong>
                <span style="color: #666666">英国最大彩妆品牌</span>
              </p>
              <p>
              查看<span style="color: #e53e42">10</span>件商品
              </p>
              </div>
            </div>
            <p>+关注</p>
          </div>
          <div>品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌 介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌介绍品牌</div>
        </li>
        <li class="cost6">
          <div v-for="item in data1">
            <img :src="item.url" alt="">
            <p>{{item.name}}</p>
            <p>￥{{item.pirice}}</p>
          </div>
        </li>
      </ul>
      <ul class="cost7">
        <li>
          <div class="cost_Nav">
            <img src="../../static/img/gang.png" alt="">
            <span>商品描述</span>
          </div>
          <p>
            该模块主要用来描述上面产品，模块大小根据商品描述的内容多 少来决定。该模块主要用来描述上面产品该模块主要用来描述上 面产品该模
          </p>
        </li>
        <li>
          <div>
            <img src="../../static/img/gang.png" alt="">
            <span class="cost_Nav">使用方法</span>
          </div>
          <p>
            <span>1.该模块用来介绍商品的使用方法</span><br>
            <span>2.该模块的大小同样取决于该使用方法的内容多少</span><br>
            <span>3.所以该模块活动性比较大</span>
          </p>
        </li>
        <li>
          <div>
            <img src="../../static/img/gang.png" alt="">
            <span class="cost_Nav">商品图片</span>
          </div>
          <p>该模块主要用于上面产品的产品展示图，该模块的大小取决于 该商品图片长度的多少，该模块活动性比较大，应预留够足够 的大小</p>
          <img src="../../static/img/chencai.png" alt=""><br/>
          <img src="../../static/img/chencai.png" alt="">
        </li>
      </ul>
    <ul class="cost8">
      <li>
        <img src="../../static/img/gang.png" alt="">
        <span class="cost_Nav">阿拉粉在买</span>
      </li>
      <li class="cost6">
        <div v-for="item in data1">
          <img :src="item.url" alt="">
          <p>{{item.name}}</p>
          <p>￥{{item.pirice}}</p>
        </div>
      </li>
    </ul>
    <ul class="cost9">
      <li>
        <img src="../../static/img/gang.png" alt="">
        <span class="cost_Nav">服务承诺</span>
      </li>
      <li>
        <div v-for="item in data2">
          <img :src="item.url" alt="">
          <p>{{item.name}}</p>
        </div>
      </li>
    </ul>
    <div class="cost10">
        <img src="../../static/img/xiaotieshi.png" alt="">
      <p>运费相关：英国直邮商品相关运费为50元。</p>
      <p>价格说明：划线价、国内参考价、店头价可能是品牌专柜价、吊 牌价或品牌商提供的指导价等价格，其受国家地区、时间和市场 行情波动的</p>
      <p>价格说明：划线价、国内参考价、店头价可能是品牌专柜价、吊 牌价或品牌商提供的指导价等价格，其受国家地区、时间和市场 行情波动的</p>
    </div>
    <ul class="costEnd">
      <li>
        <img src="../../static/img/kefu.png" alt="">
        <span>在线客服</span>
      </li>
      <li>
        <span>加入购物车</span>
      </li>
    </ul>
    <router-view></router-view>
  </div>
  </v-touch>
</template>

<script>
  import Goodslb from '@/components/Goodslb'
    export default {
        name: "Details",
      components:{
        Goodslb
      },
      data(){
        return{
           data:[
             {con:'颜色涂抹上去看着 很漂亮，棒棒哒！',url:'../../static/img/per.png',name:'霜霜'},
             {con:'美美的！！！',url:'../../static/img/per.png',name:'爱美丽'},
             {con:'美美的！！！',url:'../../static/img/per.png',name:'爱美丽'},
             ],
          data1:[
            {pirice:199,name:'会呼吸丝滑蜜粉',url:'../../static/img/dianfanguo.png'},
            {pirice:299,name:'BB矿物粉饼9g',url:'../../static/img/fenbing.png'},
            {pirice:188,name:'植萃腮红胭脂',url:'../../static/img/yanzhi.png'}
          ],
          data2:[
            {name:'正品保证',url:'../../static/img/zzz1.png'},
            {name:'海外直邮',url:'../../static/img/zzz2.png'},
            {name:'超时发货补贴',url:'../../static/img/zzz3.png'},
            {name:'POCC承包',url:'../../static/img/zzz4.png'}
          ]
        }
      },
  methods:{
    swipeup(){
      console.log(1)
      this.$router.push({'path':'/DetailsCover'});
    },
  }

    }
</script>

<style scoped>
  .vTouch{
    touch-action: pan-y!important;
  }
  .top{
    width: 100%;
    height: 1.1rem;
    background-color: #e53e42;
    position: fixed;
    top: 0;
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
  .top a:nth-of-type(1){
    width: 0.35rem;
    height: 1.1rem;
    position: relative;
    margin-left:0.3rem;
  }
  .top a{
    width: 0.35rem;
    height: 1.1rem;
    position: relative;
    margin-right:0.4rem;
  }
  .top .return{
    width: 0.25rem;
    height: 0.4rem;
  }
  .top img{
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
  .content{
    width: 100%;
    position: relative;
    padding-top: 0.5rem;
  }
  .lbx1{
    height: 1rem;
    padding: 0 0.2rem;
    background-color: #e53e42;
    font-size: 0.25rem;
    color: #ffffff;
    line-height: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .lbx1>li:nth-of-type(2){
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .lbx1>li:nth-of-type(2) p{
    width: 1.2rem;
    height: 0.45rem;
    color: #e53e42;
    text-align: center;
    line-height: 0.45rem;
    background-color: #ffffff;
    border-radius: 0.45rem;
    position: relative;
    top: 0;
    bottom: 0;
    margin: auto 0.2rem;
  }
  .cost>li{
    color: #333333;
    font-size: 0.3rem;
    padding: 0 0.2rem;
    background-color: #ffffff;
    border-bottom: 1px solid #949494;
  }
  .cost>li:nth-of-type(1){
    height: 2.5rem;
    font-size: 0.3rem;
  }
  .cost>li:nth-of-type(1)>div{
    margin-top: 0.1rem;
  }
  .costT>img{
    width: 0.4rem;
    height: 0.3rem;
  }
  .costT>span{
    color: #e53e42;
  }
  .cost>li:nth-of-type(1)>div:nth-of-type(2){
    color: #e53e42;
  }
  .cost>li:nth-of-type(1)>div:nth-of-type(3)>img{
    width: 0.6rem;
    height: 0.3rem;
  }
  .cost>li:nth-of-type(2){
    height: 0.65rem;
    line-height: 0.65rem;
  }
  .cost>li:nth-of-type(3){
    height: 0.4rem;
    font-size: 0.25rem;
    padding: 0.2rem;
    display: flex;
    justify-content: space-between;
  }
  .cost>li:nth-of-type(4){
    height: 1rem;
    color: #e53e42;
    font-size: 0.15rem;
    line-height: 0.5rem;
    padding: 0.1rem 0.2rem;
  }
  .cost>li:nth-of-type(4)>img{
    width: 0.4rem;
    height: 0.3rem;

  }
  .cost>li:nth-of-type(4)>span:nth-of-type(2){
    font-size: 0.2rem;
    width: 0.8rem;
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    display: inline-block;
    border: 1px solid #e53e42;
    margin-left: 0.7rem;
  }
  .cost1{
    background-color: #ffffff;
    margin: 0.2rem 0;
  }
  .cost1>ul{
    display: flex;
    justify-content: space-between;
  }
  .cost2{
    height:0.6rem;
    line-height: 0.6rem;
    border-bottom: 1px solid #666666;
    font-size: 0.3rem;
    padding: 0 0.2rem;

  }
  .cost3>li{
    width: 2.2rem;
    height: 2rem;
    margin: 0.2rem;
    font-size: 0.2rem;
    padding: 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #666666;
  }
  .cost3>li>div>img{
    width: 0.3rem;
    height: 0.3rem;
    vertical-align: middle;
  }
  .cost4{
    background-color: #ffffff;
  }
  .cost5{
    font-size: 0.2rem;
    margin: 0.2rem 0;
  }
  .cost5>div:nth-of-type(1){
    padding: 0.2rem;
    display: flex;
    justify-content: space-between;
  }
  .cost5>div:nth-of-type(1)>div{
    display: flex;
    justify-content: space-between;
  }
  .cost5>div:nth-of-type(1)>div>p{
    width: 0.6rem;
    height: 0.6rem;
    margin: 0 0.1rem;
    border: 1px solid #666666;
    text-align: center;
    line-height: 0.3rem;
    word-wrap: break-word;
  }
  .cost5>div:nth-of-type(1)>p{
    width: 1rem;
    height: 0.3rem;
    font-size: 0.25rem;
    border: 1px solid #e53e42;
    border-radius: 0.2rem;
    color: #e53e42;
    text-align: center;
    line-height: 0.3rem;
  }
  .cost5>div:nth-of-type(2){
    font-size: 0.17rem;
    padding:0.2rem;
    border-bottom:1px solid #666666 ;
  }
  .cost6{
    font-size: 0.24rem;
    height: 2.6rem;
    display: flex;
    justify-content: space-around;
  }
  .cost6>div{
    width: 24%;
    margin-top: 0.2rem;
    text-align: center;
  }
  .cost6>div>img{
    height: 1.45rem;
    margin-bottom: 0.2rem;
  }
  .cost6>div>p:nth-of-type(2){
    color: #e53e42;
  }
  .cost7{
    margin: 0.2rem 0;
    padding:0 0.2rem;
    font-size: 0.15rem;
    color: #4d4d4d;
    background-color: #ffffff;
  }
  .cost7>li>div:nth-of-type(1){
    border-top:0 solid #666666;
  }
  .cost7>li>div{
    height: 0.6rem;
    line-height: 0.6rem;
    font-weight: bold;
    font-size: 0.3rem;
    margin: 0.2rem 0;
    border-bottom:1px solid #666666;
    border-top:1px solid #666666;
  }
  .cost7>li>img{
    width: 1.2rem;
    height: 2.6rem;
    margin: 0.2rem 40%;
  }
  .cost8{
    background-color: #ffffff;
  }
  .cost8>li:nth-of-type(1){
    height: 0.6rem;
    line-height: 0.6rem;
    font-weight: bold;
    font-size: 0.3rem;
    margin: 0.2rem 0;
    border-bottom:1px solid #666666;
  }
  .cost9{
    background-color: #ffffff;
  }
  .cost9>li:nth-of-type(1){
    height: 0.6rem;
    line-height: 0.6rem;
    font-weight: bold;
    font-size: 0.3rem;
    margin: 0.2rem 0;
    border-bottom:1px solid #666666;
  }
  .cost9>li:nth-of-type(2){
    display: flex;
    justify-content: space-around;
  }
  .cost9>li:nth-of-type(2)>div{
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.3rem;
    margin: 0.3rem 0;
    width: 0.8rem;
    height: 1rem;
  }
  .cost10{
    font-size: 0.18rem;
    color: #797979;
    line-height: 0.3rem;
    text-align: center;
    margin: 0.2rem 0.2rem 1.5rem 0.2rem;
  }
  .cost10>img{
    height: 0.6rem;

  }
  .costEnd{
    width: 100%;
    height: 1rem;
    color: #4d4d4d;
    background-color: #ffffff;
    font-size: 0.3rem;
    position: fixed;
    bottom: 0;
  }
  .costEnd>li{
    width: 50%;
    float: left;
    text-align: center;
    line-height: 1rem;
  }
  .costEnd>li:nth-of-type(1) img{
    width: 0.4rem;
    height: 0.4rem;
    margin: 0.15rem;
    vertical-align: middle;
  }
  .costEnd>li:nth-of-type(2){
    background-color: #e53e42;
    color: #ffffff;
  }
</style>
