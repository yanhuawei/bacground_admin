<template>
    <div>
        <el-container>
      <el-aside width="200px">
        <el-menu default-active="2" class="el-menu-vertical-demo" router>
          <el-menu-item index="/background">
            <i class="el-icon-menu"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="/album">
            <i class="el-icon-document"></i>
            <span slot="title">发票管理</span>
          </el-menu-item>
          <el-menu-item index="/shoplist">
            <i class="el-icon-setting"></i>
            <span slot="title">售后服务</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <crumb></crumb>
        <router-view></router-view>
      </el-main>
    </el-container>
    </div>
</template>
<script>
import crumb from "@/components/crumb.vue";
// 引入子组件
export default {
  components: {
    crumb,
  },
};
</script>