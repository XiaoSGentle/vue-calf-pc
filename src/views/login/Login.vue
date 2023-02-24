<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="bo">
        <div class="login-box">
            <div class="left-banner"><img src="@/assets/images/logo.png"></div>
            <div class="right-loginfrom">
                <div class="login-text">用户登录</div>

                <el-form label-width="80px" :model="form">

                    <el-form-item label="用户名">
                        <el-input v-model="form.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item>

                        <el-button style="width: 100%;" type="success" round @click="loginin()">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script >
/* eslint-disable*/
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

import { getUserInfo, login } from '../../api/login/login'
export default {


    // import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        // 这里存放数据
        return {
            form: {
                code: "string",
                password: "admin123",
                username: "13012345678",
                uuid: "string"
            },
        };
    },
    // 监听属性 类似于data概念
    computed: {},
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {

        loginin() {
            if (this.form.username.length != 11) {
                this.$toast("请输入正确手机号码！");
            } else if (this.form.password.length == 0) {
                this.$toast("请输入密码！");
            } else {
                login(this.form).then((res) => {
                    //console.log(res);
                    this.$store.commit("SET_TOKEN", res.token);
                    this.$store.commit("IS_LOGIN", true)
                    getUserInfo().then((res) => {
                        this.$store.commit("SET_USERINFO", res.userInfo);
                    });
                    this.$router.push({ path: "/" });
                });
            }
        },



    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
    },
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    beforeCreate() { }, // 生命周期 - 创建之前
    beforeMount() { }, // 生命周期 - 挂载之前
    beforeUpdate() { }, // 生命周期 - 更新之前
    updated() { }, // 生命周期 - 更新之后
    beforeDestroy() { }, // 生命周期 - 销毁之前
    destroyed() { }, // 生命周期 - 销毁完成
    activated() { }, // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="scss" scoped>
.bo {
    display: flex;
    justify-content: center;
}

.login-box {
    margin-top: 300px;
    display: flex;
    justify-content: center;
    height: 500px;
    width: 80%;

    .left-banner {
        height: 100%;
        width: 500px;
        // background-color: aqua;

    }

    .right-loginfrom {
        // background-color: aquamarine;
        width: 600px;
        padding: 80px;
        padding-top: 100px;

        //background-color: bisque;
        .login-text {
            margin-bottom: 40px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 40px;
            padding-left: 150px;
        }
    }
}
</style>