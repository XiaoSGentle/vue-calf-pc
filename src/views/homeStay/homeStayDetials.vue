<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <header-nav></header-nav>
    <div class="u-m-t-10 u-p-40 u-w-1110" style="height: 100vh; margin: auto">
      <!-- 房子card -->
      <el-card>
        <!-- 标题栏 -->
        <div class="u-flex">
          <!-- 酒店标题 -->
          <span class="u-font-25 u-font-bold">{{ homeInfo.title }}</span>
          <!-- 酒店评分 -->
          <span class="u-m-t-10 u-m-l-10"
            ><el-rate v-model="homeInfo.score / 1" disabled> </el-rate
          ></span>
          <!-- <span> <i class="el-icon-share"></i></span> -->
        </div>
        <div class="u-flex">
          <!-- 左信息 -->
          <div class="u-w-650">
            <div class="u-m-t-10 u-font-grey">
              <!-- 地址 -->
              <div class="u-flex">
                <span><i class="el-icon-location"></i></span>
                <span
                  >{{ homeInfo.province }}-{{ homeInfo.city }}-{{
                    homeInfo.area
                  }}--{{ homeInfo.location }}</span
                >
              </div>
              <!-- 装修 -->
              <div class="u-m-t-10 u-abso u-fl u-w-600">
                <span><i class="el-icon-office-building"></i></span>
                <span>装修:{{ homeInfo.tags }}</span>
                <span class="u-font-bold u-font-blue u-fr">查看更多</span>
              </div>
            </div>
            <!-- 图片区 -->
            <div class="u-m-t-50 u-w-600 u-h-300">
              <div class="u-flex">
                <!-- 左侧走马灯 -->
                <div>
                  <el-carousel
                    class="u-radius"
                    style="height: 300px; width: 480px"
                  >
                    <el-carousel-item
                      v-for="(item, index) in homeInfo.imageList"
                      :key="index"
                    >
                      <div>
                        <img
                          style="height: 300px; width: 480px"
                          :src="baseUrl + item.url"
                          alt=""
                        />
                      </div>
                    </el-carousel-item>
                  </el-carousel>
                </div>
                <!-- 右侧缩略 -->
                <div class="u-m-l-20 u-h-240 u-w-120">
                  <div
                    class="u-radius"
                    v-for="(item, index) in homeInfo.imageList"
                    :key="index"
                  >
                    <img class="u-h-120 u-w-120" :src="baseUrl + item.url" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 右边订购 -->
          <div class="u-w-380 u-h-370 u-p-20">
            <!-- 日期选择 -->
            <div>
              <el-date-picker
                style="width: 100%"
                type="daterange"
                range-separator="至"
                start-placeholder="入住日期"
                end-placeholder="离店日期"
                v-model="getData"
                value-format="yyyy-MM-dd"
              >
              </el-date-picker>
            </div>
            <!-- 收藏人数，评论人数-->
            <div class="u-flex u-row-around u-m-t-50">
              <div>
                <span
                  ><svg-icon class="icon" iconClass="shoucang_1" />{{
                    homeInfo.collectNum
                  }}人收藏</span
                >
              </div>
              <div>
                <span
                  ><svg-icon class="icon" iconClass="pinglun" />{{
                    homeInfo.commentNum
                  }}条评论</span
                >
              </div>
            </div>
            <div class="u-h-180"></div>
            <!-- 提交按钮 -->
            <div class="u-flex">
              <el-button
                style="width: 100%"
                type="success"
                round
                @click="goAddOrder()"
              >
                立即订房</el-button
              >
              <div class="u-m-l-10" @click="collectBtn()">
                <span
                  ><svg-icon
                    class="icon"
                    :iconClass="isLiked ? 'hongxin' : 'shoucang'"
                /></span>
              </div>
            </div>
          </div>
        </div>
      </el-card>
      <!-- 房子的详细信息 -->
      <el-card class="u-m-t-20 u-p-t-20">
        <div>
          <span class="u-font-25 u-font-bold">详细信息</span>
        </div>
        <div class="u-m-l-30">
          <!-- 基本设施 -->
          <div class="u-m-t-20">
            <span class="u-font-20 u-font-bold">基本设施</span>
            <div class="u-flex u-m-t-20">
              <el-tag
                class="u-m-l-10"
                v-for="(item, index) in homeTag"
                :key="index"
                type="success"
                >{{ item }}</el-tag
              >
            </div>
          </div>
          <!-- 房间信息 -->
          <div class="u-m-t-20">
            <span class="u-font-20 u-font-bold">房间信息</span>
            <div class="u-flex u-row-around u-m-t-20 u-h-60 u-border">
              <div><span>卧室数量:</span>{{ homeInfo.bedNum }}</div>
              <div><span>客厅数量:</span>{{ homeInfo.parlorNum }}</div>
              <div><span>厨房数量:</span>{{ homeInfo.kitchenNum }}</div>
              <div><span>浴室数量:</span>{{ homeInfo.bathroomNum }}</div>
              <div><span>房间大小:</span>{{ homeInfo.houseArea }}平方米</div>
            </div>
          </div>
        </div>
      </el-card>
      <!-- 房子优势 -->
      <el-card class="u-m-t-20 u-p-t-20">
        <div>
          <span class="u-font-25 u-font-bold">酒店优势</span>
        </div>
        <div class="u-m-l-30 u-m-t-20" style="line-height: 30px">
          <!-- 基本设施 -->
          <p>{{ homeInfo.advantage }}</p>
        </div>
      </el-card>
      <!--房间问答 -->
      <el-card class="u-m-t-20 u-p-t-20">
        <div>
          <span class="u-font-25 u-font-bold">租客问答</span>
        </div>
        <div class="u-m-t-20">
          <div
            v-for="(item, index) in homeQuestions"
            :key="index"
            class="u-m-30"
          >
            <!-- 问题区 -->
            <div class="u-flex u-row-between">
              <div class="u-flex">
                <el-avatar
                  :size="30"
                  :src="baseUrl + item.user.avatar"
                ></el-avatar>
                <span class="u-font-22 u-font-bold u-m-l-10">{{
                  item.content
                }}</span>
              </div>
              <div>
                {{ item.createTime }}
              </div>
            </div>
            <!-- 答案区 -->
            <div class="u-m-t-10 u-flex">
              <el-avatar
                :size="30"
                :src="baseUrl + item.latestAnswer.user.avatar"
              ></el-avatar>
              <span class="u-font-20 u-m-l-10">{{
                item.latestAnswer.content
              }}</span>
            </div>
            <el-divider></el-divider>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script >
