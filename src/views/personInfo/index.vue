<template>
  <div>
    <header-nav></header-nav>
    <el-container
      style="width: 80%; margin-left: 10%; height: 100vh"
      class="u-p-t-20"
    >
      <el-aside width="200px" style="background-color: antiquewhite"
        ><el-menu router default-active="/personInfo/personalCenter">
          <el-menu-item-group>
            <template slot="title">
              <div class="u-font-18 u-font-bold u-font-dark">
                我的账户
              </div></template
            >
            <el-menu-item index="/personInfo/personalCenter"
              >个人中心</el-menu-item
            >
            <el-menu-item index="/personInfo/personalInformation"
              >个人信息</el-menu-item
            >
            <el-menu-item index="/personInfo/myPoints">我的积分</el-menu-item>
            <el-menu-item index="/personInfo/frequentlyUsedInfos"
              >常用信息</el-menu-item
            >
            <el-menu-item index="/personInfo/accountSetting"
              >账户设置</el-menu-item
            >
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">
              <div class="u-font-18 u-font-bold u-font-dark">
                交易管理
              </div></template
            >
            <el-menu-item index="/personInfo/myOrder">我的订单</el-menu-item>
            <el-menu-item index="/personInfo/myVouchers"
              >我的代金券</el-menu-item
            >
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">
              <div class="u-font-18 u-font-bold u-font-dark">
                我的发布
              </div></template
            >
            <el-menu-item index="/personInfo/myStrategys"
              >我发布的攻略</el-menu-item
            >
            <el-menu-item index="/personInfo/myTravels"
              >我发布的游记</el-menu-item
            >
            <el-menu-item index="/personInfo/myNotes"
              >我发布的笔记</el-menu-item
            >
            <el-menu-item index="/personInfo/myInterlocutions"
              >我发布的问答</el-menu-item
            >
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">
              <div class="u-font-18 u-font-bold u-font-dark">
                我的收藏
              </div></template
            >
            <el-menu-item index="/personInfo/favoHomestays"
              >收藏的民宿</el-menu-item
            >

            <el-menu-item index="/personInfo/favoStrategys"
              >收藏的攻略</el-menu-item
            >
            <el-menu-item index="/personInfo/favoTravels"
              >收藏的游记</el-menu-item
            >
            <el-menu-item index="/personInfo/favoNotes"
              >收藏的笔记</el-menu-item
            >
          </el-menu-item-group>
        </el-menu></el-aside
      >
      <el-main style="background-color: #fff" class="u-m-l-10"
        ><router-view></router-view
      ></el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "VueCalfgoPCIndex",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.el-menu-item {
  margin-left: 20px;
}
.title {
  font-size: 20px;
}
</style>