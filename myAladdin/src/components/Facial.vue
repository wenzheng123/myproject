<template>
  <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright"   class="vTouch">
    <div class="Facial" >

  <div class="top">
    <div>
      <router-link :to="{
      path:'/Groom1',
      query:{id:name},
       }">
      <img src="../../static/img/Arrow.png" alt="">
      </router-link>
      <span>面部护理</span>
    </div>
  </div>
    <ul >
      <li>销量</li>
      <li>最新</li>
      <li>
        价格
        <div class="order">
          <img @click="torder"  src="../../static/img/order.png" alt="">
          <img @click="border" src="../../static/img/down.png" alt="">
        </div>
      </li>
      <li>筛选</li>
    </ul>
      <div class="input" v-if="bol">
        <span v-for="(item,index) in arr">{{item}}
          <img @click="dell(index,item)" src="../../static/img/exit.png" alt="">
        </span>
        <button @click="dellAll">清空</button>
      </div>
    <div class="list" v-for="item in data">
      <ul>
        <li>
        <div class="list1">
          <img src="../../static/img/Gloss.png" alt="">
        </div>
          <div class="list2">
            <h3>焕彩萃璨花蕊唇彩4.8g</h3>
            <p>焕彩萃璨花蕊唇彩4.8g焕彩萃璨花蕊唇彩4.8g</p>
            <p>焕彩萃璨花蕊唇彩4.8g</p>
            <div class="list3">
              <div>
                <img src="../../static/img/Japan.png" alt="">
                <img src="../../static/img/fly.png" alt="">
                <span>海外直邮</span>
              </div>
              <p >¥{{item}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
   <div class="bot">
     <img src="../../static/img/l1.png" alt="">
     <p @click="add">加载更多</p>
   </div>
    <transition name="slide-fade">
      <router-view/>
    </transition>

    </div>
  </v-touch>
</template>

<script>
  import Cover from  '@/components/Cover'
    export default {

        name: "Facial",
      components:{
          Cover
      },
      data(){
          return{
            dd:'',
            bol:false,
            arr:[],
            name:'',
            data:['166.00','163.00','164.00','165.00']
          }
      },
      methods: {
        swiperleft() {
          this.$router.push({'path': '/Cover'});
        },
        swiperright() {
          console.log(1)
          this.$router.push({'path': '/Facial'});
        },
        add() {
          prompt('写点啥那?', '快写啊!')
        },
        border() {
          this.data.sort((a, b) => {
            return a < b;
          });//降序
        },
        torder() {
          this.data.sort((a, b) => {
            return a > b;
          });//降序
        },
        dell(index, item) {
          item = '';
          this.arr.splice(index, 1)
          if (this.arr == '') {
            this.bol = false
          }
        },
        dellAll(){
          this.bol = false
        }
      },
      mounted(){
        this.dd =  window.localStorage.getItem('name')
        this.arr.push(this.dd)
        console.log(this.arr)
        if(this.arr != ''){
          this.bol = true
        }
        this.dd =  window.localStorage.removeItem('name')
        this.name = this.$route.query.id
          $('.list3>p').css('color','#e53e42')
      },
      watch:{
      // arr:{
      //     handler(Val,oldVal){
      //       console.log(Val,oldVal)
      //       if(this.arr != ''){
      //         this.bol = true
      //       }
      //     },
      //     deep:true,
      //     immediate: true
      //   }
      }
    }
</script>

<style scoped>
  .input{
    height: 0.9rem;
    line-height: 0.9rem;
    background-color: white;
    position: relative;
    border-top: 1px solid #999999;
    border-bottom: 1px solid #999999;
  }
  .input>span{
    width:1.6rem;
    padding: 0.1rem 0.2rem;
    border-radius: 0.1rem;
    text-align: center;
    line-height: 0.6rem;
    margin-left: 0.2rem;
    color: #ffffff;
    background-color: #999999;
  }
  .input>span>img{
     width: 0.2rem;
    height: 0.2rem;
  }

  .input>button{
    width: 1rem;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.24rem;
    border-radius: 0.1rem;
    border: 3px solid #999999;
    background-color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0.2rem;
    margin: auto 0;
  }
  .vTouch{
    touch-action: pan-y!important;
  }
  .Facial{
    height: 100%;
    overflow-y: scroll;
    touch-action: pan-y!important;
    -webkit-overflow-scrolling: touch;
    font-size: 0.3rem;
    color: #4d4d4d;
  }
  .top{
    width: 100%;
    height: 1.1rem;
    line-height: 1.1rem;
    text-align: center;
    background-color: #e53e42;
    position: relative;
    font-size: 0.36rem;
    color: #ffffff;
  }
  .top img{
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    left: 0.2rem;
  }
  .Facial>ul{
    height: 0.8rem;
    line-height: 0.8rem;
    position: relative;
    border-bottom: 1px solid #cccccc;
    display: flex;
    justify-content: space-around;
  }
  .order{
     width: 0.1rem;
    height: 0.15rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 4.9rem;
    margin: auto 0;
  }
  .order>img{
    width: 0.12rem;
    position: absolute;
    top: -0.03rem;
  }
  .order>img:nth-of-type(2){
    top: 0.1rem;
  }
  .list{
    border-bottom: 3px solid #cccccc;
    background-color: #ffffff;
    margin-bottom: 0.2rem;
  }
  .list>ul>li{
    height: 1.4rem;
    font-size: 0.22rem;
    padding: 0.1rem;
    display: flex;
    justify-content: space-between;
  }
  .list1{
    width: 1.8rem;
    height: 1.4rem;
    text-align: center;
  }
  .list1 img{
    height: 1.2rem;
  }
  .list2{
    width: 5rem;
    font-size: 0.22rem;
    line-height: 0.33rem;
  }
  .list3 img{
    width: 0.35rem;
    margin-left: 0.1rem;
  }
  .list3{
    display: flex;
    line-height: 0.5rem;
    margin-top: 0.05rem;
    justify-content: space-between;
    font-size: 0.3rem;
  }

  .bot img{
    width: 100%;
   height: 3rem;
  }
  .bot p{
    height: 0.55rem;
    line-height: 0.55rem;
    text-align: center;
    font-size: 0.26rem;
  }
</style>
