<template>
  <div class="wrap">
    <div class="login">
      <router-link to="###">
        <div>
          <router-link to="###"><img :src="headPhoto" alt="" v-show="bol"></router-link>
        </div>

        <p class="nickName" v-if="nickName==''">
          <router-link to="/register">
            <span @click="getData(nickName)" > 登录</span>
            /
            <span>注册</span>
          </router-link>
        </p>
        <p class="nickName" v-else>{{nickName}}</p>
      </router-link>
      <img :src="bgImg" alt="">
      <span><router-link to="###"> 账户提现</router-link></span>
    </div>
    <div class="order">
      <p>
        <span>我的订单</span>
        <span class="more">
            <router-link to="###">查看所有订单 <img src="../../static/img/personal/more.png" style="height:0.25rem" alt=""></router-link>
          </span>
      </p>
      <ul>
        <li v-for="item in order"><router-link to="###"><img :src="item.src" alt=""><p>{{item.name}}</p></router-link></li>
      </ul>
    </div>
    <div class="returnMny">
      <p>
        <span>我的返金排号</span>
        <span class="more">
            <router-link to="###">查看更多 <img :src="'../../static/img/personal/'+(nickName==''?'more':'below')+'.png'" :style="(nickName==''?'height':'width')+':0.25rem'" alt=""></router-link></span>
      </p>
      <div v-for="(item,index) in returnMny" v-if="index < 4">
        <ul>
          <li>{{item.time}}</li>
          <li>消费：¥{{item.consume}}</li>
          <li>排号：{{item.num}}</li>
        </ul>
      </div>
    </div>
    <div class="serve">
      <ul>
        <li v-for="item in my"><router-link to="###"> <span>{{item.num}}</span><p>{{item.name}}</p></router-link></li>
      </ul>
      <div class="ser">
        <router-link to="###">
          <div v-for="item in server">
            <img :src="item.src" alt="">
            <p>{{item.name}}</p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "PersonalCenter",
    data(){
      return{
        bol:false,
        headPhoto:'static/img/personal/bgimg.png',
        bgImg:'static/img/personal/bgimg.png',
        nickName:'',
        order:[
          {src:'static/img/personal/notpay.png',name:'待支付'},
          {src:'static/img/personal/notsend.png',name:'待发货'},
          {src:'static/img/personal/nottake.png',name:'待收货'},
          {src:'static/img/personal/complete.png',name:'交易完成'}
        ],
        my:[
          {name:'我的神灯值',num:0},
          {name:'我的足迹',num:0},
          {name:'我的优惠券',num:0},
          {name:'我的心得',num:0},
        ],
        server:[
          {name:'我的商城',src:'static/img/personal/store.png'},
          {name:'实名认证',src:'static/img/personal/approve.png'},
          {name:'收货地址',src:'static/img/personal/site.png'},
          {name:'关注公众号',src:'static/img/personal/attention.png'},
          {name:'客服与反馈',src:'static/img/personal/service.png'},
        ],
        returnMny:[
          {time:'2017/06/26',consume:100,num:10},
          {time:'2017/06/26',consume:100,num:10},
          {time:'2017/06/26',consume:100,num:10},
          {time:'2017/06/26',consume:100,num:10},
          {time:'2017/06/26',consume:100,num:10},
          {time:'2017/06/26',consume:100,num:10}
        ]

      }
    },
    methods:{
      getData(name){
        axios.get('/api/aladeng/person_data.php?name='+name).then(res =>{
          this.bol = true;
          this.headPhoto = res.data[0].headPhoto;
          this.nickName = res.data[0].nickname;
          this.bgImg = res.data[0].bgImg;
          console.log(this.headPhoto,this.nickName,this.bgImg)
        });
      }
    },
  }
</script>

<style scoped>
  .wrap{
    height: 10.4rem;
    background-color: #f2f2f2;
    color: #666;
  }
  .login {
    width: 100%;
    height: 2.4rem;
    position: relative;
    color: #fff;
  }
  .login a{
    color: #fff;
  }
  .login div{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: #e7e5e5;
    position: absolute;
    left: 0.23rem;
    top: 0.5rem;
    overflow: hidden;
  }
  .login div>img{
    width: 100%;
    height: 100%;
  }
  .login > img{
    width: 100%;
    height: 2.41rem;
  }
  .login .nickName{
    font-size: 0.35rem;
    position: absolute;
    left: 1.4rem;
    top: 0.8rem;
  }
  .login>span{
    position: absolute;
    right: 0.4rem;
    bottom: 0.4rem;
    width: 1.5rem;
    height: 0.4rem;
    border-radius: 0.2rem;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.26rem;
    background-color: rgba(0,0,0,0.7);
  }
  .order{
    background-color: #fff;
  }
  .order > p{
    height: 0.86rem;
    border-bottom: 1px solid #cccccc;
    font-size: 0.35rem;
    padding: 0 0.2rem;
    line-height: 0.86rem;
  }
  .more{
    float: right;
    font-size: 0.3rem;
  }more
   .more  img{
     vertical-align: middle;
   }
  .order ul{
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.28rem;
  }
  .order ul li{
    text-align: center;
  }
  .order ul img{
    width: 0.35rem;
  }
  .returnMny{
    background-color: #fff;
    margin: 0.2rem 0;
    font-size: 0.3rem;
  }
  .returnMny p{
    font-size: 0.35rem;
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 0.2rem;
    border-bottom: 1px solid #cccccc;
  }
  .returnMny ul{
    height: 0.83rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #cccccc;
  }
  .returnMny li{
    flex: 1;
    text-align: center;
  }
  .serve{
    margin-bottom: 1rem;
  }
  .serve ul{
    height: 1.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.28rem;
    text-align: center;
    background-color: #fff;
    border-bottom: 1px solid #cccccc;
  }
  .serve ul span{
    color: #e53e42;
    font-size: 0.35rem;
  }
  .ser{
    font-size: 0.28rem;
    background-color: #fff;
  }
  .ser div {
    width: 1.8rem;
    display: inline-block;
    text-align: center;
    height: 1.2rem;
  }
  .ser div img{
    width: 0.4rem;
    margin: 0.2rem 0;
  }
</style>
