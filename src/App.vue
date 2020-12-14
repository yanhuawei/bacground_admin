<template>
  <div id="app">
    <el-container>
      <el-header class="nav" v-show="show">
        <h1>UNI-ADMIN</h1>
        <div class="right">
          <el-menu class="el-menu-demo" mode="horizontal" router>
            <el-menu-item index="/home">首页</el-menu-item>
            <el-menu-item index="/shop">商品</el-menu-item>
            <el-menu-item index="/order">订单</el-menu-item>
            <el-menu-item index="/member">会员</el-menu-item>
            <el-menu-item index="/setup">设置</el-menu-item>
          </el-menu>

          <el-avatar icon="el-icon-user-solid"></el-avatar>
          <el-button @click="logout">退出登陆</el-button>
        </div>
      </el-header>
      <router-view />
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  watch: {
    $route: {
      handler(newval, oldval) {
        // console.log(newval, oldval);
        if (newval.path == "/login") {
          this.show = false;
        } else {
          this.show = true;
        }
      },
    },
  },
  methods: {
    logout() {
      this.$http("http://ceshi5.dishait.cn/admin/logout", "post")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
          this.$router.push({ path: "/login" });
        });
    },
    //退出登陆
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

.nav {
  width: 100%;
  justify-content: space-between;
  display: flex;
  background: rgb(77, 79, 82);
  color: white;
  align-items: center;
  .right {
    display: flex;
    align-items: center;
    color: white;
  }
  .el-menu {
    background: none;
  }
}
</style>
