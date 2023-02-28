<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <header-nav></header-nav>

        <div class="u-m-t-30">
            <div class="u-w-1000" style="margin: auto;">
                <el-card class="">
                    <div class="u-w-800" style="margin: auto;">
                        <div class=" u-font-25 u-font-bold">文章添加</div>
                        <el-form :model="artPost">
                            <el-form-item label="文章类型" class="u-m-t-30">
                                <template>
                                    <el-radio-group v-model="artPost.category">
                                        <el-radio label="1">游记</el-radio>
                                        <el-radio label="2">笔记</el-radio>
                                        <el-radio label="4">攻略</el-radio>
                                    </el-radio-group>
                                </template>
                            </el-form-item>
                            <el-form-item label="文章标题" class="u-m-t-30">
                                <el-input v-model="artPost.title"></el-input>
                            </el-form-item>
                            <el-form-item label="首页图片">
                                <el-upload :headers="headers" :action="baseUrl + '/api/common/upload'"
                                    list-type="picture-card" :on-success="addCover" auto-upload><i
                                        class="el-icon-plus"></i></el-upload>
                            </el-form-item>
                            <el-form-item label="文章内容">
                                <el-input type="textarea" :rows="8" v-model="artPost.content"></el-input>
                            </el-form-item>
                            <el-form-item label="选择图片">
                                <el-upload :headers="headers" :action="baseUrl + '/api/common/upload'"
                                    list-type="picture-card" :on-success="addPicAddress" auto-upload><i
                                        class="el-icon-plus"></i></el-upload>
                            </el-form-item>
                        </el-form>
                        <el-button @click="addArticals()">发布</el-button>
                    </div>
                </el-card>

            </div>
        </div>
    </div>
</template>

<script >
/* eslint-disable*/
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { getUserInfo } from '../../api/login/login'
import { addArtical } from '../../api/cms/article'
export default {
    // import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        // 这里存放数据
        return {
            baseUrl: this.getBaseUrl(),
            headers: { Authorization: JSON.parse(window.localStorage.getItem('vuex')).token },
            artPost: {
                author: {

                },
                category: '1',
                content: "",
                cover: "",
                imageList: [
                    {
                        url: ""
                    }
                ],
                title: ""

            }
        };
    },
    // 监听属性 类似于data概念
    computed: {},
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        addPicAddress(res, file) {
            console.log(res)
            this.artPost.imageList.push({
                url: res.fileName
            })
        },
        addCover(res, file) {
            console.log(res)
            this.artPost.cover = res.fileName
        },
        addArticals() {
            console.log(this.artPost)
            addArtical(this.artPost).then(res => {
                if (res.code == 200) {
                    this.$message.success("添加文章成功");
                    this.$router.push({ path: '/' })
                    return;
                }
                this.$message.error("添加文章失败");
            })
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        getUserInfo().then(res => {
            this.artPost.author = res.userInfo
        })
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
<style scoped></style>