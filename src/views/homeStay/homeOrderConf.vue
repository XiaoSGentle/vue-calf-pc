<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <header-nav></header-nav>
    <div class="u-flex u-row-center">
      <div class="u-m-t-10 u-p-40 u-w-900">
        <!-- 标题 -->
        <el-card
          ><span class="u-font-25 u-font-bold">订单确认</span>
          <!-- 房间信息 -->
          <div class="u-m-t-20">
            <el-row>
              <el-col :span="8">
                <img
                  class="u-h-130 u-w-210"
                  :src="baseUrl + homeInfo.cover"
                  alt=""
                />
              </el-col>
              <el-col :span="16">
                <div class="u-m-t-20">
                  <span class="u-font-20 u-font-bold">{{
                    homeInfo.title
                  }}</span>
                </div>
                <div class="u-m-t-20 u-font-grey">
                  {{
                    this.homeInfo.bedNum +
                    "室" +
                    this.homeInfo.parlorNum +
                    "厅" +
                    this.homeInfo.kitchenNum +
                    "厨" +
                    this.homeInfo.bathroomNum +
                    "卫|共" +
                    this.homeInfo.houseArea +
                    "平米|可住" +
                    this.homeInfo.capacity +
                    "人"
                  }}
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <!-- 入住信息 -->
        <el-card class="u-m-t-30 u-p-40">
          <div class="u-flex u-row-between">
            <div class="u-flex">
              <span>入住日期</span>
              <div class="u-w-400 u-m-l-30">
                <el-date-picker
                  style="width: 100%"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="入住日期"
                  end-placeholder="离店日期"
                  v-model="data"
                  value-format="yyyy-MM-dd"
                >
                </el-date-picker>
              </div>
            </div>
            <div class="u-font-blue u-font-bold">共2晚</div>
          </div>
          <el-divider></el-divider>
          <div><span>入住人数 2人 </span></div>
          <el-divider></el-divider>
          <div class="u-flex u-row-between">
            <span>入住客信息 </span>
            <div class="u-font-blue u-font-bold" @click="showSelPer = true">
              编辑/修改
            </div>
          </div>
          <el-divider></el-divider>
        </el-card>
      </div>
      <div class="u-m-t-10 u-w-600">
        <!-- 价格结算   -->
        <el-card>
          <div class="u-flex u-row-between">
            <span>房费 </span>
            <div>
              200.00元x2晚 =
              <span class="u-font-blue u-font-bold">400.00</span>
              元
            </div>
          </div>
          <el-divider></el-divider>
          <div class="u-flex u-row-between">
            <span>选择优惠 </span>
            <div class="u-font-blue u-font-bold">
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
          <el-divider></el-divider>

          <div class="u-fr">
            本单共需要支付：<span
              class="u-font-30 u-font-bold u-font-red"
              style="line-height: 70px"
              >400￥</span
            >
          </div>
        </el-card>
        <!-- 留言 -->

        <el-card class="u-m-t-30">
          <div class="u-flex">
            <span class="u-w-50">留言</span
            ><el-input
              type="textarea"
              :rows="6"
              placeholder="请输入您的留言"
              v-model="message"
            >
            </el-input>
          </div>
        </el-card>

        <div class="u-m-t-20 u-line-height-23">
          <p>退订政策:入住前1天12:00前退订，可获100%退款。之后退订不退款</p>
          <p>入离时间:12:00之后可入住，12:00之前需退房</p>
          <p>开具发票:房东开具发票</p>
        </div>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="showSelPer" width="30%" center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showSelPer = false">取 消</el-button>
        <el-button type="primary" @click="showSelPer = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script >
/* eslint-disable*/
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import {
  getHouseDetials,
  getHourseQuestions,
  getHourseIsLike,
  collectHouse,
  cancelCollectHouse,
} from "../../api/hourses/hourse";
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      showSelPer: false,
      baseUrl: this.getBaseUrl(),
      homeId: "",
      data: [],
      homeInfo: {},
      message: "",
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    getHomedetial() {
      getHouseDetials(this.homeId).then((res) => {
        this.homeInfo = res.data;
      });
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.homeId = this.$route.params.homeId;
    this.data = this.$route.params.data;
    this.getHomedetial();
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped></style>