<template>
  <v-touch v-on:swiperight="swiperright" class="vTouch" >
<div class="Cover" @touchmove.prevent>
  <ul class="Cover1" >
    <li >
      <div >
        <img src="../../static/img/Car.png" alt="">
        <span>发货地</span>
      </div>
        <ul v-for="(item1,index) in data1">
          <li :class="{color:changeA==index}" @click="change(index,data1)">{{item1.name}}</li>
        </ul>
    </li>
    <li>
      <div>
        <img src="../../static/img/goodsType.png" alt="">
        <span>商品类型</span>
      </div>
      <ul v-for="(item2,index) in data2">
        <li :class="{color:changeB==index}" @click="change(index,data2)">{{item2.name}}</li>
      </ul>
    </li>
    <li>
      <div>
        <img src="../../static/img/classify1.png" alt="">
        <span>分类</span>
      </div>
      <ul>
        <li v-for="(item3,index) in data3" :class="{color:changeC==index}" @click="change(index,data3)">{{item3.name}}</li>
        <li class="cover3">
          <router-link to="/ClassTo" class="cover3">
          更多分类 <img src="../../static/img/feileiimg.png" alt="" >
          </router-link>
        </li>
      </ul>
    </li>
    <div class="Cover4">
      <span @click="reset()">重置</span>
      <span @click="sure()">确定</span>
    </div>
  </ul>
</div>
  </v-touch>
</template>

<script>
    export default {

        name: "Cover",
      data(){
          return {
            changeA:-1,
            changeB:-1,
            changeC:-1,
            data:[],
            data1: [
              {name: '日本'},
              {name: '美国'},
              {name: '中国'},
              {name: '澳大利亚'},
              {name: '英国'},
            ],
            data2: [
              {name: '促销类型'},
              {name: '首发商店'}
            ],
            data3: [
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

            ]
          }
      },
      methods:{
        swiperright(){
          console.log(1)
          this.$router.push({'path':'/Facial'});
        },

          change(index,data){
            if(data == this.data1){
            this.changeA = index;
              this.data[0] = data[index].name
            }else if(data == this.data2){
            this.changeB = index;
              this.data[1] = data[index].name
            }else if(data == this.data3){
            this.changeC = index;
              this.data[2] = data[index].name
            }

          },
        reset(){
            this.changeA = -1;
            this.changeB = -1;
            this.changeC = -1;
          window.localStorage.removeItem('name')
          prompt('重置商品', window.localStorage.removeItem('name'))
        },
        sure(){
            window.localStorage.setItem('name',this.data)
          prompt('获取商品',window.localStorage.getItem('name'))
          console.log(window.localStorage.getItem('name'))
        }
      }
    }
</script>

<style scoped>
  .vTouch{
    touch-action: pan-y!important;
  }
  .Cover1>li>ul>.color{
    background: #ffd3d3 url("../../static/img/Yes.png") no-repeat top left/0.5rem;
    color: #e53e42;
  }
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
    width: 5.6rem;
    height: 100%;
    float: right;
    background-color: white;
  }
.Cover1>li{
  margin: 0.2rem;
  padding-bottom: 0.1rem;
  overflow: hidden;
  border-bottom: 1px solid ;
}
.Cover1>li>div{
  height: 0.8rem;
  line-height: 0.8rem;
}
.Cover1>li>div>span{
  margin-left: 0.1rem;
}
.Cover1>li>ul>li{
  width: 1.5rem;
  height: 0.8rem;
  margin: 0.11rem;
  background-color: #f2f2f2;
  border-radius: 0.2rem;
  float: left;
  text-align: center;
  line-height: 0.8rem;
}
  .Cover1>li>div>img{
    width: 0.4rem;
  }
  .cover3{
    font-size: 0.24rem;
    color: #808080;
  }
  .Cover4{
    height: 1rem;
    font-size: 0.3rem;
    background-color: #f2f2f2;
  }
 .Cover4>span{
   width: 50%;
   height: 1rem;
   float: left;
   text-align: center;
   line-height: 1rem;
 }
  .Cover4>span:nth-of-type(2){
    background-color: #e53e42;
    color: #ffffff;
  }
</style>
