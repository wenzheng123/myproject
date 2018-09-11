<template>
  <ul @click = "se">
    <li v-for="(item,index) in arr">
      <span  @click="se1(index)" :class="{red:wode == index}">{{item}}</span>

    </li>
    <p class="tz"></p>
  </ul>
</template>

<script>
    import index from "../router";

    export default {
        name: "Liangxi",
      data(){
          return{
           wode:-1,
            arr:[
              "咖啡","可乐","蹦极","香蕉","奶茶"
            ]
          }
      },
      methods:{
          se(){
            this.index++
            var lis = document.querySelectorAll("ul>li")
            // console.log(lis)
            for(var i =0; i < lis.length;i++){
              if(i == this.index){
                lis[i].style.color="red"
              }else {
                lis[i].style.color = ""
              }

            }
          },
        se1(index){
            this.wode = index
          $(".tz").css("display","block")
        }
      },
      mounted(){
        $("ul>li").click(function() {
          $(".tz").animate({
            left: this.offsetLeft
          },500)
        })
      }
    }
</script>

<style scoped>
  .tz{
    width: 1rem;
    height: 0.1rem;
    display: none;
    background: #f00;
    position: absolute;
    left: 0.4rem;
    top: 0.6rem;

  }
  .red{
    color: #f00;
  }
 ul li {
   margin-left: 0.2rem;
 }
   ul{
     height: 0.6rem;
     background: #ffffff;
     line-height: 0.6rem;
     display: flex;
     justify-content: space-around;
     font-size: 0.3rem;
   }
</style>
