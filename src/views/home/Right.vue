<template>
  <div class="Right">
    <h3>
      <span>标题1</span>
      <el-radio-group v-model="tabPosition" @change="handleClick">
        <el-radio-button label="first">选择1</el-radio-button>
        <el-radio-button label="second">选择2</el-radio-button>
      </el-radio-group>
    </h3>
    <myChart id="ch1" :option="option1" style="width: 100%; height: 120px" />

    <h3>标题2</h3>
    <div style="width: 100%; height: 90px">
      <el-scrollbar style="height: 100%">
        <myChart
          id="ch2"
          :option="option2"
          style="width: 100%; height: 130px"
        />
      </el-scrollbar>
    </div>
    <h3>标题3</h3>
    <div style="width: 100%; height: 90px">
      <el-scrollbar style="height: 100%">
        <myChart
          id="ch3"
          :option="option3"
          style="width: 100%; height: 130px"
        />
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
import myChart from "@/views/home/Charts.vue";
export default {
  name: "Right",
  components: {
    myChart,
  },
  data() {
    return {
      tabPosition: "first",
      option1: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
        },
        grid: {
          left: "0",
          right: "0",
          top: "30",
          bottom: "0",
          containLabel: true,
        },
        yAxis: [
          {
            type: "value",
            name: "图表标题",
            nameTextStyle: {
              color: "#fff",
              fontSize: "12",
              padding: [0, 0, 0, -10],
            },
            axisLabel: {
              show: true,
              lineStyle: {
                color: "#fff",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
        ],
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "top",
                  textStyle: {
                    color: "#fff",
                    fontSize: 10,
                  },
                },
              },
            },
          },
        ],
        tooltip: {
          show: false,
        },
      },
      option2: {
        tooltip: {
          show: false,
        },
        legend: {
          data: ["蓝色", "黄色"],
        },
        grid: {
          left: "30%",
          top: 0,
          bottom: 0,
          right: 20,
        },
        xAxis: {
          type: "value",
          show: false,
        },
        yAxis: {
          type: "category",
          inverse: true,
          data: [
            "内容1ffff",
            "内容sssssssff2",
            "内容3sfsfsd",
            "内容4ss",
            "内容5",
          ],
          axisLabel: {
            show: true,
            lineStyle: {
              color: "#fff",
            },
            fontSize: "14",

            align: "right",
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff",
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            type: "bar",
            data: [165, 170, 30, 165, 170, 30],
            labelLine: {
              show: false,
            },
            itemStyle: {
              normal: {
                barBorderRadius: [15, 15, 15, 15],
                label: {
                  show: true,
                  position: "right",
                  textStyle: {
                    color: "#fff",
                    fontSize: 8,
                  },
                },
              },
            },
          },
          {
            name: "City Beta",
            type: "bar",
            data: [150, 105, 110, 150, 105, 110],
            labelLine: {
              show: false,
            },
            itemStyle: {
              normal: {
                barBorderRadius: [15, 15, 15, 15],
                label: {
                  show: true,
                  position: "right",
                  textStyle: {
                    color: "#fff",
                    fontSize: 8,
                  },
                },
              },
            },
          },
        ],
      },
      option3: {
        tooltip: {
          show: false,
        },
        grid: {
          left: 60,
          top: 0,
          bottom: 0,
          right: 10,
        },
        xAxis: {
          type: "value",
          show: false,
        },
        yAxis: {
          type: "category",
          inverse: true,
          data: ["内容1", "内容2", "内容3", "内容4", "内容5"],
          axisLabel: {
            show: true,
            lineStyle: {
              color: "#fff",
            },
            fontSize: "14",
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff",
            },
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            type: "bar",
            data: [165, 170, 30, 165, 170, 30],
            labelLine: {
              show: false,
            },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "right",
                  textStyle: {
                    color: "#fff",
                    fontSize: 12,
                  },
                },
              },
            },
          },
        ],
      },
    };
  },
  methods: {
    handleClick(label) {
      console.log(label);
    },
  },
};
</script>

<style scoped lang="scss">
.Right {
  // background-color:rgba(0,0,0,0.2);
  padding: 10px 20px 10px 30px;

  h3 {
    overflow: hidden;
    color: #fff;
    margin: 0;
    line-height: 40px;

    span {
      float: left;
    }
  }
  /deep/.el-radio-group {
    float: right;
    margin: 3px 10px;
    & .el-radio-button__inner {
      padding: 3px 10px;
    }
  }
}
</style>
