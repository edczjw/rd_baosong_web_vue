<template>
<div>
        <el-form style="width:92%;float:right" :model="ruleForm" ref="ruleForm" size="mini" label-width="10px">
           <el-tag type="warning" class="tag">合同基本信息</el-tag>
        <div class="contt">
           <el-row>
            <el-col :span="8" >
                <el-form-item label="渠道代码：" prop="channelCode" 
                :rules="rules">
                    <el-select v-model.trim="ruleForm.channelCode" placeholder="渠道代码" size="mini" clearable>
                        <el-option v-for="item in channellist"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                     </el-form-item>
                </el-col>

            <el-col :span="8">
                <el-form-item label="合同号：" prop="contractNumber"
                :rules="rules">
                    <el-input v-model.trim="ruleForm.contractNumber" clearable></el-input>
                </el-form-item>
                </el-col>

                
            <el-col :span="8">
                <el-form-item label="合同名称：" prop="contractName"
                :rules="rules">
                    <el-input v-model.trim="ruleForm.contractName" placeholder='没有则使用合同编号' clearable></el-input>
                </el-form-item>
                </el-col>

            <el-col :span="8" v-if="false">
                <el-form-item label="渠道名称：" prop="channelName"
                :rules="rules">
                    <el-input v-model.trim="ruleForm.channelName" clearable ></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8" v-if="false">
                 <el-form-item label="产品代码：" prop="productCode"
                 :rules="rules">
                    <el-input v-model.trim="ruleForm.productCode" clearable ></el-input>
                </el-form-item>
                </el-col>
           </el-row>

           <el-row>
            <el-col :span="8" v-if="false">
                <el-form-item label="产品名称：" prop="productName"
                :rules="rules">
                    <el-input v-model.trim="ruleForm.productName" clearable></el-input>
                </el-form-item>
            </el-col>

            
           </el-row>

            <el-row>
                 <el-col :span="8">
                 <el-form-item label="借款人类型：" prop="borrowerType" >
                     <el-radio-group v-model.trim="ruleForm.borrowerType" @change="Select">
                    <el-radio border label="1">企业</el-radio>
                    <el-radio border label="2">自然人</el-radio>
                    </el-radio-group>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item label="放款金额(元)：" class="lab-width" prop="money"
                :rules="rules">
                    <el-input v-model.trim="ruleForm.money" clearable placeholder="输入数字"></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item label="贷款期限类型：" prop="termType" :rules="rules">
                    <el-select v-model.trim="ruleForm.termType" placeholder="请选择">
                        <el-option
                        v-for="item in termoptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
            </el-row>

            <el-row>
            <el-col :span="8">
                <el-form-item label="贷款期限：" prop="term"
                :rules="rules">
                    <el-input v-model.trim="ruleForm.term" clearable></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item label="利率类型：" prop="rateType" :rules="rules">
                    <el-select v-model.trim="ruleForm.rateType" placeholder="请选择">
                        <el-option
                        v-for="item in termoptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item label="利率(%)：" prop="rate"
                :rules="rules">
                    <el-input v-model.trim="ruleForm.rate" clearable placeholder="输入数字"></el-input>
                </el-form-item>
                </el-col>
            </el-row>

            <el-row>
            <el-col :span="8">
                 <el-form-item label="年化利率(%)：" prop="annualRate"
                 :rules="rules">
                    <el-input v-model.trim="ruleForm.annualRate" clearable placeholder="输入数字"></el-input>
                </el-form-item>
                </el-col>
            
            <el-col :span="8">
                <el-form-item label="是否受托支付：" prop="isEntrust">
                     <el-radio-group v-model.trim="ruleForm.isEntrust">
                    <el-radio border label="1">是</el-radio>
                    <el-radio border label="0">否</el-radio>
                     </el-radio-group>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="贷款用途：" prop="purpose" :rules="rules">
                    <el-select v-model.trim="ruleForm.purpose" placeholder="请选择">
                        <el-option
                        v-for="item in loanpurpose"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
            </el-row>

            <el-row>
            <el-col :span="8">
                <el-form-item label="投向行业：" prop="business" :rules="rules">
                    <el-select v-model.trim="ruleForm.business" placeholder="请选择">
                        <el-option
                        v-for="item in businessto"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                 <el-form-item label="贷款方式：" prop="loanMethod" >
                    <el-select v-model.trim="ruleForm.loanMethod" multiple placeholder="请选择" @change="LoanMethodShow" @remove-tag="changetag">
                        <el-option
                        v-for="item in loanmethods"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item label="还款方式：" prop="repayMethod" :rules="rules">
                    <el-select v-model.trim="ruleForm.repayMethod" placeholder="请选择">
                        <el-option
                        v-for="item in repaymethod"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
            </el-row>

            <el-row>
            <el-col :span="8">
                <el-form-item label="还款来源：" prop="repaySource"
                :rules="rules">
                    <el-input v-model.trim="ruleForm.repaySource" clearable></el-input>
                </el-form-item>
                </el-col>
                <el-col :span="8">
                 <el-form-item label="开始日期：" prop="startDate" :rules="rules">
                    <el-date-picker v-model.trim="ruleForm.startDate" value-format="yyyy-MM-dd" 
                    type="date" placeholder="贷款开始日期" >
                    </el-date-picker>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item label="截止日期：" prop="endDate" :rules="rules">
                    <el-date-picker v-model.trim="ruleForm.endDate" value-format="yyyy-MM-dd" 
                    type="date" placeholder="贷款截止日期" >
                    </el-date-picker>
                </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="8">
                <el-form-item label="签订时间：" prop="signTime" :rules="rules">
                    <el-date-picker v-model.trim="ruleForm.signTime" value-format="yyyy-MM-dd HH:mm:ss" 
                    type="datetime" placeholder="合同签订时间" >
                    </el-date-picker>
                </el-form-item>
            </el-col>

            <el-col :span="8">
                <el-form-item label="查询编号：" prop="reqNo"
                :rules="rules">
                    <el-input v-model.trim="ruleForm.reqNo" placeholder="合同号" clearable size="mini"></el-input>
                </el-form-item>
                </el-col>

                 <el-col :span="8">
                <el-form-item label="数据类型：" prop="dataType" 
                :rules="rules">
                    <el-input v-model.trim="ruleForm.dataType" disabled clearable size="mini"></el-input>
                </el-form-item>
                </el-col>
            </el-row>

            <el-row>
                 <el-col :span="8">
                <el-form-item label="区域代码(区/县)：" prop="districtCode" 
                :rules="rules">
                 <el-cascader
                    placeholder="可输入进行检索"
                    expand-trigger="hover"
                    :options="options"
                    :show-all-levels="false"
                    v-model.trim="list"
                    filterable
                    change-on-select
                    @change="handleChange">
                  </el-cascader>

                    <!-- <el-input v-model.trim="ruleForm.districtCode" clearable size="mini"></el-input> -->
                </el-form-item>
                </el-col>
            </el-row>
        </div>


