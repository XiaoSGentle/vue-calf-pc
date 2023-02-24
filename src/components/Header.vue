<template>
  <div class="head-nav">
    <div class="h_header">
      <div class="h_nav">
        <div class="left">
          <router-link :to="{ path: '/' }" style="display: flex; align-items: center">
            <img src="@/assets/images/logo.png" class="logo" alt="logo">
            <span class="ml20 u-font-24">小牛旅游</span>
          </router-link>
        </div>
        <div class="right">
          <router-link :to="{ path: '/login' }" v-show="isShow">
            登录
          </router-link>
          <div style="display: flex; align-items: center" v-show="!isShow" @click="loginOut()">
            <span class="ml20 u-font-15">{{ userInfo.nickName }}</span>
            <p class="ml20 u-font-15">|</p>
            <span class="ml20 u-font-15">欢迎回来</span>
            <p class="ml20 u-font-15"> | </p>
            <span class="ml20 u-font-15">[退出登录]</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userInfo } from 'os';




export default {
  name: "Header",
  data() {
    return {
      baseUrl: this.getBaseUrl(),
      isShow: true,
      userInfo: {}
    };
  },
  methods: {
    getUserInfo() {
      if ((JSON.parse(window.localStorage.getItem("vuex")).isLogin)) {
        this.isShow = !this.isShow;
        this.userInfo = JSON.parse(window.localStorage.getItem("vuex")).userInfo
      }
    },
    loginOut() {
      this.$store.commit("REMOVE_INFO");
      this.$store.commit("REMOVE_IP");
      this.$store.commit("IS_LOGIN", false)
      this.$router.push({ path: "/login" });
    }
  },
  mounted() {
    this.getUserInfo()
  }

};
</script>

<style lang="scss" scoped>
.el-avatar {
  background: none;
}

.logo {
  width: 50px;
  height: 50px;
}
</style>

<style lang="scss">
body {
  background-color: #f5f5f5;
}

.h_header {
  background: #fff;
  height: 65px;
  width: 100%;
}

.h_nav {
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  border-width: 0px;
  height: 65px;
  -ms-overflow-x: hidden;
  overflow-x: hidden;
  -ms-overflow-y: hidden;
  overflow-y: hidden;
  background-color: rgba(255, 255, 255, 0.647058823529412);
  border: none;
  border-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;

  .left {
    display: flex;
    align-items: center;

    span {
      font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑", sans-serif;
      font-weight: 700;
      font-style: normal;
      color: #000000;
      text-align: left;
      line-height: 28px;
    }
  }

  .right {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 10px;

    .text {
      font-size: 12px;

      span {
        padding: 0px 5px 0px 5px;
      }
    }
  }

  .avatar {
    display: flex;
    align-items: center;
  }
}
</style>