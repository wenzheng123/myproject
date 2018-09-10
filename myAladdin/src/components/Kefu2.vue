<template>
    <div class="box">
      <div class="top">
        <router-link to="/kefu1"><img src="../../static/img/seek1.png" alt="" ></router-link>
        <p class="tz">跳过</p>
        <p>选择咨询的订单</p>
      </div>
      <div class="content">
        <div class="one1">
          <img src="../../static/img/kefu3.png" alt="">
          国家直邮
        </div>
        <div class="one">
            <div class="one_1">
              <span>订单编号：1485269676465</span>
              <span>
           交易完成
           </span>
            </div>
            <div class="one_2">
              <router-link to="/kefu3">
              <img src="../../static/img/kefu2.png" alt="" v-for="i in 4">
              </router-link>
            </div>
            <div class="one_3">

              <div class="one_4">
                <p>
               <span>发表心得</span>
                <span>退货退款</span></p>
              </div>
            </div>
      </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Kefu2"
    }
</script>

<style scoped>
  .one_4 p{
    margin-top: 0.25rem;
    margin-left: 4.5rem;
  }
  .one_4 span{
    display: inline-block;
    width: 1.23rem;
    height: 0.4rem;
    background: #f00;
    border-radius: 0.2rem;
    text-align: center;
    color: #ffffff;

  }
  .one_4{
    overflow: hidden;
    width: 100%;
    height: 0.9rem;
    font-size: 0.25rem;
    background: #ffffff;
    border-bottom: solid #ccc;
  }


  .one_3{


  }
  .one_2 img{
    margin: 0.5rem 0 0 0.8rem;
  }
  .one_2  {
    width: 100%;
    height: 2.2rem;
    background: #ffffff;
    border-bottom: solid #ccc;
  }
  .one_1 span:nth-of-type(2){
    margin-left: 1.8rem;
    color: #f00;
  }
  .one_1 span:nth-of-type(1){
    margin-left: 0.2rem;
  }
  .one_1{
    margin-top: 0.2rem;
    line-height: 0.6rem;
    font-size: 0.3rem;
    width: 100%;
    height: 0.6rem;
    background: #ffffff;
    border-bottom:solid #ccc;
  }
  .one1{
    font-size: 0.3rem;
    margin:0.12rem;
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
  .tz{
    position: absolute;
    right: 0.24rem;
    top: 0rem;
    font-weight: 100;
  }
  .top>a:nth-child(1)>img{
    position: absolute;
    left: 0.24rem;
    top: 0.44rem;
  }
</style>