<!-- ================================================================================ -->

        <el-tag type="warning" class="tag">还款计划集合</el-tag>
        <el-button plain type="success" @click="addrepayplan" size="mini">新增</el-button>
        <div class="contt" >
           <el-row>
            <el-col :span="8">
                <el-form-item 
                v-for="(repayPlans, index) in ruleForm.repayPlans"
                :label="'还款日期'+(index+1)+'：'" 
                :key="repayPlans.key"
                :prop="'repayPlans.' + index + '.endDate'"
                :rules="rules">

                     <el-date-picker v-model.trim="repayPlans.endDate" value-format="yyyy-MM-dd" 
                    type="date" placeholder="还款日期" >
                    </el-date-picker>

                </el-form-item>
                </el-col>

            <el-col :span="8">
                <el-form-item 
                v-for="(repayPlans, index) in ruleForm.repayPlans"
                :label="'还款本金(元)'+(index+1)+'：'" 
                :key="repayPlans.key"
                :prop="'repayPlans.' + index + '.money'"
                :rules="rules">
                    <el-input placeholder="输入数字" v-model.trim="repayPlans.money" clearable></el-input>
                </el-form-item>
                </el-col>

            <el-col :span="8">
                <el-form-item 
                v-for="(repayPlans, index) in ruleForm.repayPlans"
                :label="'还款利息(元)'+(index+1)+'：'" 
                :key="repayPlans.key"
                :prop="'repayPlans.' + index + '.interest'"
                :rules="rules">
                    <el-input placeholder="输入数字" v-model.trim="repayPlans.interest" clearable></el-input>
                    <el-button plain type="danger" size="mini" @click.prevent="removerepayplan(repayPlans)">删除</el-button>
                </el-form-item>
                
                </el-col>
             </el-row>
        </div>
<!-- ================================================================================ -->
        <div v-if='self'>
        <el-tag type="warning" class="tag">个人借款人</el-tag>
        <div class="contt" >
           <el-row>
            <el-col :span="8">
                <el-form-item label="姓名：" prop="personBorrower.name"
                :rules="rules">
                    <el-input v-model.trim="ruleForm.personBorrower.name" clearable></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item label="性别：" prop="ruleForm.personBorrower.sex">
                     <el-radio-group v-model.trim="ruleForm.personBorrower.sex">
                    <el-radio border label="1">男</el-radio>
                    <el-radio border label="2">女</el-radio>
                     </el-radio-group>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                 <el-form-item label="证件类型：" prop="personBorrower.cardType"
                 :rules="rules">
                    <el-select v-model.trim="ruleForm.personBorrower.cardType" placeholder="请选择">
                        <el-option
                        v-for="item in cardtypes"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                </el-col>

            <el-col :span="8">
                <el-form-item label="证件号码：" prop="personBorrower.cardNumber"
                :rules="rules">
                    <el-input v-model.trim="ruleForm.personBorrower.cardNumber" clearable></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item label="联系电话：" prop="personBorrower.phone"
                :rules="rules">
                    <el-input v-model.trim="ruleForm.personBorrower.phone" clearable></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item label="是农牧民：" prop="personBorrower.isFarmer"
                :rules="rules">
                    <el-radio-group v-model.trim="ruleForm.personBorrower.isFarmer">
                    <el-radio border label="1">是</el-radio>
                    <el-radio border label="0">否</el-radio>
                     </el-radio-group>
                </el-form-item>
                </el-col>
             </el-row>
        </div>
        </div>
<!-- =============================================================================== -->
        <div v-if='company'>
        <el-tag type="warning" class="tag">企业借款人</el-tag>
        <div class="contt" >
           <el-row>
            <el-col :span="8">
                <el-form-item label="企业名称：" prop="enterpriseBorrower.name"
                :rules="rules">
                    <el-input v-model.trim="ruleForm.enterpriseBorrower.name" clearable></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item label="企业规模：" prop="enterpriseBorrower.scale"
                :rules="rules">
                    <el-select v-model.trim="ruleForm.enterpriseBorrower.scale" placeholder="请选择">
                        <el-option
                        v-for="item in scalelist"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                 <el-form-item label="产业类型：" prop="enterpriseBorrower.industryType"
                 :rules="rules">
                    <el-select v-model.trim="ruleForm.enterpriseBorrower.industryType" placeholder="请选择">
                        <el-option
                        v-for="item in industrylist"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item label="所属行业：" prop="enterpriseBorrower.industryInvolved"
                :rules="rules">
                    <el-select v-model.trim="ruleForm.enterpriseBorrower.industryInvolved" placeholder="请选择">
                        <el-option
                        v-for="item in businessto"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item label="营业执照号码：" prop="enterpriseBorrower.licenseCode"
                :rules="rules">
                    <el-input v-model.trim="ruleForm.enterpriseBorrower.licenseCode" clearable></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item label="截止日期：" prop="enterpriseBorrower.licenseEndDate" :rules="rules">
                    <el-date-picker v-model.trim="ruleForm.enterpriseBorrower.licenseEndDate" value-format="yyyy-MM-dd" 
                    type="date" placeholder="营业执照截止日期" >
                    </el-date-picker>
                </el-form-item>
                </el-col>
             </el-row>
        </div>
        </div>

<!-- ============================================================================ -->
        <div v-if="zhiyashow">
        <el-tag type="warning" class="tag">质押集合</el-tag>
        <el-button plain type="success" @click="addzhiya" size="mini">新增</el-button>
        <div class="contt">
           <el-row>
            <el-col :span="8">
                <el-form-item 
                v-for="(pledgeInfos, index) in ruleForm.pledgeInfos"
                :label="'质押物类型'+(index+1)+'：'" 
                :key="pledgeInfos.key"
                :prop="'pledgeInfos.'+ index + '.pledgeType'"
                :rules="rules">
                    <el-select v-model.trim="pledgeInfos.pledgeType" placeholder="请选择">
                        <el-option
                        v-for="item in pledgelist"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item 
                v-for="(pledgeInfos, index) in ruleForm.pledgeInfos"
                :label="'质押物名称'+(index+1)+'：'" 
                :key="pledgeInfos.key"
                :prop="'pledgeInfos.' + index + '.name'"
                :rules="rules">
                    <el-input v-model.trim="pledgeInfos.name" clearable></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                 <el-form-item 
                 v-for="(pledgeInfos, index) in ruleForm.pledgeInfos"
                 :label="'评估价值(元)'+(index+1)+'：'" 
                 :key="pledgeInfos.key"
                 :prop="'pledgeInfos.'+ index + '.worth'"
                 :rules="rules">
                    <el-input placeholder="输入数字" v-model.trim="pledgeInfos.worth" clearable></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item 
                v-for="(pledgeInfos, index) in ruleForm.pledgeInfos"
                 :label="'质押物放置位置'+(index+1)+'：'" 
                 :key="pledgeInfos.key"
                 :prop="'pledgeInfos.'+ index + '.address'"
                :rules="rules">
                    <el-input v-model.trim="pledgeInfos.address" clearable></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item 
                v-for="(pledgeInfos, index) in ruleForm.pledgeInfos"
                 :label="'数量与单位'+(index+1)+'：'" 
                 :key="pledgeInfos.key"
                 :prop="'pledgeInfos.'+ index + '.unit'"
                :rules="rules">
                    <el-input v-model.trim="pledgeInfos.unit" clearable></el-input>
                    <el-button plain type="danger" size="mini" @click.prevent="removezhiya(pledgeInfos)">删除</el-button>
               
                </el-form-item>
                </el-col>
             </el-row>
            </div>
        </div>

