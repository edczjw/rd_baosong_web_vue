<template>
  <div class="page-human">
    <div class="li-title">
      <b>
        <router-link to="/fengxianpinggubaogao/fengxianlist">返回个人列表</router-link>
      / 用户详情</b>
    </div>
    <el-card class="detail-card">
      <div class="detail-left-wapper animated fadeInLeft" style="background: #ffffff;">
        <div class="tab-box1">
          <img src="../../assets/detailfengxianpinggu/bg_1.png" alt />
          <img src="../../assets/detailfengxianpinggu/bg_02.png" alt style="margin-top:-4px" />
        </div>

        <div id="a" class="box2">
          <div class="conlusion">
            <img src="../../assets/detailfengxianpinggu/conreport.png" alt />
          </div>
        </div>

        <div class="box3">
          <el-card class="box3-ec">
            <div class="box3-charts">
              <div class="vau">{{this.vau}}</div>
              <div class="core">信用分：{{this.core}}分</div>
              <div id="myChart" :style="{width: '360px', height: '540px'}"></div>
            </div>
            <div class="box3-right">
              <span>授信额度：</span>
              <b v-if="tabledatas7.creditLimit == null">0 元</b>
              <b v-else>{{tabledatas7.creditLimit}}元</b>
              <br />
              <br />
              <span>评分模型结论：</span>
              <span v-if="tabledatas7.scoreModelResult == 'PASS'" class="ji">审核通过</span>
              <span v-else class="ji">审核不通过</span>
            </div>

            <div class="box3-bd-rt">审核{{tabledatas7.proposalFixed}}</div>
          </el-card>
        </div>

        <div id="b" class="box4">
          <div class="box4-img">
            <img src="../../assets/detailfengxianpinggu/1.1.png" alt />
          </div>

          <el-card class="box4-ec">
            <div class="tit-pp">欺诈分：
              <span v-if="tabledatas7.cheatScore !=null">{{tabledatas7.cheatScore}}</span>
              <span v-else>0</span>
              分</div>

            <!-- 表格 -->
            <table class="jititable" border>
              <tr>
                <th>策略</th>
                <th>命中规则</th>
                <th>命中分值</th>
              </tr>
              <tr v-for="item in tabledatas7.ruleList">
                <td>
                  <span v-if="item.ruleName !=null">{{item.ruleName}}</span>
                  <span v-else>-</span>
                </td>
                <td>
                  <table class="jititables">
                    <tr v-for="(it,index) in item.ruleDetails">
                      <td
                        :class="[index == (item.ruleDetails.length-1)? 'dd':'',index%2 !=0? 'dsd':'']"
                      >
                      <span v-if="it !=null">{{it}}</span>
                      <span v-else>-</span>
                      </td>
                    </tr>
                  </table>
                </td>
                <td>
                  <span v-if="item.score !=null">{{item.score}}</span>
                  <span v-else>-</span>
                </td>
              </tr>
            </table>
          </el-card>
        </div>

        <div id="c" class="box5">
          <div class="box5-img">
            <img src="../../assets/detailfengxianpinggu/1.2.png" alt />
          </div>

          <el-card class="tit-pw">
            <div class="box5-io">评分模型结论</div>
            <div class="box5-lf">
              <div class="vau">{{this.vau}}</div>
              <div id="myChart2" :style="{width: '230px', height: '300px',margin:'0 auto'}"></div>
            </div>

            <div class="box5-rt">
              <div id="myChart3" :style="{width: '430px', height: '220px'}"></div>
            </div>
          </el-card>

          <el-card class="box5-ec2">
            <div class="tit-pp2">
              信用分：
              <span v-if="tabledatas7.sumScore !=null">{{tabledatas7.sumScore}}</span>
              <span v-else>0</span>
              分
            </div>

            <!-- 表格 -->
            <table class="jititable11" border>
              <tr>
                <th>属性类型</th>
                <th>评分项</th>
                <th>数据值</th>
              </tr>
              <tr>
                <td>基本信息</td>
                <td>
                  <table class="jititables">
                    <tr><td>年龄</td></tr>
                    <tr><td class="dsd">性别</td></tr>
                    <tr><td>学历</td></tr>
                    <tr><td class="dsd" style="border-bottom:none">婚姻状态</td></tr>
                  </table>
                </td>
                <td>
                  <table class="jititables">
                    <tr><td>
                      <span v-if="tabledatas7.age == null">-</span>
                      <span v-else>{{tabledatas7.age}}</span>
                    </td></tr>
                    <tr><td class="dsd">
                      <span v-if="tabledatas7.sex == null">-</span>
                      <span v-else>{{tabledatas7.sex}}</span>
                    </td></tr>
                    <tr><td>
                      <span v-if="tabledatas7.education == null">-</span>
                      <span v-else>{{tabledatas7.education}}</span>
                    </td></tr>
                    <tr><td class="dsd" style="border-bottom:none">
                      <span v-if="tabledatas7.maritalStatus == null">-</span>
                      <span v-else>{{tabledatas7.maritalStatus}}</span></td></tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td>收入状况</td>
                <td>
                  <table class="jititables">
                    <tr><td>收入区间</td></tr>
                    <tr><td class="dsd" style="border-bottom:none">社会身份</td></tr>
                  </table>
                </td>
                <td>
                  <table class="jititables">
                    <tr><td>
                      <span v-if="tabledatas7.incomeRange == null">-</span>
                      <span v-else>{{tabledatas7.incomeRange}}</span></td></tr>
                    <tr><td class="dsd" style="border-bottom:none">
                      <span v-if="tabledatas7.socialIdentity == null">-</span>
                      <span v-else>{{tabledatas7.socialIdentity}}</span></td></tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td>偿债能力评估</td>
                <td>
                  <table class="jititables">
                    <tr><td>手机消费档次</td></tr>
                    <tr><td class="dsd">三个月多头数</td></tr>
                    <tr><td style="border-bottom:none">金融标签指标（P2P）</td></tr>
                  </table>
                </td>
                <td>
                  <table class="jititables">
                    <tr><td>
                      <span v-if="tabledatas7.mobileConsumeLevel == null">-</span>
                      <span v-else>{{tabledatas7.mobileConsumeLevel}}</span></td></tr>
                    <tr><td class="dsd">
                      <span v-if="tabledatas7.threeMonthCount == null">-</span>
                      <span v-else>{{tabledatas7.threeMonthCount}}</span></td></tr>
                    <tr><td style="border-bottom:none">
                      <span v-if="tabledatas7.finIndicatorLabel == null">-</span>
                      <span v-else>{{tabledatas7.finIndicatorLabel}}</span></td></tr>
                  </table>
                </td>
              </tr>
              
              <tr>
                <td>稳定性评估</td>
                <td>
                  <table class="jititables">
                    <tr><td>工作地与家庭地址是否同市</td></tr>
                    <tr><td class="dsd">近1个月，出现的省份数量</td></tr>
                    <tr><td style="border-bottom:none">手机在网时长</td></tr>
                  </table>
                </td>
                <td>
                  <table class="jititables">
                    <tr><td>
                      <span v-if="tabledatas7.addressIsSame == null">-</span>
                      <span v-else>{{tabledatas7.addressIsSame}}</span></td></tr>
                    <tr><td class="dsd">
                      <span v-if="tabledatas7.lastMonthProvinceCount == null">-</span>
                      <span v-else>{{tabledatas7.lastMonthProvinceCount}}</span></td></tr>
                    <tr><td style="border-bottom:none">
                      <span v-if="tabledatas7.phoneOnlineTime == null">-</span>
                      <span v-else>{{tabledatas7.phoneOnlineTime}}</span></td></tr>
                  </table>
                </td>
              </tr>
            </table>
          </el-card>
        </div>

        <div id="d" class="box6">
          <div class="box6-img">
            <img src="../../assets/detailfengxianpinggu/1.3.png" alt />
          </div>

          <el-card id="d4" class="box6-ec4">
            <div class="box6tt">1.3.1<span>多名单申请信息</span></div>
            <!-- 表格 -->
            <table class="jititable" border>
              <tr>
                <th>检查项目</th>
                <th>总个数</th>
                <th>借款人手机详情</th>
                <th>借款人身份证详情</th>
              </tr>
              <tr v-for="item in tabledatas4.detail">
                <td>{{item.fieldName}}</td>
                <td v-if="item.list==''">-</td>
                <td v-if="item.list==''">-</td>
                <td v-if="item.list==''">-</td>
                <td v-else v-for="(it,index) in item.list">
                  <div v-if="it.count!=''" style="padding-top:15px;font-weight:bolder;">总个数：{{it.count}}</div>
                  <div v-else style="padding-top:15px;font-weight:bolder;">总个数：0</div>
                   <table class="jititables1">
                    <tr>
                      <table class="jititables1">
                      <tr v-for="its in it.list">
                        <td>{{its.industry_display_name}}：{{its.count}}</td>
                      </tr>
                      </table>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </el-card>
        </div>

        <div id="e" class="box7">
          <div class="box7-img">
            <img src="../../assets/detailfengxianpinggu/2.1.png" alt />
          </div>

          <el-card id="e1" class="box7-ec1">
            <div class="box6tt">2.1.1<span>身份信息</span></div>

            <div class="b7-ok">
              <div class="lt">
              <img src="../../assets/detailfengxianpinggu/lt.png" alt=""></div>
              <div class="lb">
              <img src="../../assets/detailfengxianpinggu/lb.png" alt=""></div>
              <div  class="rt">
              <img src="../../assets/detailfengxianpinggu/rt.png" alt=""></div>
              <div  class="rb">
              <img src="../../assets/detailfengxianpinggu/rb.png" alt=""></div>
              <div class="b7img">
                <div class="gm">
                  <span v-if="tabledatas6.idCardHeadPhoto == null">
                    <img src="../../assets/detailfengxianpinggu/realloading.gif" alt="loading" />
                  </span>
                  <span v-else>
                    <img :src="tabledatas6.idCardHeadPhoto" alt="身份证头像照片" />
                  </span>
                </div>
                <div class="gm">
                  <span v-if="tabledatas6.activePhoto == null">
                    <img src="../../assets/detailfengxianpinggu/realloading.gif" alt="loading" />
                  </span>
                  <span v-else>
                    <img :src="tabledatas6.activePhoto" alt="活体照片" />
                  </span>
                </div>
              </div>
              <ul>
                <li>身份证头像照片</li>
                <li>活体照片</li>
              </ul>
            </div>

            <div class="b7-chart">
              <div id="myChart4" :style="{width: '100%', height: '300px'}"></div>
            </div>
          </el-card>
        </div>

        <div id="f" class="box8">
          <div class="box8-img">
            <img src="../../assets/detailfengxianpinggu/2.2.png" alt />
          </div>

          <el-card class="box8-ec1">
            <!-- 表格 -->
            <table class="jititable" border>
              <tr></tr>
              <tr>
                <td class="bg-co">姓名</td>
                <td>
                  <span v-if="tabledatas5.name==null || tabledatas5.name==''">－</span>
                  <span v-else>{{tabledatas5.name}}</span>
                </td>
                <td class="bg-co">身份证号码</td>
                <td colspan="3">
                  <span v-if="tabledatas5.idCardNum==null || tabledatas5.idCardNum==''">－</span>
                  <span v-else>{{tabledatas5.idCardNum}}</span>
                </td>
              </tr>
              <tr>
                <td class="bg-co">年龄</td>
                <td>
                  <span v-if="tabledatas5.age==null || tabledatas5.age==''">－</span>
                  <span v-else>{{tabledatas5.age}}</span>
                </td>
                <td class="bg-co">性别</td>
                <td>
                  <span v-if="tabledatas5.sex==null || tabledatas5.sex==''">－</span>
                  <span v-else>{{tabledatas5.sex}}</span>
                </td>
                <td class="bg-co">民族</td>
                <td>
                  <span v-if="tabledatas5.nation==null || tabledatas5.nation==''">－</span>
                  <span v-else>{{tabledatas5.nation}}</span>
                </td>
              </tr>
              <tr>
                <td class="bg-co">生肖</td>
                <td>
                  <span v-if="tabledatas5.zodiac==null || tabledatas5.zodiac==''">－</span>
                  <span v-else>{{tabledatas5.zodiac}}</span>
                </td>
                <td class="bg-co">星座</td>
                <td>
                  <span v-if="tabledatas5.constellation==null || tabledatas5.constellation==''">－</span>
                  <span v-else>{{tabledatas5.constellation}}</span>
                </td>
                <td class="bg-co">婚姻状态</td>
                <td>
                  <span v-if="tabledatas5.maritalStatus==null || tabledatas5.maritalStatus==''">－</span>
                  <span v-else>{{tabledatas5.maritalStatus}}</span>
                </td>
              </tr>
              <tr>
                <td class="bg-co">电话号码</td>
                <td colspan="5" class="lf">
                  <span v-if="tabledatas5.mobile==null || tabledatas5.mobile==''">－</span>
                  <span v-else>{{tabledatas5.mobile}}</span>
                </td>
              </tr>
              <tr>
                <td class="bg-co">证件地址</td>
                <td colspan="5" class="lf">
                  <span v-if="tabledatas5.idCardAddress==null || tabledatas5.idCardAddress==''">－</span>
                  <span v-else>{{tabledatas5.idCardAddress}}</span>
                </td>
              </tr>
              <tr>
                <td class="bg-co">签发机构</td>
                <td colspan="5" class="lf">
                  <span v-if="tabledatas5.issuingAgency==null || tabledatas5.issuingAgency==''">－</span>
                  <span v-else>{{tabledatas5.issuingAgency}}</span>
                </td>
              </tr>
              <tr>
                <td class="bg-co">家庭地址</td>
                <td colspan="5" class="lf">
                  <span v-if="tabledatas5.address==null || tabledatas5.address==''">－</span>
                  <span v-else>{{tabledatas5.address}}</span>
                </td>
              </tr>
              <tr>
                <td class="bg-co">常驻城市</td>
                <td colspan="5" class="lf">
                  <span v-if="tabledatas5.residentCity==null || tabledatas5.residentCity==''">－</span>
                  <span v-else>{{tabledatas5.residentCity}}</span>
                </td>
              </tr>
              <tr>
                <td class="bg-co">直系联系人</td>
                <td colspan="5" class="lf">
                  <span v-if="tabledatas5.emergencyContactName1==null || tabledatas5.emergencyContactName1==''">－</span>
                  <span v-else>{{tabledatas5.emergencyContactName1}}({{tabledatas5.emergencyContactRela1}})</span>
                </td>
              </tr>
              <tr>
                <td class="bg-co">其他联系人</td>
                <td colspan="5" class="lf">
                  <span v-if="tabledatas5.emergencyContactName2==null || tabledatas5.emergencyContactName2==''">－</span>
                  <span v-else>{{tabledatas5.emergencyContactName2}}({{tabledatas5.emergencyContactRela2}})</span>
                  </td>
              </tr>
            </table>
          </el-card>
        </div>

        <div id="g" class="box9">
          <div class="box9-img">
            <img src="../../assets/detailfengxianpinggu/2.3.png" alt />
          </div>

          <el-card id="g1" class="box9-ec1">
            <div class="box6tt">2.3.1<span>消费信息</span></div>
            <!-- 表格 -->
            <table class="jititable gf" border>
              <tr v-for="item in tabledatas2.list1">
                <td style="width:220px" class="bg-co">
                  <span v-if="item.fieldName=='' || item.fieldName==null">-</span>
                  <span v-else>{{item.fieldName}}</span>
                </td>
                <td>
                  <span v-if="item.content=='' || item.content==null">-</span>
                  <span v-else>{{item.content}}</span>
                  </td>
              </tr>
            </table>
          </el-card>


          <el-card class="box9-ec2">
            <table class="jititable gf" border>
              <tr>
                <td  class="bg-co"></td>
                <td  class="bg-co">出行旅游类</td>
                <td  class="bg-co">教育培训类</td>
                <td  class="bg-co">金融及实物投资类</td>
                <td  class="bg-co">其他类</td>
                <td  class="bg-co">生活购物类</td>   
                <td  class="bg-co">娱乐服务类</td>   
              </tr>
              <tr v-for="item in tabledatas2.list2">
                <td class="bg-co">
                  <span v-if="item.fieldName=='' || item.fieldName==null">-</span>
                  <span v-else>{{item.fieldName}}</span>
                </td>
                <td v-for="items in item.list">
                  <span v-if="items=='' || items==null">－</span>
                  <span v-else>{{items}}</span>
                </td>
              </tr>
            </table>
          </el-card>

          <el-card class="box9-ec3">
            <table class="jititable gf" border>
              <tr>
                <td  class="bg-co">消费档次</td>
                <td colspan="4">
                  <span v-if="tabledatas.consumeGrade=='' || tabledatas.consumeGrade==null">-</span>
                  <span v-else>{{tabledatas.consumeGrade}}</span>
                  </td>
              </tr>
              <tr>
                <td  class="bg-co">综合消费活跃度</td>
                <td colspan="4">
                  <span v-if="tabledatas.consumeActive==null || tabledatas.consumeActive==''">-</span>
                  <span v-else>{{tabledatas.consumeActive}}</span>
                </td>
              </tr>
              <tr>
                <td  class="bg-co"></td>
                <td  class="bg-co">近1月</td>
                <td  class="bg-co">近3月</td>
                <td  class="bg-co">近6月</td>
                <td  class="bg-co">近12月</td>
              </tr>

              <tr v-for="item in tabledatas.list2">
                <td class="bg-co">
                  <span v-if="item.fieldName=='' || item.fieldName==null">-</span>
                  <span v-else>{{item.fieldName}}</span></td>
                <td v-for="items in item.content">
                  <span v-if="items==null || items==''">-</span>
                  <span v-else>{{items}}</span></td>
              </tr>
            </table>
          </el-card>
        </div>

        <div id="h" class="box10">
          <div class="box10-img">
            <img src="../../assets/detailfengxianpinggu/2.4.png" alt />
          </div>

          <el-card id="h1" class="box10-ec1">
            <div class="box6tt">2.4.1<span>收入信息</span></div>
            <!-- 表格 -->
            <table border class="jititable gf">
              <tr>
                <td class="bg-co">信用卡最高等级</td>
                <td colspan="4">
                  <span v-if="tabledatas.cardMaxLevel=='' ||tabledatas.cardMaxLevel==null ">－</span>
                  <span v-else>{{tabledatas.cardMaxLevel}}</span>
                </td>
                
               </tr>
              <tr> 
                <td class="bg-co" colspan="1">近12个月最近一笔交易距今天</td>
                <td colspan="4">
                  <span v-if="tabledatas.last12MonthTransDays=='' || tabledatas.last12MonthTransDays==null">－</span>
                  <span v-else>{{tabledatas.last12MonthTransDays}}</span>
                </td>
              </tr>
              <tr>
                <td  class="bg-hu"></td>
                <td  class="bg-hu">近1月</td>
                <td  class="bg-hu">近3月</td>
                <td  class="bg-hu">近6月</td>
                <td  class="bg-hu">近12月</td>
              </tr>
              <tr v-for="item in tabledatas.list1">
                <td class="bg-hu">
                  <span v-if="item.fieldName=='' || item.fieldName==null">－</span>
                  <span v-else>{{item.fieldName}}</span>
                </td>
                <td v-for="items in item.content">
                  <span v-if="items=='' || items==null">－</span>
                  <span v-else>{{items}}</span>
                </td>
              </tr>
            </table>
          </el-card>

          <el-card id="h1" class="box10-ec2">
            <!-- 表格 -->
            <table border class="jititable gf">
              <tr>
                <td class="bg-co"></td>
                <td class="bg-co">交易占比</td>
                <td class="bg-co">交易总金额</td>
              </tr>
              <tr v-for="item in tabledatas.list3">
                <td class="bg-hu">
                  <span v-if="item.fieldName=='' || item.fieldName==null">－</span>
                  <span v-else>{{item.fieldName}}</span>
                </td>
                <td v-for="items in item.content">
                  <span v-if="items=='' || items==null">－</span>
                  <span v-else>{{items}}</span>
                </td>
              </tr>
            </table>
          </el-card>
        </div>

        <div id="i" class="box11">
          <div class="box11-img">
            <img src="../../assets/detailfengxianpinggu/2.5.png" alt />
          </div>

          <el-card id="i1" class="box11-ec1">
            <div class="box6tt">2.5.1<span>履约历史</span></div>

            <!-- 表格 -->
            <table class="jititable gf" border>
              <tr v-for="item in tabledatas8">
                <td style="width:220px" class="bg-hu">
                  <span v-if="item.fieldName == null || item.fieldName==''">-</span>
                  <span v-else>{{item.fieldName}}</span>
                </td>
                <td>
                  <span v-if="item.value=='' || item.value==null">－</span>
                  <span v-else>{{item.value}}</span>
                  </td>
              </tr>
            </table>
          </el-card>
        </div>

        <div id="j" class="box12">
          <div class="box12-img">
            <img src="../../assets/detailfengxianpinggu/2.6.png" alt />
          </div>

          <el-card id="j1" class="box12-ec1">
            <div class="box6tt">2.6.1<span>通讯行为</span></div>
            <!-- 表格 -->
            <table class="jititable gf" border>
              <tr v-for="item in tabledatas3.detail">
                <td style="width:220px" class="bg-hu">{{item.fieldName}}</td>
                <td>
                  <span v-if="item.content=='' || item.content==null">－</span>
                  <span v-else>{{item.content}}</span>
                  </td>
              </tr>
            </table>
          </el-card>
        </div>

        <!-- <div id="k" class="box13">
          <div class="box13-img">
            <img src="../../assets/detailfengxianpinggu/2.7.png" alt />
          </div>

          <el-card class="box13-ec1"></el-card>
        </div> -->

        <div class="box14"></div>

      </div>
    </el-card>
    <div id="dtops">
      <div class="detail-right-wapper">
        <!-- <div class="sf">
          <ul>
            <li><span>姓名:</span>{{name}}</li>
            <li><span>身份证:</span>{{idNumber}}</li>
            <li><span>电话:</span>{{phone}}</li>
          </ul>
        </div>
        <el-input size="mini" class="flter-input" placeholder="输入关键字进行快捷查询" v-model="filterText"></el-input> -->

        <el-tree
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          @node-click="handleNodeClick"
          default-expand-all
          :filter-node-method="filterNode"
          ref="tree2"
        ></el-tree>

      </div></div>
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
      name:"",
      idNumber:"",
      phone:"",
      //收入信息以及消费能力
      tabledatas: {},

      //消费能力
      tabledatas2:{},

      //通讯行为信息
      tabledatas3:{},
      
      //多名单申请信息
      tabledatas4:{},

      //基本信息
      tabledatas5:{},
      
      //图像信息
      tabledatas6:{},
      
      //报告信息
      tabledatas7:{},

      //履约历史
      tabledatas8:{},
      data: [
        {
          label: "● 报告结论",
          href: "a"
        },
        {
          label: "● 1.1-欺诈评估",
          href: "b"
        },
        {
          label: "● 1.2-信用评估",
          href: "c"
        },
        {
          label: "● 1.3-风险提示信息",
          href: "d"
        },
        {
          label: "● 2.1-客户画像",
          href: "e"
        },
        {
          label: "● 2.2-基本信息",
          href: "f"
        },
        {
          label: "● 2.3-消费能力评估",
          href: "g"
        },
        {
          label: "● 2.4-收入能力评估",
          href: "h"
        },
        {
          label: "● 2.5-信用历史",
          href: "i"
        },
        {
          label: "● 2.6-社交行为",
          href: "j"
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },

      vau:'',//仪表盘值
      core:'',//信用分
    };
  },
  mounted() {
    //数据
    this.all();

    //仪表
    this.drawLine4();
    this.drawLine();
    this.drawLine2();
    this.drawLine3();
    window.addEventListener("scroll", function(e) {
      // 监听（绑定）滚轮滚动事件
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      if (t > 850) {
        document.getElementById("dtops").style.display = "block";
      } else {
        document.getElementById("dtops").style.display = "none";
      }
    })
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val);
    }
  },
  methods: {
    all(){
      this.name=this.$route.query.name
      this.idNumber=this.$route.query.idCard
      this.phone=this.$route.query.phone
      //收入
        var data1 = {
          name: this.$route.query.name,
          cid: this.$route.query.idCard
        };
      //消费
        var data2 = {
          name: this.$route.query.name,
          idNumber: this.$route.query.idCard,
          phone: this.$route.query.phone,
        };
      
      //基本信息
        var data3 = {
          name: this.$route.query.name,
          cid: this.$route.query.idCard,
          mobile: this.$route.query.phone,
        };
        
      
      //图像信息
        var data4 = {
          idcardName: this.$route.query.name,
          idcardNumber: this.$route.query.idCard,
          mobile: this.$route.query.phone,
        };
        this.getlist7(data2)//报告信息
        this.getlist5(data3)//基本信息
        this.getlist6(data4)//图像信息
        this.getlist4(data2)//多名单申请信息
        this.getlist3(data2)//通讯行为信息
        this.getlist8(data2)//履约历史
        this.getlist2(data2)//消费
        this.getlist1(data1)//收入
    },
    
    //履约历史
    getlist8(data){
        this.$axios({
          method: "post",
          url: this.$store.state.domain + "/risk/report/credit/history",
          data: data
        }).then(
          response => {
            var res = response.data;
            if(res.code == 0){
              this.tabledatas8 = res.detail;
            }else{
              this.tabledatas8 = res.detail
            }
          },
          error => {
            this.$message({
              message:'履约历史信息发生错误',
              type: "error"
            });
          }
        );
    },
    
    //报告信息
    getlist7(data){
        this.$axios({
          method: "post",
          url: this.$store.state.domain + "/risk/report/report/result",
          data: data
        }).then(
          response => {
            var res = response.data;
            if(res.code == 0){
              this.tabledatas7 = res.detail;
              this.core = res.detail.sumScore;
              console.log(parseInt(res.detail.sumScore))
              if(0 <=parseInt(res.detail.sumScore) && parseInt(res.detail.sumScore) < 500){
                this.vau = 'G'
              }else if(500<=parseInt(res.detail.sumScore)  && parseInt(res.detail.sumScore)<550){
                this.vau = 'F'
              }else if(550<=parseInt(res.detail.sumScore)  && parseInt(res.detail.sumScore)<600){
                this.vau = 'E'
              }else if(600<=parseInt(res.detail.sumScore)  && parseInt(res.detail.sumScore)<650){
                this.vau = 'D'
              }else if(650<=parseInt(res.detail.sumScore)  && parseInt(res.detail.sumScore)<700){
                this.vau = 'C'
              }else if(700<=parseInt(res.detail.sumScore)  && parseInt(res.detail.sumScore)<750){
                this.vau = 'B'
              }else if(750<=parseInt(res.detail.sumScore)  && parseInt(res.detail.sumScore)<1000){
                this.vau = 'A'
              }else{
                this.vau = "A"
              }
              //第一个仪表盘
              this.drawLine();
              this.drawLine2();

            }else{
              this.tabledatas7 = ''
            }
          },
          error => {
            this.$message({
              message:'报告信息发生错误',
              type: "error"
            });
          }
        );
    },
    
    //图像信息
    getlist6(data){
        this.$axios({
          method: "post",
          url: this.$store.state.domain + "/risk/report/head/portrait/info",
          data: data
        }).then(
          response => {
            var res = response.data;
            if(res.code == 0){
              this.tabledatas6 = res.detail;
              this.drawLine4();  //图像信息柱状图
            }else{
              this.tabledatas6 = ''
            }
          },
          error => {
            this.$message({
              message:'图像信息发生错误',
              type: "error"
            });
          }
        );
    },

    //基本信息
    getlist5(data){
        this.$axios({
          method: "post",
          url: this.$store.state.domain + "/risk/report/basic/info",
          data: data
        }).then(
          response => {
            var res = response.data;
            if(res.code == 0){
              this.tabledatas5 = res.detail;
            }else{
              this.tabledatas5 = ''
            }
          },
          error => {
            this.$message({
              message:'基本信息发生错误',
              type: "error"
            });
          }
        );
    },

    //多名单申请信息
    getlist4(data){
        this.$axios({
          method: "post",
          url: this.$store.state.domain + "/risk/report/reminder/plant/apply",
          data: data
        }).then(
          response => {
            var res = response.data;
            if(res.code == 0){
              this.tabledatas4 = res;
            }else{
              this.tabledatas4 = ''
            }
          },
          error => {
            this.$message({
              message:'多名单申请信息发生错误',
              type: "error"
            });
          }
        );
    },

    //获取通讯行为信息
    getlist3(data){
        this.$axios({
          method: "post",
          url: this.$store.state.domain + "/risk/report/communication/behavior",
          data: data
        }).then(
          response => {
            var res = response.data;
            if(res.code == 0){
              this.tabledatas3 = res;
            }else{
              this.tabledatas3 = res
            }
          },
          error => {
            this.$message({
              message:'通讯行为发生错误',
              type: "error"
            });
          }
        );
    },
    //获取消费信息
    getlist2(data){
        this.$axios({
          method: "post",
          url: this.$store.state.domain + "/risk/report/consume/ability/assess",
          data: data
        }).then(
          response => {
            var res = response.data;
              this.tabledatas2 = res;
          },
          error => {
            this.$message({
              message:'消费信息发生错误',
              type: "error"
            });
          }
        );
    },
    //收入信息以及消费信息表格数据接口
    getlist1(data){
        this.$axios({
          method: "post",
          url: this.$store.state.domain + "/risk/report/income/ability/assess",
          data: data
        }).then(
          response => {
            var res = response.data;
              this.tabledatas = res;
          },
          error => {
            this.$message({
              message:'收入信息及消费信息发生错误',
              type: "error"
            });
          }
        );
    },
    
    //图像信息柱状图
    drawLine4() {
      if(this.tabledatas6.identityVsCenter == '' || this.tabledatas6.activeVsCenter == null 
      || this.tabledatas6.identityVsActive ==null){
          var echartData = [0, 0, 0];
      }else{
        var identityVsCenter = parseFloat(this.tabledatas6.identityVsCenter)
        var activeVsCenter = parseFloat(this.tabledatas6.activeVsCenter)
        var identityVsActive = parseFloat(this.tabledatas6.identityVsActive)

        var echartData = [identityVsCenter, activeVsCenter, identityVsActive];
      }
      var option = {
        tooltip: {
              trigger: 'item',
              formatter: "{b}：{c}%",
          },
          grid: {
              top: '20%',
              left: '20%',
              right: '20%',
              bottom: '0',
              containLabel: true
          },
          xAxis: [{
              type: 'category',
              axisTick: {
                      alignWithLabel: true
              },
              axisLabel:{
                interval:0,  //x轴字间隔
                fontsize: '16',
              },
              data: ['身份证vs公安库','活体vs公安库','身份证vs活体'],
          }],
          yAxis: [{
              splitLine: {
                  show: true,
                  lineStyle:{
                      type:'dashed'
                  }
              },
             axisLine:{                 //坐标 轴线
                  show:false,             //是否显示坐标轴轴线
                  },
             axisLabel:{
                  formatter: function (value) {
                  return value.toFixed(2);
                 },
              },
              type: 'value',
              max:'100',//最大值
              min:'0',//最小值
          }],

          series: [{
              name: '人数统计',
              barMaxWidth: '35',
              type: 'bar',
              label: {
                  normal: {
                      show: true,
                      position: 'top'
                  }
              },
              itemStyle: {
                  normal: {
                      color: function(params) {
                          var colorList = [
                              '#0064fa','#ff7734',  '#00baf8'
                          ];
                          return colorList[params.dataIndex]
                      },
                      label: {
                          show: true,
                          position: 'top',
                          formatter: function(params) {
                              var total = 0;
                              var percent = 0;
                              percent = params.value;
                              return percent + '%';
                          },
                      }
                  }
              },
              data: echartData,
          }]
      };

      
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart4"));

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      
    },
    //仪表盘
    drawLine() {
      var bgColor = "#ffffff",
      highlight = '#03b7c9';
    
      var sumScore = parseInt(this.tabledatas7.sumScore);

      if(0<=sumScore && sumScore<500){
        sumScore = 333
      }else if(500<=sumScore  && sumScore<550){
        sumScore = sumScore-150
      }else if(550<=sumScore  && sumScore<600){
        sumScore = sumScore-200
      }else if(600<=sumScore  && sumScore<650){
        sumScore = sumScore-150
      }else if(650<=sumScore  && sumScore<700){
        sumScore = sumScore-100
      }else if(700<=sumScore  && sumScore<750){
        sumScore = sumScore-50
      }else if(750<=sumScore  && sumScore<1000){
        sumScore = sumScore-200
      }else if(sumScore>1000){
        sumScore = 1100
      }
      var option = {
          backgroundColor: bgColor,
          tooltip:{
              show:true,
              formatter: "分值：" + '{c}' + '分',
          },
          series: [
              {
                  name: '刻度',
                  type: 'gauge',
                  center: ['50%', '40%'], // 默认全局居中  
                  splitNumber:10, //刻度数量
                  min: 0,
                  max: 1000,
                  radius: '87%',
                  startAngle: 180,
                  endAngle: 0,
                  clockwise: true,
                  axisLine: {
                      show: true,
                      lineStyle: {
                          width: 1,
                          shadowBlur: 0,
                          color: [
                              [1, highlight]
                          ]
                      }
                  },
                  axisTick: {
                      show: true,
                      lineStyle: {
                          color: highlight,
                          width: 1
                      },
                      length: -2,
                      splitNumber: 5//分隔线
                  },
                  splitLine: {
                      show: true,
                      length: -5, 
                      lineStyle: {
                          color: highlight,//刻度颜色
                      }
                  },
                  axisLabel: {
                      distance: -18,//刻度距离
                      textStyle: {
                          color: highlight,
                          fontSize: "12",
                      },
                      
                          formatter: function(e) {
                          if(e<200 && e>0){
                              return ""
                          }else{
                          switch (e) {
                            case 0:
                              return "0";
                            case 200:
                              return "500";
                            case 300:
                              return "550";
                            case 400:
                              return "600";
                            case 500:
                              return "650";
                            case 600:
                              return "700";
                            case 700:
                              return "750";
                            case 800:
                              return "1000";
                            case 900:
                              return "";
                            case 1000:
                              return "1000+";
                            default:
                              return e;
                          }
                      }
                          
                      }
                  },
                  pointer: { //仪表盘指针
                    show: true,
                    width: '8%',
                    length: '88%',
                  },
                  detail: {
                      show: false,
                      offsetCenter: ['0', '56%'],
                      formatter: "分值：{value}分",
                      fontSize: 24,
                      fontWeight: 'bolder',
                      fontFamily: '黑体'
                  },
                  data: [{
                      name: "",
                      value: sumScore, //值
                      
                      label: {
                        textStyle: {
                          fontSize: 12
                        }
                      }
                  }]
              },
              //内框1
              {
                  name: '渐变标尺',
                  center: ['50%', '40%'], // 默认全局居中 
                  min: 0,
                  max: 10,
                  type: 'gauge',
                  radius: '79%',
                  splitNumber: 10, //刻度数量
                  startAngle: 180,
                  endAngle: 0,
                  axisLine: {
                      lineStyle: {
                          width: 18, //表盘宽度
                          shadowColor: 'rgba(0, 0, 0.6, 0.8)',
                          shadowBlur: 15,
                          color: [
                              [0.2, new this.$echarts.graphic.LinearGradient(
                                      0, 0, 1, 0, [{
                                              offset: 0,
                                              color: '#EE1111'
                                          },
                                          {
                                              offset: 1,
                                              color: '#E66B1A'
                                          }
                                      ]
                                  )],
                              [
                                  0.3, new this.$echarts.graphic.LinearGradient(
                                      0, 0, 1, 0, [{
                                              offset: 0,
                                              color: '#E6941A'
                                          },
                                          {
                                              offset: 1,
                                              color: '#EEC211'
                                          }
                                      ]
                                  )
                              ],
                              [
                                  0.4, new this.$echarts.graphic.LinearGradient(
                                      0, 0, 1, 0, [{
                                              offset: 0,
                                              color: '#C7F709'
                                          },
                                          {
                                              offset: 1,
                                              color: '#48DD22'
                                          }
                                      ]
                                  )
                              ],
                              [
                                  0.5, new this.$echarts.graphic.LinearGradient(
                                      0, 0, 1, 0, [{
                                              offset: 0,
                                              color: '#2BD591'
                                          },
                                          {
                                              offset: 1,
                                              color: '#2BD591'
                                          }
                                      ]
                                  )
                              ],
                              [
                                  0.6, new this.$echarts.graphic.LinearGradient(
                                      0, 0, 1, 0, [{
                                              offset: 0,
                                              color: '#1AE6BD'
                                          },
                                          {
                                              offset: 1,
                                              color: '#22DDDD'
                                          }
                                      ]
                                  )
                              ],
                              [
                                  0.7, new this.$echarts.graphic.LinearGradient(
                                      0, 0, 1, 0, [{
                                              offset: 0,
                                              color: '#09C7F7'
                                          },
                                          {
                                              offset: 1,
                                              color: '#1ABDE6'
                                          }
                                      ]
                                  )
                              ],
                              [
                                  0.8, new this.$echarts.graphic.LinearGradient(
                                      0, 0, 1, 0, [{
                                              offset: 0,
                                              color: '#09C7F7'
                                          },
                                          {
                                              offset: 1,
                                              color: '#1ABDE6'
                                          }
                                      ]
                                  )
                              ],
                              [
                                  1, new this.$echarts.graphic.LinearGradient(
                                      0, 0, 1, 0, [{
                                              offset: 0,
                                              color: '#2B91D5'
                                          },
                                          {
                                              offset: 1,
                                              color: '#2B91D5'
                                          }
                                      ]
                                  )
                              ]
                          ]
                      }
                  },
                  axisLabel: {
                    show: true,
                      //文字样式（及“10”、“20”等文字样式）
                    color: '#2B91D5',
                    fontFamily:'黑体',
                    fontWeight: 'bold',
                    distance: -5, //文字离表盘的距离
                    fontSize: 24, //字母大小
                      formatter: function(e) {
                          if(e<2){
                              return ""
                          }else{
                          switch (e) {
                            case 2:
                              return "G";
                            case 3:
                              return "F";
                            case 4:
                              return "E";
                            case 5:
                              return "D";
                            case 6:
                              return "C";
                            case 7:
                              return "B";
                            case 8:
                              return "A";
                            case 9:
                              return "";
                            case 10:
                              return "";
                            default:
                              return e;
                          }
                      }
                          
                      }
                  },
                  axisTick: {
                      show: false
                  },
                  splitLine: {
                      show: false
                  },
                  detail: {
                      show: false
                  },
                  pointer: {
                      show: false
                  }
              },
              {
                  name: '数值',
                  type: 'gauge',
                  startAngle: 180,
                  endAngle: 0,
                  radius: '44%',
                  center: ['50%', '40%'], // 默认全局居中  
                  min: 0,
                  max: 1000,
                  splitNumber: 0,
                  axisLine: { // 坐标轴线  
                      lineStyle: {
                          color: [
                              [1, highlight]
                          ], // 属性lineStyle控制线条样式  
                          width: '1%'
                      }
                  },

                  axisLabel: { // 坐标轴小标记  
                      show: false
                  },
                  splitLine: { // 分隔线  
                      lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
                          width: 0
                      }
                  },
                  pointer: { // 分隔线 指针  
                  show:false,
                      width: '55%',
                      length: '128%',
                  },
                  detail: {
                      show: false,
                  },
                  data: [{
                      name: "",
                      value: sumScore, //值
                      label: {
                        textStyle: {
                          fontSize: 12
                        }
                      }
                  }]
              },
              //饼图
              {
                  name: '遮罩',
                  tooltip:{
                      show:false
                  },
                  type: 'pie',
                  radius: '40%',
                  center: ['50%', '40%'], // 默认全局居中
                  hoverAnimation:false,
                  itemStyle:{
                      normal:{
                          color: bgColor
                      },
                      emphasis:{
                          color: bgColor
                      }
                  },
                  labelLine:{
                      normal:{
                          show:false
                      }
                  },
                  animation:false,
                  data: [{
                      value:750,
                      label: {
                        textStyle: {
                          fontSize: 14,
                          fontWeight: 'bolder',
                          fontFamily: '黑体'
                        }
                      }
                  }]
              }
          ]
      };

      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    
    //小的仪表盘
    drawLine2() {
      var bgColor = "#ffffff",
      highlight = '#03b7c9';
      
      var sumScore = parseInt(this.tabledatas7.sumScore);

      if(0<=sumScore && sumScore<500){
        sumScore = 333
        console.log(sumScore)
      }else if(500<=sumScore  && sumScore<550){
        sumScore = sumScore-150
        console.log(sumScore)
      }else if(550<=sumScore  && sumScore<600){
        sumScore = sumScore-200
        console.log(sumScore)
      }else if(600<=sumScore  && sumScore<650){
        sumScore = sumScore-150
        console.log(sumScore)
      }else if(650<=sumScore  && sumScore<700){
        sumScore = sumScore-100
        console.log(sumScore)
      }else if(700<=sumScore  && sumScore<750){
        sumScore = sumScore-50
        console.log(sumScore)
      }else if(750<=sumScore  && sumScore<1000){
        sumScore = sumScore-200
        console.log(sumScore)
      }else if(sumScore>1000){
        sumScore = 1100
        console.log(sumScore)
      }
      var option = {
          backgroundColor: bgColor,
          tooltip:{
              show:true,

              formatter: "分值：" + '{c}' + '分',
          },
          series: [
              {
                  name: '刻度',
                  type: 'gauge',
                  center: ['50%', '40%'], // 默认全局居中  
                  splitNumber: 10, //刻度数量
                  min: 0,
                  max: 1000,
                  radius: '81%',
                  startAngle: 180,
                  endAngle: 0,
                  clockwise: true,
                  axisLine: {
                      show: true,
                      lineStyle: {
                          width: 1,
                          shadowBlur: 0,
                          color: [
                              [1, highlight]
                          ]
                      }
                  },
                  axisTick: {
                      show: true,
                      lineStyle: {
                          color: highlight,
                          width: 1
                      },
                      length: -2,
                      splitNumber: 5//分隔线
                  },
                  splitLine: {
                      show: true,
                      length: -5, 
                      lineStyle: {
                          color: highlight,//刻度颜色
                      }
                  },
                  axisLabel: {
                      distance: -18,//刻度距离
                      textStyle: {
                          color: highlight,
                          fontSize: "8",
                      },
                      
                          formatter: function(e) {
                          if(e<200 && e>0){
                              return ""
                          }else{
                          switch (e) {
                            case 0:
                              return "0";
                            case 200:
                              return "500";
                            case 300:
                              return "550";
                            case 400:
                              return "600";
                            case 500:
                              return "650";
                            case 600:
                              return "700";
                            case 700:
                              return "750";
                            case 800:
                              return "1000";
                            case 900:
                              return "";
                            case 1000:
                              return "1000+";
                            default:
                              return e;
                          }
                      }
                          
                      }
                  },
                  pointer: {  //仪表盘指针
                    show: true,
                    width: '8%',
                    length: '88%',
                  },
                  detail: {
                      show: false,
                      offsetCenter: ['0', '56%'],
                      formatter: "分值：{value}分",
                      fontSize: 18,
                      fontFamily: '黑体',
                  },
                  data: [{
                      name: "",
                      value: sumScore, //值
                      
                      label: {
                        textStyle: {
                          fontSize:8
                        }
                      }
                  }]
              },
              //内框1
              {
                  name: '渐变标尺',
                  center: ['50%', '40%'], // 默认全局居中 
                  min: 0,
                  max: 10,
                  type: 'gauge',
                  radius: '76%',
                  splitNumber: 10, //刻度数量
                  startAngle: 180,
                  endAngle: 0,
                  axisLine: {
                      lineStyle: {
                          width: 12, //表盘宽度
                          shadowColor: 'rgba(0, 0, 0.6, 0.8)',
                          shadowBlur: 15,
                          color: [
                              [0.2, new this.$echarts.graphic.LinearGradient(
                                      0, 0, 1, 0, [{
                                              offset: 0,
                                              color: '#EE1111'
                                          },
                                          {
                                              offset: 1,
                                              color: '#E66B1A'
                                          }
                                      ]
                                  )],
                              [
                                  0.3, new this.$echarts.graphic.LinearGradient(
                                      0, 0, 1, 0, [{
                                              offset: 0,
                                              color: '#E6941A'
                                          },
                                          {
                                              offset: 1,
                                              color: '#EEC211'
                                          }
                                      ]
                                  )
                              ],
                              [
                                  0.4, new this.$echarts.graphic.LinearGradient(
                                      0, 0, 1, 0, [{
                                              offset: 0,
                                              color: '#C7F709'
                                          },
                                          {
                                              offset: 1,
                                              color: '#48DD22'
                                          }
                                      ]
                                  )
                              ],
                              [
                                  0.5, new this.$echarts.graphic.LinearGradient(
                                      0, 0, 1, 0, [{
                                              offset: 0,
                                              color: '#2BD591'
                                          },
                                          {
                                              offset: 1,
                                              color: '#2BD591'
                                          }
                                      ]
                                  )
                              ],
                              [
                                  0.6, new this.$echarts.graphic.LinearGradient(
                                      0, 0, 1, 0, [{
                                              offset: 0,
                                              color: '#1AE6BD'
                                          },
                                          {
                                              offset: 1,
                                              color: '#22DDDD'
                                          }
                                      ]
                                  )
                              ],
                              [
                                  0.7, new this.$echarts.graphic.LinearGradient(
                                      0, 0, 1, 0, [{
                                              offset: 0,
                                              color: '#09C7F7'
                                          },
                                          {
                                              offset: 1,
                                              color: '#1ABDE6'
                                          }
                                      ]
                                  )
                              ],
                              [
                                  0.8, new this.$echarts.graphic.LinearGradient(
                                      0, 0, 1, 0, [{
                                              offset: 0,
                                              color: '#09C7F7'
                                          },
                                          {
                                              offset: 1,
                                              color: '#1ABDE6'
                                          }
                                      ]
                                  )
                              ],
                              [
                                  1, new this.$echarts.graphic.LinearGradient(
                                      0, 0, 1, 0, [{
                                              offset: 0,
                                              color: '#2B91D5'
                                          },
                                          {
                                              offset: 1,
                                              color: '#2B91D5'
                                          }
                                      ]
                                  )
                              ]
                          ]
                      }
                  },
                  axisLabel: {
                    show: true,
                      //文字样式（及“10”、“20”等文字样式）
                    color: '#2B91D5',
                    fontFamily:'黑体',
                    fontWeight: 'bold',
                    distance: -10, //文字离表盘的距离
                    fontSize: 12, //字母大小
                      formatter: function(e) {
                          if(e<2){
                              return ""
                          }else{
                          switch (e) {
                            case 2:
                              return "G";
                            case 3:
                              return "F";
                            case 4:
                              return "E";
                            case 5:
                              return "D";
                            case 6:
                              return "C";
                            case 7:
                              return "B";
                            case 8:
                              return "A";
                            case 9:
                              return "";
                            case 10:
                              return "";
                            default:
                              return e;
                          }
                      }
                          
                      }
                  },
                  axisTick: {
                      show: false
                  },
                  splitLine: {
                      show: false
                  },
                  detail: {
                      show: false
                  },
                  pointer: {
                      show: false
                  }
              },
              {
                  name: '数值',
                  type: 'gauge',
                  startAngle: 180,
                  endAngle: 0,
                  radius: '34%',
                  center: ['50%', '40%'], // 默认全局居中  
                  min: 0,
                  max: 1000,
                  splitNumber: 0,
                  axisLine: { // 坐标轴线  
                      lineStyle: {
                          color: [
                              [1, highlight]
                          ], // 属性lineStyle控制线条样式  
                          width: '1%'
                      }
                  },

                  axisLabel: { // 坐标轴小标记  
                      show: false
                  },
                  splitLine: { // 分隔线  
                      lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
                          width: 0
                      }
                  },
                  pointer: { 
                    // 分隔线 指针 
                      show: false, 
                      // width: '55%',
                      // length: '128%',
                  },
                  detail: {
                      show: false,
                  },
                  data: [{
                      name: "",
                      value: sumScore, //值
                      
                      label: {
                        textStyle: {
                          fontSize: 8
                        }
                      }
                  }]
              },
              //饼图
              {
                  name: '遮罩',
                  tooltip:{
                      show:false
                  },
                  type: 'pie',
                  radius: '29%',
                  center: ['50%', '40%'], // 默认全局居中
                  hoverAnimation:false,
                  itemStyle:{
                      normal:{
                          color: bgColor
                      },
                      emphasis:{
                          color: bgColor
                      }
                  },
                  labelLine:{
                      normal:{
                          show:false
                      }
                  },
                  animation:false,
                  data: [{
                      value:this.tabledatas7.sumScore,
                      label: {
                        textStyle: {
                          fontSize: 8,
                          fontWeight: 'bolder',
                          fontFamily: '黑体'
                        }
                      }
                  }]
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
        var myColor = ['#2670f3']
        var colord = ['#f1f4ff']
        var dataLine = [50, 66, 33, 25]
        let positionLeft = 0.1,
            max = 100 + 2*positionLeft
        var option = {
            tooltip: {
              formatter: "占比：" + '{c}%',
            },
            backgroundColor: '#ffffff',
            grid: [
                {
                left: '4%',
                top: '12%',
                right: '13%',
                bottom: '6%',
                containLabel: true
            },
            {
                left: '5%',
                top: '12%',
                right: '13%',
                bottom: '6%',
                containLabel: true
            }
                ],
            xAxis: [{
                max:max,
                show: false
            }],
            yAxis: [{
                axisTick: 'none',
                axisLine: 'none',
                offset: '5',
                axisLabel: {
                    textStyle: {
                        color: '#5E5E5E',
                        fontSize: '16',
                        opacity: 0.6
                    }
                },
                data: ['基本信息评估', '信用履约历史', '偿债能力评估', '经营状况评估']
            }, {
                axisTick: 'none',
                axisLine: 'none',
                show: false,
                axisLabel: {
                    textStyle: {
                        color: '#5E5E5E',
                        fontSize: '16'
                    }
                },
                data: [1, 1, 1, 1]
            }, {

                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: []
            }],
            series: [
                
                { //间距
                    type: 'bar',
                    barWidth: 12,
                    stack: 'b',
                    legendHoverLink: false,
                    data: [positionLeft,positionLeft,positionLeft,positionLeft]
                },{
                name: '条',
                type: 'bar',
                stack: 'b',
                yAxisIndex: 0,
                data: dataLine,
                label: {
                    normal: {
                        show: false,
                        position: 'right',
                        distance: 10,
                        formatter: function(param) {
                            return (param.value).toFixed(2) + '%'
                        },
                        textStyle: {
                            color: '#000000',
                            fontSize: '12'
                        }
                    }
                },
                barWidth: 12,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var num = myColor.length
                            return myColor[params.dataIndex % num]
                        }
                    }
                },
                z: 2
            }, {
                name: '白框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [99.9, 99.9, 99.9, 99.9],
                barWidth: 14,
                itemStyle: {
                    normal: {
                        color: colord,
                        barBorderRadius: 2
                    }
                },
                z: 1
            },
            {
                name: '外框',
                type: 'bar',
                yAxisIndex: 2,
                barGap: '-100%',
                data: [100, 100, 100, 100],
                barWidth: 12,

                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        distance: 10,
                        formatter: function(data) {
                            return dataLine[data.dataIndex].toFixed(2) +"%";
                        },
                        textStyle: {
                            color: '#000000',
                            fontSize: '18'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var num = colord.length
                            return colord[params.dataIndex % num]
                        },
                        barBorderRadius: 0,
                    }
                },
                z: 0
            },
            
            ]
        }

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
      $("body,html").animate({ scrollTop: idhight + 60 }, 1100);
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
  width: 165px;
  position: fixed;
  z-index: 999;
  transition: all 1.5s;
  right: 2px;
  top: 138px;
  text-align: left;
  .flter-input {
    width: 120px !important;
    margin: 0px auto 20px;
  }
}
.page-human {
  position: relative;
}
.el-card {
  width: 100%;
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