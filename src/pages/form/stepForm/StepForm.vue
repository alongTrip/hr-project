<template>
   <div style="">
      <a-card :bordered="false" :body-style="{padding: '0'}" style="margin-top:0px;height:141px;min-width:750px;">
         <div class="salesCard" style="height:141px;width:100%;position:relative;position:absolute;left:0;top:0;">
            <!-- <a-spin  size="large" style="position:absolute;left:50%;top:48%;"/> -->
            <div style="border-bottom:1px solid rgb(232, 232, 232);height:54px;line-height:54px;">
               <h2 style="padding-left:25px;font-size:16px;width:100%">
                  XX部门员工发展情况
               <a-tooltip title="市场份额为普通账户与信用账户的市场份额之和，计算方法为截止时点的股基（含融资融券）交易量/市场股基交易量（单向）/2" slot="action">
                  <a-icon type="info-circle-o" style="font-size:13px"/>
               </a-tooltip>
               <div style="width:500px;float:right;margin-right:20px;">
                  <a-input-search placeholder="搜索相对应的部门" @search="onSearch" enterButton="搜索" size="large" />
               </div>
               </h2>
            </div>
            <div style="width:160px;padding-left:25px;float:left;">
               <p style="margin-bottom:0px;height:30px;line-height:30px;">部门在岗人员</p>
               <div style="width:70px;height:58px;text-align:center;line-height:58px;"><span style="font-size:30px;font-weight:bold;">15 </span>人</div> 
            </div>
            <div style="width:100px;float:left;padding-top:50px;">当年净 <span style="color:green;font-weight:bold;font-size:20px;">↓</span> 1人</div>
         </div>
      </a-card>
      <div style="display:flex;box-sizing:border-box;margin-top:5px;height:450px;width:100%;position:relative;">
         <a-card :bordered="false" :body-style="{padding: '0'}" style="width:30%;margin-right:2%;float:left;margin-top:20px;min-width:287px;">
          <div class="salesCard" style="height:438px;float:left;width:100%;">
            <div style="border-bottom:1px solid rgb(232, 232, 232);height:54px;width:100%;line-height:54px;position;relative;">
                <h2 style="float:left;padding-left:25px;font-size:16px;">
                   部门员工上年度绩效考核分布
                   <a-tooltip title="显示总客户数的职业分布，剔除职业为其他的数据" slot="action">
                      <a-icon type="info-circle-o" style="font-size:13px"/>
                   </a-tooltip>
                </h2>
            </div>
            <div id="performance" style="width:100%;height:378px;top:-32px"></div>
          </div>
        </a-card>
        <a-card :bordered="false" :body-style="{padding: '0'}" style="width:68%;float:left;margin-top:20px;min-width:450px;">
          <div class="salesCard" style="height:438px;position:relative;">
            <div style="border-bottom:1px solid rgb(232, 232, 232);height:54px;line-height:54px;">
                <h2 style="float:left;padding-left:25px;font-size:16px;">
                   部门员工工作时长
                    <a-tooltip title="显示总客户数的资产分布情况。如果时间选择是非交易日,就会自动跳到离它最近的交易日" slot="action">
                      <a-icon type="info-circle-o" style="font-size:13px"/>
                    </a-tooltip>
                </h2>
            </div>
            <div id="workingHours" style="width:100%;height:370px;"></div>
          </div>
        </a-card>
      </div>
      <a-card :bordered="false" :body-style="{padding: '0'}" style="margin-top:25px;min-width:750px;">
         <div class="salesCard" style="height:450px;position:relative;">
            <div style="position:relative;padding:0 20px;box-sizing: border-box;width:100%;">
               <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}" style="position:absolute;width:96%"  @change="addChange">
               <div class="extra-wrap" slot="tabBarExtraContent" style="position:relative;">
               
               </div>
               <a-tab-pane loading="true" tab="部门员工职务分布" key="1">
                  <a-row>
                  <div id="duty" style="height:400px;width:100%;top:-18px"></div>
                  </a-row>
               </a-tab-pane>
               <a-tab-pane tab="部门员工业务职级分布" key="2">
                  <a-row>
                  <div id="rank" style="height:400px;width:100%;top:-18px"></div>
                  </a-row>
               </a-tab-pane>
               </a-tabs>
            </div>
         </div>
      </a-card>
      <a-card :bordered="false" :body-style="{padding: '0'}" style="margin-top:25px;min-width:750px;">
         <div class="salesCard" style="height:450px;position:relative;">
            <div style="position:relative;padding:0 20px;box-sizing: border-box;width:100%;">
               <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}" style="position:absolute;width:96%"  @change="cultivateChange">
               <div class="extra-wrap" slot="tabBarExtraContent" style="position:relative;">
               
               </div>
               <a-tab-pane loading="true" tab="部门员工学习及培训情况" key="1">
                  <a-row>
                  <div id="study" style="height:390px;width:100%;top:-18px"></div>
                  </a-row>
               </a-tab-pane>
               <a-tab-pane tab="部门员工党风廉政及风险扣分" key="2">
                  <a-row>
                     <a-table bordered :dataSource="dataSource" :columns="columns">
                        <!-- <template slot="name" slot-scope="text, record">
                          <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)"/>
                        </template> -->
                        <template slot="operation" slot-scope="text, record">
                           <a href="javascript:;">点击查看事由</a>
                        </a-popconfirm>
                        </template>
                     </a-table>
                  </a-row>
               </a-tab-pane>
               </a-tabs>
            </div>
         </div>
      </a-card>
   </div>