<!-- ===================================================================================== -->
        <div v-if="diyashow">
        <el-tag type="warning" class="tag">抵押集合</el-tag>
        <el-button plain type="success" @click="adddiya" size="mini">新增</el-button>
        
        <div class="contt">
           <el-row >
            <el-col :span="8">
                <el-form-item 
                 v-for="(mortgageInfos, index) in ruleForm.mortgageInfos"
                :label="'抵押物类型'+(index+1)+'：'" 
                :key="mortgageInfos.key"
                :prop="'mortgageInfos.'+ index + '.mortgageType'"
                :rules="rules">
                    <el-select v-model.trim="mortgageInfos.mortgageType" placeholder="请选择">
                        <el-option
                        v-for="item in mortgagelist"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item 
                v-for="(mortgageInfos, index) in ruleForm.mortgageInfos"
                :label="'抵押物名称'+(index+1)+'：'" 
                :key="mortgageInfos.key"
                :prop="'mortgageInfos.'+ index + '.name'"
                :rules="rules">
                    <el-input v-model.trim="mortgageInfos.name" clearable></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                 <el-form-item 
                 v-for="(mortgageInfos, index) in ruleForm.mortgageInfos"
                :label="'评估价值(元)'+(index+1)+'：'" 
                :key="mortgageInfos.key"
                :prop="'mortgageInfos.'+ index + '.worth'"
                 :rules="rules">
                    <el-input placeholder="输入数字" v-model.trim="mortgageInfos.worth" clearable></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item 
                v-for="(mortgageInfos, index) in ruleForm.mortgageInfos"
                :label="'抵押物放置位置'+(index+1)+'：'" 
                :key="mortgageInfos.key"
                :prop="'mortgageInfos.'+ index + '.address'"
                :rules="rules">
                    <el-input v-model.trim="mortgageInfos.address" clearable></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item 
                v-for="(mortgageInfos, index) in ruleForm.mortgageInfos"
                :label="'数量与单位'+(index+1)+'：'" 
                :key="mortgageInfos.key"
                :prop="'mortgageInfos.'+ index + '.unit'"
                :rules="rules">
                    <el-input v-model.trim="mortgageInfos.unit" clearable></el-input>
                     <el-button plain type="danger" size="mini" @click.prevent="removediya(mortgageInfos)">删除</el-button>
               
                </el-form-item>
                </el-col>
             </el-row>
        </div>
        </div>
