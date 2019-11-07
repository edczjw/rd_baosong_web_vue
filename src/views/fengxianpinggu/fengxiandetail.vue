<template>
  <div class="page-human">
    <div class="li-title">
      <b>风险评估报告 / 详情</b>
    </div>
    <el-card class="detail-card">
      <div class="detail-left-wapper animated fadeIn">
        <div id="a" class="tab-box1">
          <img src="../../assets/detailfengxianpinggu/bg_1.png" alt />
          <img src="../../assets/detailfengxianpinggu/bg_02.png" alt style="margin-top:-4px" />
        </div>

        <div class="box2">
          <div class="conlusion">
            <img src="../../assets/detailfengxianpinggu/conreport.png" alt />
          </div>
        </div>

        <div class="box3">
          <el-card class="box3-ec">
            <div class="box3-charts">
              <div id="myChart" :style="{width: '270px', height: '280px'}"></div>
            </div>
            <div class="box3-right">
              <span>授信额度：</span>
              <b>18000元</b>
              <br />
              <br />
              <span>评分模型结论：</span>
              <span class="ji">已通过</span>
            </div>

            <div class="box3-bd-rt">审核通过</div>
          </el-card>
        </div>

        <div class="box4">
          <div class="box4-img">
            <img src="../../assets/detailfengxianpinggu/1.1.png" alt />
          </div>

          <el-card class="box4-ec">
            <div class="tit-pp">欺诈分：670分</div>
          </el-card>
        </div>

        <div class="box5">
          <div class="box5-img">
            <img src="../../assets/detailfengxianpinggu/1.2.png" alt />
          </div>

          <el-card class="tit-pw">
            <div class="box5-io">评分模型结论</div>
            <div class="box5-lf">
              <div id="myChart2" :style="{width: '210px', height: '220px',margin:'0 auto'}"></div>
            </div>

            <div class="box5-rt">
              <div id="myChart3" :style="{width: '360px', height: '220px'}"></div>
            </div>
          </el-card>

          <el-card class="box5-ec2">
            <div class="tit-pp2">信用分：89分</div>
          </el-card>
        </div>

        <div class="box6">
          <div class="box6-img">
            <img src="../../assets/detailfengxianpinggu/1.3.png" alt />
          </div>
          
          <el-card class="box6-ec1">
            <div class="box6tt">1.3.1关联信息</div>
          </el-card>

          <el-card class="box6-ec2">
            <div class="box6tt">1.3.2公检法信息</div>
          </el-card>

          <el-card class="box6-ec3">
            <div class="box6tt">1.3.3信贷逾期名单</div>
          </el-card>

          <el-card class="box6-ec4">
            <div class="box6tt">1.3.4多名单申请信息</div>
          </el-card>
          
        </div>

        <div class="box7">
          <div class="box7-img">
            <img src="../../assets/detailfengxianpinggu/2.1.png" alt />
          </div>
          
          <el-card class="box7-ec1">
            <div class="box7tt">2.1.1身份信息</div>
          </el-card>
        </div>

        <div class="box8">
          <div class="box8-img">
            <img src="../../assets/detailfengxianpinggu/2.2.png" alt />
          </div>
          
          <el-card class="box8-ec1">
            2.2
          </el-card>
        </div>

        <div class="box9">
          <div class="box9-img">
            <img src="../../assets/detailfengxianpinggu/2.3.png" alt />
          </div>
          
          <el-card class="box9-ec1">
            2.3.1消费信息
          </el-card>

          <el-card class="box9-ec2">
            
          </el-card>

          <el-card class="box9-ec3">
            
          </el-card>

          <el-card class="box9-ec4">
            2.3.2航空出行信息
          </el-card>

          <el-card class="box9-ec5">
            2.3.3铁路出行信息
          </el-card>
        </div>

        <div class="box10">
          <div class="box10-img">
            <img src="../../assets/detailfengxianpinggu/2.4.png" alt />
          </div>
          
          <el-card class="box10-ec1">
            2.4.1收入信息
          </el-card>
        </div>

        <div class="box11">
          <div class="box11-img">
            <img src="../../assets/detailfengxianpinggu/2.5.png" alt />
          </div>
          
          <el-card class="box11-ec1">
            2.5.1收入信息
          </el-card>
        </div>

        <div class="box12">
          <div class="box12-img">
            <img src="../../assets/detailfengxianpinggu/2.6.png" alt />
          </div>
          
          <el-card class="box12-ec1">
            2.6.1通讯行为
          </el-card>
        </div>

      </div>

      <div class="detail-right-wapper animated fadeInRight">
        <el-input size="mini" class="flter-input" placeholder="输入关键字进行快捷查询" v-model="filterText"></el-input>

        <el-tree
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          @node-click="handleNodeClick"
          default-expand-all
          :filter-node-method="filterNode"
          ref="tree2"
        ></el-tree>
      </div>
    </el-card>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val);
    }
  },
  data() {
    return {
      filterText: "",
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
              label: "2.1-欺诈评估",
              href: "c"
            },
            {
              label: "2.2-信用评估",
              href: "d"
            },
            {
              label: "2.3-风险信息提示",
              href: "e",
              children: [
                {
                  label: "2.3.1-关联信息",
                  href: "e1"
                },
                {
                  label: "2.3.2-公检法信息",
                  href: "e2"
                },
                {
                  label: "2.3.3-信贷逾期名单",
                  href: "e3"
                },
                {
                  label: "2.3.4-多平台申请信息",
                  href: "e4"
                },
                {
                  label: "2.3.5-多平台申请信息",
                  href: "e5"
                }
              ]
            }
          ]
        },
        {
          label: "客户画像",
          href: "f",
          children: [
            {
              label: "3.1-头像信息",
              href: "f1"
            },
            {
              label: "3.2-基本信息",
              href: "f2",
              children: [
                {
                  label: "3.2.1-基本信息",
                  href: "f21"
                },
                {
                  label: "3.2.2-家庭信息",
                  href: "f22"
                },
                {
                  label: "3.2.3-工作信息",
                  href: "f23"
                },
                {
                  label: "3.2.4-学历信息",
                  href: "f24"
                }
              ]
            },
            {
              label: "3.3-消费能力评估",
              href: "f3",
              children: [
                {
                  label: "3.3.1-消费探针",
                  href: "f31"
                },
                {
                  label: "3.3.2-话费消费详情",
                  href: "f32"
                },
                {
                  label: "3.3.3-多平台申请信息",
                  href: "f33"
                },
                {
                  label: "3.3.4-京东消费详情",
                  href: "f34"
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
  mounted() {
    this.drawLine();
    this.drawLine2();
    this.drawLine3();
  },
  methods: {
    //第一个仪表盘
    drawLine() {
      var option = {
        //鼠标悬浮提示
        tooltip: {
          show: true
        },
        series: [
          {
            type: "gauge",
            center: ["50%", "45%"], // 仪表位置
            radius: "90%", //仪表大小
            startAngle: 180, //开始角度
            endAngle: 0, //结束角度
            axisLine: {
              show: true,
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [
                  [
                    0.2,
                    new this.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      1,
                      0,
                      [
                        {
                          offset: 1,
                          color: "#E75F25" // 50% 处的颜色
                        },
                        {
                          offset: 0.8,
                          color: "#D9452C" // 40% 处的颜色
                        }
                      ],
                      false
                    )
                  ], // 100% 处的颜色
                  [
                    0.4,
                    new this.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      1,
                      0,
                      [
                        {
                          offset: 1,
                          color: "#FFC539" // 70% 处的颜色
                        },
                        {
                          offset: 0.8,
                          color: "#FE951E" // 66% 处的颜色
                        },
                        {
                          offset: 0,
                          color: "#E75F25" // 50% 处的颜色
                        }
                      ],
                      false
                    )
                  ],
                  [
                    0.6,
                    new this.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [
                        {
                          offset: 1,
                          color: "#C7DD6B" // 90% 处的颜色
                        },
                        {
                          offset: 0.8,
                          color: "#FEEC49" // 86% 处的颜色
                        },
                        {
                          offset: 0,
                          color: "#FFC539" // 70% 处的颜色
                        }
                      ],
                      false
                    )
                  ],
                  [
                    1,
                    new this.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [
                        {
                          offset: 0.2,
                          color: "#1CAD52" // 92% 处的颜色
                        },
                        {
                          offset: 0,
                          color: "#C7DD6B" // 90% 处的颜色
                        }
                      ],
                      false
                    )
                  ]
                ],
                width: 6 //外线条线宽
              }
            },
            //  外框显示大刻度
            splitLine: {
              show: false
            },
            //外框显示小刻度
            axisTick: {
              show: false
            },
            //外框显示大刻度值
            axisLabel: {
              show: false
            },
            pointer: {
              //指针样式
              length: "10%"
            },
            //  外框显示当前值
            detail: {
              show: false
            }
          },
          //  内框
          {
            type: "gauge",
            splitNumber: 5, //刻度数量
            center: ["50%", "45%"], // 默认全局居中
            radius: "75%",
            startAngle: 180,
            endAngle: 0,
            //  内框最小值和最大值
            min: 0,
            max: 1000,
            axisLine: {
              show: true,
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [
                  //表盘颜色
                  [0.2, "#DA462C"], //0-50%处的颜色
                  [0.4, "#FF9618"], //51%-70%处的颜色
                  [0.6, "#FFED44"], //70%-90%处的颜色
                  [0.8, "#20AE51"], //90%-100%处的颜色
                  [1, "#22A101"] //90%-100%处的颜色
                ],
                width: 12 //表盘宽度
              }
            },
            splitLine: {
              //分割线样式（及10、20等长线样式）
              length: 20,
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 2
              }
            },
            axisTick: {
              //刻度线样式（及短线样式）
              length: 5
            },
            axisLabel: {
              //文字样式（及“10”、“20”等文字样式）
              color: "black",
              distance: 10, //文字离表盘的距离
              fontSize: 16, //字母大小
              //转换内框的值为字母
              formatter: function(e) {
                switch (e + "") {
                  case "0":
                    return "";

                  case "200":
                    return "E";

                  case "400":
                    return "D";

                  case "600":
                    return "C";

                  case "800":
                    return "B";

                  case "1000":
                    return "A";

                  default:
                    return e;
                }
              }
            },

            pointer: {
              //指针样式
              width: 6,
              length: "80%"
            },
            detail: {
              //  分数格式化值
              formatter: "{score|{value}}",
              //  分数高度
              offsetCenter: [0, "25%"],
              height: 10,
              rich: {
                //分数
                score: {
                  color: "red", //分数颜色
                  fontFamily: "微软雅黑",
                  fontSize: 16
                }
              }
            },
            //  数据
            data: [
              {
                value: 86,
                label: {
                  textStyle: {
                    fontSize: 14
                  }
                }
              }
            ]
          }
        ]
      };

      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    //第二个仪表盘
    drawLine2() {
      var option = {
        //鼠标悬浮提示
        tooltip: {
          show: true
        },
        series: [
          {
            type: "gauge",
            center: ["50%", "45%"], // 仪表位置
            radius: "90%", //仪表大小
            startAngle: 180, //开始角度
            endAngle: 0, //结束角度
            axisLine: {
              show: true,
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [
                  [
                    0.2,
                    new this.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      1,
                      0,
                      [
                        {
                          offset: 1,
                          color: "#E75F25" // 50% 处的颜色
                        },
                        {
                          offset: 0.8,
                          color: "#D9452C" // 40% 处的颜色
                        }
                      ],
                      false
                    )
                  ], // 100% 处的颜色
                  [
                    0.4,
                    new this.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      1,
                      0,
                      [
                        {
                          offset: 1,
                          color: "#FFC539" // 70% 处的颜色
                        },
                        {
                          offset: 0.8,
                          color: "#FE951E" // 66% 处的颜色
                        },
                        {
                          offset: 0,
                          color: "#E75F25" // 50% 处的颜色
                        }
                      ],
                      false
                    )
                  ],
                  [
                    0.6,
                    new this.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [
                        {
                          offset: 1,
                          color: "#C7DD6B" // 90% 处的颜色
                        },
                        {
                          offset: 0.8,
                          color: "#FEEC49" // 86% 处的颜色
                        },
                        {
                          offset: 0,
                          color: "#FFC539" // 70% 处的颜色
                        }
                      ],
                      false
                    )
                  ],
                  [
                    1,
                    new this.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [
                        {
                          offset: 0.2,
                          color: "#1CAD52" // 92% 处的颜色
                        },
                        {
                          offset: 0,
                          color: "#C7DD6B" // 90% 处的颜色
                        }
                      ],
                      false
                    )
                  ]
                ],
                width: 6 //外线条线宽
              }
            },
            //  外框显示大刻度
            splitLine: {
              show: false
            },
            //外框显示小刻度
            axisTick: {
              show: false
            },
            //外框显示大刻度值
            axisLabel: {
              show: false
            },
            pointer: {
              //指针样式
              length: "10%" //指针长度，按照半圆半径的百分比
            },
            //  外框显示当前值
            detail: {
              show: false
            }
          },
          //  内框
          {
            type: "gauge",
            splitNumber: 5, //刻度数量
            center: ["50%", "45%"], // 默认全局居中
            radius: "75%",
            startAngle: 180,
            endAngle: 0,
            //  内框最小值和最大值
            min: 0,
            max: 1000,
            axisLine: {
              show: true,
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [
                  //表盘颜色
                  [0.2, "#DA462C"], //0-50%处的颜色
                  [0.4, "#FF9618"], //51%-70%处的颜色
                  [0.6, "#FFED44"], //70%-90%处的颜色
                  [0.8, "#20AE51"], //90%-100%处的颜色
                  [1, "#22A101"] //90%-100%处的颜色
                ],
                width: 12 //表盘宽度
              }
            },
            splitLine: {
              //分割线样式（及10、20等长线样式）
              length: 20,
              lineStyle: {
                // 属性lineStyle控制线条样式
                width: 2
              }
            },
            axisTick: {
              //刻度线样式（及短线样式）
              length: 5
            },
            axisLabel: {
              //文字样式（及“10”、“20”等文字样式）
              color: "black",
              distance: 8, //文字离表盘的距离
              fontSize: 12, //字母大小
              //转换内框的值为字母
              formatter: function(e) {
                switch (e + "") {
                  case "0":
                    return "";

                  case "200":
                    return "E";

                  case "400":
                    return "D";

                  case "600":
                    return "C";

                  case "800":
                    return "B";

                  case "1000":
                    return "A";

                  default:
                    return e;
                }
              }
            },

            pointer: {
              //指针样式
              width: 3, //指针宽度
              length: "90%" //指针长度，按照半圆半径的百分比
            },
            detail: {
              //  分数格式化值
              formatter: "{score|{value}}",
              //  分数高度
              offsetCenter: [0, "25%"],
              height: 10,
              rich: {
                //分数
                score: {
                  color: "red", //分数颜色
                  fontFamily: "微软雅黑",
                  fontSize: 16
                }
              }
            },
            //  数据
            data: [
              {
                value: 86,
                label: {
                  textStyle: {
                    fontSize: 12
                  }
                }
              }
            ]
          }
        ]
      };

      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart2"));

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    //第三个百分柱状图
    drawLine3() {
      //数据纯属虚构
      var data = [
        {
          name: "基本信息",
          value: 0.83
        },
        {
          name: "信用履约历史",
          value: 0.38
        },
        {
          name: "偿债能力评估",
          value: 0.46
        },
        {
          name: "经营状况评估",
          value: 0.363
        }
      ];

      //平均值界限，通过这个值来区分颜色
      var average = 0.3;

      data = data.sort(function(a, b) {
        return b.value - a.value;
      });

      //两个盒子
      var yData = [];
      var barData = [];

      //循环data中的值
      for (var i = 0; i < data.length; i++) {
        barData.push(data[i]);
        if (data[i].value < average) {
          yData.push(i + "," + data[i].name + "," + "lower");
        } else {
          yData.push(i + "," + data[i].name);
        }
      }

      var option = {
        //标题
        title: [
          {
            text: "",
            textStyle: {
              color: "#2D3E53",
              fontSize: 8
            },
            x: "center",
            top: 30
          }
        ],
        // 悬浮提示
        tooltip: {
          show: true,
          formatter: function(params) {
            var value = parseFloat(params.data["value"]) * 100;
            return params.name + "：" + value + "%";
          }
        },
        // 每一行间隔
        grid: {
          top: "1%",
          bottom: "10%",
          left: "4%",
          right: "1%",
          containLabel: true
        },
        // 显示x轴的线
        xAxis: {
          show: false
        },
        // 显示y轴的线以及样式
        yAxis: {
          type: "category",
          inverse: true,
          nameGap: 16,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#ddd"
            }
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: "#ddd"
            }
          },
          // y轴值样式
          axisLabel: {
            interval: 0,
            margin: 10,
            textStyle: {
              color: "#455A74",
              align: "right",
              fontSize: 12
            },
            rich: {
              //左边后列数字值样式
              a: {
                color: "#fff",
                backgroundColor: "red",
                width: 13,
                height: 13,
                fontSize: 8,
                align: "center",
                borderRadius: 20
              },
              //左边前列数字值样式
              b: {
                color: "#fff",
                backgroundColor: "#4197FD",
                width: 13,
                height: 13,
                fontSize: 8,
                align: "center",
                borderRadius: 20
              }
            },
            // 格式化
            formatter: function(params) {
              var paramsArr = params.split(",");
              var index = paramsArr[0];
              var name = paramsArr[1];
              if (paramsArr[2]) {
                return ["{a|" + (parseInt(index) + 1) + "}" + "  " + name].join(
                  "\n"
                );
              } else {
                return ["{b|" + (parseInt(index) + 1) + "}" + "  " + name].join(
                  "\n"
                );
              }
            }
          },
          data: yData
        },

        // 系列值
        series: [
          {
            name: "barSer",
            type: "bar",
            roam: false,
            visualMap: false,
            zlevel: 1,
            barMaxWidth: 6, //线条粗细
            barGap: 0,
            itemStyle: {
              normal: {
                color: function(params) {
                  var value = parseFloat(params.data["value"]);
                  // build a color map as your need.
                  var colorList = [
                    {
                      //红色线条
                      colorStops: [
                        {
                          offset: 0,
                          color: "#f69aaa" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#f36a5a" // 100% 处的颜色
                        }
                      ]
                    },
                    {
                      //蓝色线条
                      colorStops: [
                        {
                          offset: 0,
                          color: "#00C0FA" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#2F95FA" // 100% 处的颜色
                        }
                      ]
                    }
                  ];
                  //判断小于平均值选择不同的颜色
                  if (value < average) {
                    return colorList[0];
                  } else {
                    return colorList[1];
                  }
                },
                // 边角圆滑度
                barBorderRadius: 15
              }
            },
            data: barData,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#455A74",
                  fontSize: 10
                },
                position: "right",
                // 百分比的距离线条
                offset: [5, 0],
                formatter: function(params) {
                  var value = parseFloat(params.data["value"]) * 100;
                  return value + "%";
                }
              }
            }
          }
        ]
      };

      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart3"));

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
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
@import "../users/fengxiandetail.css";

.detail-left-wapper {
  background: #eee;
}
.detail-right-wapper {
  width: 16%;
  position: fixed;
  right: 76px;
  top: 20%;
  .flter-input {
    width: 190px !important;
    margin-bottom: 20px;
  }
}
.page-human {
  position: relative;
}
.el-card {
  width: 75%;
  .el-table tr,
  .el-table th {
    background: rgba(174, 228, 240, 0.822);
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