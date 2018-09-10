<template>
    <div class="box">
      <div class="top">
        <span>购物车</span>
      </div>
    <div class="content">
      <div class="one">
      </div>
      <div class="one1">
        <p>您的购物车还是空的 <br>
          去 <strong>逛逛 </strong>吧！ </p>
      </div>
    </div>
      <aa></aa>
    </div>
</template>

<script>
  import  End from "@/components/End"
    export default {
        name: "Eye3",
      components:{
          aa:End
      }
    }
</script>

<style scoped>
  .one1 p{
    margin:-1rem 2.2rem;
  }
  .one1 strong{
    color: #f00;
  }
  .one1{
    color: #808080;
    font-size: 0.3rem;
  }

  .one{
    width: 3.2rem;
    height: 2.6rem;
    background: #efc5c5;
    margin: 1.15rem 2rem;
  }
  .top{
    height: 0.96rem;
    width: 100%;
    background-color: #e53e42;
    font-size: 0.4rem;
    color: #f2f2f2;
    line-height: 1rem;
    text-align: center;
  }
</style>
