<template>
  <div class="page-human">
    <div class="li-title">
      <b>风险评估报告 / 详情</b>
    </div>
    <el-card class="detail-card">
		<div class="detail-left-wapper">
			
		</div>
		<div class="detail-right-wapper">
			<el-tree
			:data="data"
			:props="defaultProps"
			accordion
			@node-click="handleNodeClick">
			</el-tree>
		</div>
    </el-card>

  </div>
</template>

<script>
export default {
  data() {
    return {
     data: [{
          label: '报告结论'
        }, {
          label: '风险评估',
          children: [{
            label: '2.1-欺诈评估'
          }, {
            label: '2.2-信用评估'
          }, {
			label: '2.3-风险信息提示',
			children: [{
              label: '2.3.1-关联信息'
			},{
              label: '2.3.2-公检法信息'
            },{
              label: '2.3.3-信贷逾期名单'
            },{
              label: '2.3.4-多平台申请信息'
            },{
              label: '2.3.5-多平台申请信息'
            }]
          }]
        }, {
          label: '客户画像',
          children: [{
            label: '3.1-头像信息'
          }, {
            label: '3.2-基本信息',
            children: [{
              label: '3.2.1-基本信息'
			},
			{
              label: '3.2.2-家庭信息'
            },
			{
              label: '3.2.3-工作信息'
            },
			{
              label: '3.2.4-学历信息'
            }]
          }, {
            label: '3.3-消费能力评估',
            children: [{
              label: '3.3.1-消费探针'
			},
			{
              label: '3.3.2-话费消费详情'
            },
			{
              label: '3.3.3-多平台申请信息'
            },
			{
              label: '3.3.4-京东消费详情'
            }]
          }]
		}],
		defaultProps: {
          children: 'children',
          label: 'label'
        }
    };
  },
  mounted() {
	  
  },
  methods: {
    handleNodeClick(data) {
        console.log(data);
      }
    
  }
};
</script>
<style lang='less' scoped>
//  导入统一样式less样式
@import "../users/style.css";
.detail-left-wapper{
	background: #eee;
	height: 1200px;
}
.detail-right-wapper{
	background:#fff;
	width:14%;
	height: 400px;
	position: fixed;
	right:60px;
	bottom:20px;;
}
.detail-card{
	position: relative;
}
/deep/ .el-card {
	width:80%;
  /deep/ .el-table tr,
  .el-table th {
    background: rgba(173, 173, 173, 0.3);
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
}
</style>