</template>

<script>
import ACard from "ant-design-vue/es/card/Card";
import echarts from "echarts";
export default {
  data (){
      return {
          //职务职级分布
          brokerageType:1,
          cultivateType:1,
         //  data:datas
          dataSource: [{
            key: '0',
            name: '10月',
            age: '张三',
            address: '-2',
            }, {
            key: '1',
            name: '10月',
            age: '李四',
            address: '-0.5',
            },{
            key: '2',
            name: '9月',
            age: '王五',
            address: '-0.5',
            },{
            key: '3',
            name: '1月',
            age: '赵六',
            address: '-0.5',
            },],
            count: 2,
            columns: [{
            title: '月份',
            dataIndex: 'name',
            scopedSlots: { customRender: 'name' },
            }, {
            title: '姓名',
            dataIndex: 'age',
            }, {
            title: '扣分',
            dataIndex: 'address',
            }, {
            title: '事由',
            dataIndex: 'operation',
            scopedSlots: { customRender: 'operation' },
         }],
      }
  },
  mounted(){
     var _this = this
     setTimeout(function(){
      _this.piePerformanceAction()
      _this.workingHoursAction()
      _this.dutyAction()
      // _this.rankAction()
      _this.studyAction() 
     },100)
     window.onresize = () => {
        this.performanceChart.resize()
        this.workingHoursChart.resize()
        this.dutyChart.resize()
        if(this.brokerageType == 2){
             this.rankChart.resize()
         }
        this.studyChart.resize()
    }
    var icon = document.querySelector('.trigger')
    icon.onclick = function(){
        setTimeout(function(){
          _this.performanceChart.resize()
          _this.workingHoursChart.resize()
          _this.dutyChart.resize()
          if(_this.brokerageType == 2){
             _this.rankChart.resize()
          }
          _this.studyChart.resize()
        },200)
     }
  },
  methods: {
    onSearch (value) {
      console.log(value)
    },
    addChange(activeKey){
         var _this = this
         if(activeKey == 1){
           this.brokerageType = 1
           this.piePerformanceAction()
         }else{
           setTimeout(function(){
               _this.brokerageType = 2
               _this.rankAction()
           })
         }
     },
    cultivateChange(activeKey) {
         var _this = this
         if(activeKey == 1){
           this.cultivateType = 1
         }else{
           setTimeout(function(){
               _this.cultivateType = 2
           })
         }
    },
    piePerformanceAction (){
      this.performanceChart = echarts.init(document.getElementById("performance"));
      var option = {
            tooltip : {
               trigger: 'item',
               formatter: "{b} : {c} "
            },
            grid: {
              left: '0.5%',
              top: '0.1%',
              right: '0.8%',
              bottom: '1%',
              containLabel: true
          },
            legend: {
               // orient: 'vertical',
               // top: 'middle',
               bottom: 10,
               left: 'center',
               data: ['A', 'B+','B','C','D']
            },
            color:['#3BA1FF','#4FCB73','#FBD438','#9861E5','#37CBCB'],
            series : [
               {
                     type: 'pie',
                     radius : '65%',
                     center: ['50%', '50%'],
                     selectedMode: 'single',
                     data:[
                        {
                           value:1548,
                           name: 'A',
                        },
                        {value:535, name: 'B'},
                        {value:510, name: 'B+'},
                        {value:634, name: 'C'},
                        {value:735, name: 'D'}
                     ],
                     itemStyle: {
                        emphasis: {
                           shadowBlur: 10,
                           shadowOffsetX: 0,
                           shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                     }
               }
            ]
         }
         this.performanceChart.setOption(option);
      },
      workingHoursAction(){
          this.workingHoursChart = echarts.init(document.getElementById("workingHours"));
          var option = {
             tooltip : {
               trigger: 'axis',
               axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
               }
             },
             legend: {
                  data: ['平均工作时长'],
                  x: 'center',
                  top:'88%'
               },
               grid: {
                  left: '5%',
                  right: '5%',
                  bottom: '15%',
                  top: '5%',
                  containLabel: true,
               },
               xAxis: {
               type: 'category',
               data: ['团队A', '团队B', '团队C', '团队D']
               },
               color:['#1890FF'],
               yAxis: {
                  type: 'value',
                  min:0,
                  max:10,
               },
               series: [{
                  name:'平均工作时长',
                  data: [6, 6.5, 7.8, 6],
                  type: 'bar',
                     barCategoryGap: '70%'
               }]
            }
         this.workingHoursChart.setOption(option)
      },  
      dutyAction(){
        this.dutyChart = echarts.init(document.getElementById("duty"));
        var option = {
             tooltip : {
               trigger: 'axis',
               axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
               }
             },
             legend: {
                  data: ['在职干部','后备干部'],
                  x: 'center',
                  top:'88%',
                  itemGap:50
               },
               grid: {
                  left: '3%',
                  right: '2%',
                  bottom: '17%',
                  top: '8%',
                  containLabel: true,
               },
               xAxis: {
               type: 'category',
               data: ['总监', '部门负责人', '副总经理', '总经理助理','团队长'],
               },
               color:['#1890FF','#2FC25A'],
               yAxis: {
                  type: 'value',
                  min:0,
                  max:7,
               },
               series: [{
                  name:'在职干部',
                  data: [0, 1, 1.3, 1.5, 4.2],
                  type: 'bar',
                     barCategoryGap: '50%'
               },{
                  name:'后备干部',
                  data: [1.2, 2, 2.3, 3.1, 6.2],
                  type: 'bar',
                     barCategoryGap: '50%'
               }]
            }
         this.dutyChart.setOption(option)
      },
      rankAction(){
        this.rankChart = echarts.init(document.getElementById("rank"));
        var option = {
             tooltip : {
               trigger: 'axis',
               axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
               }
             },
            //  legend: {
            //       data: ['在职干部','后备干部'],
            //       x: 'center',
            //       top:'88%',
            //       itemGap:50
            //    },
               grid: {
                  left: '3%',
                  right: '2%',
                  bottom: '10%',
                  top: '8%',
                  containLabel: true,
               },
               xAxis: {
               type: 'category',
               data: ['懂事总经理', '执行懂事', '业务懂事', '高级经理','经理','助理'],
               },
               color:['#1890FF'],
               yAxis: {
                  type: 'value',
                  min:0,
                  max:7,
               },
               series: [{
                  data: [1, 2, 3, 6, 3, 2],
                  type: 'bar',
                     barCategoryGap: '70%'
               }]
            }
         this.rankChart.setOption(option)
      },
      studyAction() {
         this.studyChart = echarts.init(document.getElementById("study"));
         var option = {
            tooltip : {
                  trigger: 'axis',
                  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
               },
               color:['#1890FF', '#2FC25A', '#FACC14'],
               legend: {
                  data: ['业务类学时', '管理类学时','在线学习'],
                  top:'90%'
               },
               grid: {
                  left: '3%',
                  right: '4%',
                  top: '8%',
                  bottom: '13%',
                  containLabel: true
               },
               xAxis:  {
                  type: 'category',
                  data: ['团队A','团队B','团队C','团队D']
               },
               yAxis: {
                  type: 'value',
                  min:0 ,
                  max: 140,
               },
               series: [
                  {
                        name: '业务类学时',
                        type: 'bar',
                        stack: '总量',
                        label: {
                           normal: {
                              show: true,
                              position: 'inside'
                           }
                        },
                        data: [40, 38, 50, 10],
                        barCategoryGap: '70%'
                  },
                  {
                        name: '管理类学时',
                        type: 'bar',
                        stack: '总量',
                        label: {
                           normal: {
                              show: true,
                              position: 'inside'
                           }
                        },
                        data: [25, 10, 12, ],
                        barCategoryGap: '70%'
                  },
                  {
                        name: '在线学习',
                        type: 'bar',
                        stack: '总量',
                        label: {
                           normal: {
                              show: true,
                              position: 'inside'
                           }
                        },
                        data: [50, 55, 43, 50],
                        barCategoryGap: '70%'
                  },
               ]
            };
            this.studyChart.setOption(option)
         },
         //党建
         onCellChange (key, dataIndex, value) {
            const dataSource = [...this.dataSource]
            const target = dataSource.find(item => item.key === key)
            if (target) {
               target[dataIndex] = value
               this.dataSource = dataSource
            }
         },
         // onDelete (key) {
         //    const dataSource = [...this.dataSource]
         //    this.dataSource = dataSource.filter(item => item.key !== key)
         // },
         handleAdd () {
            const { count, dataSource } = this
            const newData = {
            key: count,
            name: `Edward King ${count}`,
            age: 32,
            address: `London, Park Lane no. ${count}`,
            }
            this.dataSource = [...dataSource, newData]
            this.count = count + 1
         },
      },
   }
</script>

<style scoped>
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
</style>
