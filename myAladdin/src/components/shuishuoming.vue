<template>

  <div class="Cover"  @touchmove.prevent >
    <ul class="Cover1" >
      <div>
        <span>税费说明</span>
        <router-link to="/Details">
          <p>X</p>
        </router-link>
      </div>
      <li v-for="item in data">

          <span>{{item.name}}</span>

        <div>
          <p>{{item.con}}</p>
        <p>{{item.detil}}</p>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {

    name: "shuishuoming",
    data(){
      return {
        data:[
          {name:'商品进口税',con:'因您所购买的商品可能适用不同税率，可能导致 无法全额包税，您仍需再行支付剩余税款（如有） 详见下单页面。',detil:''},
          {name:'进口税税率',con:'12%',detil:'（中国海关规定，不同类目的商品征收税率不同， 该商品的进口税率为12%）'},
          {name:'进口税计算',con:'进口税=商品完税价格（包括运费）*税率',detil:'（完税价格由海关最终认定)'}
        ]
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  .Cover{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: 0.3rem;
    z-index: 99;
    background-color: rgba(0,0,0,0.3);
  }
  .Cover1{
    width: 100%;
    color: #333333;
    margin-bottom: 0.5rem;
    position: fixed;
    bottom: -1rem;
    background-color: #ffffff;
  }
  .Cover1>div{

    height: 0.8rem;
    padding: 0.2rem;
    font-size: 0.26rem;
    text-align: center;
    line-height: 0.8rem;
  }
  .Cover1>div p{
    float: right;
  }
  .Cover1>li{
    padding:0.2rem;
    height: 1.8rem;
    position: relative;
    border-top: 1px solid #666666;
  }
  .Cover1>li>div{
    font-size: 0.25rem;
    margin-left: 1.7rem;;
    position: absolute;
    top: 0.2rem;
  }
  .Cover1>li>div>p:nth-of-type(2){
    margin-top: 0.2rem;
    color: #666666;
  }
</style>