<!-- =================================================================================== -->

    <div v-if="baozhengrenshow">
        <el-tag type="warning" class="tag">保证人集合</el-tag>
        <el-button plain type="success" @click="addbaozhengren" size="mini">新增</el-button>
        
        <div class="contt">
           <el-row>
            <el-col :span="8">
                <el-form-item 
                v-for="(ensureInfos, index) in ruleForm.ensureInfos"
                :label="'保证人姓名'+(index+1)+'：'" 
                :key="ensureInfos.key"
                :prop="'ensureInfos.'+ index + '.name'"
                :rules="rules">
                    <el-input v-model.trim="ensureInfos.name" clearable></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item 
                v-for="(ensureInfos, index) in ruleForm.ensureInfos"
                :label="'证件类型'+(index+1)+'：'" 
                :key="ensureInfos.key"
                :prop="'ensureInfos.'+ index + '.cardType'"
                :rules="rules">
                    <el-select v-model.trim="ensureInfos.cardType" placeholder="请选择">
                        <el-option
                        v-for="item in cardtypes"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                 <el-form-item 
                 v-for="(ensureInfos, index) in ruleForm.ensureInfos"
                :label="'证件号码'+(index+1)+'：'" 
                :key="ensureInfos.key"
                :prop="'ensureInfos.'+ index + '.cardNumber'"
                 :rules="rules">
                    <el-input v-model.trim="ensureInfos.cardNumber" clearable></el-input>
                </el-form-item>
                </el-col>
            <el-col :span="8">
                <el-form-item 
                v-for="(ensureInfos, index) in ruleForm.ensureInfos"
                :label="'联系地址/注册地址'+(index+1)+'：'" 
                :key="ensureInfos.key"
                :prop="'ensureInfos.'+ index + '.address'"
                :rules="rules">
                    <el-input v-model.trim="ensureInfos.address" clearable></el-input>
                    <el-button plain type="danger" size="mini" @click.prevent="removebaozhengren(ensureInfos)">删除</el-button>
               
                </el-form-item>
                </el-col>
            </el-row>
            </div>
    </div>

        <div class="butt">
            <el-form-item>
                <el-button  type="primary" @click="yulan()">预览</el-button>
                <el-button  @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </div>
        </el-form>


        <!-- 合同预览框 -->
        <el-dialog 
            append-to-body
            title="预览"
            :visible.sync="dialogVisible"
            width="86%" top=5vh center>
            
              <div class="el-table">
                <table width="100%">
                  <tr colspan="6">
                    <th colspan="6">
                      合同基本信息
                    </th>
                  </tr>
                  <ul class="miul">
                    <li>
                      <label >渠道代码：</label>
                     <span v-if="this.ruleForm.channelCode == 'M201'">
                        线下小微企业借款
                      </span>
                    <span v-if="this.ruleForm.channelCode == 'M202'">
                        线下个人借款
                      </span>
                      </li>
                    <li>
                      <label >合同号：</label>{{ this.ruleForm.contractNumber }}</li>
                    <li>
                      <label >合同名称：</label>{{ this.ruleForm.contractName }} </li>
                    <!-- <li>
                      <label >渠道名称：</label>{{ this.ruleForm.channelName }}</li>
                    <li>
                      <label >产品代码：</label>{{ this.ruleForm.productCode }}</li>
                      <li>
                      <label >产品名称：</label>{{ this.ruleForm.productName }}</li> -->
                      <li>
                      <label >借款人类型：</label>
                      <span v-if="this.ruleForm.borrowerType == '1'">
                        企业
                      </span>
                      <span v-if="this.ruleForm.borrowerType == '2'">
                        自然人
                      </span>
                      </li>
                      <li>
                      <label >放款金额(元)：</label>{{ this.ruleForm.money }}</li>

                      <li>
                      <label >贷款期限类型：</label>
                      <span v-if="this.ruleForm.termType == '1'">
                        日
                      </span>
                      <span v-if="this.ruleForm.termType == '2'">
                        周
                      </span>
                      <span v-if="this.ruleForm.termType == '3'">
                        月
                      </span>
                      <span v-if="this.ruleForm.termType == '4'">
                        季
                      </span>
                      <span v-if="this.ruleForm.termType == '5'">
                        年
                      </span>
                      </li>
                    <li>
                      <label >贷款期限：</label>{{ this.ruleForm.term }}</li>
                    <li>
                      <label >利率类型：</label>
                      <span v-if="this.ruleForm.rateType == '1'">
                        日
                      </span>
                      <span v-if="this.ruleForm.rateType == '2'">
                        周
                      </span>
                      <span v-if="this.ruleForm.rateType == '3'">
                        月
                      </span>
                      <span v-if="this.ruleForm.rateType == '4'">
                        季
                      </span>
                      <span v-if="this.ruleForm.rateType == '5'">
                        年
                      </span></li>
                    <li>
                      <label >利率(%)：</label>{{ this.ruleForm.rate }}</li>

                    <li>
                      <label >年化利率(%)：</label>{{ this.ruleForm.annualRate }}</li>
                    <li>
                      <label >是否受托支付：</label>
                      <span v-if="this.ruleForm.isEntrust == '1'">
                        是
                      </span>
                      <span v-if="this.ruleForm.isEntrust == '0'">
                        否
                      </span></li>
                    <li>
                      <label >贷款用途：</label>
                      <span v-if="this.ruleForm.purpose == '1'">
                        流动资金贷款
                      </span>
                      <span v-if="this.ruleForm.purpose == '2'">
                        固定资产投资贷款
                      </span>
                      <span v-if="this.ruleForm.purpose == '3'">
                        其他
                      </span></li>
                    <li>
                      <label >投向行业：</label>
                      <span v-if="this.ruleForm.business == '1'">
                        居民服务和其他服务业
                      </span>
                      <span v-if="this.ruleForm.business == '2'">
                        建筑业
                      </span>
                      <span v-if="this.ruleForm.business == '3'">
                        交通运输、仓储和邮政业
                      </span>
                      <span v-if="this.ruleForm.business == '4'">
                        农、林、牧、渔业
                      </span>
                      <span v-if="this.ruleForm.business == '5'">
                        采矿业
                      </span>
                      <span v-if="this.ruleForm.business == '6'">
                        制造业
                      </span>
                      <span v-if="this.ruleForm.business == '7'">
                        电力、燃气及水的生产和供应业
                      </span>
                      <span v-if="this.ruleForm.business == '8'">
                        信息传输、计算机服务和软件业
                      </span>
                      <span v-if="this.ruleForm.business == '9'">
                        批发和零售业
                      </span>
                      <span v-if="this.ruleForm.business == '10'">
                        住宿和餐饮业
                      </span>
                      <span v-if="this.ruleForm.business == '11'">
                        房地产业
                      </span>
                      <span v-if="this.ruleForm.business == '12'">
                        租赁和商务服务业
                      </span>
                      <span v-if="this.ruleForm.business == '13'">
                        其他
                      </span></li>
                    <li>
                      <label >贷款方式：</label>
                      <span v-if="this.ruleForm.loanMethod == '1'">
                        信用
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '2'">
                        保证
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '3'">
                        抵押
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '4'">
                        质押
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '5'">
                        其他
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '1,2' || 
                      this.ruleForm.loanMethod == '2,1'">
                        信用,保证
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '1,3' || 
                      this.ruleForm.loanMethod == '3,1'">
                        信用,抵押
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '1,4' || 
                      this.ruleForm.loanMethod == '4,1'">
                        信用,质押
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '1,5' || 
                      this.ruleForm.loanMethod == '5,1'">
                        信用,其他
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '1,2,3' || 
                      this.ruleForm.loanMethod == '3,2,1' || 
                      this.ruleForm.loanMethod == '2,3,1' || 
                      this.ruleForm.loanMethod == '1,3,2' ||  
                      this.ruleForm.loanMethod == '2,1,3' ||
                      this.ruleForm.loanMethod == '3,1,2'">
                        信用,保证,抵押
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '1,2,4' || 
                      this.ruleForm.loanMethod == '4,2,1' || 
                      this.ruleForm.loanMethod == '2,4,1' || 
                      this.ruleForm.loanMethod == '1,4,2' ||  
                      this.ruleForm.loanMethod == '2,1,4' ||
                      this.ruleForm.loanMethod == '4,1,2'">
                        信用,保证,质押
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '1,2,5' || 
                      this.ruleForm.loanMethod == '5,2,1' || 
                      this.ruleForm.loanMethod == '2,5,1' || 
                      this.ruleForm.loanMethod == '1,5,2' ||  
                      this.ruleForm.loanMethod == '2,1,5' ||
                      this.ruleForm.loanMethod == '5,1,2'">
                        信用,保证,其他
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '1,4,5' || 
                      this.ruleForm.loanMethod == '5,4,1' || 
                      this.ruleForm.loanMethod == '4,5,1' || 
                      this.ruleForm.loanMethod == '1,5,4' ||  
                      this.ruleForm.loanMethod == '4,1,5' ||
                      this.ruleForm.loanMethod == '5,1,4'">
                        信用,质押,其他
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '4,2,5' || 
                      this.ruleForm.loanMethod == '5,2,4' || 
                      this.ruleForm.loanMethod == '2,5,4' || 
                      this.ruleForm.loanMethod == '4,5,2' ||  
                      this.ruleForm.loanMethod == '2,4,5' ||
                      this.ruleForm.loanMethod == '5,4,2'">
                        质押,保证,其他
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '4,3,5' || 
                      this.ruleForm.loanMethod == '5,3,4' || 
                      this.ruleForm.loanMethod == '3,5,4' || 
                      this.ruleForm.loanMethod == '4,5,3' ||  
                      this.ruleForm.loanMethod == '3,4,5' ||
                      this.ruleForm.loanMethod == '5,4,3'">
                        抵押,质押,其他
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '1,2,3,4' || 
                      this.ruleForm.loanMethod == '1,2,4,3' || 
                      this.ruleForm.loanMethod == '1,3,2,4' || 
                      this.ruleForm.loanMethod == '1,3,4,2' || 
                      this.ruleForm.loanMethod == '1,4,2,3' || 
                      this.ruleForm.loanMethod == '1,4,3,2' || 
                      this.ruleForm.loanMethod == '2,1,3,4' || 
                      this.ruleForm.loanMethod == '2,1,4,3' || 
                      this.ruleForm.loanMethod == '2,3,4,1' || 
                      this.ruleForm.loanMethod == '2,3,1,4' || 
                      this.ruleForm.loanMethod == '2,4,1,3' || 
                      this.ruleForm.loanMethod == '2,4,3,1' || 
                      this.ruleForm.loanMethod == '3,1,2,4' || 
                      this.ruleForm.loanMethod == '3,1,4,2' || 
                      this.ruleForm.loanMethod == '3,2,4,1' || 
                      this.ruleForm.loanMethod == '3,2,1,4' || 
                      this.ruleForm.loanMethod == '3,4,1,2' || 
                      this.ruleForm.loanMethod == '3,4,2,1' || 
                      this.ruleForm.loanMethod == '4,1,2,3' || 
                      this.ruleForm.loanMethod == '4,1,3,2' || 
                      this.ruleForm.loanMethod == '4,2,3,1' || 
                      this.ruleForm.loanMethod == '4,2,1,3' || 
                      this.ruleForm.loanMethod == '4,3,2,1' || 
                      this.ruleForm.loanMethod == '4,3,1,2'">
                        信用,保证,抵押,质押
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '1,2,3,4,5'">
                        信用,保证,抵押,质押,其他
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '2,3' || 
                      this.ruleForm.loanMethod == '3,2'">
                        保证,抵押
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '2,4' || 
                      this.ruleForm.loanMethod == '4,2'">
                        保证,质押
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '2,5' || 
                      this.ruleForm.loanMethod == '5,2'">
                        保证,其他
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '2,3,4' || 
                      this.ruleForm.loanMethod == '2,4,3' || 
                      this.ruleForm.loanMethod == '3,2,4' || 
                      this.ruleForm.loanMethod == '3,4,2' || 
                      this.ruleForm.loanMethod == '4,2,3' || 
                      this.ruleForm.loanMethod == '4,3,2' ">
                        保证,抵押,质押
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '2,3,4,5' || 
                      this.ruleForm.loanMethod == '5,2,4,3' || 
                      this.ruleForm.loanMethod == '5,3,2,4' || 
                      this.ruleForm.loanMethod == '5,3,4,2' || 
                      this.ruleForm.loanMethod == '5,4,2,3' || 
                      this.ruleForm.loanMethod == '5,4,3,2' || 
                      this.ruleForm.loanMethod == '2,5,3,4' || 
                      this.ruleForm.loanMethod == '2,5,4,3' || 
                      this.ruleForm.loanMethod == '2,3,4,5' || 
                      this.ruleForm.loanMethod == '2,3,5,4' || 
                      this.ruleForm.loanMethod == '2,4,5,3' || 
                      this.ruleForm.loanMethod == '2,4,3,5' || 
                      this.ruleForm.loanMethod == '3,5,2,4' || 
                      this.ruleForm.loanMethod == '3,5,4,2' || 
                      this.ruleForm.loanMethod == '3,2,4,5' || 
                      this.ruleForm.loanMethod == '3,2,5,4' || 
                      this.ruleForm.loanMethod == '3,4,5,2' || 
                      this.ruleForm.loanMethod == '3,4,2,5' || 
                      this.ruleForm.loanMethod == '4,5,2,3' || 
                      this.ruleForm.loanMethod == '4,5,3,2' || 
                      this.ruleForm.loanMethod == '4,2,3,5' || 
                      this.ruleForm.loanMethod == '4,2,5,3' || 
                      this.ruleForm.loanMethod == '4,3,2,5' || 
                      this.ruleForm.loanMethod == '4,3,5,2'">
                        保证,抵押,质押,其他
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '3,4' || 
                      this.ruleForm.loanMethod == '4,3'">
                        抵押,质押
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '3,5' || 
                      this.ruleForm.loanMethod == '5,3'">
                        抵押,其他
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '3,4,5' || 
                      this.ruleForm.loanMethod == '5,4,3' || 
                      this.ruleForm.loanMethod == '3,5,4' || 
                      this.ruleForm.loanMethod == '4,5,3' || 
                      this.ruleForm.loanMethod == '4,3,5' || 
                      this.ruleForm.loanMethod == '5,3,4'">
                        抵押,质押,其他
                      </span>
                      <span v-if="this.ruleForm.loanMethod == '4,5' || 
                      this.ruleForm.loanMethod == '5,4'">
                        质押,其他
                      </span>
                    </li>
                    <li>
                      <label >还款方式：</label>
                      <span v-if="this.ruleForm.repayMethod == '1'">
                        等额本息
                      </span>
                      <span v-if="this.ruleForm.repayMethod == '2'">
                        等额本金
                      </span>
                      <span v-if="this.ruleForm.repayMethod == '3'">
                        先息后本
                      </span>
                      <span v-if="this.ruleForm.repayMethod == '4'">
                        灵活还款
                      </span></li>
                    <li>    
                      <label >还款来源：</label>{{ this.ruleForm.repaySource }}</li>        
                    <li>
                      <label >开始日期：</label>{{ this.ruleForm.startDate }}</li>
                    <li>
                      <label >截止日期：</label>{{ this.ruleForm.endDate }}</li>
                    <li>
                      <label >签订时间：</label>{{ this.ruleForm.signTime }}</li>
                    <li>
                      <label >查询编号：</label>{{ this.ruleForm.reqNo }}</li>
                    <li>
                      <label >数据类型：</label>{{ this.ruleForm.dataType }}</li>
                    <li>
                      <label >区域代码(区/县)：</label>{{ this.ruleForm.districtCode }}</li>
                  </ul>
                </table>
              </div>

              <div class="el-table">
                <table width="100%">
                  <tr colspan="6">
                    <th colspan="6">
                      还款计划集合
                    </th>
                  </tr>
                </table>
                  <el-table :data="this.ruleForm.repayPlans" >
                    <el-table-column property="endDate" label="还款日期" align="center"></el-table-column>
                    <el-table-column property="money" label="还款本金" align="center"></el-table-column>
                    <el-table-column property="interest" label="还款利息" align="center"></el-table-column>
                  </el-table>
              </div>

