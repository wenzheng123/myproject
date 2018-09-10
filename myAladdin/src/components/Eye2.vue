<template>
  <div class="box">
    <div class="top">
      <router-link to="/four"><img src="../../static/img/seek1.png" alt="" ></router-link>
      <div class="right">
        <img src="../../static/img/w1.png" alt="">
        <router-link to="/share">
          <img src="../../static/img/w2.png" alt="" @click="zhe">
        </router-link>
        <img src="../../static/img/w3.png" alt="">
      </div>
      <p>商品详情</p>
    </div>

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

  </div>
</template>

<script>
    export default {
        name: "Eye2",
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
    }
</script>

<style scoped>
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
    z-index: 3;
  }
  .right{
    position: absolute;
    right: 0.24rem;
    top: 0rem;
  }
  .top>a:nth-child(1)>img{
    position: absolute;
    left: 0.24rem;
    top: 0.44rem;
  }
</style>
