<template>
  <ul class="end">
    <li>
      <router-link to="/Sort">
        <img src="../../static/img/end1.png" alt="">
      </router-link>
    </li>
    <li><img src="../../static/img/end2.png" alt=""></li>
    <li>
      <router-link to="/CutGoods">
        <img src="../../static/img/end5.png" alt="">
      </router-link>
    </li>
    <li>
      <router-link to="/GoShop">
        <img src="../../static/img/end3.png" alt="">
      </router-link>

    </li>

    <li>
      <router-link to="/person">
        <img src="../../static/img/end4.png" alt="">
      </router-link>
    </li>

  </ul>
</template>

<script>
    export default {
        name: "End"
    }
</script>

<style scoped>
  .end>li:nth-child(3){
    margin-top: 0.2rem;
  }
  .end>li{
    margin-top:0.2rem;
    z-index: 1;
  }
  .end{
    width: 100%;
    height: 0.98rem;
    border-top:solid #e6e6e6 ;
    border-bottom:solid #e6e6e6;
    z-index: 3;
    background: #ffffff;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;

  }
  /*end*/
</style>