<div v-if='company'>
              <div class="el-table">
                <table width="100%">
                  <tr colspan="6">
                    <th colspan="6">
                      企业借款人
                    </th>
                  </tr>
                  <ul class="miul">
                    <li>
                      <label >企业名称：</label>{{ this.ruleForm.enterpriseBorrower.name }}</li>
                    <li>
                      <label >企业规模：</label>
                      <span v-if="this.ruleForm.enterpriseBorrower.scale == '1'">
                        个体工商户
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.scale == '2'">
                        农村专业合作组织
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.scale == '3'">
                        微型企业
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.scale == '4'">
                        小型企业
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.scale == '5'">
                        中型企业
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.scale == '6'">
                        大型企业
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.scale == '7'">
                        其他组织
                      </span>
                      </li>
                    <li>
                      <label >产业类型：</label>
                      <span v-if="this.ruleForm.enterpriseBorrower.industryType == '1'">
                        第一产业
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.industryType == '2'">
                        第二产业
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.industryType == '3'">
                        第三产业
                      </span></li>
                    <li>
                      <label >所属行业：</label>
                      <span v-if="this.ruleForm.enterpriseBorrower.industryInvolved == '1'">
                        居民服务和其他服务业
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.industryInvolved == '2'">
                        建筑业
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.industryInvolved == '3'">
                        交通运输、仓储和邮政业
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.industryInvolved == '4'">
                        农、林、牧、渔业
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.industryInvolved == '5'">
                        采矿业
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.industryInvolved == '6'">
                        制造业
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.industryInvolved == '7'">
                        电力、燃气及水的生产和供应业
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.industryInvolved == '8'">
                        信息传输、计算机服务和软件业
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.industryInvolved == '9'">
                        批发和零售业
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.industryInvolved == '10'">
                        住宿和餐饮业
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.industryInvolved == '11'">
                        房地产业
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.industryInvolved == '12'">
                        租赁和商务服务业
                      </span>
                      <span v-if="this.ruleForm.enterpriseBorrower.industryInvolved == '13'">
                        其他
                      </span></li>
                    <li>
                      <label >营业执照号码：</label>{{ this.ruleForm.enterpriseBorrower.licenseCode }}</li>
                      <li>
                      <label >营业执照截止日期：</label>{{ this.ruleForm.enterpriseBorrower.licenseEndDate}}</li>
                  </ul>
                </table>
              </div>
