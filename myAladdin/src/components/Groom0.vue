<template>
  <div class="Groom0">
    <div>
      <img src="../../static/img/Groom1.png" alt="">
      <ul class="G0top">
        <li>
          <div class="area">
            <img src="../../static/img/Japanese.png" alt="">
          </div>
          <div class="area">
            <img src="../../static/img/Australia.png" alt="">
          </div>
        </li>
        <li>
          <div class="area">
            <img src="../../static/img/Chinese.png" alt="">
          </div>
        </li>
        <li>
          <div class="area">
            <img src="../../static/img/American.png" alt="">
          </div>
          <div class="area">
            <img src="../../static/img/yingguo.png" alt="">
          </div>
        </li>
      </ul>
    </div>
    <div class="G0bottom">
      <p>热卖品类</p>
      <ul class="bOne" v-for="item in 2">
      <li v-for="item in data">
        <img :src="item.url" alt="">
        <p>{{item.name}}</p>
      </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Groom0",
      data(){
          return{
            id:'',
            data:[
              {url:'../../static/img/Interface.png',name:'洁面护理'},
              {url:'../../static/img/Lipstick.png',name:'人气口红'},
              {url:'../../static/img/Bag.png',name:'名牌包包'}
            ]
          }
      },
      mounted(){
        this.id= this.$route.query.id
      }
    }
</script>

<style scoped>
  .Groom0{

  }
  .Groom0>div>img{
    width: 5rem;
  }
  .area{
    width: 1.6rem;
    height: 1.6rem;
  }
  .G0top{
    margin-top:0.3rem;
    height: 3.3rem;
    border-bottom: 1px solid #cccccc;
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .G0bottom>p{
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: left;
  }
  .G0top>li:nth-of-type(2){
    position: absolute;
    left: 35%;
    top: 1rem;
  }
  .bOne img{
    width: 1.34rem;
  }
  .bOne{
    margin-bottom: 0.2rem;
    display: flex;
    justify-content: space-around;
  }
</style>
