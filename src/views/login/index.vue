<template>
<div class="login-wrap">
  <div class="ms-title">Eagles</div>
  <div class="ms-login">
  <el-form :model="user" :rules="validRules" ref="user" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <el-form-item prop="name">
      <el-input type="text" v-model="user.name" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="user.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="loginAction" :loading="logining">登录</el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
  </el-form>
</div>
</div>
</template>

<script>
// import LoginService from 'api/login'
import * as types from 'store/modules/login'
export default {
  data() {
    return {
      logining: false,
      user: {
        name: 'admin',
        password: 'admin'
      },
      validRules: {
        name: [{
          required: true,
          message: '请输入账号',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      }
    };
  },
  methods: {
    loginAction(ev) {
      this.$router.push({path: '/home'});
      // this.$refs.user.validate((valid) => {
      //   var self = this;
      //   if (valid) {
      //     this.logining = true;
      //     var loginParams = {
      //       name: this.user.name,
      //       password: this.user.password
      //     };
      //     LoginService.userLogin(loginParams).then(function(response) {
      //       self.logining = false;
      //       if (response.data.errorCode == null) {
      //
      //         self.$store.commit(types.LOGIN_SUCCESS, response.data);
      //         self.$router.push({path: '/home'});
      //       } else {
      //         self.logining = false;
      //         self.$message({
      //           message:"用户名和密码不对，请重新输入",
      //           type:"info"
      //         });
      //         self.$store.commit(types.USERINFO_FAILURE, "用户名和密码不对，请重新输入");
      //       }
      //     }).catch(function(error) {
      //       console.log(error);
      //       self.logining = false;
      //       self.$message({
      //         message:"用户名和密码不对，请重新输入",
      //         type:"info"
      //       });
      //       self.$store.commit(types.USERINFO_FAILURE, "用户名和密码不对");
      //     });
      //   }
      // });
    }
  }
}
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }

    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:150px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>
