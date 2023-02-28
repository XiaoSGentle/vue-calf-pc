<template>
  <div>
    <!-- 积分报告 -->
    <div class="" style="height: 25vh">
      <div class="u-flex">
        <div style="
              width: 30%;
              height: 160px;
              text-align: center;
              padding-top: 3rem;
            " class="u-border">
          <div class="u-font-20">当前积分</div>
          <div class="u-font-30 u-font-blue u-font-bold u-m-t-5">
            {{ scoreReport.obtain - scoreReport.consume }}
          </div>
        </div>
        <div style="
              width: 70%;
              height: 160px;
              text-align: center;
              padding-top: 3rem;
            " class="u-border">
          <el-row>
            <el-col :span="10">
              <div>
                <div class="u-font-20">累计使用</div>
                <div class="u-font-30 u-font-blue u-font-bold u-m-t-5">
                  {{ scoreReport.consume }}
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div>
                <div class="u-font-20">累计获得</div>
                <div class="u-font-30 u-font-blue u-font-bold u-m-t-5">
                  {{ scoreReport.obtain }}
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div style="">
                <el-button type="primary">积分兑好礼</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- 积分详细列表 -->
    <div>近期明细</div>
    <el-divider></el-divider>

    <!-- for位置 -->
    <div v-for="(item, index) in scoreDetials" :key="index">
      <el-row>
        <el-col :span="20">
          <div class="u-font-20">{{ item.event }}</div>

          <div class="u-font-15 u-m-t-10">{{ item.createTime }}</div>
        </el-col>
        <el-col :span="4">
          <div class="u-font-25 u-font-blue">
            {{ item.score }}
          </div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </div>
  </div>
</template>

<script>
import {
  getScoreReport,
  getSCoreListByPage,
} from "../../../api/personInfo/personInfo";

export default {
  name: "VueCalfgoPCMyPoints",

  data() {
    return {
      scoreReport: {},
      scoreDetials: [],
    };
  },

  mounted() {
    this.getInfo();
  },

  methods: {
    getInfo() {
      getScoreReport().then((res) => {
        this.scoreReport = res;
      });
      getSCoreListByPage(1).then((res) => {
        this.scoreDetials = res.rows;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>