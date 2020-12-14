<template>
  <div class="logindemo">
    <h1>UNI-ADMIN</h1>
    <el-form
      :model="form"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="pass">
        <el-input type="text" v-model="form.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" v-model="form.pass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">立即登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        user: "",
        pass: "",
      },
    };
  },
  methods: {
    login() {
      this.$axios.post(
        "http://ceshi5.dishait.cn/admin/login",{
            username:this.form.user,
            password:this.form.pass,
        })
        .then((res)=>{
            localStorage.setItem('token',res.data.data.token);
            this.$router.push({path:"/background"});
        })
        .catch((res)=>{
            console.log(res);
            alert("用户名或密码错误,登录失败")
        })
    },
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.logindemo {
  margin-top:50%;
  width: 500px;
  height: 300px;
  border: 1px gainsboro solid;
  text-align: center;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 45px;
  button {
    width: 100%;
  }
}
</style>