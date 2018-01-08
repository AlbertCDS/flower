<template>
	<div>
      
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3><img src="http://img.thebeastshop.com/image/20170823180732265033.jpg@4e_0o_0l_721h_690w_90q.jpg"></h3>
    </el-carousel-item>
  </el-carousel>



      <ul v-if="datalist">
        <li v-for="data in datalist" style="border:solid 1px #ccc;">
          <img :src="data.featureImage">
          <br/>
          <router-link to="/cds" tag="li" activeClass="active">
           <el-button type="danger" round style="float:right; margin-right: 30px;
              margin-top: 12px;
            }">购买</el-button></router-link>
          <span style="color:#9a9a9a;">{{data.summary}}</span>
          <br/>
          <span>{{data.brand.name}}</span>
          <br/>
          <span style="
                  width: 100%;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;">
                  {{data.name}}</span>
                  <br/>
          <span style="color:red;">{{"¥" + data.price + ".00"}}</span>  
        </li>
      </ul>
      <div style="height:40px; width:100%;"></div>
  </div>
</template>

<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';

import axios from "axios";
import { Indicator } from 'mint-ui';

// Vue.component('swipe', Swipe);
// Vue.component('swipe-item', SwipeItem);


export default {

  name: 'home',

  data () {
    return {
      datalist:[],
      looplist:[]
    }
  },

  mounted (){
    Promise.all([axios.get("/app/search/product?limit=20&offset=0&categoryId=fr101&title=%E9%B2%9C%E8%8A%B1&sortField=RELEASE&sortOrder=DESC"),
      axios.get("/app/search/product?limit=20&offset=0&categoryId=fr101&title=%E9%B2%9C%E8%8A%B1&sortField=RELEASE&sortOrder=DESC")
      ]).then(res=>{
      console.log(res);
      this.datalist=res[0].data.data.items
    })
  },
  components:{
    "swipe":Swipe,
    "swipe-item":SwipeItem
  }
}
</script>

<style lang="scss" scoped>

  ul{
    li{
      margin:10px;
      font-size:0.43rem;
      box-shadow:  1px 3px #ccc;
      border-radius:15px;
      
      span{
          margin-left:1rem;
      }
      
      img{
        width: 100%;
        border-radius:15px 15px 0px 0px;
      }
    }
  }
  
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;

    img{
    width: 100%;
  }
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  

  



</style>