<template>
    <div class="outpadding">
            <div class="biaoti" style="margin-top:8px;">监管报送/线下报送</div>
                <el-tabs v-model="this.$store.state.tabname" tab-position="left" style="height:1100px;width:8%;float:left" @tab-click="changetab">
                    <!-- 有五大板块，分别来自不同的页面 -->
                    <el-tab-pane label="合同上传" name="hetong"></el-tab-pane>
                    <el-tab-pane label="放款上传" name="fangkuan"></el-tab-pane>
                    <el-tab-pane label="还款上传" name="huankuan"></el-tab-pane>
                    <el-tab-pane label="坏账上传" name="huaizhang"></el-tab-pane>
                    <!-- <el-tab-pane label="日结上传" name="rijie"></el-tab-pane> -->
                    <el-tab-pane label="计提上传" name="jiti"></el-tab-pane>
                </el-tabs>
            <!-- <div class="page"> -->
                <hetong v-if="this.$store.state.tabname=='hetong'"></hetong>
                <fangkuan v-if="this.$store.state.tabname=='fangkuan'"></fangkuan>
                <huankuan v-if="this.$store.state.tabname=='huankuan'"></huankuan>
                <huaizhang v-if="this.$store.state.tabname=='huaizhang'"></huaizhang>
                <!-- <rijie v-if="tabname=='rijie'"></rijie> -->
                <jiti v-if="this.$store.state.tabname=='jiti'"></jiti>
            <!-- </div> -->
    </div>
</template>
<script>
import hetong from "../shangchuan/hetong";
import fangkuan from "../shangchuan/fangkuan.vue";
import huankuan from "../shangchuan/huankuan.vue";
import huaizhang from "../shangchuan/huaizhang.vue";
import rijie from "../shangchuan/rijie.vue";
import jiti from "../shangchuan/jiti.vue";

export default {
  data() {
    return {
        detail: {},
        // tabname: "hetong",//默认打开的是基本信息
    };
  },
  mounted() {
    // this.changetab();
  },
  methods: {
    changetab(tab) {
      //dispatch：含有异步操作，例如向后台提交数据，写法： this.$store.dispatch('mutations方法名',值)
      // commit：同步操作，写法：this.$store.commit('mutations方法名',值)
      this.$store.dispatch('settabname', tab.name)
      console.log(this.$store.getters.gettabname)
      //跳转返回顶部
      if(document.body.scrollTop > 0) {
                console.log(1);
                window.scrollTo(0, -1);
                document.body.scrollTop = 0;
            }
            window.scrollTo(0, -1);
            document.body.scrollTop = 0;
    },
    
  },
  watch: {},
  components: {
    hetong,
    fangkuan,
    huankuan,
    huaizhang,
    jiti
  }
};
</script>

 <style lang='less'>

//  导入统一样式less样式
@import '../users/style.css';












































</style>
