<template>
<div class="Xinde">
  <div class="Xnav">
  <div class="top">
    <router-link to="/Details">
      <img class="return" src="../../static/img/seek1.png" alt="">
    </router-link>
    <p> 阿拉粉心得</p>
  </div>
    <ul class="top1">
       <!--<router-link :to="'/Xinde'+(index+1)" v-for="(item,index) in nav" :class="{color:changeC==index}">-->
        <li  @click="change(index)">
        {{item}}
        <img src="../../static/img/tiao.png" alt="" :class="{show:changeC==index}">
      </li>
      <!--</router-link>-->
    </ul>
  </div>
<router-view></router-view>
</div>
</template>

<script>
    export default {
        name: "Xinde",
      data(){
          return {
            nav:['全部心得','晒图'],
            changeC:0
          }
      },
      methods:{
          change(index){
            this.changeC = index
          }
      }
    }
</script>

<style scoped>
  .top1 li>.show{
    visibility: visible;
  }
  .top1>.color{
    color: #e8585b;
  }
  .Xnav{
    width: 100%;
    position: fixed;
    top: 0;
  }
  .top{
    width: 100%;
    height: 1.1rem;
    background-color: #e53e42;
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
  .top img{
    width: 0.25rem;
    height: 0.4rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
  .top1{
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.5rem;
    text-align: center;
    color: #b8b8b8;
    background-color: #ffffff;
    border-bottom:1px solid #666666;
  }
  .top1>a{
    width: 49%;
    text-align: center;
    font-size: 0.3rem;
    float: right;
   color: #4d4d4d;
    position: relative;
  }
  .top1>a>li>img{
    height: 0.02rem;
    visibility: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .top1>a:nth-of-type(1){
    float: left;
  }
</style>
