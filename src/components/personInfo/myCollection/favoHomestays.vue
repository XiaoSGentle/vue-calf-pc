<template>
  <div>


    <div class="u-font-25 u-font-bold">收藏的民宿</div>

    <div class="u-m-t-20" v-for="(item, index) in loveHourseList" :key="index">
      <el-card>
        <el-row class="u-m-t-10">

          <el-col :span="4">
            <img class="u-h-80 u-w-150" :src="baseUrl + item.cover" alt="">
          </el-col>
          <el-col :span="14">
            <div>
              <div class="u-font-20 u-font-bold u-w-200">{{ item.title }}</div>
              <div class="u-m-t-10"> 位置:{{ item.location }}</div>
            </div>
          </el-col>
          <el-col :span="4" class="u-flex">
            <div>
              <el-button type="danger" round @click="cancelCollectHouse(item.houseId)">取消收藏</el-button>
            </div>
            <div class="u-m-l-10">
              <el-button type="primary" round @click="goHouseDetial(item.houseId)">查看详情</el-button>
            </div>
          </el-col>
        </el-row>
      </el-card>

    </div>
  </div>
</template>

<script>

import { cancelCollectHouse } from '../../../api/hourses/hourse'

import { getLoveHomeList } from '../../../api/hourses/hourse'
export default {
  name: "VueCalfgoPCFavoHomestay",

  data() {
    return {
      baseUrl: this.getBaseUrl(),
      loveHourseList: []
    };
  },

  mounted() {

    this.getInfo()
  },

  methods: {

    getInfo() {
      getLoveHomeList().then(res => {
        this.loveHourseList = res.rows
      })
    },
    // 取消收藏

    cancelCollectHouse(id) {
      cancelCollectHouse(id).then((res) => {
        if (res.code == 200) {
          this.$message.success("取消收藏成功");
          this.getInfo()
        }
      });
    },

    // 查看详情


    goHouseDetial(id) {
      this.$router.push({ name: "homeStayDetials", query: { id: id } });
    }


  },
};
</script>

<style lang="scss" scoped></style>