</div>

<div v-if='self'>
               <div class="el-table">
                <table width="100%">
                  <tr colspan="6">
                    <th colspan="6">
                      个人借款人
                    </th>
                  </tr>
                  <ul class="miul">
                    <li>
                      <label >姓名：</label>{{ this.ruleForm.personBorrower.name }}</li>
                    <li>
                      <label >性别：</label>
                      <span v-if="this.ruleForm.personBorrower.sex  == '1'">
                        男
                      </span>
                      <span v-if="this.ruleForm.personBorrower.sex  == '2'">
                        女
                      </span></li>
                    <li>
                      <label >证件类型：</label>
                      <span v-if="this.ruleForm.personBorrower.cardType  == '1'">
                        二代身份证
                      </span>
                      <span v-if="this.ruleForm.personBorrower.cardType  == '2'">
                        港澳通行证
                      </span>
                      <span v-if="this.ruleForm.personBorrower.cardType  == '3'">
                        台湾通行证
                      </span>
                      <span v-if="this.ruleForm.personBorrower.cardType  == '4'">
                        护照
                      </span></li>
                    <li>
                      <label >证件号码：</label>{{ this.ruleForm.personBorrower.cardNumber }}</li>
                    <li>
                      <label >联系电话：</label>{{ this.ruleForm.personBorrower.phone }}</li>
                      <li>
                      <label >是农牧民：</label>
                      <span v-if="this.ruleForm.personBorrower.isFarmer  == '1'">
                        是
                      </span>
                      <span v-if="this.ruleForm.personBorrower.isFarmer  == '0'">
                        否
                      </span></li>
                  </ul>
                </table>
              </div>
</div>

<div v-if='baozhengrenshow'>
              <div class="el-table">
                <table width="100%">
                  <tr colspan="6">
                    <th colspan="6">
                      保证人集合
                    </th>
                  </tr>
                </table>
                  <el-table :data="this.ruleForm.ensureInfos" >
                    <el-table-column property="name" label="保证人姓名" align="center"></el-table-column>
                    <el-table-column property="cardType" label="证件类型" align="center">
                      <template slot-scope="scope">
                        <span v-if="scope.row.cardType == '1'">二代身份证</span>
                        <span v-else-if="scope.row.cardType == '2'">港澳通行证</span>
                        <span v-else-if="scope.row.cardType == '3'">台湾通行证</span>
                        <span v-else-if="scope.row.cardType == '4'">护照</span>
                        <span v-else></span>
                      </template>
                    </el-table-column>
                    <el-table-column property="cardNumber" label="证件号码" align="center"></el-table-column>
                    <el-table-column property="address" label="联系地址/注册地址" align="center"></el-table-column>
                 </el-table>
              </div>
</div>

<div v-if='diyashow'>
              <div class="el-table">
                <table width="100%">
                  <tr colspan="6">
                    <th colspan="6">
                      抵押集合
                    </th>
                  </tr>
                </table>
                  <el-table :data="this.ruleForm.mortgageInfos" >
                    <el-table-column property="mortgageType" label="抵押物类型" align="center">
                      <template slot-scope="scope">
                        <span v-if="scope.row.mortgageType == '1'">存货抵押</span>
                        <span v-else-if="scope.row.mortgageType == '2'">客账抵押</span>
                        <span v-else-if="scope.row.mortgageType == '3'">证券抵押</span>
                        <span v-else-if="scope.row.mortgageType == '4'">设备抵押</span>
                        <span v-else-if="scope.row.mortgageType == '5'">不动产抵押</span>
                        <span v-else-if="scope.row.mortgageType == '6'">人寿险抵押</span>
                        <span v-else-if="scope.row.mortgageType == '7'">其他</span>
                        <span v-else></span>
                      </template>
                    </el-table-column>
                    <el-table-column property="name" label="抵押物名称" align="center"></el-table-column>
                    <el-table-column property="worth" label="评估价值(元)" align="center"></el-table-column>
                    <el-table-column property="address" label="抵押物放置位置" align="center"></el-table-column>
                    <el-table-column property="unit" label="数量与单位" align="center"></el-table-column>
                     </el-table>
              </div>
</div>
              
