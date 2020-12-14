<template>
    <div>
        <el-container>
      <el-aside width="200px">
        <el-menu default-active="2" class="el-menu-vertical-demo" router>
          <el-menu-item index="/listof">
            <i class="el-icon-menu"></i>
            <span slot="title">基础设置</span>
          </el-menu-item>
          <el-menu-item index="/classlist">
            <i class="el-icon-document"></i>
            <span slot="title">物流设置</span>
          </el-menu-item>
          <el-menu-item index="/product">
            <i class="el-icon-setting"></i>
            <span slot="title">管理员管理</span>
          </el-menu-item>
              <el-menu-item index="/shoptype">
            <i class="el-icon-setting"></i>
            <span slot="title">交易设置</span>
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