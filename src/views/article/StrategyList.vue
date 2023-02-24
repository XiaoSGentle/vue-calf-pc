<template>
  <div>
    <header-nav></header-nav>
    <div class="main u-flex u-row-center u-col-top">
      <div class="left">
        <div class="u-p-t-20 u-p-b-20">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>全部攻略</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="list u-m-b-20">
          <div class="travel-title u-font-blue">旅游攻略</div>
          <el-divider></el-divider>
          <big-list :list="leftList" :total="total" :pageSize="queryParams.pageSize" :pageNum="queryParams.pageNum"
            @page="handlePage"></big-list>
        </div>
      </div>
      <div class="right u-m-t-55 u-m-l-20">
        <div class="list">
          <div class="travel-title u-font-blue">当季旅游攻略</div>
          <el-divider></el-divider>
        </div>
      </div>
    </div>
    <y-footer></y-footer>
  </div>
</template>
<script>
import { getArticleList } from '@/api/cms/article';
import BigList from '@/components/Article/BigList';
export default {
  components: {
    BigList
  },
  data() {
    return {
      total: 0,
      category: null,
      leftList: [],
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        category: this.$route.params.category,
        reason: null,
      },
    }
  },
  created() {
    this.getList();
  },
  methods: {
    handlePage(index) {
      this.queryParams.pageNum = index;
      this.getList();
    },
    getList() {
      getArticleList(this.queryParams).then(res => {
        this.leftList = res.rows;
        this.total = res.total;
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;

  .left {
    width: 600px;

    .list {
      background-color: #ffffff;
      min-height: 800px;
    }
  }

  .right {
    width: 300px;

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
</style>