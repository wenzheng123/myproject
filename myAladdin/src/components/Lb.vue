<template>
<div class="content">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../../static/img/l1.png" alt="">
      </div>
      <div class="swiper-slide"><router-link to="/cate"><img src="../../static/img/l2.png" alt=""> </router-link></div>

      <div class="swiper-slide"><img src="../../static/img/l3.png" alt=""></div>
    </div>

    <div class="swiper-pagination" ></div>



  </div>
</div>
</template>

<script>
    export default {
        name: "Lb",
      mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          //竖直  vertical  水平 horizontal
          loop:true,
          direction: 'horizontal',
          speed: 1000,
          autoplay: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            clickable:true
          },


        })
      }
    }
</script>

<style scoped>
 .swiper-slide img{
   width: 100%;
   height: 100%;
 }
  .swiper-container {
    width: 98%;
    height: 3rem;
    margin: 0 auto;
    overflow: hidden;
  }

  .swiper-slide {
    color: blueviolet;
    font-size: 40px;
    text-align: center;
    line-height: 300px;
  }
</style>
