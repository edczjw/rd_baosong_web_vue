<template>
  <div class="page-human">
    <div class="li-title">
      <b>风险评估报告 / 个人详情</b>
    </div>
    <el-card>
        <div style="padding:0 60px;">
            <img src="../../assets/1_01.jpg" alt="" width="100%">
            <img src="../../assets/1_02.jpg" alt="" width="100%">
            <img src="../../assets/1_03.jpg" alt="" width="100%">
            <img src="../../assets/1_04.jpg" alt="" width="100%">
            <img src="../../assets/1_05.jpg" alt="" width="100%">
            <img src="../../assets/1_06.jpg" alt="" width="100%">
            <img src="../../assets/1_07.jpg" alt="" width="100%">
            <img src="../../assets/1_08.jpg" alt="" width="100%">
            <img src="../../assets/1_09.jpg" alt="" width="100%">
            <img src="../../assets/1_10.jpg" alt="" width="100%">
            <img src="../../assets/1_11.jpg" alt="" width="100%">
            <img src="../../assets/2_01.jpg" alt="" width="100%">
            <img src="../../assets/2_02.jpg" alt="" width="100%">
            <img src="../../assets/2_03.jpg" alt="" width="100%">
            <img src="../../assets/2_04.jpg" alt="" width="100%">
            <img src="../../assets/2_05.jpg" alt="" width="100%">
            <img src="../../assets/2_06.jpg" alt="" width="100%">
            <img src="../../assets/2_07.jpg" alt="" width="100%">
            <img src="../../assets/2_08.jpg" alt="" width="100%">
            <img src="../../assets/2_09.jpg" alt="" width="100%">
            <img src="../../assets/2_10.jpg" alt="" width="100%">
        </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    // this.load(this.searchform);
  },

  methods: {
      
  },
  watch: {}
};
</script>
<style lang='less' scoped>
//  导入统一样式less样式
@import "../users/style.css";
/deep/ .el-card {
  // background: rgba(255, 255, 255, 0.1);
  /deep/ .el-table tr,
  .el-table th {
    background: rgba(173, 173, 173, 0.3);
    // background: rgb(248, 246, 246);
    color: rgb(118, 104, 104);
    font-family: "苹方";
  }
  /deep/ .el-table--border td,
  .el-table--border th,
  .el-table__body-wrapper
    .el-table--border.is-scrolling-left
    ~ .el-table__fixed {
    border-right: 1px solid #fff;
  }
  .el-form-item__content {
    margin-left: 130px !important;
  }
}
.page-human {
  padding: 25px 50px;
  // background: rgb(202, 201, 201);
  .human-table {
    margin-top: 40px;
  }
  .human-pagination {
    margin-top: 30px;
  }
}
</style>