/* eslint-disable*/
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { hostname } from "os";
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
      isLiked: true,
      baseUrl: this.getBaseUrl(),
      getData: [],
      homeId: this.$route.query.id,
      homeTag: [],
      homeInfo: {
        imageList: [],
      },
      homeQuestions: [],
      goConfimOrderParam: {
        data: this.getData,
        homeId: this.id,
      },
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    getHomedetials() {
      getHouseDetials(this.homeId).then((res) => {
        this.homeInfo = res.data;
        this.homeTag = res.data.equipment.split("、");
      }),
        getHourseQuestions({ houseId: this.homeId }).then((res) => {
          this.homeQuestions = res.rows;
        }),
        getHourseIsLike({ houseId: this.homeId }).then((res) => {
          this.isLiked = res.data.isCollect == 1;
        });
    },
    goAddOrder() {
      this.$router.push({
        name: "confirmOrder",
        params: { homeId: this.homeId, data: this.getData },
      });
    },
    collectBtn() {
      if (this.isLiked) {
        this.cancelCollectHouse();
      } else {
        this.collectHouse();
      }
      this.isLiked = !this.isLiked;
    },
    collectHouse() {
      collectHouse(this.homeId).then((res) => {
        if (res.code == 200) {
          this.$message.success("收藏成功");
        }
      });
    },
    cancelCollectHouse() {
      cancelCollectHouse(this.homeId).then((res) => {
        if (res.code == 200) {
          this.$message.success("取消收藏成功");
        }
      });
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getHomedetials();
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
<style scoped>
.icon {
  height: 30px;
  width: 30px;
}
</style>