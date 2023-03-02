<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <img src="@/assets/logo.png" alt="" class="logo" />
      <span class="tit">运行状态报表</span>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #545c64">
        <a-menu mode="inline" :style="{ height: '100%', borderRight: 0 }" theme="dark">
          <a-menu-item v-for="item in routes[0].children" :key="item.name">
            <router-link :to="item.path">
              <a-icon :type="item.meta.icon" />
              <span>{{ item.name }}</span>
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item class="breadcrumb">
            {{ $route.name }}
          </a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import { routes } from "@/router"
export default {
  data() {
    return {
      collapsed: false,
      routes: routes,
    }
  },
  watch: {},
  methods: {},
}
</script>

<style lang="less" scoped>
.ant-layout {
  height: 100%;
  width: 100%;
}
.header {
  background-color: #2175c5;
  font-size: 20px;
  color: #fff;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.logo {
  width: 40px;
  height: 40px;
  margin: 16px 28px 16px 0;
}
.breadcrumb {
  font-size: 20px;
  font-weight: bold;
}
</style>
