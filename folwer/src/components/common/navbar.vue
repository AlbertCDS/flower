<template>
	<nav>
		<router-link to="/home" tag="li" activeClass="active">
		<div class="c1">
		<i class="iconfont icon-homepage_fill"></i><br/>
		<span>首页</span>
		</div></router-link>

		<router-link to="/card" tag="li" activeClass="active">
		<div class="c1">
		<i class="iconfont icon-other"></i><br/>
		<span>分类</span>
		</div></router-link>

		<router-link to="/local" tag="li" activeClass="active">
		<div class="c1">
		<i class="iconfont icon-coordinates"></i><br/>
		<span>门店</span>
		</div></router-link>

		<router-link to="/cds" tag="li" activeClass="active">
		<div class="c1">
		<i class="iconfont icon-mine"></i><br/>
		<span>我的</span>
		</div></router-link>

	</nav>
</template>

<script>
import {mapState} from "vuex";
export default {

  name: 'navbar',

  data () {
    return {

    }
  },

  methods:{
  	handleClick(){
  		this.$emit("event");
  	}
  },
  //1. 放问store中的数据
  // computed:{
  // 	 title(){
  // 	 	return this.$store.state.title;
  // 	 }
  // }
  // 2. 访问store 中数据
  computed:{
  	...mapState(["title"])	
  }
}
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>

	nav{
		position:fixed;
		bottom:0px;
		left:0px;
		width: 100%;
		height: 46px;
		background-color: white;
		color:#000;
		font-size: 10px;

		.left{
			float:left;
		}

		.right{
			float:right;
		}

		.c1{
			width:25%;
			float:left;
			text-align:center;
		}

		i{
			font-size: 27px;
		}

		aside{
		position:fixed;
		top:50px;
		left:0px;
		width: 50%;
		height: 100%;
		background-color: #282828;
		color:white;
		z-index:1;
	}


	.bounce-enter-active {
      animation: bounce-in .5s;
    }
    .bounce-leave-active {
      animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
      0%{
        transform: translateX(-100%);
        opacity: 0;
      }

      100%{
        transform: translateX(0px);
        opacity: 1;
      }
    }
		
		z-index:10000;

	}
</style>