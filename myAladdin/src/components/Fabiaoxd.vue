<template>
<div class="fbCon" @event.preventDefault;>
  <div class="fbNav">
    <router-link to="/kefu2">
    <img src="../../static/img/zuoArrow1.png" alt="">
    </router-link>
    意见反馈<span >完成</span></div>
   <div class="fbCon">
  <p>感谢您的意见反馈</p>
  <textarea name="yourworks" id="" cols="30" rows="10" placeholder="请描述您的具体问题，数字在100字以内" maxlength="100"
            @input="descInpit"
            v-model="desc"></textarea>
     <span>{{remnant}}</span>
  <div><input @input="descInpit1" v-model="desc1" type="number" placeholder="请输入您的手机号，方便后续联系" maxlength="11"></div>
   </div>
</div>
</template>

<script>
    export default {
        name: "Fabiaoxd",
      data(){
          return {
            remnant:100,
          }
      },
      methods:{

        descInpit1(){
          if(this.desc1.length >= 11){
            alert('手机号码为11位,请输入正确手机号')
          }
        },
        descInpit(){
          this.remnant = 100 - this.desc.length
        }
      },
      mounted(){
        $("body").on("touchmove",function(event){
          event.preventDefault;
        }, false)
        // $("body").off("touchmove")；
      }
    }
</script>
yourworks
<style scoped>
.fbNav{
  width: 100%;
  height: 1.1rem;
  line-height: 1.1rem;
  font-size: 0.3rem;
  color: #ffffff;
  background-color: #e53e42;
  text-align: center;
}
.fbNav img{
  height: 0.3rem;
  float: left;
  margin-top: 0.4rem;
  margin-left: 0.2rem;
}
.fbNav span{
  float: right;
  margin-right: 0.2rem;
}
  .fbCon{
    width: 100%;
    font-size: 0.25rem;
    overflow: hidden;
  }
.fbCon p{
  height: 0.8rem;
  padding-left: 0.2rem;
  line-height: 0.8rem;
}
.fbCon textarea{
  width: 100%;
  height: 1.8rem;
  text-indent: 0.2rem;
  padding-top: 0.2rem;
  background-color: #ffffff;
}
.fbCon input{
  width: 100%;
  height: 0.8rem;
  text-indent: 0.2rem;
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background-color: #ffffff;
}
</style>
