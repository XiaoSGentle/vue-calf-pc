<template>
  <div>
    <div style="font-size: 20px; font-weight: bold" class="u-flex u-col-center">
      <el-upload :headers="headerObj" :action="baseUrl + '/api/user/avatar'">
        <img style="height: 80px" :src="userInfo.avatar" />
      </el-upload>
      <div style="line-height: 100px" class="u-m-l-20 u-font-30">
        {{ userInfo.nickName }}
      </div>
    </div>
    <el-divider></el-divider>
    <span> 账号： {{ userInfo.userName }}</span>
    <el-divider></el-divider>
    <span>电话号码：{{ userInfo.phonenumber }}</span>
    <el-divider></el-divider>
    <span>邮箱： {{ userInfo.email }}</span>
  </div>
</template>

<script>
import { getUserInfo } from "@/api/login/login.js";

export default {
  name: "VueCalfgoPCPersonalInformation",

  data() {
    return {
      headerObj: {
        Authorization: JSON.parse(window.localStorage.getItem("vuex")).token,
      },
      baseUrl: this.getBaseUrl(),
      userInfo: {},
    };
  },

  mounted() {
    this.getInfo();
  },

  methods: {
    getInfo() {
      getUserInfo().then((res) => {
        this.userInfo = res.userInfo;
      });
    },
  },
};
</script>

<style lang="stylus" scoped></style>