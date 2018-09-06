<template>
    <div class="box">
      <div class="top">
        <router-link to="/four"><img src="../../static/img/seek1.png" alt=""></router-link>
        <img src="../../static/img/分享.png" alt="" >
        <p>健康美味兼得的布尔本</p>

      </div>
      <div class="content">
        <img src="../../static/img/cate1.png" alt="" class="z2">
        <div class="one">
          印度著名糕点品牌Bourbon布尔本，成立于1924年，
          是印度零食十强之一。制作的曲奇和糕点系列，品质
          远胜于欧洲传统西点，做工研究、精致、高贵、时尚、
          健康是Bourbon一贯的严谨作风，其北日本系列礼盒
          更是夺得了销售冠军，相当受欢迎
        </div>
        <div class="one0" v-for="i in 2">
          <div class="one2">
            <img src="../../static/img/cate2.png" alt="">
            <div class="one2_2">
              <h2>最受欢迎曲奇礼盒系列</h2>
              <p>印度本土国内受欢迎的曲奇点心，浓浓
                的牛油味，饼干的酥脆和可可牛奶的美
                妙结合，咬下去，满满幸福感。礼盒装
                有三种不同口味，一盒里约54枚，布尔
                本家产品，礼盒包装无论是送人还是留
                着自己下午茶，都非常合适。</p>
            </div>
          </div>
          <div class="one3_1 clearfix">
            <div class="one3" v-for="i in 4">
              <img src="../../static/img/cate3.png" alt="">
              <p>BOURBON布尔本hellokitty黄油曲奇礼盒54枚
                </p>
              <p>￥12.90</p>
              <p>立即购买</p>
            </div>
          </div>
        </div>

        <!--那两个-->
      </div>
    </div>
</template>

<script>
    export default {
        name: "Cate"
    }
</script>

<style scoped>
  .clearfix:after { clear:both;content:".";display:block;font-size:0;height:0;visibility:hidden; }
  .clearfix:after { _zoom:1; }
  .one3_1{
    margin: 0.28rem;
  }
  .one3 p:nth-child(4){
    width: 2.2rem;
    height: 0.3rem;
    background: #f00;
    border-radius: 0.3rem;
    margin: 0.18rem auto;
    text-align: center;
    color: #ffffff;
  }
  .one3 p:nth-child(3){
    color: #f00;
    text-align: center;
    margin-top:0.14rem ;
  }
   .one3 p:nth-child(2){
     margin: 0.15rem 0 0 0.25rem;
   }
  .one3{
    width: 3.16rem;
    height: 4.4rem;
    background: #ffffff;
    font-size: 0.2rem;
    float: left;
    margin: 0.1rem 0.05rem;
  }
  .one2_2 p{
    margin-top: 0.3rem;
  }
  h2  {
    color: #4e1f1d;
  }
  .one2_2 {
    width: 4.1rem;
    height: 2.74rem;
    font-size: 0.25rem;

    margin-top:-4rem ;
    margin-left: 2.63rem;
  }
  .one2 img{
    width: 2.23rem;
    height: 3.62rem;
    margin: 0.2rem;
  }
  .one2{
    width: 6.84rem;
    height: 4rem;
    margin: 0.4rem 0.2rem 0;
    background: #ffffff;

  }
  .one{
    width: 97.1%;
    height: 2.1rem;
    background: #ffcd2c;
    margin-top: -0.35rem;
    font-size: 0.27rem;
    padding-top: 0.3rem;
    padding-left: 0.2rem;
  }
  .z2{
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
  .top img:nth-child(2){
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
