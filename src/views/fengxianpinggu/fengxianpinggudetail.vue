<template>
  <div class="page-human">
    <div class="li-title">
      <b>风险评估报告 / 详情</b>
    </div>
    <el-card class="detail-card">
      <div class="detail-left-wapper">
        <div id="a" style="width:100%;">
          <img
            src="../../assets/detailfengxianpinggu/top-img.png"
            style="width:100%;height:90%"
            alt
          />
        </div>
        <div id="b" class="tab-box" style="width:100%;margin-top:10px;">
          <div class="box-title">报告结论</div>
          <div class="ban"></div>
          <div class="en-tit">Report the conclusion</div>

          <div class="show-bo">
            <p>授信额度 180000￥</p>
            <p>评分模型结论</p>
          </div>
        </div>
        <div id="c" class="tab-box" style="width:100%;margin-top:10px;">
          <div class="box-title">风险评估</div>
          <div class="ban"></div>
          <div class="en-tit">The risk assessment</div>

          <div class="num-tit num-bio">
            <div class="bit-tit">
              <div class="tubnum">2.1</div>
              <div class="mj">
                <div class="de">欺诈评估</div>
                <div class="banw"></div>
                <div class="mj-tit">FRAUD EVALUATION</div>
              </div>
            </div>

            <div class="def_report_items" id="basicInfo">
              <div class="ckvalue">风险评估：<b style="color:orange">670分</b></div>
              <ul class="def_report_th">
                <li>策略</li>
                <li>命中规则</li>
                <li>命中分值</li>
              </ul>
              <ul class="def_report_td">
                <li>负面名单检查</li>
                <li>18589020550</li>
                <li class="light-color">用户认证通过的手机号码</li>
              </ul>
              <ul class="def_report_td">
                <li>多头规则</li>
                <li>
                  刘雪梅
                  <i class="check-status-same">完全一致</i>
                </li>
                <li class="light-color">用户输入姓名与运营商认证姓名完全一致，如：张三:张三</li>
              </ul>
              <ul class="def_report_td">
                <li>地理位置核验</li>
                <li>
                  4305****4264
                  <i class="check-status-same">基本一致</i>
                </li>
                <li class="light-color">用户输入身份证与运营商认证基本一致，如：350521201801014321:350521****01014321</li>
              </ul>
              <ul class="def_report_td">
                <li>是否联系过紧急联系人1</li>
                <li>
                  <span class="label danger">否</span>
                </li>
                <li class="light-color">无通话记录，无短信记录</li>
              </ul>
            </div>
          </div>

          <div class="num-tit num-bio">
            <div class="bit-tit">
              <div class="tubnum">2.2</div>
              <div class="mj">
                <div class="de">信用评估</div>
                <div class="banw"></div>
                <div class="mj-tit">CREDIT EVALUATION</div>
              </div>
            </div>

            <div class="def_report_items" id="basicInfo">
              <ul class="def_report_th">
                <li>策略</li>
                <li>命中规则</li>
                <li>命中分值</li>
              </ul>
              <ul class="def_report_td">
                <li>负面名单检查</li>
                <li>18589020550</li>
                <li class="light-color">用户认证通过的手机号码</li>
              </ul>
            </div>
          </div>

          <div class="num-tit num-bio">
            <div class="bit-tit">
              <div class="tubnum">2.3</div>
              <div class="mj">
                <div class="de">风险信息提示</div>
                <div class="banw"></div>
                <div class="mj-tit">RISK INFORMATION PROMPT</div>
              </div>
            </div>

            <div class="def_report_items" id="basicInfo">
              <ul class="def_report_th">
                <li class="items-tip">2.3.1 关联信息</li>
              </ul>
              <ul class="def_report_td">
                <li>身份证</li>
                <li>命中规则</li>
                <li>命中分值</li>
              </ul>
              <ul class="def_report_td">
                <li>负面名单检查</li>
                <li>18589020550</li>
                <li class="light-color">用户认证通过的手机号码</li>
              </ul>
            </div>

            <div class="def_report_items" id="basicInfo">
              <ul class="def_report_th">
                <li class="items-tip">2.3.2 公检法信息</li>
              </ul>
              <ul class="def_report_td">
                <li>身份证</li>
                <li>命中规则</li>
                <li>命中分值</li>
              </ul>
              <ul class="def_report_td">
                <li>负面名单检查</li>
                <li>18589020550</li>
                <li class="light-color">用户认证通过的手机号码</li>
              </ul>
            </div>

            <div class="def_report_items" id="basicInfo">
              <ul class="def_report_th">
                <li class="items-tip">2.3.3 信贷逾期名单</li>
              </ul>
              <ul class="def_report_td">
                <li>身份证</li>
                <li>命中规则</li>
                <li>命中分值</li>
              </ul>
              <ul class="def_report_td">
                <li>负面名单检查</li>
                <li>18589020550</li>
                <li class="light-color">用户认证通过的手机号码</li>
              </ul>
            </div>

            <div class="def_report_items" id="basicInfo">
              <ul class="def_report_th">
                <li class="items-tip">2.3.4 多平头申请信息</li>
              </ul>
              <ul class="def_report_td">
                <li>身份证</li>
                <li>命中规则</li>
                <li>命中分值</li>
              </ul>
              <ul class="def_report_td">
                <li>负面名单检查</li>
                <li>18589020550</li>
                <li class="light-color">用户认证通过的手机号码</li>
              </ul>
            </div>

            <div class="def_report_items" id="basicInfo">
              <ul class="def_report_th">
                <li class="items-tip">2.3.5 多平头申请信息</li>
              </ul>
              <ul class="def_report_td">
                <li>身份证</li>
                <li>命中规则</li>
                <li>命中分值</li>
              </ul>
              <ul class="def_report_td">
                <li>负面名单检查</li>
                <li>18589020550</li>
                <li class="light-color">用户认证通过的手机号码</li>
              </ul>
            </div>
          </div>
          
        </div>
        <div id="c" class="tab-box" style="width:100%;margin-top:10px;">
          <div class="box-title">客户画像</div>
          <div class="ban"></div>
          <div class="en-tit">Customer portrait</div>
        
        </div>
      </div>
      <div class="detail-right-wapper">
        <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick"></el-tree>
      </div>
    </el-card>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      data: [
        {
          label: "报告结论",
          href: "a"
        },
        {
          label: "风险评估",
          href: "b",
          children: [
            {
              label: "2.1-欺诈评估"
            },
            {
              label: "2.2-信用评估"
            },
            {
              label: "2.3-风险信息提示",
              children: [
                {
                  label: "2.3.1-关联信息"
                },
                {
                  label: "2.3.2-公检法信息"
                },
                {
                  label: "2.3.3-信贷逾期名单"
                },
                {
                  label: "2.3.4-多平台申请信息"
                },
                {
                  label: "2.3.5-多平台申请信息"
                }
              ]
            }
          ]
        },
        {
          label: "客户画像",
          href: "c",
          children: [
            {
              label: "3.1-头像信息"
            },
            {
              label: "3.2-基本信息",
              children: [
                {
                  label: "3.2.1-基本信息",
                  href: "d"
                },
                {
                  label: "3.2.2-家庭信息"
                },
                {
                  label: "3.2.3-工作信息"
                },
                {
                  label: "3.2.4-学历信息"
                }
              ]
            },
            {
              label: "3.3-消费能力评估",
              href: "e",
              children: [
                {
                  label: "3.3.1-消费探针"
                },
                {
                  label: "3.3.2-话费消费详情"
                },
                {
                  label: "3.3.3-多平台申请信息",
                  href: "f"
                },
                {
                  label: "3.3.4-京东消费详情"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  mounted() {},
  methods: {
    handleNodeClick(data) {
      //滚动条距离
      var top = Math.floor(
        document.body.scrollTop ||
          document.documentElement.scrollTop ||
          window.pageXOffset
      );

      //元素距离顶部
      var idhight = document.querySelector("#" + data.href).offsetTop;

      //平滑滚动
      $("body,html").animate({ scrollTop: idhight - 10 }, 300);
    }
  }
};
</script>
<style lang='less' scoped>
//  导入统一样式less样式
@import "../users/style.css";
.items-tip{
  font-size: 18px;
  font-weight: bolder;
  color: rgb(100, 221, 237);
  font-family: "Times New Roman", Times, serif;
}
.tab-box {
  padding: 10px 0 25px 0;
  .box-title {
    width: 100%;
    text-align: center;
    font-weight: bolder;
    font-size: 32px;
    padding: 10px;
  }
  .ban {
    width: 40px;
    height: 3px;
    background: cornflowerblue;
    margin: 0 auto;
  }
  .en-tit {
    font-size: 12px;
    width: 100%;
    text-align: center;
    padding: 4px;
    font-weight: bold;
  }
  .show-bo {
    width: 90%;
    margin: 0 auto;
    height: 190px;
    margin-top: 20px;
    text-align: center;
    color: aqua;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 3px 3px 3px rgb(151, 148, 148);
  }
  .num-tit {
    width: 90%;
    margin: 0 auto;
  }
  .num-bio{
    margin-bottom: 20px;
  }
  .bit-tit {
    position: relative;
    width: 200px;
    .tubnum {
      font-size: 44px;
      font-weight: bolder;
      color: rgb(100, 221, 237);
      font-family: "Times New Roman", Times, serif;
    }
    .de {
      font-weight: bolder;
      font-family: "Times New Roman", Times, serif;
    }
    .banw {
      width: 130px;
      height: 2px;
      background: rgb(193, 203, 221);
    }
    .mj {
      position: absolute;
      top: 2px;
      padding: 5px;
      margin-left: 80px;
      right: 2px;
      .mj-tit {
        font-size: 12px;
        width: 100%;
        font-weight: bold;
      }
    }
  }
}
.detail-left-wapper {
  background: #eee;
}
.detail-right-wapper {
  width: 14%;
  position: fixed;
  right: 70px;
  top: 20%;
}
.page-human {
  position: relative;
}
.el-card {
  width: 80%;
  .el-table tr,
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

.def_report_items {
  margin: 15px 0;
  font-size: 16px;
  .ckvalue{
    background-image: url('../../assets/detailfengxianpinggu/ss.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 250px;
    margin: 0 auto;
    text-align: center;
  }
}

.def_report_items h4 {
  color: #12a1a3;
  font-size: 24px;
  padding: 37px 20px 15px;
}

.def_report_items p:not(:last-child) {
  margin-bottom: 5px;
}

.def_report_items .check-more {
  display: block;
  text-align: center;
  color: #999999;
  font-size: 12px;
  background-color: #ffffff;
  padding: 10px 10px 20px;
}

.def_report_items .check-more span {
  display: inline-block;
  transform: scale(2, 1);
  margin-left: 8px;
}

.def_report_items li .check-more {
  padding-bottom: 3px;
  padding-top: 0;
}

.def_report_td,
.def_report_th {
  line-height: 19px;
  padding: 10px 0 10px 20px;
  overflow: hidden;
  font-size: 16px;
  background: #fff;
}

.def_report_td li,
.def_report_th li {
  float: left;
  min-height: 1px;
  word-wrap: break-word;
  word-break: break-all;
}

.def_report_td li:not(:first-child),
.def_report_th li:not(:first-child) {
  padding-left: 10px;
}

.def_report_td li:nth-child(1),
.def_report_th li:nth-child(1) {
  width: 25%;
}

.def_report_td li:nth-child(2),
.def_report_th li:nth-child(2) {
  width: 30%;
}

.def_report_td li:nth-child(3),
.def_report_th li:nth-child(3) {
  width: 42%;
}

.def_report_td li.light-color,
.def_report_th li.light-color {
  color: #999;
}

.def_report_th {
  border-bottom: 1px solid #ccc;
  color: #999;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

.def_report_td {
  border-bottom: 1px solid #f5f5f5;
  color: #333;
}

.def_report_td:last-child {
  border-bottom: none;
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  padding-bottom: 20px;
}

.def_report_td i {
  display: inline-block;
  color: #fff;
  border: none;
  border-radius: 4px;
  vertical-align: top;
  margin-left: 6px;
  font-size: 12px;
  width: 64px;
  text-align: center;
  background: #1671fa;
}

.def_report_td i.check-status-same {
  background: #4cbe51;
}

.def_report_td i.check-status-diff {
  background: #fe4f5b;
}

.def_report_td .label {
  display: inline-block;
  padding: 4px 8px;
  color: #ffffff;
  border-radius: 6px;
  margin-top: -4px;
  margin-bottom: -4px;
}

.def_report_td .label.success {
  background-color: #4cbe51;
}

.def_report_td .label.warning {
  background-color: #f2af0e;
}

.def_report_td .label.danger {
  background-color: #fe4f5b;
}

.def_report_4_columns .def_report_td li:not(:last-child),
.def_report_4_columns .def_report_th li:not(:last-child) {
  width: 25%;
}

.def_report_4_columns .def_report_td li:last-child,
.def_report_4_columns .def_report_th li:last-child {
  width: 21.5%;
}

.def_report_5_columns .def_report_td li:nth-child(1),
.def_report_5_columns .def_report_th li:nth-child(1) {
  width: 12%;
}

.def_report_5_columns .def_report_td li:nth-child(2),
.def_report_5_columns .def_report_th li:nth-child(2) {
  width: 22%;
}

.def_report_5_columns .def_report_td li:nth-child(3),
.def_report_5_columns .def_report_th li:nth-child(3) {
  width: 17%;
}

.def_report_5_columns .def_report_td li:nth-child(4),
.def_report_5_columns .def_report_th li:nth-child(4) {
  width: 11%;
}

.def_report_5_columns .def_report_td li:last-child,
.def_report_5_columns .def_report_th li:last-child {
  width: 33.5%;
}

.def_report_6_columns .def_report_td li:not(:last-child),
.def_report_6_columns .def_report_th li:not(:last-child) {
  width: 16.6%;
}

.def_report_6_columns .def_report_td li:last-child,
.def_report_6_columns .def_report_th li:last-child {
  width: 11.5%;
}

.def_report_7_columns .def_report_td li:nth-child(1),
.def_report_7_columns .def_report_th li:nth-child(1) {
  width: 14%;
}

.def_report_7_columns .def_report_td li:nth-child(2),
.def_report_7_columns .def_report_th li:nth-child(2) {
  width: 14.5%;
}

.def_report_7_columns .def_report_td li:nth-child(3),
.def_report_7_columns .def_report_th li:nth-child(3) {
  width: 11%;
}

.def_report_7_columns .def_report_td li:nth-child(4),
.def_report_7_columns .def_report_th li:nth-child(4) {
  width: 7%;
}

.def_report_7_columns .def_report_td li:nth-child(5),
.def_report_7_columns .def_report_td li:nth-child(6),
.def_report_7_columns .def_report_th li:nth-child(5),
.def_report_7_columns .def_report_th li:nth-child(6) {
  width: 13.5%;
}

.def_report_7_columns .def_report_td li:nth-child(7),
.def_report_7_columns .def_report_th li:nth-child(7) {
  width: 19%;
}

.def_report_8_columns .def_report_td li,
.def_report_8_columns .def_report_th li {
  width: 11.5%;
}
</style>