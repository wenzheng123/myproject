<template>
  <div class="log">
    <div>
      <div class="redLine"></div>
      <div class="login">
        <span v-for="(item,index) in arr" @click="change(item.name)">
          <router-link :to="item.to">{{item.name}}</router-link>
        </span>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "Login",
    data(){
      return{
        arr:[
          {name:'注册',to:'login3'},
          {name:'快速登录',to:'login1'},
          {name:'密码登录',to:'login2'}
        ],
        str:'新用户首次登录自动注册阿拉灯账户',
        bol:true,
      }
    },
    methods:{
      change(name){
        var a = {name:'注册',to:'login3'};
        var b = {name:'快速登录',to:'login1'};
        var c = {name:'密码登录',to:'login2'}
          if (name == '注册'){
            Vue.set(this.arr,0,c);
            Vue.set(this.arr,1,a);
            Vue.set(this.arr,2,b);

          } else if(name=='密码登录'){
            Vue.set(this.arr,0,a);
            Vue.set(this.arr,1,c);
            Vue.set(this.arr,2,b);

          }else{
            Vue.set(this.arr,0,a);
            Vue.set(this.arr,1,b);
            Vue.set(this.arr,2,c);
          }
      },

    }
  }
</script>

<style scoped>
.log{
  width: 100%;
  height: 12.3rem;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
}
.log>div{
  width: 6.8rem;
  height: 4.55rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 2.83rem;
  margin: auto;
  background-color: #fff;
  border-radius: 0.1rem;
}
  .redLine{
    height: 0.2rem;
    background-color: #f00;
    border-radius: 0.1rem 0.1rem 0 0/0.1rem 0.1rem 0 0;
  }
  .login{
    height: 0.62rem;
    border-bottom: 1px solid #ccc;
    line-height: 0.62rem;
    font-size: 0.3rem;
    position: relative;
    text-align: center;
  }
  .login span:nth-of-type(1){
    float: left;
    margin-left: 0.4rem;
  }
.login span:nth-of-type(3){
  float: right;
  margin-right: 0.4rem;
}

</style>
