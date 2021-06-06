<template>
  <div class="left">
    <h3><i>我是一个大标题</i></h3>
    <el-radio-group v-model="tabPosition" @change="handleClick">
      <el-radio-button label="地图">地图</el-radio-button>
      <el-radio-button label="图谱">图谱</el-radio-button>
    </el-radio-group>
    <h5>搜索</h5>
    <el-select v-model="selectValue" placeholder="请选择">
      <el-option
        v-for="item in selectOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <div class="list">
      <h5>标题</h5>
      <p><span>名称</span><font>金额(亿)</font></p>
      <el-scrollbar style="height: 100%">
        <ul>
          <li v-for="(item, index) in listItems" :key="index">
            <span>{{ item.text }}</span
            ><font>{{ item.val }}</font>
          </li>
        </ul>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
export default {
  name: "Left",
  components: {},
  data() {
    return {
      tabPosition: "地图",
      selectOptions: [
        {
          value: "选项1",
          label: "选择1",
        },
        {
          value: "选项2",
          label: "选择2",
        },
        {
          value: "选项3",
          label: "选择3",
        },
        {
          value: "选项4",
          label: "选择4",
        },
        {
          value: "选项5",
          label: "选择5",
        },
        {
          value: "选项6",
          label: "选择6",
        },
      ],
      selectValue: "",
      listItems: [
        {
          text: "列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称",
          val: "3201.05",
        },
        {
          text: "列表列表名称名称",
          val: "3201.05",
        },
      ],
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
.left {
  padding: 10px 20px;
  h3 {
    color: #409eff;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }
  /deep/.el-radio-group {
    width: 100%;
    overflow: hidden;
    & .el-radio-button {
      width: 50%;
      span {
        display: inline-block;
        width: 100%;
      }
    }
    & .el-radio-button__inner {
      padding: 3px 0;
    }
  }
  h5 {
    color: #fff;
    padding: 0;
    margin: 0;
    height: 30px;
    line-height: 30px;
  }
  .el-select {
    width: 100%;

    /deep/input.el-input__inner {
      height: 30px !important;
      line-height: 30px !important;
    }
    /deep/.el-input__icon {
      line-height: 100%;
    }
  }
  .list {
    color: #fff;
    height: 250px;

    h5 {
      height: 30px;
      line-height: 30px;
    }
    p {
      height: 26px;
      line-height: 26px;
      background-color: #409eff;
      padding: 0 4%;
      margin: 0;
      font-size: 12px;

      span {
        float: left;
      }
      font {
        float: right;
      }
    }
    ul {
      padding: 0;
      margin: 0;
      overflow: hidden;
      font-size: 12px;

      li {
        height: 20px;
        line-height: 20px;
        overflow: hidden;

        span {
          width: 60%;
          float: left;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        font {
          float: right;
          width: 50px;
        }
      }
    }
  }
}
</style>
