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
      <p>限时断货</p>
    </div>

    <div class="content">
      <p class="con1">宝贝即将售罄，再不抢就没了哦~</p>
      <ul class="one" v-for="i in 4">
        <img src="../../static/img/w4.png" alt="">
        <li class="one_1">
          <h2>手撕面包105g</h2>
          <p>口感一流  营养又美味</p>
          <p>￥29.9</p>
        </li>
        <li class="one_2">
          <p>
            <span>马上抢</span>
            <img src="../../static/img/w5.png" alt="">
          </p>
          <p>还剩 <span>01:59:59</span></p>
        </li>
      </ul>
    </div>
    <div class="end" ></div>
  <hh class="hh"></hh>
  </div>
</template>

<script>
  import  Share from '@/components/Share'
    export default {
        name: "Zfive",
      data(){
        return{
          index:1,

        }
      },
      components:{
        hh:Share,
      },
      mounted(){
          $(".one").not($(".one").eq(0)).css("margin-top",0+"rem")
      },
      methods:{

          zhe(){

            this.index++
            if(this.index % 2  == 0){
            $(".hh").css("display","block")
            $(".end").animate({
              height: 1000
            },1000)
            }else{
              $(".hh").css("display","none")
              $(".end").animate({
                height: 0
              },1000)
            }
          }
      }
    }
</script>

<style scoped>
  .hh{
    display: none;
  }
  .end{
    width: 100%;
    opacity: 0.3;
    height: 0;
    position: fixed;
    top: 0;
    background: #8c8c8c;
    z-index: 1;
  }
  .one_2 p:nth-child(2) span{
    color: #f00;
    font-size: 0.2rem;
  }
  .one_2 p:nth-child(1){
    width: 1.2rem;
    height: 0.4rem;
    background-color: #f00;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.4rem;
    color: #ffffff;
    border-radius:0.5rem;
  }
  .one_2 img{
    width: 0.1rem;
    height: 0.2rem;
  }
  .one_2{
    float: left;
    margin: 1.5rem 0 0 0.5rem;
  }
  .one_1 p:nth-child(2){
    color: #4d4d4d;
  }
  .one_1 p:nth-child(3){
    color: #f00;

  }
  .one_1  {
    float: left;
    font-size: 0.3rem;
    line-height: 0.6rem;
  }
  .one img:nth-child(1){
    width: 1.8rem;
    height: 1.6rem;
    margin: 0.2rem;
    float: left;
  }
  .one{
    clear: both;
    width: 94%;
    height: 2rem;
    padding:0.2rem;
    border-bottom: solid #ccc;
    background: #ffffff;
    margin-top: 0.3rem;
  }
  .con1{
    color: #808080;
    font-size: 0.3rem;
    margin-top: 0.25rem;
    margin-left: 0.2rem;
  }
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
