<template>
  <div class="hello">
    <aa></aa>
    <!--<news></news>-->
    <!--<mo></mo>-->
    <!--<seek></seek>-->
    <!--<bb></bb>-->
    <!--<four></four>-->
    <!--<three></three>-->
    <!--<cc></cc>-->
   <!--<two></two>-->
    <End></End>
    <router-view></router-view>
  </div>

</template>

<script>
  import Tou from "@/components/Tou"
  import End from "@/components/End"
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
    End,
    bb:Lb,
    cc:Zone,
    two:Ztwo,
    three:Zthree,
    four:Zfour,
    seek:Seek,
    mo:Monitor,
    news:News

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
