<template>
  <div>
    <div class="outpadding">
    <div class="biaoti">>>详情页</div>
      <el-tabs v-model="tabname" type="card">
        <!-- 有两大板块，分别来自不同的页面 -->
        <el-tab-pane label="合同基本信息" name="userbase"></el-tab-pane>
        <el-tab-pane label="计划还款信息" name="userplan"></el-tab-pane>
        <el-tab-pane label="实际还款信息" name="userrealloan"></el-tab-pane>
        <el-tab-pane label="合同放款信息" name="userfangkuan"></el-tab-pane>
        <el-tab-pane label="个人信息" name="userjiekuan"></el-tab-pane>
        <el-tab-pane label="企业信息" name="userqiye"></el-tab-pane>
      </el-tabs>
      <userbase v-if="tabname=='userbase'"></userbase>
      <userplan v-if="tabname=='userplan'"></userplan>
      <userrealloan v-if="tabname=='userrealloan'"></userrealloan>
      <userfangkuan v-if="tabname=='userfangkuan'"></userfangkuan>
      <userjiekuan v-if="tabname=='userjiekuan'"></userjiekuan>
      <userqiye v-if="tabname=='userqiye'"></userqiye>
    </div>
  </div>
</template>
<script>
import userbase from "./userbase.vue";
import userplan from "./userplan.vue";
import userrealloan from "./userrealloan.vue";
import userfangkuan from "./userfangkuan.vue";
import userjiekuan from "./userjiekuan.vue";
import userqiye from "./userqiye.vue";

export default {
  data() {
    return {
      detail: {},
      tabname: "userbase",//默认打开的是基本信息
    };
  },
  mounted() {
  },
  methods: {
  },
  watch: {},
  components: {
    userbase,
    userplan,
    userrealloan,
    userfangkuan,
    userjiekuan,
    userqiye,
  }
};
</script>

 <style lang='less'scoped>

.outpadding {
  padding: 30px 20px;
  background-color: rgb(252, 249, 249);
}
</style>
