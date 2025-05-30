<template>
  <div class="bg-primary-el flex-r flex-jc-c flex-ac-t">
    <div class="w-px-max-1420" style="flex: 1">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        background-color="var(--el-color-primary)"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
      >
        <el-menu-item>瑞雪电影院</el-menu-item>
        <div style="flex-grow: 1" />
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/history">
          <el-icon class="v-a-middle>"><Stopwatch /></el-icon>
          <span class="v-a-middle">观看记录</span>
        </el-menu-item>
        <el-sub-menu v-if="username != null && username != ''">
          <template #title>{{ username }}</template>
          <el-menu-item index="/login">
            <el-icon> <SwitchButton /> </el-icon>退出登录</el-menu-item
          >
        </el-sub-menu>
        <el-menu-item index="/login" v-else>
          <span class="v-a-middle">登录/注册</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["active"],
  watch: {
    active: {
      handler(newVal) {
        this.activeIndex = newVal;
      },
      immediate: true,
      deep: true,
    },
  },
  data() {
    return {
      value: "",
      activeIndex: "0",
      username: sessionStorage.getItem("username"),
    };
  },
  methods: {
    handleSelect(index) {
      if (index == "/login") {
        if (this.logininfo) {
          if (this.logininfo.remember) {
            this.$store.dispatch("movie/revise_login", this.logininfo);
          } else {
            this.$store.dispatch("movie/revise_login", {
              name: "",
              pass: "",
              remember: this.logininfo.remember,
            });
          }
        }

        // 清空窗口缓存
        sessionStorage.clear();
      }

      if (index == "/history") {
        this.$router
          .push({ path: index, query: { title: "观看记录" } })
          .catch((error) => error);
      } else {
        this.$router.push({ path: index }).catch((error) => error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.el-menu--horizontal {
  border-bottom: solid 0px var(--el-menu-border-color);
}

.shopcar-num {
  width: 10px;
  height: 10px;
  line-height: 10px;
  background-color: red;
  padding: 6px;
  border-radius: 50%;
  margin-left: 5px;
}

#elinputitem :deep(.el-menu-item *) {
  vertical-align: middle !important;
}
</style>