<div v-if='zhiyashow'>
              <div class="el-table">
                <table width="100%">
                  <tr colspan="6">
                    <th colspan="6">
                      质押集合
                    </th>
                  </tr>
                </table>
                  <el-table :data="this.ruleForm.pledgeInfos" >
                    <el-table-column property="pledgeType" label="质押物类型" align="center">
                      <template slot-scope="scope">
                        <span v-if="scope.row.pledgeType == '1'">股权质押</span>
                        <span v-else-if="scope.row.pledgeType == '2'">定期存单质押</span>
                        <span v-else-if="scope.row.pledgeType == '3'">专利权质押</span>
                        <span v-else-if="scope.row.pledgeType == '4'">应收账款质押</span>
                        <span v-else-if="scope.row.pledgeType == '5'">其他</span>
                        <span v-else></span>
                      </template>
                    </el-table-column>
                    <el-table-column property="name" label="质押物名称" align="center"></el-table-column>
                    <el-table-column property="worth" label="评估价值(元)" align="center"></el-table-column>
                    <el-table-column property="address" label="质押物放置位置" align="center"></el-table-column>
                    <el-table-column property="unit" label="数量与单位" align="center"></el-table-column>
                     </el-table>
              </div>
</div>


            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary"  @click="submitForm('ruleForm')">上传</el-button>
            </span>
          </el-dialog>
</div>
</template>


