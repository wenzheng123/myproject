<template>
  <div id="app">
    <GoShop></GoShop>
    <!--<GoShop></GoShop>-->
    <!--用transition 把切换组件页面的容器包含-->
    <!--<transition name=".slide-fade-enter, .slide-fade-leave-to">-->
      <!--<router-view/>-->
    <transition name=".slide-fade-enter, .slide-fade-leave-to">
      <router-view/>
    </transition>

  </div>
</template>

<script>
  import GoShop from '@/components/GoShop'
export default {
  name: 'App',
  components:{
    GoShop
  }
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
