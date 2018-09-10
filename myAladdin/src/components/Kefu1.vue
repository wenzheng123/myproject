<template>
     <div class="box">
       <div class="top">
         <router-link to="/kefu"><img src="../../static/img/seek1.png" alt="" ></router-link>
         <p class="tz">跳过</p>
         <p>选择咨询的订单</p>
       </div>
       <div class="content">

         <div class="one" v-for="item in data">
           <router-link :to="item.aa">
           <div class="one_1">
             <span>订单编号：1485269676465</span>
             <span>
            {{item.z1}}
           </span>
           </div>
           <div class="one_2">
             <img src="../../static/img/kefu2.png" alt="" v-for="i in 4">
           </div>
           <div class="one_3">
             <p>应付: <span> ￥166.06</span></p>
           <div class="one_4">
             发表心得
           </div>
           </div></router-link>
         </div>

       </div>
     </div>
</template>

<script>
    export default {
        name: "Kefu1",
      data(){
          return{
            data:[
              {z1:"已取消",aa:""},
              {z1:"交易成功",aa:"/kefu2"},
              {z1:"交易关闭",aa:""}
            ]
          }
      },
      mounted(){
          $(".one_4").not($(".one_4").eq(1)).css("display","none")
      }
    }
</script>

<style scoped>
  .one_4{
    width: 1.2rem;
    height: 0.4rem;
    background: #f00;
    font-size: 0.25rem;
    color: #ffffff;
    margin-top: -0.6rem;
    margin-right: 0.2rem;
    text-align: center;
    border-radius: 0.2rem;
    float: right;
  }
  .one_3 p span{
    color: #f00;
  }
  .one_3 p{
    margin-left: 0.2rem;
    line-height: 0.9rem;
  }
  .one_3{
    width: 100%;
    height: 0.9rem;
    font-size: 0.3rem;
    background: #ffffff;
    border-bottom: solid #ccc;
  }
  .one_2 img{
    margin: 0.5rem 0 0 0.8rem;
  }
  .one_2  {
    width: 100%;
    height: 2.2rem;
    background: #ffffff;
    border-bottom: solid #ccc;
  }
  .one_1 span:nth-of-type(2){
    margin-left: 1.8rem;
    color: #f00;
  }
  .one_1 span:nth-of-type(1){
    margin-left: 0.2rem;
  }
  .one_1{
    margin-top: 0.2rem;
    line-height: 0.6rem;
    font-size: 0.3rem;
    width: 100%;
    height: 0.6rem;
    background: #ffffff;
    border-bottom:solid #ccc;
  }
  /*中间*/
  .top{
    width: 100%;
    height: 1.1rem;
    background-color: #e53e42;
    font-size: 0.4rem;
    position: relative;
    text-align: center;
    line-height: 1.3rem;
    color: #ffffff;
  }
  .tz{
    position: absolute;
    right: 0.24rem;
    top: 0rem;
    font-weight: 100;
  }
  .top>a:nth-child(1)>img{
    position: absolute;
    left: 0.24rem;
    top: 0.44rem;
  }
</style>
