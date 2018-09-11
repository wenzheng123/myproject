<template>
    <div class="box">
      <div class="top">
        <router-link to="/two"><img src="../../static/img/seek1.png" alt=""></router-link>
        <router-link to="/ceas" >
          <img src="../../static/img/w2.png" alt="" @click = "inputs">
        </router-link>
        <p>修炼秘籍</p>
        <p class="tz11" v-show="bol">{{str}}</p>

      </div>
      <div class="content">
        <div class="one" v-for="i in 3">
          <router-link to="/ceas2"><img src="../../static/img/ceas1.png" alt="">
          </router-link>
          <p>ADDICTION</p>
          <p>质感奢华 宛如定制</p>
        </div>
      </div>

    </div>
</template>

<script>

    export default {
        name: "Ceas",
      data(){
          return{
            bol:false,

            str:"分享失败!",

          }
      },

      mounted(){
          $(".one").not($(".one").eq(0)).css("margin-top",0.2+"rem")
      },
      methods:{
        inputs(){
          console.log(111)
            this.str = "分享失败!"
            this.bol = true
          var t2 = setTimeout(()=>{
            this.str = '别分享了!';
            var t3 = setTimeout(()=>{
              this.bol = false;
              clearTimeout(t2);
              clearTimeout(t3);
            },1500);
          },1500);
          }
      }
    }
</script>

<style scoped>
  .tz11 {
    width: 2rem;
    height: 1rem;
    background: rgba(0,0,0,.5);
   line-height: 1rem;
    text-align: center;
    color: #ffffff;
    margin-left: 2.8rem;
    font-size: 0.32rem;
  }
  .one img{
    height: 4rem;
    width: 100%;
  }
  .one{
    border-bottom:solid #ccc ;
  }
  .one p{
    margin: 0.09rem 0.15rem;
    font-size: 0.25rem;
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
  .top>a>img{
    position: absolute;
    right: 0.24rem;
    top: 0.5rem;
  }
  .top>a:nth-child(1)>img{
    position: absolute;
    left: 0.24rem;
    top: 0.44rem;
  }
</style>
