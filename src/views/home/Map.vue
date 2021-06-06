<template>
  <div id="map">
    <baidu-map
      :center="center"
      :zoom="zoom"
      @ready="handler"
      style="width:100%;height: 200px"
      @click="getClickInfo"
      :scroll-wheel-zoom="true"
    >
    </baidu-map>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "mapCharts",
  components: {},
  data() {
    return {
      mapCharts: "",
      center: { lng: 109.45744048529967, lat: 36.49771311230842 },
      zoom: 13,
    };
  },
  methods: {
    mapchartsFun() {
      this.mapCharts = echarts.init(document.getElementById("map"));
      var option = {
        backgroundColor: "#404a59",
        title: {},
        tooltip: {
          trigger: "item",
        },
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: true,
        },
        series: [],
      };
      this.mapCharts.setOption(option);
      // // 获取百度地图实例，使用百度地图自带的控件
      // var bmap = this.mapCharts.getModel().getComponent('bmap').getBMap();
      // bmap.addControl(new BMap.MapTypeControl());
      // //调用百度的方法，使用bmap对象
      // var point = new BMap.Point(116.404, 39.915);
      // bmap.centerAndZoom(point, 15);
    },
  },
  mounted: function () {
    // this.mapCharts = echarts.init(document.getElementById('chares'));
  },
};
</script>

<style scoped lang="scss">
.Cont {
  /deep/.el-tabs__nav-scroll {
    overflow: inherit;
  }
  .el-tabs--card > .el-tabs__header .el-tabs__nav {
    border-radius: 20px;
  }
  .el-tabs--card > .el-tabs__header .el-tabs__item {
    border-radius: 20px;
  }
  #chares {
    width: 80%;
    height: 100px;
  }
}
</style>
