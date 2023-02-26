<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <header-nav></header-nav>
        <div class="u-m-t-10 u-p-40 u-w-1110" style="height: 100vh;  margin: auto;">
            <!-- 标题 -->
            <el-card><span class="u-font-25 u-font-bold">订单确认</span>
                <!-- 房间信息 -->
                <div class="u-m-t-20">
                    <el-row>
                        <el-col :span="6">
                            <img class="u-h-130 u-w-210" :src="baseUrl + homeInfo.cover" alt="">
                        </el-col>
                        <el-col :span="18">
                            <div class="u-m-t-20"><span class="u-font-20  u-font-bold">{{ homeInfo.title }}</span></div>
                            <div class="u-m-t-20 u-font-grey">{{ this.homeInfo.bedNum + '室' + this.homeInfo.parlorNum + '厅'
                                +
                                this.homeInfo.kitchenNum +
                                '厨' +
                                this.homeInfo.bathroomNum + '卫|共' + this.homeInfo.houseArea + '平米|可住' +
                                this.homeInfo.capacity + '人' }}</div>

                        </el-col>
                    </el-row>

                </div>
            </el-card>
            <!-- 入住信息 -->
            <el-card class="u-m-t-30 u-p-40">
                <div class="u-flex u-row-between">
                    <div class="u-flex">
                        <span>入住日期</span>
                        <div class="u-w-400 u-m-l-30"> <el-date-picker style="width: 100%" type="daterange"
                                range-separator="至" start-placeholder="入住日期" end-placeholder="离店日期" v-model="data"
                                value-format="yyyy-MM-dd">
                            </el-date-picker></div>
                    </div>
                    <div class="u-font-blue u-font-bold">共2晚</div>
                </div>
                <el-divider></el-divider>
            </el-card>
        </div>

    </div>
</template>

<script >
/* eslint-disable*/
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { getHouseDetials, getHourseQuestions, getHourseIsLike, collectHouse, cancelCollectHouse } from '../../api/hourses/hourse'
export default {

    // import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        // 这里存放数据
        return {
            baseUrl: this.getBaseUrl(),
            homeId: '',
            data: [],
            homeInfo: {}
        };
    },
    // 监听属性 类似于data概念
    computed: {},
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        getHomedetial() {
            getHouseDetials(this.homeId).then(res => {
                this.homeInfo = res.data
            })
        }
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.homeId = this.$route.params.homeId;
        this.data = this.$route.params.data
        this.getHomedetial();
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
<style scoped></style>