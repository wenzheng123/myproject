<template>
  <v-touch v-on:swiperight="swiperright" style="touch-action: pan-y!important;" class="vTouch">
  <div class="ClassTo" >
    <ul class="ClassTo1" >
      <div class="cNav">
        <img src="../../static/img/Arrow1.png" alt="">
        <p>分类</p>
        <p class="sure" @click="sure()">确定</p>
      </div>
     <li v-for="(item,index) in data" :class="{duihao:changeC==index}" @click="change(index)">{{item.name}}</li>
    </ul>
  </div>
  </v-touch>
</template>

<script>
  export default {
    name: "ClassTo",
    data(){
      return {
        str:'',
        changeC:-1,
        data: [
          {name: '洁面护理'},
          {name: '人气口红'},
          {name: '名牌包包'},
          {name: '洁面护理'},
          {name: '人气口红'},
          {name: '名牌包包'},
          {name: '洁面护理'},
          {name: '人气口红'},
          {name: '名牌包包'},
          {name: '洁面护理'},
          {name: '人气口红'},
          {name: '名牌包包'},
          {name: '洁面护理'},
          {name: '人气口红'},
          {name: '名牌包包'},
          {name: '洁面护理'},
          {name: '人气口红'},
          {name: '名牌包包'},
          {name: '洁面护理'},
          {name: '人气口红'},
          {name: '名牌包包'},
          {name: '洁面护理'},
          {name: '人气口红'},
          {name: '名牌包包'},
          {name: '洁面护理'},
          {name: '人气口红'},
          {name: '名牌包包'},
          {name: '洁面护理'},
          {name: '人气口红'},
          {name: '名牌包包'},
          {name: '洁面护理'},
          {name: '人气口红'},
          {name: '名牌包包'},
          {name: '洁面护理'},
        ]
      }
    },
    methods:{
      swiperright(){
        console.log(1)
        this.$router.push({'path':'/Cover'});
      },
      change(index,str){
          this.changeC = index;
          this.str = this.data[index].name
        console.log(this.str)
      },
      sure() {
        window.localStorage.setItem('name', this.str)
        if (this.str == "人气口红") {
          location.replace('http://10.90.81.240:8080/#/Facial')
        }
      }
    },


  }
</script>

<style scoped>
  .vTouch{
    touch-action: pan-y!important;
  }
  .ClassTo{
    color: #4d4d4d;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    font-size: 0.3rem;
    position: absolute;
    top: 0;
    background-color: rgba(0,0,0,0.3);
  }
  .ClassTo1{
    width: 5.6rem;
    height: 100%;
    float: right;
    overflow: hidden;
    background-color: white;
  }
  .cNav{
    height: 0.7rem;
    display: flex;
    padding: 0.2rem;
    background-color: #f2f2f2;
    text-align: center;
    line-height: 1.1rem;
    justify-content: space-between;
    position: relative;
    font-size: 0.36rem;
  }
  .cNav img{
    width: 0.3rem;
    height: 0.4rem;
    position: relative;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
  .sure{
    font-size: 0.3rem;
  }
  .ClassTo1>li{
    height: 0.61rem;
    font-size: 0.24rem;
    line-height: 0.6rem;
    border-bottom: 1px solid #cccccc;
    margin: 0 0.2rem;
  }
  .duihao{
    color: #e53e42;
    background: url("../../static/img/duihao.png") no-repeat center right/0.25rem 0.25rem;
  }
</style>

