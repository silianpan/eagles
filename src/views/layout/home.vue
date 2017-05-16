<template>
	<el-row class="container">
    <v-head :collapsed="collapsed" @collapsedChange ="collapsedChange"></v-head >
		<el-col :span="24" class="main">
			<v-sidebar :collapsed="collapsed" :menuList = "menuList"></v-sidebar >
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view>
							</router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
	</el-row>
</template>

<script>
 import vHead from './header.vue';
 import vSidebar from './sidebar.vue';
 export default {
     components:{
         vHead, vSidebar
     },
		data() {
			return {
				sysName: 'Eagles',
				collapsed: false,
				sysUserName: '12',
				sysUserAvatar: '123',
				menuList:[],
			}
		},
		methods: {
			//折叠导航栏
			collapsedChange: function(collapsed) {
				this.collapsed = !collapsed;
				this.$store.dispatch('changeCollapse', this.collapsed);
			},
			getMenuList:function (){
				var self =this;
				this.$store.dispatch('getMenuList').then( (response) =>{
					console.log('menu response', response)
					if (response.data !=null && response.data.errorCode ==null){
						self.menuList = response.data;
					}else{
						self.$message({
							message:"获取菜单失败",
							type:"error"
						});
					}
				}).catch( err =>{
					self.$message({
						message:"获取菜单失败",
						type:"error"
					});
					console.log(err);
				});
			}

		},
		mounted() {
			 this.getMenuList();
		}
	}

</script>

<style>
	.el-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	.el-col {
		border-radius: 4px;
	}
  .container .header .userinfo {
    text-align: right;
    padding-right: 35px;
    float: right;
  }
  .container .header .userinfo .userinfo-inner {
    cursor: pointer;
    color:#fff;
  }
  .container .header .userinfo .userinfo-inner img {
    width: 50px;
    height: 50px;
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    float: right;
  }
  .container .header {
    height: 40px;
    line-height: 40px;
    background: $color-primary;
    color: #fff;
  }
  .container .header  .logo {
    /*//width:230px;*/
    height: 50px;
    font-size: 22px;
    padding-left: 20px;
    padding-right: 20px;
    border-color: rgba(238,241,146,0.3);
    border-right-width: 1px;
    border-right-style: solid;

  }
  .container .header  .logo  img {
    width: 50px;
    float: left;
    margin: 10px 10px 10px 18px;
  }
  .container .header  .logo  .txt {
    color: #fff;
  }
  .container .header .logo-width{
    width: 180px;
  }
  .container .header  .logo-collapse-width{
    width: 35.5px;
		padding-left: 0!important;
    padding-right: 0!important;
  }
  .container .header .tools{
    padding: 0px 23px;
    width: 14px;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
  }
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
	}
  .container .main aside {
    flex:0 0 180px;
    width: 180px;
    background-color: #324057;
		z-index: 9999;
		/*overflow-y:scroll;*/
    /*// position: absolute;
    // top: 0px;
    // bottom: 0px;*/
  }
  .container .main  aside  .el-menu{
    height: 100%;
  }
  .container .main aside  .collapsed{
    width: 40px;
  }
  .container .main aside  .collapsed .item{
    position: relative;
  }
  .container .main aside  .collapsed .submenu{
    position:absolute;
    top: 0px;
    left: 40px;
    z-index: 99999;
    height: auto;
    display: none;
  }
  .container .main .menu-collapsed{
    flex: 0 0 40px;
    width: 40px;
		transition: all .28s ease-out;
  }
  .container .main .menu-expanded{
    flex: 0 0 180px;
    width: 180px;
		transition: all .28s ease-out;
  }
  .container .main {
    display: flex;
    /*// background: #324057;*/
    position: absolute;
    top: 40px;
    bottom: 0px;
    overflow: hidden;

  }
   .container .main  .content-container .breadcrumb-container .title  {
    /*//margin-bottom: 15px;*/
      width: 200px;
      float: left;
      color: #475669;
  }
  .container .main  .content-container .breadcrumb-container .breadcrumb-inner {
    float: right;
  }

 .container .main  .content-container  .content-wrapper {
    background-color: #fff;
    box-sizing: border-box;
  }
 .container .main  .content-container {
    /*// background: #f1f2f7;*/
    flex:1;
    /*// position: absolute;
    // right: 0px;
    // top: 0px;
    // bottom: 0px;
    // left: 230px;*/
    overflow-y: scroll;
    padding: 20px;
  }
</style>
