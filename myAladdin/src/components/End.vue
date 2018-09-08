<template>
  <ul class="end">
<<<<<<< HEAD
    <li><img src="../../static/img/end1.png" alt=""></li>
    <li><img src="../../static/img/end2.png" alt=""></li>
    <li><img src="../../static/img/end5.png" alt=""></li>
=======
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
>>>>>>> 94f673cfe78c6aab779dcbd1ee8969ba4d7e48a7
    <li><img src="../../static/img/end4.png" alt=""></li>
    <li><img src="../../static/img/end3.png" alt=""></li>
  </ul>
</template>

<script>
    export default {
        name: "End"
    }
</script>

<style scoped>
  .end>li:nth-child(3){
<<<<<<< HEAD
    margin-top: 0.2rem;
  }
  .end>li{
    margin-top:0.2rem;
=======
    margin-top: -0.3rem;
  }
  .end>li{
    margin-top: -0.1rem;
>>>>>>> 94f673cfe78c6aab779dcbd1ee8969ba4d7e48a7
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
<<<<<<< HEAD
=======
    z-index: 99;
>>>>>>> 94f673cfe78c6aab779dcbd1ee8969ba4d7e48a7
    bottom: 0;
    display: flex;
    justify-content: space-around;

  }
<<<<<<< HEAD
=======
  /*end*/
>>>>>>> 94f673cfe78c6aab779dcbd1ee8969ba4d7e48a7
</style>
