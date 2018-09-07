<template>
  <div class="box">
    <div class="top">
      <router-link to="/"><img src="../../static/img/seek1.png" alt=""></router-link>
      <p>消息中心</p>
    </div>
    <div class="content">
      <div class="one">
        <p>2017年06月20日10:44</p>
        <div class="one_1">
          <p>新品推荐</p>
          <div class="one_3">
          <img src="../../static/img/news1.png" alt=""><span>新品上市啦！时间不多了，赶紧行动起
来吧！</span>
        </div>
          <div class="one_2">
            <span>查看更多</span>
            <img src="../../static/img/news2.png" alt="">
          </div>
        </div>
      </div>
      <div class="two">
      <div class="one">
        <p>2017年06月20日11:12</p>
        <div class="one_1">
          <p>安全提醒</p>
          <div class="one_3">
            <img src="../../static/img/news3.png" alt=""><span>近期有不法分子冒充阿拉灯客服进行诈
骗，请认准阿拉灯官方客服电话
4000123456</span>
          </div>
        </div>
      </div>
      </div>
      <!--二-->
        <div class="two1">
        <div class="one">
          <p>2017年06月20日11:12</p>
          <div class="one_1">
            <p>收货啦</p>
            <div class="one_3">
              <img src="../../static/img/news4.png" alt=""><span>你的货物到站了，请注意查收哦~！</span>
            </div>
          </div>
        </div>
    </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "News",

    }
</script>

<style scoped>
  .two1{
    height: 3.1rem;
    overflow: hidden;
  }
 .two{
   margin-top: 0.8rem;
   height: 3.1rem;
   overflow: hidden;
 }
  .one_2{
    margin-left: 0.18rem;
    width: 6.47rem;
    margin-top: 0.27rem;
  }
  .one_2 img{
    float: right;
  }
  .one_2 span{
    float: left;
  }
   .one_3 span{
     position: absolute;
     left: 1.52rem;
     top: 0rem;
   }
  .one_3{
    border-bottom: solid #ccc;
    margin: 0.8rem 0 0  0.2rem;
    position: relative;
  }
  .one_1 p{
    margin-left: -1.9rem;
    margin-top: -0.2rem;
  }
  .one_1{
    position: absolute;
    top: 0.88rem;
    left: 0.18rem;
    border: 1px solid #ccc;
    width: 6.8rem;
    height: 3.2rem;
    background: #ffffff;
  }
  .one p:nth-child(1){
    position: absolute;
    left: 2.1rem;
    top: 0.3rem;
  }
  .one{
    font-size: 0.3rem;
    color: #808080;
    position: relative;
    height: 3.24rem;
  }
  /*tou*/
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
    left: 0.24rem;
    top: 0.44rem;
  }

</style>
