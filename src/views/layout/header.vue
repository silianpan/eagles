<template>
  <el-col :span="24" class="header">
    <div style="float:right;padding-right:10px;">
      <langComp></langComp>
    </div>
    <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width icon-header-logo':'logo-width'" >
      <div style="cursor:pointer" @click.prevent="backHome">
        {{collapsed?'':sysName}}
      </div>
    </el-col>
    <el-col :span="10">
      <!-- <div class="tools" @click.prevent="collapse">
        <icon name="align-justify"></icon>
      </div> -->
      <Hamburger class="tools" :toggleClick="collapse" :isActive="collapsed"></Hamburger>
    </el-col>
    <el-col :span="4" class="userinfo">
      <template v-if="sysUserName!='请登录'">
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link userinfo-inner user">{{sysUserName}}</span>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
    </el-col>
  </el-col>
</template>
<script>
import eventHubs from 'common/eventHubs'
import Hamburger from 'views/hamburger';
import langComp from 'views/lang/index.vue'
export default {
  props:['collapsed'],
  data(){
    return {
      sysName: '配网管理系统',
      // sysUserName: "admin",
      sysUserAvatar: ''
    };
  },
  methods:{
    //退出登录
    logout: function () {
      var _this = this;
      this.$confirm('确认退出吗?', '提示', {
        //type: 'warning'
      }).then(() => {
        // sessionStorage.removeItem('user');
        _this.$router.push('/login');
      }).catch(() => {

      });
    },
    collapse(){
      this.$emit("collapsedChange", this.collapsed);
      eventHubs.getEventHub().$emit("collapsedChange", !this.collapsed);
    },
    backHome(){
      this.$router.push('/home');
    }
  },
  computed: {
    sysUserName :function(){
      return this.$store.state.login.user ==null?'请登录': this.$store.state.login.user.name;
    }
  },
  components: {
    langComp, Hamburger
  }
}
</script>
