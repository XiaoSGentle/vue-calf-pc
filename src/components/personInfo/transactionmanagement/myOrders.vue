<template>
  <div>


    <div class="u-font-25 u-font-bold">我的订单</div>
    <div>

      <div class="u-m-t-20" v-for="(item, index) in orderList" :key="index">
        <el-card>
          <div> 订单编号:{{ item.orderNo }}</div>
          <el-divider></el-divider>
          <el-row class="u-m-t-10">

            <el-col :span="4">
              <img class="u-h-130 u-w-200" :src="baseUrl + item.cover" alt="">
            </el-col>
            <el-col :span="12">
              <div>
                <div class="u-font-20 u-font-bold u-w-200">{{ item.title }}</div>
                <div class="u-m-t-10"><span>{{ item.startDate }}---{{ item.endDate }}</span></div>
                <div class="u-m-t-10"> 留言:{{ item.message }}</div>
              </div>
            </el-col>
            <el-col :span="4">
              <div>
                <div :class="item.status === '待付款' ? 'u-font-20 u-font-bold u-font-red' : 'u-font-20 u-font-bold'">{{
                  item.status }}</div>
                <div class="u-m-t-10"><span>总价:{{ item.total }}</span></div>
                <div class="u-m-t-10"><span>押金:{{ item.deposit == null ? '0' : item.deposit }}</span></div>
                <div class="u-m-t-10"><span>优惠券:{{ item.deductAmount == null ? '0' : item.deductAmount }}</span></div>
              </div>
            </el-col>
            <el-col :span="4">
              <div>
                <el-button type="danger" round @click="delOrderById(item.id)">删除订单</el-button>
              </div>
              <div class="u-m-t-10">
                <el-button type="primary" round>查看详情</el-button>
              </div>
              <div class="u-m-t-10" v-show="item.status === '待付款'">
                <el-button type="success" round @click="payOrder(index)">支付订单</el-button>
              </div>
            </el-col>
          </el-row>
        </el-card>

      </div>
    </div>
  </div>
</template>

<script>

import { getOrderList, delOrder, payOrder } from '../../../api/order/order';
export default {
  name: "VueCalfgoPCMyOrders",

  data() {
    return {
      baseUrl: this.getBaseUrl(),
      orderList: []
    };
  },

  mounted() { this.getOrderLists() },

  methods: {

    // 获取信息
    getOrderLists() {
      getOrderList().then(res => {
        this.orderList = res.rows;
      })
    },
    // 删除订单

    delOrderById(id) {
      delOrder(id).then(res => {
        if (res.code === 200) {
          this.$message.success("删除成功！")
          this.getOrderLists()
        }
      })
    },
    // 支付订单
    payOrder(index) {
      this.orderList[index].payType = '支付宝'
      payOrder(this.orderList[index]).then(res => {
        if (res.code === 200) {
          this.$message.success("订单支付成功！")
          this.getOrderLists()
        }
      })
    }
  },
};
</script>

<style lang="scss" scoped></style>