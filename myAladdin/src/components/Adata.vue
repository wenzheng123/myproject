
<template>
  <div class="count">
    <table cellspacing="0" border="1px">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>num</th>
        <th>price</th>
      </tr>
      <tr v-for="user in users">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.num}}</td>
        <td>{{user.price}}</td>
      </tr>
    </table>
  </div>
</template>

<script>

  import axios from "axios";
    export default {
        name: "Adata",
      data(){
        return{
          users: []//预先创建一个数组，用于存放请求得到的数据
        }
      },
      created(){ //此处用created相当于对前端页面数据进行初始化
        axios.get("/api/PHP/myaladdin.php").then(res=>{  //这里是ES6的写法，get请求的地址，是小编自己在网站上存放的php文件，后面将介绍其编写，也可以自己定义
          this.users=res.data;//获取数据
          console.log(this.users);
        })
      },
    }
</script>

<style scoped>
  .count{
    width:600px;
    height:300px;
    margin:100px
  }
  table{
    font-size: 50px;
  }
</style>
