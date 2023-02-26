<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <header-nav></header-nav>
    <!-- 上半部分广告 -->
    <div class="" style="height: 400px"></div>
    <!--下部分卡片区域 -->
    <div class="u-flex u-row-center u-m-t-40">
      <div style="width: 80%">
        <div class="u-m-30">
          <!--内部酒店卡片 -->
          <div
            class="u-flex u-row-left u-m-t-10"
            style="background-color: aliceblue; border-radius: 5px"
            v-for="(item, index) in homes"
            :key="index"
            @click="goDetials(item.id)"
          >
            <img
              style="height: 180px; width: 200px"
              class="u-m-l-10"
              :src="baseUrl + item.cover"
              alt=""
            />
            <div style="height: 180px; width: 70%" class="u-m-20 u-p-20">
              <div class="u-font-20 u-font-bold">{{ item.title }}</div>
              <el-rate
                disabled
                v-model="item.score / 1"
                class="u-m-t-10"
              ></el-rate>
              <div class="u-m-t-10">{{ item.cityInfo }}</div>
              <div class="u-m-t-10">
                <el-tag>{{ item.tags }}</el-tag>
              </div>
            </div>
            <div
              style="height: 180px; width: 25%"
              class="u-border-left u-p-l-80"
            >
              <div class="u-font-40" style="margin-left: 30px">
                {{ item.score }}分
              </div>
              <div
                class="u-font-20 u-font-bold u-m-t-80"
                style="color: dodgerblue"
              >
                ￥{{ item.price }}
              </div>
              <div class="u-m-t-10">
                <el-button type="primary">立即订房</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { getHouse } from "../../api/hourses/hourse.js";
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      baseUrl: this.getBaseUrl(),
      homeStayParam: {
        startDate: "",
        endDate: "",
        city: "",
      },
      homes: [],
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    getHomeByParams() {
      getHouse(this.homeStayParam).then((res) => {
        this.homes = res.rows;
      });
    },
    goDetials(id) {
      this.$router.push({ name: "homeStayDetials", query: { id: id } });
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.homeStayParam = this.$route.params;
    this.getHomeByParams();
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