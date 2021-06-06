<template>
  <div :id="id"></div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "Charts",
  components: {},
  data() {
    return {
      myChart: "",
    };
  },
  props: {
    id: {
      type: String,
      default: "",
    },
    option: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    chartsFun() {
      var dom = document.getElementById(this.id);
      this.myChart = echarts.init(dom);
      var options = this.option;

      console.log(options);
      this.myChart.setOption(options);
    },
  },
  mounted: function () {
    this.chartsFun();
    // this.mapCharts = echarts.init(document.getElementById('chares'));
  },
};
</script>

<style scoped lang="scss"></style>
