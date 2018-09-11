<template>
  <div id="app">
    <!--用transition 把切换组件页面的容器包含-->
    <transition name=".slide-fade-enter, .slide-fade-leave-to">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import axios from "axios";
import Adata from '@/components/Adata'
export default {
  name: 'App',
  components:{
    Adata,
  },
  data(){
    return{
      users: []//预先创建一个数组，用于存放请求得到的数据
    }
  },
  created(){ //此处用created相当于对前端页面数据进行初始化
    axios.get("/api/PHP/myaladdin.php").then(res=>{  //这里是ES6的写法，get请求的地址，是小编自己在网站上存放的php文件，后面将介绍其编写，也可以自己定义
      this.users=res.data;//获取数据
      console.log(this.users);
    })
  },
}
</script>

<style>
  .slide-fade{
    position: absolute;left:0;right: 0;
  }
  .slide-fade-enter-active {
    transition: all 1.2s ease;
  }
  .slide-fade-leave-active {

    transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  {
    left:0;right: 0;
    transform: translateX(50px);
    opacity: 0;
  }
</style>
