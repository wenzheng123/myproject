<template>

    <div class="end" >
      <p>最近搜索</p>
      <p>{{inputName}}</p>
      <p @click="xiao">清空搜索历史</p>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "Seekx2",
      data(){
          return{
            arr:[],

            cc:'',
          }
      },
      methods:{
          // aa(){
          //   this.cc = this.inputName
          // }
            xiao(){
              $(".end").css("display","none")
            }


      },
      mounted(){
        // console.log(this.$refs.bb.value)
        //     console.log(111111)
        //   console.log(this.inputName);
        //   this.arr.push(this.inputName)
          // Vue.set(this.arr,this.arr.length,this.cc);
        // console.log(this.arr);
      },
      props:{
          inputName:String,
          required:true
      }

    }
</script>

<style scoped>
  .end p:nth-of-type(3){
    width: 5rem;
    height: 0.4rem;
    border: solid #ccc;
    margin: 0.35rem auto;
    border-radius: 0.3rem;
    text-align: center;
  }
  .end p:nth-of-type(2){
    height: 0.4rem;
    padding: 0.2rem;
    color: #666666;
    font-size: 0.3rem;
    background: #ffffff;
    border-bottom: solid #ccc;
  }
  .end p:nth-of-type(1){
    margin: 0.2rem ;
  }
.end{
  display: none;
  font-size: 0.3rem;
}
</style>
