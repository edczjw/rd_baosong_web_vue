<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
export default {
  name: "app",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
}
</script>

<style lang='less'>
// 整体布局样式
* {
  margin: 0;
  padding: 0;
  // font-size: 16px;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  height: 100%;
}
#app {
  height: 100%;
}


//大盒子样式
.box{
height: 100%;
margin-top: 2px;
padding: 30px;
background-color: rgba(153, 159, 160, 0.459);
}
.bigbox{
  height: 100%;

//表格
.page-content{
  height: 100%;
  margin-left: 2px;
}
.boo{
    height: 460px;
}
}

//线下报送填写内容整个页面
.page{
  height: 100%;
  padding: 10px;
}
//标签
.tag{
  margin:40px;
}
//填写内容部分页面
.contt{
  border-bottom: 1px dashed rgb(196, 163, 163);
}
//提交部分
.butt{
  margin-top: 10px;
  padding: 20px;
  text-align: center;
}
/* 改变日期输入框默认宽度 */
.el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 234px !important;
}
/* Table */
.table-container .el-table th {
  text-align: center;
}
//分页部分
.block{
  margin: 15px 0;
  height: 5px;
}

.li-title{
  width:100%;
  font-size: 16px;
  border-radius: 10px;
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  margin-bottom: 10px;
  background-color: rgb(147, 228, 201);
}

</style>
