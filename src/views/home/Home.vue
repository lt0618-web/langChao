<template>
  <div class="all">
    <el-container>
      <el-header>
        <b class="logo">logo</b>
        <el-menu
          :default-active="menuIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="menuHandleSelect"
        >
          <el-menu-item index="1">菜单 1</el-menu-item>
          <el-menu-item index="2">菜单 2</el-menu-item>
          <el-menu-item index="3">菜单 3</el-menu-item>
          <el-menu-item index="4">菜单 4</el-menu-item>
          <el-menu-item index="5">菜单 5</el-menu-item>
          <el-menu-item index="6">菜单 6</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="25%">
          <Left />
        </el-aside>
        <el-main><Cont /></el-main>
        <el-aside
          :width="drawer ? '30%' : '30px'"
          style="background-color: rgba(0, 0, 0, 0.2)"
        >
          <div class="arrow" @click="drawer = !drawer">
            <i class="el-icon-d-arrow-left"></i>
          </div>
          <Right :style="drawer ? 'display:block' : 'display:none'"
        /></el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Left from "@/views/home/Left.vue";
import Cont from "@/views/home/Cont.vue";
import Right from "@/views/home/Right.vue";
export default {
  name: "Home",
  components: {
    // HelloWorld,
    Left,
    Cont,
    Right,
  },
  data() {
    return {
      menuIndex: "1",
      drawer: true,
    };
  },
  methods: {
    menuHandleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped lang="scss">
.all {
  min-width: 800px;
}
.el-header {
  position: relative;
  padding: 0;

  .logo {
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fff;
    z-index: 10;
    width: 100px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 30px;
  }
}
.main {
  min-width: 800px;
  height: 100%;
  overflow: hidden;
}
.el-menu-demo {
  background-color: #2cb5e8;
  background-image: Linear-gradients(180deg, #1fc8db 51%, #2cb5e8 75%);
  color: #fff;
  text-align: center;
  min-width: 800px;
}
.el-menu--horizontal {
  & > .el-menu-item {
    color: #fff;
    display: inline-block;
    float: none;
  }

  & > .el-menu-item.is-active {
    border-bottom: 0px;
    color: #409eff;
    background-color: #62efff;
    background-image: Linear-gradients(180deg, #2cb5e8 51%, #62efff 75%);
  }
  .el-menu-item:not(.is-disabled):focus,
  .el-menu-item:not(.is-disabled):hover {
    color: #409eff;
    background-color: #62efff;
    background-image: Linear-gradients(180deg, #2cb5e8 51%, #62efff 75%);
  }
}
/deep/.el-scrollbar__wrap {
  overflow-x: hidden;
}
.el-aside {
  position: relative;
  overflow: initial;
  .arrow {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: -50%;
    color: #fff;
    cursor: pointer;
  }
  .draPos {
    animation: mymove 2s initial;
    transform: translateX(90%);
  }
}
@keyframes mymove {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}
@-webkit-keyframes mymove {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
