<template>
  <div class="Cont">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="标题1" name="first">
        <div class="text">
          <h4>富士康的回访客户</h4>
          <p>
            德生科技工会尽快落实国家了快速导航加空格号开始就换个接口上的就开个会撒娇很给力吉安市管理局哈萨克两个号克拉舒肝颗粒暗示健康的复合接口是否尽快哈设计开发和接口是否健康哈萨克金凤凰健康的说法
          </p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="标题2" name="second">标题2</el-tab-pane>
    </el-tabs>
    <Map />
  </div>
</template>
<script>
import Map from "@/views/home/Map.vue";
export default {
  name: "Cont",
  components: {
    Map,
  },
  data() {
    return {
      activeName: "first",
      mapCharts: "",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  mounted: function () {},
};
</script>

<style scoped lang="scss">
.Cont {
  padding: 10px;
  .text {
    color: #fff;
    h4 {
      padding: 0;
      margin: 0;
      line-height: 30px;
      text-align: center;
    }
    p {
      line-height: 26px;
      text-indent: 2rem;
      margin: 0;
      padding: 0;
    }
  }
  /deep/.el-tabs--card {
    & > .el-tabs__header {
      border: 0;
      .el-tabs__nav {
        border: 1px solid #fff;
        border-radius: 20px;
      }
      .el-tabs__item {
        border: 0;
        border-radius: 20px;
        color: #fff;
        height: 30px;
        line-height: 30px;
        &:first-child.is-active {
          border-left: 0;
        }
        &:last-child.is-active {
          border-right: 0;
        }
        &.is-active {
          background-color: rgb(74, 101, 255);
          color: #fff;
          border-right: 1px solid #fff;
          border-left: 1px solid #fff;
        }
      }
    }
  }
  #chares {
    width: 80%;
    height: 100px;
  }
}
</style>
