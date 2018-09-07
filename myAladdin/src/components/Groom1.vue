<template>
  <div class="Groom1">
    <div>
     <router-link :to="{
     path:'/Facial',
     query:{id:name}
     }">
      <img class="imgtop" src="../../static/img/feceTop.png" alt="">
     </router-link>
      <ul class="bOne" v-for="item in 4">
        <li v-for="item in data">
          <img :src="item.url" alt="">
          <p>{{item.name}}</p>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
    export default {
        name: "Groom1",
      data(){
        return{
          name:'',
          data:[
            {url:'../../static/img/Interface.png',name:'洁面护理'},
            {url:'../../static/img/Lipstick.png',name:'人气口红'},
            {url:'../../static/img/Bag.png',name:'名牌包包'}
          ]
        }
      },
      mounted(){
        this.name = this.$route.query.id
      }
    }
</script>

<style scoped>
  .imgtop{
    width: 5rem;
  }
  .bOne img{
    width: 1.34rem;
  }
  .bOne{
    margin-bottom: 0.2rem;
    display: flex;
    justify-content: space-around;
  }
</style>
