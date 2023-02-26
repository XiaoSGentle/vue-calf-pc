<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <header-nav></header-nav>
    <div class="main u-flex u-row-center u-col-top u-m-t-30">
      <div class="left">
        <div class="list u-m-b-20">
          <div class="travel-title u-font-blue"></div>
          <div class="u-m-20">
            <div style="font-size: 25px">{{ articleDetial.title }}</div>

            <div
              class="u-m-t-30"
              style="display: flex; justify-content: space-between"
            >
              <span>
                By:{{ articleDetial.author.nickName }} ----
                {{ articleDetial.createTime }}
              </span>
              <span> 已有{{ articleDetial.readNum }}人阅读 </span>
            </div>
            <p
              class="u-m-t-50"
              style="line-height: 40px"
              v-html="articleDetial.content"
            ></p>
          </div>
        </div>
      </div>
      <div class="right u-m-l-20">
        <div class="list">
          <div class="travel-title u-font-blue">其他文章</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
/* eslint-disable*/
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { getArticleD } from "../../api/cms/article";
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      articleId: "",
      articleDetial: {
        author: "",
      },
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    getArticleDetials() {
      this.articleId = this.$route.params.id;
      getArticleD(this.articleId).then((res) => {
        this.articleDetial = res.data;
      });
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getArticleDetials();
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
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;

  .left {
    width: 850px;

    .list {
      background-color: #ffffff;
      min-height: 00px;
    }
  }

  .right {
    width: 400px;

    .list {
      background-color: #ffffff;
      min-height: 800px;
    }
  }
}

.travel-title {
  font-size: 15px;
  padding: 20px 0px 0px 10px;
}
img {
  height: 400px;
  width: 600px;
}
</style>