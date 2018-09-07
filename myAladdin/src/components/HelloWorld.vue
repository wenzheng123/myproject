<template>
  <div class="hello">
    <aa></aa>
<<<<<<< HEAD
=======
    <!--<news></news>-->
    <!--<mo></mo>-->
    <!--<seek></seek>-->
    <router-view/>
    <!--<bb></bb>-->
    <!--<four></four>-->
    <!--<three></three>-->
    <!--<cc></cc>-->
   <!--<two></two>-->

>>>>>>> b166dddcca04b378e7d8ac5b8cf43b684af08d92
  </div>

</template>

<script>
  import Tou from "@/components/Tou"
  import Lb from "@/components/Lb"
  import Zone from "@/components/Zone"
  import Ztwo from "@/components/Ztwo"
  import Zthree from "@/components/Zthree"
  import Zfour from "@/components/Zfour"
  import Seek from "@/components/Seek"
  import Monitor from "@/components/Monitor"
  import News from "@/components/News"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    aa:Tou,
    bb:Lb,
<<<<<<< HEAD
=======
    cc:Zone,
    two:Ztwo,
    three:Zthree,
    four:Zfour,
    seek:Seek,
    mo:Monitor,
    news:News

>>>>>>> b166dddcca04b378e7d8ac5b8cf43b684af08d92
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
