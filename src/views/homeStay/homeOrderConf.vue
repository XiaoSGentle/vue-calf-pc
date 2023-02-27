<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <!--主页面 -->
        <header-nav></header-nav>
        <div class="u-flex u-row-center">
            <!-- 左护法 -->
            <div class="u-m-t-10 u-p-40 u-w-900">
                <!-- 标题 -->
                <el-card><span class="u-font-25 u-font-bold">订单确认</span>
                    <!-- 房间信息 -->
                    <div class="u-m-t-20">
                        <el-row>
                            <el-col :span="8">
                                <img class="u-h-130 u-w-210" :src="baseUrl + homeInfo.cover" alt="" />
                            </el-col>
                            <el-col :span="16">
                                <div class="u-m-t-20">
                                    <span class="u-font-20 u-font-bold">{{
                                        homeInfo.title
                                    }}</span>
                                </div>
                                <div class="u-m-t-20 u-font-grey">
                                    {{
                                        this.homeInfo.bedNum +
                                        "室" +
                                        this.homeInfo.parlorNum +
                                        "厅" +
                                        this.homeInfo.kitchenNum +
                                        "厨" +
                                        this.homeInfo.bathroomNum +
                                        "卫|共" +
                                        this.homeInfo.houseArea +
                                        "平米|可住" +
                                        this.homeInfo.capacity +
                                        "人"
                                    }}
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-card>
                <!-- 入住信息 -->
                <el-card class="u-m-t-30 u-p-40">
                    <!-- 入住日期 -->
                    <div class="u-flex u-row-between">
                        <div class="u-flex">
                            <span>入住日期</span>
                            <div class="u-w-400 u-m-l-30">
                                <el-date-picker style="width: 100%" type="daterange" range-separator="至"
                                    start-placeholder="入住日期" end-placeholder="离店日期" v-model="data"
                                    value-format="yyyy-MM-dd">
                                </el-date-picker>
                            </div>
                        </div>
                        <div class="u-font-blue u-font-bold">共{{ this.days }}晚</div>
                    </div>
                    <el-divider></el-divider>
                    <!-- 入住人数 -->
                    <div><span>入住人数 {{ this.selectPersionList.length }}人 </span></div>
                    <el-divider></el-divider>
                    <!-- 入住客人信息 -->
                    <div class="u-flex u-row-between">
                        <span>入住客信息 </span>
                        <div class="u-font-blue u-font-bold" @click="showSelPer = true">
                            编辑/修改
                        </div>
                    </div>
                    <!-- 入住人列表 -->
                    <div>
                        <el-checkbox-group v-model="selectPersionList">
                            <el-checkbox v-for="(item, index) in livingPersionList" :key="index" :label="item">
                                <div class="u-m-t-30 u-h-10 u-w-700">
                                    <div class="">
                                        <div class="u-font-20">
                                            <div>
                                                <span>{{ item.name }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </el-checkbox>
                        </el-checkbox-group>
                    </div>
                </el-card>
            </div>
            <!-- 右护法 -->
            <div class="u-m-t-10 u-w-600">
                <!-- 价格结算   -->
                <el-card>
                    <div class="u-flex u-row-between">
                        <span>房费 </span>
                        <div>
                            {{ this.homeInfo.price }}元x{{ this.days }}晚 =
                            <span class="u-font-blue u-font-bold">{{ this.homeInfo.price * this.days }}</span>
                            元
                        </div>
                    </div>
                    <el-divider></el-divider>
                    <div class="u-flex u-row-between">
                        <span>选择优惠 </span>
                        <div class="u-font-blue u-font-bold">
                            <i class="el-icon-arrow-right"></i>
                        </div>
                    </div>
                    <el-divider></el-divider>

                    <div class="u-fr">
                        本单共需要支付：<span class="u-font-30 u-font-bold u-font-red" style="line-height: 70px">{{
                            this.homeInfo.price * this.days }}￥</span>
                    </div>
                </el-card>
                <!-- 留言 -->
                <el-card class="u-m-t-30">
                    <div class="u-flex">
                        <span class="u-w-50">留言</span><el-input type="textarea" :rows="6" placeholder="请输入您的留言"
                            v-model="message">
                        </el-input>
                    </div>
                    <div class="u-flex u-m-t-10">
                        <span class="u-w-50">电话</span><el-input placeholder="请输入您电话号码" v-model="tel">
                        </el-input>
                    </div>
                </el-card>
                <!-- 酒店声明 -->
                <div class="u-m-t-20 u-line-height-23">
                    <p>退订政策:入住前1天12:00前退订，可获100%退款。之后退订不退款</p>
                    <p>入离时间:12:00之后可入住，12:00之前需退房</p>
                    <p>开具发票:房东开具发票</p>
                </div>
                <!-- 提交按钮 -->
                <div class="u-m-t-10">
                    <div class="u-fr">
                        <el-button class="u-w-600 u-h-60" type="primary" @click="postOrder()">提交订单</el-button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 选择入住人对话框 -->
        <el-dialog title="选择入住人" :visible.sync="showSelPer" width="40%" center>
            <!-- 选择入住人 -->
            <div>
                <div>
                    <div class="u-font-20 u-font-blue u-font-bold u-fr" @click="
                        changeType = 1;
                    dialogVisible = true; addPersionParam.cardNo = ''; addLivingPersion.name = '';">+ 添加入住人</div>
                </div>
                <el-checkbox-group v-model="selectPersionList">
                    <el-checkbox v-for="(item, index) in livingPersionList" :key="index" :label="item">
                        <div class="u-m-t-40 u-h-50 u-w-700">
                            <div class="u-flex u-row-between">
                                <div class="u-font-20">
                                    <div>
                                        <span class="u-font-grey">入住人：</span>
                                        <span>{{ item.name }}</span>
                                    </div>

                                    <div class="u-m-t-10">
                                        <span class="u-font-grey">身份证：</span>
                                        <span>{{ item.cardNo }}</span>
                                    </div>
                                </div>

                                <div style="line-height: 50px">
                                    <el-link type="primary" @click="getPerById(item.id)">编辑</el-link>
                                    <el-link class="u-m-l-20" type="primary" @click="delPersion(item.id)">删除</el-link>
                                </div>
                            </div>
                            <el-divider></el-divider>
                        </div>

                    </el-checkbox>

                </el-checkbox-group>

            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="showSelPer = false">取 消</el-button>
                <el-button type="primary" @click="showSelPer = false">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 编辑入住人对话框 -->
        <el-dialog :title="changeType == 1 ? '添加入住人' : '修改入住人'" :visible.sync="dialogVisible" center width="30%">
            <el-form label-position="left" label-width="80px" :model="addPersionParam">
                <el-form-item label="姓名:">
                    <el-input v-model="addPersionParam.name"></el-input>
                </el-form-item>
                <el-form-item label="身份证：">
                    <el-input v-model="addPersionParam.cardNo"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="postPreMethed()">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script >
/* eslint-disable*/
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import {
    getHouseDetials,
    getHourseQuestions,
    getHourseIsLike,
    collectHouse,
    cancelCollectHouse,
} from "../../api/hourses/hourse";

import {
    getLivingPersion,
    addLivingPersion,
    delLivingPersionById,
    updateLivingPersion,
    getPersionById,

} from "../../api/personInfo/personInfo";


import { createOrder } from '../../api/order/order';

export default {
    // import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        // 这里存放数据
        return {
            //删除or添加标识
            changeType: 0,
            //选择住宿人弹窗
            showSelPer: false,
            //修改入住人弹窗
            dialogVisible: false,
            baseUrl: this.getBaseUrl(),
            //上个页面传下来的数据
            homeId: "",
            data: [],
            // 文件信息
            homeInfo: {},
            //留言
            message: "",
            // 人数列表
            livingPersionList: [],
            selectPersionList: [],
            //添加或者修改post参数
            addPersionParam: {
                cardNo: "",
                cardType: "身份证",
                name: "",
                id: "",
            },

            //预留电话
            tel: '',
            // 订单参数

            orderParam: {
                bookDay: 0,
                houseId: 1,
                message: "",
                payAmount: 0,
                personList: [],
                price: 0,
                startDate: "",
                endDate: "",
                tel: "",
            }
        };
    },
    // 监听属性 类似于data概念
    computed: {
        // 动态计算天数
        days() {
            const num = (new Date(this.data[1]) - new Date(this.data[0])) / 1000 / 60 / 60 / 24;
            // 判断是否为NaN
            if (num !== num) {
                return 0;
            }
            return num;
        }
    },
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
        getHomedetial() {
            getHouseDetials(this.homeId).then((res) => {
                this.homeInfo = res.data;
            });
            // 获入住人
            getLivingPersion().then((res) => {
                this.livingPersionList = res.data;
            });
        },
        // 添加顾客
        addPersion() {
            addLivingPersion(this.addPersionParam).then((res) => {
                console.log(res);
                if (res.code == 200) {
                    this.$message.success("添加成功！");
                    this.getHomedetial()
                    this.dialogVisible = false;
                }
            });
        },
        // post判断
        postPreMethed() {
            if (this.changeType == 1) {
                this.addPersion();
            }
            if (this.changeType == 2) {
                this.updatePer();
            }
            this.dialogVisible = false;
        },
        // 根据id获取顾客
        getPerById(id) {
            this.changeType = 2;
            getPersionById(id).then((res) => {
                this.addPersionParam = res.data;
            });
            this.dialogVisible = true;
        },
        // 更新顾客

        updatePer() {
            updateLivingPersion(this.addPersionParam).then((res) => {
                if (res.code == 200) {
                    this.$message.success("修改成功");
                    (this.addPersionParam.name = ""), (this.addPersionParam.cardNo = "");
                    this.dialogVisible = false;
                    this.getHomedetial();
                    return;
                }
                this.$message.error("修改失败");
            });
        },
        // 删除顾客
        delPersion(id) {
            delLivingPersionById(id).then((res) => {
                if (res.code == 200) {
                    this.$message.success("删除成功");
                    this.getHomedetial();
                    return;
                }
                this.$message.error("删除失败");
            });
        },
        // 订单提交
        postOrder() {

            this.orderParam.bookDay = this.days;
            this.orderParam.houseId = this.homeId;
            this.orderParam.message = this.message;
            this.orderParam.payAmount = 0;
            this.orderParam.personList = this.selectPersionList;
            this.orderParam.startDate = this.data[0];
            this.orderParam.endDate = this.data[1];
            this.orderParam.tel = this.tel;
            createOrder(this.orderParam).then((res) => {
                if (res.code == 200) {
                    this.$message.success("订单提交成功，前往个人页面查看");
                    this.$router.push({ path: "/personInfo/myOrder" });
                }
            })
        }


    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
        this.homeId = this.$route.params.homeId;
        this.data = this.$route.params.data;
        this.getHomedetial();
    },
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() { },
    beforeCreate() { }, // 生命周期 - 创建之前
    beforeMount() { }, // 生命周期 - 挂载之前
    beforeUpdate() { }, // 生命周期 - 更新之前
    updated() { }, // 生命周期 - 更新之后
    beforeDestroy() { }, // 生命周期 - 销毁之前
    destroyed() { }, // 生命周期 - 销毁完成
    activated() { }, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped></style>