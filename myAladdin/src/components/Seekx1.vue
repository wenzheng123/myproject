<template>
  <div class="content">
    <p>亲们都在找</p>
    <ul class="one">
      <li @click = "chuan(index)"  v-for="(item,index) in arr"><span>{{item}}</span></li>

    </ul>
  </div>
</template>

<script>
    export default {
        name: "Seekx1",
      data(){
          return{
            arr:[
              "面膜","防嗮","眼霜","精华","洗面奶","资生堂","洗发水","防嗮喷雾","洗面奶","资生堂","洗发水","防嗮喷雾"
            ],
          }
      },
      methods:{
          chuan(index){
            console.log(11)
            this.$emit("change-name",this.arr[index])
          }
      }
    }
</script>

<style scoped>
  .one>li{
    margin-top: 0.3rem;
    float: left;
  }
  .one>li>span{
    display: inline-block;
    padding: 0 0.4rem;
    margin-right: 0.2rem;
    font-size: 0.3rem;
    border-radius:0.8rem;
    border: solid #ccc;
  }
  .one{
    width: 94%;
    height: 3.8rem;
    padding:0.2rem;
    background: #ffffff;
    margin-top: 0.3rem;
  }
  .content p{
    color: #808080;
    font-size: 0.3rem;
    margin-top: 0.25rem;
    margin-left: 0.2rem;
  }
</style>
