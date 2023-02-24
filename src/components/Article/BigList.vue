<template>
  <div>
    <div class="item u-m-10 u-flex u-col-top" v-for="(item,index) in list" :key="index" @click="handleDetail(item)">
      <div style="min-width:100px;height:200px;" class="u-flex-col u-row-top">
        <div class="date" style="width:100%;">
          {{item.createTime}}
        </div>
        <div class="u-m-t-20 u-flex u-row-center" style="width:100%;">
          <el-avatar v-if="item.author" :size="40" :src="getBaseUrl()+item.author.avatar"></el-avatar>
        </div>
        <div class="name u-m-t-10 u-flex u-row-center" style="width:100%;">{{item.author?item.author.userName:'匿名用户'}}</div>
      </div>
      <div style="width:450px;" class="u-border">
        <div style="width:100%;height:200px;">
          <el-image style="width:100%;height:100%;" :src="getBaseUrl() + item.cover" fit="fit"></el-image>
        </div>
        <div class="count u-flex u-p-10 u-border-bottom">
          <div><i class="el-icon-circle-check u-p-r-5"></i>{{item.goodNum?item.goodNum:0}}</div>
          <div><i class="el-icon-star-off u-p-l-10 u-p-r-5"></i>{{item.favoriteNum?item.favoriteNum:0}}</div>
          <div><i class="el-icon-chat-square u-p-l-10 u-p-r-5"></i>{{item.commentNum}}</div>
        </div>
        <div class="u-p-10">
          {{item.title}}
        </div>
      </div>
    </div>
    <div class="pagination u-flex u-row-center u-m-t-20">
      <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize" :current-page="pageNum" @current-change="handlePage">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: [],
    },
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    pageNum: {
      type: Number,
      default: 1,
    }
  },
  data() {
    return {

    }
  },
  methods: {
    handleDetail(item) {
      this.$emit("clickItem", item)
    },
    handlePage(index) {
      this.$emit("page", { pageNum: index })
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  width: 550px;
}
.pagination {
  width: 100%;
}
.count {
  background-color: #017db3;
  color: #ffffff;
  font-size: 12px;
}
.date {
  font-size: 20px;
  border-left: 5px solid #017db3;
  line-height: 20px;
  padding-left: 5px;
  font-weight: bold;
  color: #858585;
}
.name {
  font-size: 12px;
  color: #858585;
}
</style>