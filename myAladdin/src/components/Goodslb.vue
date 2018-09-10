<template>
  <div class="content">

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <router-link to="###">
            <img src="../../static/img/chencai.png" alt="">
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="###">
            <img src="../../static/img/chencai.png" alt="">
          </router-link>
        </div>

        <div class="swiper-slide">
          <router-link to="###">
            <img src="../../static/img/chencai.png" alt="">
          </router-link>
        </div>
      </div>
      <div class="swiper-pagination" ></div>
    </div>
  </div>
</template>

<script>
  // import Swiper from 'swiper';
  // import 'swiper/dist/css/swiper.min.css';
  export default {
    name: "Goodslb",
    mounted() {

      var mySwiper = new Swiper('.swiper-container', {
        //竖直  vertical  水平 horizontal
        loop: true,
        direction: 'horizontal',
        speed: 1000,
        autoplay: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      })
    }
  }
</script>

<style lang="less">
  .swiper-container {
    width: 100%;
    height: 3.5rem;
    background-color: #ffffff;
    overflow: hidden;
  }
  .swiper-slide {
    height: 3rem;
    padding-top: 0.3rem;
    text-align: center;
  }
  .swiper-pagination-bullet{
    width: 0.1rem;
    height: 0.1rem;
    background-color: #808080;
    opacity: 0.8;
  }
  .swiper-pagination-bullet-active{
    background-color: #e53e42;
  }
</style>