<script>
export default {
  data() {
    return {

        dialogVisible: false,//预览框显示
        self:false,//个人
        company:true,//企业
        zhiyashow:false,//质押
        diyashow:false,//抵押
        baozhengrenshow:false,//保证人集合
        
        options: [],//区域代码列表

        //渠道数据容器
        channellist:[{
          value: 'M201',
          label: '线下小微企业借款'
        },{
          value: 'M202',
          label: '线下个人借款'
        },],

        //质押物类型
        pledgelist:[{
          value: '1',
          label: '股权质押'
        },{
          value: '2',
          label: '定期存单质押'
        },{
          value: '3',
          label: '专利权质押'
        },{
          value: '4',
          label: '应收账款质押'
        },{
          value: '5',
          label: '其他'
        },],

        //抵押物类型
        mortgagelist:[{
          value: '1',
          label: '存货抵押'
        },{
          value: '2',
          label: '客账抵押'
        },{
          value: '3',
          label: '证券抵押'
        },{
          value: '4',
          label: '设备抵押'
        },{
          value: '5',
          label: '不动产抵押'
        },{
          value: '6',
          label: '人寿险抵押'
        },{
          value: '7',
          label: '其他'
        },],

        //企业规模
        scalelist:[{
          value: '1',
          label: '个体工商户'
        },{
          value: '2',
          label: '农村专业合作组织'
        },{
          value: '3',
          label: '微型企业'
        },{
          value: '4',
          label: '小型企业'
        },{
          value: '5',
          label: '中型企业'
        },{
          value: '6',
          label: '大型企业'
        },{
          value: '7',
          label: '其他组织'
        }],
        //产业类型
        industrylist:[{
          value: '1',
          label: '第一产业'
        },{
          value: '2',
          label: '第二产业'
        },{
          value: '3',
          label: '第三产业'
        }],
        
        //证件类型
        cardtypes:[{
          value: '1',
          label: '二代身份证'
        },{
          value: '2',
          label: '港澳通行证'
        },{
          value: '3',
          label: '台湾通行证'
        },{
          value: '4',
          label: '护照'
        }],

        //还款方式
        repaymethod:[{
          value: '1',
          label: '等额本息'
        },{
          value: '2',
          label: '等额本金'
        },{
          value: '3',
          label: '先息后本'
        },{
          value: '4',
          label: '灵活还款'
        },],

        //贷款方式
        loanmethods:[{
          value: '1',
          label: '信用'
        },{
          value: '2',
          label: '保证'
        },{
          value: '3',
          label: '抵押'
        },{
          value: '4',
          label: '质押'
        },{
          value: '5',
          label: '其他'
        },],

        //投向行业
        businessto:[{
          value: '1',
          label: '居民服务和其他服务业'
        },{
          value: '2',
          label: '建筑业'
        },{
          value: '3',
          label: '交通运输、仓储和邮政业'
        },{
          value: '4',
          label: '农、林、牧、渔业'
        },{
          value: '5',
          label: '采矿业'
        },{
          value: '6',
          label: '制造业'
        },{
          value: '7',
          label: '电力、燃气及水的生产和供应业'
        },{
          value: '8',
          label: '信息传输、计算机服务和软件业'
        },{
          value: '9',
          label: '批发和零售业'
        },{
          value: '10',
          label: '住宿和餐饮业'
        },{
          value: '11',
          label: '房地产业'
        },{
          value: '12',
          label: '租赁和商务服务业'
        },{
          value: '13',
          label: '其他'
        },],
        
        //贷款用途
        loanpurpose:[{
          value: '1',
          label: '流动资金贷款'
        },{
          value: '2',
          label: '固定资产投资贷款'
        },{
          value: '3',
          label: '其他'
        },],

        //贷款期限类型
        termoptions:[{
          value: '1',
          label: '日'
        }, {
          value: '2',
          label: '周'
        }, {
          value: '3',
          label: '月'
        }, {
          value: '4',
          label: '季'
        }, {
          value: '5',
          label: '年'
        }, ],


      list:[],//联动下拉框
      ruleForm: {
            channelCode:"",//渠道代码
            channelName:"",//渠道名称
            productCode:"",//产品代码
            productName:"",//产品名称
            contractNumber:"",//合同号
            contractName:"",//合同名称
            borrowerType:"1",//借款人类型
            money:"",//放款金额
            termType:"",//贷款期限类型
            term:"",//贷款期限
            rateType:"",//利率类型
            rate:"",//利率
            annualRate:"",//年化利率
            isEntrust:"1",//是否受托支付
            purpose:"",//贷款用途
            business:"",//投向行业
            loanMethod:"",//贷款方式
            repayMethod:"",//还款方式
            repaySource:"",//还款来源
            startDate:"",//开始日期
            endDate:"",//截止日期
            signTime:"",//签订时间
            reqNo:"",//查询编号
            dataType:"LoanContract",//数据类型
            districtCode:"",//区域代码

            //还款计划集合
            repayPlans:[{
              endDate:"",//还款日期
              money:"",//还款本金
              interest:"",//还款利息
            }],

            //个人借款人
            personBorrower:{
              name:"",//姓名
              sex:"1",//性别
              cardType:"",//证件类型
              cardNumber:"",//证件号码
              phone:"",//联系电话
              isFarmer:"1",//是否农牧民

            },

            //企业借款人
            enterpriseBorrower:{
              name:"",//企业名称
              scale:"",//企业规模
              industryType:"",//产业类型
              industryInvolved:"",//所属行业
              licenseCode:"",//营业执照号码
              licenseEndDate:"",//营业执照截止日期

            },

            //质押列表集合
            pledgeInfos:[{
                pledgeType:"",//质押物类型
                name:"",//质押物名称
                worth:"",//评估价值
                address:"",//放置位置
                unit:"",//数量与单位
            }],

            //保证人列表集合
            ensureInfos:[{
                name:"",//保证人名称
                card_type:"",//证件类型
                card_number:"",//证件号码
                address:"",//联系地址
            }],

            //抵押列表集合
            mortgageInfos:[{
                mortgageType:"",//抵押物类型
                name:"",//抵押物名称
                worth:"",//评估价值
                address:"",//放置位置
                unit:"",//数量与单位
                address:"",//放置位置
            }]
        },
        
        rules:[{ required: true, message: '不能为空'}]
        
    };
  },
  mounted() {
    this.getMessage();
  },
  methods: {
    //获取区域代码
    getMessage(){
      let data={}
      
      this.$http
        .post(this.$store.state.domain +"/report/common/district",data)
          .then(
          //成功
          response => {
            if (response.data.code == 0) { 
                this.options = response.data.districtList;
            } 
            //失败
            else {
              this.$message({
                message: response.data.msg,
                type: "error"
              });
            }
          },
          //打印
          response => {
            // console.log(response);
          }
        );
    },

    //预览
    yulan(){
      //跳转返回顶部
      if(document.body.scrollTop > 0) {
                console.log(1);
                window.scrollTo(0, -1);
                document.body.scrollTop = 0;
            }
            window.scrollTo(0, -1);
            document.body.scrollTop = 0;
      this.dialogVisible = true
    },

    //区域编码
     handleChange(){
       //区域编码只取最后一个
       var select = this.list[this.list.length-1];
       this.ruleForm.districtCode = select;
       console.log(this.ruleForm.districtCode)
     },

    //新增保证人
    addbaozhengren() {
        this.ruleForm.ensureInfos.push({
          name:"",//保证人名称
          cardType:"",//证件类型
          cardNumber:"",//证件号码
          address:"",//联系地址
          key: Date.now()
        });
      },
    
    //删除保证人
    removebaozhengren(item) {
        var index = this.ruleForm.ensureInfos.indexOf(item)
        if (index !== -1) {
          this.ruleForm.ensureInfos.splice(index, 1)
        }
      },


    //新增抵押
    adddiya() {
        this.ruleForm.mortgageInfos.push({
          mortgageType:"",//抵押物类型
          name:"",//抵押物名称
          worth:"",//评估价值
          address:"",//放置位置
          unit:"",//数量与单位
          worth:"",//评估价值
          address:"",//放置位置
          unit:"",//数量与单位
          key: Date.now()
        });
      },
    
    //删除抵押
    removediya(item) {
        var index = this.ruleForm.mortgageInfos.indexOf(item)
        if (index !== -1) {
          this.ruleForm.mortgageInfos.splice(index, 1)
        }
      },


    //新增质押
    addzhiya() {
        this.ruleForm.pledgeInfos.push({
          pledgeType:"",//质押物类型
          name:"",//质押物名称
          worth:"",//评估价值
          address:"",//放置位置
          unit:"",//数量与单位
          worth:"",//评估价值
          address:"",//放置位置
          unit:"",//数量与单位
          key: Date.now()
        });
      },
    
    //删除质押
    removezhiya(item) {
        var index = this.ruleForm.pledgeInfos.indexOf(item)
        if (index !== -1) {
          this.ruleForm.pledgeInfos.splice(index, 1)
        }
      },


    //新增还款计划
    addrepayplan() {
        this.ruleForm.repayPlans.push({
          endDate: '',
          key: Date.now()
        });
      },
    
    //删除还款计划
    removerepayplan(item) {
        var index = this.ruleForm.repayPlans.indexOf(item)
        if (index !== -1) {
          this.ruleForm.repayPlans.splice(index, 1)
        }
      },

    //查询
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
      this.$confirm('此操作将提交合同信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            
             this.$http
        .post(
            this.$store.state.domain +"/under/pushLoanContract", this.ruleForm  
        )
        //then()方法异步执行，就是当then()前面的方法执行完之后再执行then()里面的方法，这样就不会发生获取不到数据的问题
        .then(  
            // Lambda写法
            response => {
            if (response.data.code == 0) {
                 this.$message({
                    message: response.data.msg,
                    type: 'success'
                    });

                this.$store.dispatch('settabname', 'fangkuan')
                //跳转返回顶部
                if(document.body.scrollTop > 0) {
                          console.log(1);
                          window.scrollTo(0, -1);
                          document.body.scrollTop = 0;
                      }
                      window.scrollTo(0, -1);
                      document.body.scrollTop = 0;
              
            } else {
                this.$message({
                    message: response.data.msg,
                    type: 'warning'
                    });
            }
            
            },
            response => {
               this.$message({
                      dangerouslyUseHTMLString: true, //表示提示的是html片段
                      message:
                        '<svg class="icon" aria-hidden="true"> <use xlink:href="#icon-shengqi"></use> </svg> ' +
                        response.body.message,
                      type: "error"
                    });
            //console.log(response);
            //请求失败回调函数
            }
        );

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消提交'
          });          
        });
         } else {
            console.log('error submit!!');
            return false;
          }
          });
    },

    // 重置功能
    resetForm(formName) {
    this.$refs[formName].resetFields();
    this.list = [];//将list置为空
    console.log(this.list)
    },

    //贷款方式改变
    LoanMethodShow(val){
      for(var v of val) {
          if(v == '2') {
              this.baozhengrenshow=true;
          }
          if(v == '3'){
              this.diyashow=true; 
          }
          if(v == '4'){
              this.zhiyashow=true;
          }
          if(v == '5'){
            this.baozhengrenshow=false;
            this.zhiyashow=false;
            this.diyashow=false;
          }
      }
    },

    //移除下拉框tag时触发
    changetag(val){
      if(val == '2'){
            this.baozhengrenshow=false;
        }
        else if(val == '3'){
            this.diyashow=false;
        }
        else if(val == '4'){
            this.zhiyashow=false;
        }
    },


   //下拉框选择判断显示个人或企业
   Select(val){
       if(val==1){
           this.company=true;
           this.self=false;
       }else if(val==2){
           this.self=true;
           this.company=false;
       }else{
           this.company=false;
           this.self=false;
       }
   }
  },
  watch: {},
  components: {}
};
</script>

 <style lang='less' >

table {
  border: none;
}

.miul {
  display: flex;
  flex-wrap: wrap;

  width: 100%;

// 上左右下
  margin: 15px 0 10px;

  li {
    line-height: 35px;

    width: 20%;
    height: 35px;

    label {
      float: left;

      width: 130px;
      margin-right: 10px;

      text-align: right;

      color: #646964;
    }
  }
}

.el-table {
  margin-top: 10px;
}

.el-table th {
  padding-left: 10px;
}
































</style>
