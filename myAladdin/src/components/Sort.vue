<template>
<div class="Sort">
  <ul>
    <li class="aa" v-for="(item,index) in data"  @click="change(index)">
      <router-link class="color1" :class="{color:changeC==index}" :to="{
                   path:'/Groom'+index,
                   query:{id:index}
                   }" >
      {{item}}
      </router-link>
    </li>
    <div class="line"></div>
  </ul>
  <div class="right">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</div>
</template>

<script>

    export default {
        name: "Sort",
      data(){
          return {
            name:0,
            dt:'',
            changeC:0,
            data:['为你推荐','面部护理','底妆彩妆','休闲零食','身体护理','美容美发','生活用品','个人护理','保健养生','时尚潮品','母婴用品'],

          }
      },
      methods:{

          change(index){
            this.changeC = index;
            var top =  $('ul>.aa')[0].offsetHeight*index+this.dt;
              $('ul>div').animate({
                top:top
              },500)
          },
      },
      mounted(){
        this.dt = $('ul>div')[0].offsetTop
        //
        if(this.$route.query.id) {
          this.name = this.$route.query.id
        }
        this.changeC = this.name
        var top =  $('ul>.aa')[0].offsetHeight*this.changeC+this.dt;
        $('ul>div').animate({
          top:top
        },500);
      },
    }
</script>

<style scoped>
.Sort{
  font-size: 0.3rem;
  text-align: center;
  margin-top: -0.6rem;
  background-color: #ffffff;
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: space-around;
}
.color1{
  color: #4d4d4d;
}
.color{
  color: #e53e42;
}
.Sort>ul{
  width: 1.8rem;
  height: 10.7rem;
  position: relative;
  border-right: 1px solid #cccccc;
}
.right{
  width: 5rem;
  padding: 0.2rem;
}
.Sort>ul>li{
  width: 1.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 1px solid #cccccc;
}
  .line{
    width: 1.5px;
    height: 0.3rem;
    background-color: #e53e42;
    position: absolute;
    top: 0.2rem;
    right: -0.8px;
    border-radius: 1.5px;
  }
</style>
