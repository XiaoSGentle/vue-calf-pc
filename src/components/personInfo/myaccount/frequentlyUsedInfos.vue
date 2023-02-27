<template>
  <div class="u-m-50">
    <el-button round type="primary" @click="
      changeType = 1;
    dialogVisible = true;
    addPersionParam.cardNo = '';
    addLivingPersion.name = '';
                  " icon="el-icon-plus">添加入住人</el-button>

    <div class="u-m-t-40">
      <div class="u-m-t-40" style="height: 50px" v-for="(item, index) in livingPersionList" :key="index">
        <el-row>
          <el-col :span="22">
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
          </el-col>
          <el-col :span="2">
            <div style="line-height: 50px">
              <el-link type="primary" @click="getPerById(item.id)">编辑</el-link>
              <el-link class="u-m-l-20" type="primary" @click="delPersion(item.id)">删除</el-link>
            </div>
          </el-col>
        </el-row>
        <el-divider></el-divider>
      </div>
    </div>

    <!--对话框 -->
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

<script>
import {
  getLivingPersion,
  addLivingPersion,
  delLivingPersionById,
  updateLivingPersion,
  getPersionById,
} from "../../../api/personInfo/personInfo";
export default {
  name: "VueCalfgoPCFrequentlyUsedInfo",

  data() {
    return {
      changeType: 0,
      dialogVisible: false,
      livingPersionList: [],
      addPersionParam: {
        cardNo: "",
        cardType: "身份证",
        name: "",
        id: "",
      },
    };
  },

  mounted() {
    this.getInfo();
  },

  methods: {
    getInfo() {
      getLivingPersion().then((res) => {
        this.livingPersionList = res.data;
        console.log(res.data);
      });
    },
    addPersion() {
      addLivingPersion(this.addPersionParam).then((res) => {
        console.log(res);
        if (res.code == 200) {
          this.$message.success("添加成功！");
          this.getInfo();
          this.dialogVisible = false;
        }
      });
    },
    postPreMethed() {
      if (this.changeType == 1) {
        this.addPersion();
      }
      if (this.changeType == 2) {
        this.updatePer();
      }
    },
    getPerById(id) {
      this.changeType = 2;
      getPersionById(id).then((res) => {
        this.addPersionParam = res.data;
      });
      this.dialogVisible = true;
    },
    updatePer() {
      updateLivingPersion(this.addPersionParam).then((res) => {
        if (res.code == 200) {
          this.$message.success("修改成功");
          (this.addPersionParam.name = ""), (this.addPersionParam.cardNo = "");
          this.getInfo();
          this.dialogVisible = false;

          return;
        }
        this.$message.error("修改失败");
      });
    },
    delPersion(id) {
      delLivingPersionById(id).then((res) => {
        if (res.code == 200) {
          this.$message.success("删除成功");
          this.getInfo();
          return;
        }
        this.$message.error("删除失败");
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>