<template>
  <div class="home_wrapper">
    <v-header :resource-list="resourceList" :real-name="userInfo.realName"></v-header>
    <div class="content">
      <div class="left-bar" id="left_bar">
        <div class="second_menu" v-for="(second, index) in secondMenuList" :key="second.id">
          <router-link :to="second.url" class="seconedMenu_a" name="seconedMenu_a" :class="currentRoute === second.url ? '' : 'seconedMenu_active'" @click="secondMenuClick(index)">
            <img :src="'static/nav/' + second.icons + '.png'" />
            {{second.name}}
          </router-link>
          <div v-if="second.children.length > 0" class="three-menu-content" name="three-menu-content">
            <div v-for="three in second.children"  :key="three.id" class="three_menu">
              <router-link :to="three.url" class="threeMenu_a" >{{three.name}}</router-link>
            </div>
            <!-- /for -->
          </div>
        </div>
      </div>
      <div class="right-bar">
        <div class="top_shadow"></div>
        <div id="container"></div>
      </div>
    </div>
    <v-hint></v-hint>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from 'components/header/header';
  import hint from 'components/hint/hint';
  import Bus from '../../common/js/bus.js';
  export default {
    data() {
      return {
        userInfo: {},
        userId: JSON.parse(window.localStorage.getItem('userInfo')).id,
        resourceList: [],
        secondMenuList: [],
        currentRoute: ''
      };
    },
    mounted() {
      // 组件开始挂载时获取用户信息
      this.getUserInfo();
      this.navData();
      Bus.$on('headerData', (value) => {
        this.secondMenuList = value.secondMenuList;
        this.setNavSelected('', value.firstMenuIndex, this.resourceList);
      });
    },
    components: {
      'v-header': header,
        'v-hint': hint
    },
    methods: {
      getUserInfo() {
        let url = '/rbac/mvc/user/getUserInfo?userId=' + this.userId;
        this.$http.get(url, {emulateJSON: true}).then((response) => {
          this.userInfo = response.user;
        });
      },
      navData() {
        let url = '/rbac/mvc/resource/findTreeByUser?userId=' + this.userId;
        this.$http.get(url).then((response) => {
          this.resourceList = response.resourceList;
          /* eslint-disable */
          this.resourceList = [
              {
                "icons": "level_1_fpkj",
                "level": 1,
                "id": 1,
                "name": "发票开具",
                "parentId": null,
                "parentName": "",
                "selected": false,
                "url": "bill",
                "children": [
                  {
                    "icons": "level_2_fpkj",
                    "level": 2,
                    "name": "发票开具",
                    "parentId": null,
                    "parentName": "",
                    "selected": false,
                    "url": "",
                    "children": [
                      {
                        "icons": "",
                        "level": 3,
                        "name": "正数开具（电票）",
                        "parentId": null,
                        "parentName": "",
                        "selected": false,
                        "url": "ele.positiveNumber.bill",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "负数开具（电票）",
                        "parentId": null,
                        "parentName": "",
                        "selected": false,
                        "url": "ele.negativeNumber.bill",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "正数开具（普票）",
                        "parentId": null,
                        "parentName": "",
                        "selected": false,
                        "url": "gen.positiveNumber.bill",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "负数开具（普票）",
                        "parentId": null,
                        "parentName": "",
                        "selected": false,
                        "url": "gen.negativeNumber.bill",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "正数开具（专票）",
                        "parentId": null,
                        "parentName": "",
                        "selected": false,
                        "url": "spe.positiveNumber.bill",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "负数开具（专票）",
                        "parentId": null,
                        "parentName": "",
                        "selected": false,
                        "url": "spe.negativeNumber.bill",
                        "children": []
                      }
                    ]
                  },
                  {
                    "icons": "level_2_fpcx",
                    "level": 2,
                    "name": "发票查询",
                    "parentId": null,
                    "parentName": "",
                    "selected": false,
                    "url": "query.bill",
                    "children": []
                  },
                  {
                    "icons": "level_2_cwgl",
                    "level": 2,
                    "name": "财务管理",
                    "parentId": null,
                    "parentName": "",
                    "selected": false,
                    "url": "finance.bill",
                    "children": []
                  },
                  {
                    "icons": "level_2_kpsq",
                    "level": 2,
                    "name": "开票申请",
                    "parentId": null,
                    "parentName": "",
                    "selected": false,
                    "url": "apply.bill",
                    "children": []
                  },
                  {
                    "icons": "level_2_dkgl",
                    "level": 2,
                    "name": "待开管理",
                    "parentId": null,
                    "parentName": "",
                    "selected": false,
                    "url": "stay.bill",
                    "children": []
                  },
                  {
                    "icons": "level_2_cfgl",
                    "level": 2,
                    "name": "拆分管理",
                    "parentId": null,
                    "parentName": "",
                    "selected": false,
                    "url": "split.bill",
                    "children": []
                  },
                  {
                    "icons": "level_2_hzxxbgl",
                    "level": 2,
                    "name": "红字信息表管理",
                    "parentId": null,
                    "parentName": "",
                    "selected": false,
                    "url": "",
                    "children": [
                      {
                        "icons": "",
                        "level": 3,
                        "name": "红字信息表填开",
                        "parentId": null,
                        "parentName": "",
                        "selected": false,
                        "url": "hz.create.bill",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "红字信息表管理",
                        "parentId": null,
                        "parentName": "",
                        "selected": false,
                        "url": "hz.list.bill",
                        "children": []
                      }
                    ]
                  },
                  {
                    "icons": "level_2_ewmsc",
                    "level": 2,
                    "name": "二维码生成",
                    "parentId": null,
                    "parentName": "",
                    "selected": false,
                    "url": "qrcode.bill",
                    "children": []
                  },
                ]
              },
              {
                "icons": "level_1_zzsgl",
                "level": 1,
                "id": 2,
                "name": "增值税管理",
                "parentId": null,
                "parentName": "",
                "selected": false,
                "url": "VAT",
                "children": [
                  {
                    "icons": "level_2_jxfpgl",
                    "level": 2,
                    "name": "进项发票管理",
                    "parentName": "增值税管理",
                    "selected": false,
                    "url": "",
                    "children": [
                      {
                        "icons": "",
                        "level": 3,
                        "name": "电子底账库",
                        "parentId": null,
                        "parentName": "进项发票管理",
                        "selected": false,
                        "url": "dzdzk.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "发票采集",
                        "parentId": null,
                        "parentName": "进项发票管理",
                        "selected": false,
                        "url": "",
                        "children": [
                          {
                            "icons": "",
                            "level": 4,
                            "name": "纸票扫描录入",
                            "parentId": null,
                            "parentName": "发票采集",
                            "selected": false,
                            "url": "fpcj.zpsmlr.VAT",
                            "children": []
                          },
                          {
                            "icons": "",
                            "level": 4,
                            "name": "手工采集录入",
                            "parentId": null,
                            "parentName": "发票采集",
                            "selected": false,
                            "url": "fpcj.sgcjlr.VAT",
                            "children": []
                          },
                          {
                            "icons": "",
                            "level": 4,
                            "name": "扫描枪录入",
                            "parentId": null,
                            "parentName": "发票采集",
                            "selected": false,
                            "url": "fpcj.smqlr.VAT",
                            "children": []
                          },
                          {
                            "icons": "",
                            "level": 4,
                            "name": "图片识别录入",
                            "parentId": null,
                            "parentName": "发票采集",
                            "selected": false,
                            "url": "fpcj.tpsblr.VAT",
                            "children": []
                          },
                          {
                            "icons": "",
                            "level": 4,
                            "name": "电票识别录入",
                            "parentId": null,
                            "parentName": "发票采集",
                            "selected": false,
                            "url": "fpcj.dpsblr.VAT",
                            "children": []
                          },
                          {
                            "icons": "",
                            "level": 4,
                            "name": "发票批量录入",
                            "parentId": null,
                            "parentName": "发票采集",
                            "selected": false,
                            "url": "fpcj.fppllr.VAT",
                            "children": []
                          },
                          {
                            "icons": "",
                            "level": 4,
                            "name": "已采集发票管理",
                            "parentId": null,
                            "parentName": "发票采集",
                            "selected": false,
                            "url": "fpcj.ycjfpgl.VAT",
                            "children": []
                          }
                        ]
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "发票认证",
                        "parentId": null,
                        "parentName": "进项发票管理",
                        "selected": false,
                        "url": "",
                        "children": [
                          {
                            "icons": "",
                            "level": 4,
                            "name": "认证结果查询",
                            "parentId": null,
                            "parentName": "发票认证",
                            "selected": false,
                            "url": "fprz.rzjgcx.VAT",
                            "children": []
                          }
                        ]
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "账务管理",
                        "parentId": null,
                        "parentName": "进项发票管理",
                        "selected": false,
                        "url": "",
                        "children": [
                          {
                            "icons": "",
                            "level": 4,
                            "name": "同步ERP待认证数据",
                            "parentId": null,
                            "parentName": "账务管理",
                            "selected": false,
                            "url": "zwgl.tbERPdrzgl.VAT",
                            "children": []
                          },
                          {
                            "icons": "",
                            "level": 4,
                            "name": "账务预警",
                            "parentId": null,
                            "parentName": "账务管理",
                            "selected": false,
                            "url": "zwgl.zwyj.VAT",
                            "children": []
                          },
                          {
                            "icons": "",
                            "level": 4,
                            "name": "已出账数据查询",
                            "parentId": null,
                            "parentName": "账务管理",
                            "selected": false,
                            "url": "zwgl.yczsjcx.VAT",
                            "children": []
                          },
                          {
                            "icons": "",
                            "level": 4,
                            "name": "已认证未出账数据",
                            "parentId": null,
                            "parentName": "账务管理",
                            "selected": false,
                            "url": "zwgl.yrzwczsj.VAT",
                            "children": []
                          },
                          {
                            "icons": "",
                            "level": 4,
                            "name": "财务出账",
                            "parentId": null,
                            "parentName": "账务管理",
                            "selected": false,
                            "url": "zwgl.zwcz.VAT",
                            "children": []
                          }
                        ]
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "预警管理",
                        "parentId": null,
                        "parentName": "进项发票管理",
                        "selected": false,
                        "url": "",
                        "children": [
                          {
                            "icons": "",
                            "level": 4,
                            "name": "认证期限预警",
                            "parentId": null,
                            "parentName": "预警管理",
                            "selected": false,
                            "url": "yjgl.rzqxyj.VAT",
                            "children": []
                          },
                          {
                            "icons": "",
                            "level": 4,
                            "name": "在途发票预警",
                            "parentId": null,
                            "parentName": "预警管理",
                            "selected": false,
                            "url": "yjgl.ztfpyj.VAT",
                            "children": []
                          },
                          {
                            "icons": "",
                            "level": 4,
                            "name": "虚开发票预警",
                            "parentId": null,
                            "parentName": "预警管理",
                            "selected": false,
                            "url": "yjgl.xkfpyj.VAT",
                            "children": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "icons": "level_2_jxsezc",
                    "level": 2,
                    "name": "进项税额转出",
                    "parentName": "增值税管理",
                    "selected": false,
                    "url": "",
                    "children": [
                      {
                        "icons": "",
                        "level": 3,
                        "name": "转出处理",
                        "parentId": null,
                        "parentName": "进项税额转出",
                        "selected": false,
                        "url": "sezc.zccl.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "财务出账",
                        "parentId": null,
                        "parentName": "进项税额转出",
                        "selected": false,
                        "url": "sezc.cwcz.VAT",
                        "children": []
                      }
                    ]
                  },
                  {
                    "icons": "level_2_hgzyjks",
                    "level": 2,
                    "name": "海关专用缴款书",
                    "parentName": "增值税管理",
                    "selected": false,
                    "url": "",
                    "children": [
                      {
                        "icons": "",
                        "level": 3,
                        "name": "获取系统数据",
                        "parentId": null,
                        "parentName": "海关专用缴款书",
                        "selected": false,
                        "url": "hg.hqxtsj.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "生成抵扣清单",
                        "parentId": null,
                        "parentName": "海关专用缴款书",
                        "selected": false,
                        "url": "hg.scdkqd.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "稽核数据导出",
                        "parentId": null,
                        "parentName": "海关专用缴款书",
                        "selected": false,
                        "url": "hg.jhshdc.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "稽核结果导入",
                        "parentId": null,
                        "parentName": "海关专用缴款书",
                        "selected": false,
                        "url": "hg.jhjgdr.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "账务处理",
                        "parentId": null,
                        "parentName": "海关专用缴款书",
                        "selected": false,
                        "url": "hg.zwcl.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "财务出账",
                        "parentId": null,
                        "parentName": "海关专用缴款书",
                        "selected": false,
                        "url": "hg.zwcz.VAT",
                        "children": []
                      }
                    ]
                  },
                  {
                    "icons": "level_2_dkdjzzs",
                    "level": 2,
                    "name": "代扣代缴增值税",
                    "parentName": "增值税管理",
                    "selected": false,
                    "url": "",
                    "children": [
                      {
                        "icons": "",
                        "level": 3,
                        "name": "数据导入",
                        "parentId": null,
                        "parentName": "代扣代缴增值税",
                        "selected": false,
                        "url": "dkdj.sjdr.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "生成抵用清单",
                        "parentId": null,
                        "parentName": "代扣代缴增值税",
                        "selected": false,
                        "url": "dkdj.scdyqd.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "账务处理",
                        "parentId": null,
                        "parentName": "代扣代缴增值税",
                        "selected": false,
                        "url": "dkdj.zwcl.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "财务出账",
                        "parentId": null,
                        "parentName": "代扣代缴增值税",
                        "selected": false,
                        "url": "dkdj.zwcz.VAT",
                        "children": []
                      }
                    ]
                  },
                  {
                    "icons": "level_2_qtsxgl",
                    "level": 2,
                    "name": "其他税项管理",
                    "parentName": "增值税管理",
                    "selected": false,
                    "url": "",
                    "children": [
                      {
                        "icons": "",
                        "level": 3,
                        "name": "城建税",
                        "parentId": null,
                        "parentName": "其他税项管理",
                        "selected": false,
                        "url": "qtsx.cjs.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "教育附加费",
                        "parentId": null,
                        "parentName": "其他税项管理",
                        "selected": false,
                        "url": "qtsx.jyfjf.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "地方教育基金",
                        "parentId": null,
                        "parentName": "其他税项管理",
                        "selected": false,
                        "url": "qtsx.dfjyjj.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "房产税",
                        "parentId": null,
                        "parentName": "其他税项管理",
                        "selected": false,
                        "url": "qtsx.fcs.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "土地税",
                        "parentId": null,
                        "parentName": "其他税项管理",
                        "selected": false,
                        "url": "qtsx.tds.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "车船税",
                        "parentId": null,
                        "parentName": "其他税项管理",
                        "selected": false,
                        "url": "qtsx.ccs.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "印花税",
                        "parentId": null,
                        "parentName": "其他税项管理",
                        "selected": false,
                        "url": "qtsx.yhs.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "土地使用费",
                        "parentId": null,
                        "parentName": "其他税项管理",
                        "selected": false,
                        "url": "qtsx.tdsyf.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "企业所得税",
                        "parentId": null,
                        "parentName": "其他税项管理",
                        "selected": false,
                        "url": "qtsx.qysds.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "个人所得税",
                        "parentId": null,
                        "parentName": "其他税项管理",
                        "selected": false,
                        "url": "qtsx.grsds.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "预提所得税（不含经营性租赁）",
                        "parentId": null,
                        "parentName": "其他税项管理",
                        "selected": false,
                        "url": "qtsx.ytsdsNo.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "预提所得税（含经营性租赁）",
                        "parentId": null,
                        "parentName": "其他税项管理",
                        "selected": false,
                        "url": "qtsx.ytsds.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "预提流传税附加",
                        "parentId": null,
                        "parentName": "其他税项管理",
                        "selected": false,
                        "url": "qtsx.ytlzsfj.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "预提增值税",
                        "parentId": null,
                        "parentName": "其他税项管理",
                        "selected": false,
                        "url": "qtsx.ytzzs.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "关税",
                        "parentId": null,
                        "parentName": "其他税项管理",
                        "selected": false,
                        "url": "qtsx.gs.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "残保金",
                        "parentId": null,
                        "parentName": "其他税项管理",
                        "selected": false,
                        "url": "qtsx.cbj.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "土地增值税",
                        "parentId": null,
                        "parentName": "其他税项管理",
                        "selected": false,
                        "url": "qtsx.tdzzs.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "其他",
                        "parentId": null,
                        "parentName": "其他税项管理",
                        "selected": false,
                        "url": "qtsx.qt.VAT",
                        "children": []
                      }
                    ]
                  },
                  {
                    "icons": "level_2_jxsjfx",
                    "level": 2,
                    "name": "进项数据分析",
                    "parentName": "增值税管理",
                    "selected": false,
                    "url": "",
                    "children": [
                      {
                        "icons": "",
                        "level": 3,
                        "name": "已认证发票统计",
                        "parentId": null,
                        "parentName": "进项数据分析",
                        "selected": false,
                        "url": "jxsj.yrzfptj.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "折扣趋势分析",
                        "parentId": null,
                        "parentName": "进项数据分析",
                        "selected": false,
                        "url": "jxsj.zkqsfx.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "发票认证统计",
                        "parentId": null,
                        "parentName": "进项数据分析",
                        "selected": false,
                        "url": "jxsj.fprztj.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "销方排名",
                        "parentId": null,
                        "parentName": "进项数据分析",
                        "selected": false,
                        "url": "jxsj.xfpm.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "发票录入统计",
                        "parentId": null,
                        "parentName": "进项数据分析",
                        "selected": false,
                        "url": "jxsj.fplrtj.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "折扣明细统计",
                        "parentId": null,
                        "parentName": "进项数据分析",
                        "selected": false,
                        "url": "jxsj.zkmxtj.VAT",
                        "children": []
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "折扣汇总统计",
                        "parentId": null,
                        "parentName": "进项数据分析",
                        "selected": false,
                        "url": "jxsj.zkhztj.VAT",
                        "children": []
                      }
                    ]
                  },
                  {
                    "icons": "level_2_sbgl",
                    "level": 2,
                    "name": "申报管理",
                    "parentName": "增值税管理",
                    "selected": false,
                    "url": "",
                    "children": [
                      {
                        "icons": "",
                        "level": 3,
                        "name": "免抵退申报",
                        "parentId": null,
                        "parentName": "申报管理",
                        "selected": false,
                        "url": "",
                        "children": [
                          {
                            "icons": "",
                            "level": 4,
                            "name": "航空运输收入清算账单",
                            "parentId": null,
                            "parentName": "免抵退申报",
                            "selected": false,
                            "url": "mdtsb.hkys.VAT",
                            "children": []
                          },
                          {
                            "icons": "",
                            "level": 4,
                            "name": "国际、港澳台运输申报明细表",
                            "parentId": null,
                            "parentName": "免抵退申报",
                            "selected": false,
                            "url": "mdtsb.gjggt.VAT",
                            "children": []
                          },
                          {
                            "icons": "",
                            "level": 4,
                            "name": "申报查询",
                            "parentId": null,
                            "parentName": "免抵退申报",
                            "selected": false,
                            "url": "mdtsb.sbcx.VAT",
                            "children": []
                          }
                        ]
                      },
                      {
                        "icons": "",
                        "level": 3,
                        "name": "增值税申报",
                        "parentId": null,
                        "parentName": "申报管理",
                        "selected": false,
                        "url": "",
                        "children": [
                          {
                            "icons": "",
                            "level": 4,
                            "name": "国航本部纳税申报",
                            "parentId": null,
                            "parentName": "增值税申报",
                            "selected": false,
                            "url": "zzssb.ghbbns.VAT",
                            "children": []
                          },
                          {
                            "icons": "",
                            "level": 4,
                            "name": "分公司纳税申报",
                            "parentId": null,
                            "parentName": "增值税申报",
                            "selected": false,
                            "url": "zzssb.fgsns.VAT",
                            "children": []
                          },
                          {
                            "icons": "",
                            "level": 4,
                            "name": "传递单",
                            "parentId": null,
                            "parentName": "增值税申报",
                            "selected": false,
                            "url": "zzssb.cdd.VAT",
                            "children": []
                          },
                          {
                            "icons": "",
                            "level": 4,
                            "name": "申报查询",
                            "parentId": null,
                            "parentName": "增值税申报",
                            "selected": false,
                            "url": "zzssb.sbcx.VAT",
                            "children": []
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "icons": "",
                "level": 1,
                "id": 3,
                "name": "系统管理",
                "parentId": null,
                "parentName": "",
                "selected": false,
                "url": "system",
                "children": [
                  {
                    "icons": "level_2_jggl",
                    "level": 2,
                    "name": "机构管理",
                    "parentName": "系统管理",
                    "selected": false,
                    "url": "organ.system",
                    "children": []
                  },
                  {
                    "icons": "level_2_yhgl",
                    "level": 2,
                    "name": "用户管理",
                    "parentName": "系统管理",
                    "selected": false,
                    "url": "user.system",
                    "children": []
                  },
                  {
                    "icons": "level_2_jsgl",
                    "level": 2,
                    "name": "角色管理",
                    "selected": false,
                    "url": "role.system",
                    "children": []
                  },
                  {
                    "icons": "level_2_spgl",
                    "level": 2,
                    "name": "审批管理",
                    "selected": false,
                    "url": "approval.system",
                    "children": []
                  },
                  {
                    "icons": "level_2_spxxwh",
                    "level": 2,
                    "name": "商品信息维护",
                    "selected": false,
                    "url": "goodsMsg.system",
                    "children": []
                  },
                  {
                    "icons": "level_2_khxxwh",
                    "level": 2,
                    "name": "客户信息维护",
                    "selected": false,
                    "url": "clientMsg.system",
                    "children": []
                  }
                ]
              }
           ];
          this.setNavSelected('', 0, this.resourceList);
        });
      },
      setNavSelected(route, index, menuList) {
        if (route === '') {
          // route为空，找到一个默认有权限菜单
          var firstChild = menuList[index].children[0];
          if (firstChild.url !== '') {
            this.$router.push(firstChild.url);
            this.currentRoute = route = firstChild.url;
          } else if (firstChild.url === '') {
            var secondChild = firstChild.children[0];
            if (secondChild.url !== '') {
              this.$router.push(secondChild.url);
              this.currentRoute = route = secondChild.url;
            } else if (secondChild.url === '') {
              var threeChild = secondChild.children[0];
              if (threeChild.url !== 'javascript') {
                this.$router.push(threeChild.url);
                this.currentRoute = route = threeChild.url;
              } else if (threeChild.url === 'javascript') {
                var fourChild = threeChild.children[0];
                this.$router.push(fourChild.url);
                this.currentRoute = route = fourChild.url;
              }
            }
          }
        }

        for (var i = 0; i < menuList.length; i++) {
          var url = menuList[i].url.replace('', '');
          if (route.indexOf(url) !== -1) {
            // 二级菜单内容
            this.secondMenuList = menuList[i].children;
            break;
          }
        }
      },
      secondMenuClick(index) {}
    },
    computed: {
    }
  };
</script>

<style lang="stylus" rel="stylesheet" scoped>
  .home_wrapper
    width 100%
    min-width 1200px
    height auto
    min-height 100%
    background #f3f3f3
    .content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      height: auto;
      background: #f3f3f3;
      padding-top: 70px;
      .left-bar {
        float: left;
        width: 200px;
        height: 100%;
        overflow-y: auto;
        background: #212844;
        .second_menu {
          a {
            padding-left: 30px;
            position: relative;
            display: block;
            width: 100%;
            height: auto;
            line-height: 54px;
            color: #828995;
            font-size: 14px;
            box-sizing: border-box;
            img {
              margin-right: 12px;
              /*width: 16px;
              height: 16px;*/
              vertical-align: -2px;
            }
          }
        }
      }
    }
</style>
