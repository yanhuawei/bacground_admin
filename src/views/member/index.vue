<template>
    <div>
        <el-container>
      <el-aside width="200px">
        <el-menu default-active="2" class="el-menu-vertical-demo" router>
          <el-menu-item index="/memberlist">
            <i class="el-icon-menu"></i>
            <span slot="title">会员列表</span>
          </el-menu-item>
          <el-menu-item index="/grade">
            <i class="el-icon-document"></i>
            <span slot="title">会员等级</span>
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