<template>
  <div class="hello">
    <aa></aa>
    <bb></bb>
  </div>
</template>

<script>
  import Tou from "@/components/Tou"
  import Lb from "@/components/Lb"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    aa:Tou,
    bb:Lb
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
