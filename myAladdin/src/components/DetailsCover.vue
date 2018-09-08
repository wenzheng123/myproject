<template>

    <div class="Cover" >
      <ul class="Cover1" >
        <div>
          <span>服务说明</span>
            <router-link to="/Details">
              <p>X</p>
            </router-link>
        </div>
        <li v-for="item in data">
        <div>
          <img :src="item.url" alt="">
          <span>{{item.name}}</span>
        </div>
          <p>{{item.detil}}</p>
        </li>
      </ul>
    </div>

</template>

<script>
  export default {

    name: "DetailsCover",
    data(){
      return {
        data:[
          {url:'../../static/img/biyuan.png',name:'不支持7天无忧退货',detil:'该商品特殊性，一经售出不存在质量问题不享受7天无理由 退换。请在收到商品后在拆封或试穿之前仔细检查外观和附 属品。'},
          {url:'../../static/img/feiji1.png',name:'海外直邮',detil:'下单后英国直邮商品平均7-10个工作日发货，发货后平均 12-20个工作日到货，特殊情况除外。包裹将由专业国际物 流公司为您发'},
          {url:'../../static/img/zheng1.png',name:'正品保证',detil:'本商品绝对正品保证。'}
        ]
      }
    },
    methods:{}
  }
</script>

<style scoped>
  .Cover{
    position: fixed;
    top: 0;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    font-size: 0.3rem;
    background-color: rgba(0,0,0,0.3);
  }
  .Cover1{
    color: #333333;
    margin-bottom: 0.5rem;
    position: absolute;
    bottom: -1rem;
    background-color: #ffffff;
  }
  .Cover1>div{
    height: 0.8rem;
    padding: 0.2rem;
    font-size: 0.26rem;
    text-align: center;
    line-height: 0.8rem;
  }
  .Cover1>div p{
    float: right;
  }
  .Cover1>li{
    padding: 0.2rem;
    height: 1.8rem;
    border-top: 1px solid #666666;
  }
  .Cover1>li>div>img{
    width: 0.4rem;
    height: 0.4rem;
    vertical-align: middle;
  }
  .Cover1>li>p{
    color: #919191;
    margin-left: 0.4rem;
    line-height: 0.5rem;
  }

</style>
