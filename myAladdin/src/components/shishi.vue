<template>
  <div>
    <!--&lt;!&ndash;照片区域&ndash;&gt;-->
    <!--<div  v-for="(urls, index) in imgs " style="float: left; margin: 10px ; border: 1px solid #ccc;">-->
      <!--<div style="text-align: right; position: relative;" v-on:click="deleteImg(index)">X</div>-->
      <!--<img :src="urls" width="100px" height="100px"  />-->
    <!--</div>-->
    <!--<div style=" width: 100px; height: 100px; background-color: #ccc; border:1px solid #ccc; float: left;  margin: 10px ;" v-on:click="imgClick()"></div>-->
    <!--<input style="float: left;  display: none;" type="file" id='uploadFile'  accept="image/*"  v-on:change="readLocalFile()">-->
    <div>
      <p>从手机相册中选择</p>
      <p>拍照</p>
      <p><router-link to="/changehead">取消</router-link></p>
    </div>
  </div>

</template>

<script>
  export default{
    name:'shishi',
    // data() {
    //   return {
    //     imgs:[]
    //   }
    // },
    // methods:{
    //   //删除图片
    //   deleteImg:function(index){
    //     this.imgs.splice(index,1);
    //   },
    //   //图片click
    //   imgClick:function(){
    //     document.getElementById("uploadFile").click();
    //   },
    //   //点击选中图片
    //   readLocalFile: function () {
    //     var localFile = document.getElementById("uploadFile").files[0];
    //     var reader = new FileReader();
    //     var content;
    //     var current=this;
    //     reader.onload = function(event) {
    //       content = event.target.result;
    //       current.imgs.push(content);  //获取图片base64代码
    //     }
    //     reader.onerror = function(event) {
    //       alert('error')
    //     }
    //     content = reader.readAsDataURL(localFile,"UTF-8");
    //     var sss=document.getElementById("uploadFile").value;
    //     console.log(sss);
    //   }
    // },
    // mounted() {
    //
    // },
    // created() {
    //
    //
    // },
    // components: {
    //
    // }
  }
</script>

<style scoped>
  .change{
    width: 100%;
    height: 12.8rem;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    left: 0;
    top: 0;
  }
  .change div{
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: #fff;
  }
  .change p {
    height: 1rem;
    line-height: 1rem;
    font-size: .4rem;
    text-align: center;
    color: #808080;
    border-bottom: 1px #ccc solid;
  }
  .change a{
    width: 100%;
    color: #808080;
  }
</style>
