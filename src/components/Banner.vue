<template>
  <div>
    <div class="adv">
      <el-carousel arrow="always" ref="carousel">
        <el-carousel-item v-for="item in advList" :key="item.id">
          <img
            :src="baseUrl + item.image"
            :alt="item.title"
            @click.stop="toDetail(item.id)"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="search">
      <div class="input">
        <div class="city">
          <el-cascader
            style="width: 100%"
            :show-all-levels="false"
            filterable
            :props="props"
            placeholder="城市"
            v-model="selectCity"
            :options="options"
          >
          </el-cascader>
        </div>
        <div class="date">
          <el-date-picker
            style="width: 100%"
            type="daterange"
            range-separator="至"
            start-placeholder="入住日期"
            end-placeholder="离店日期"
            v-model="getData"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </div>
        <div class="bt">
          <el-button type="primary" @click="searchHose()">开始搜索</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAdvList, getCitys } from "@/api/adv";

export default {
  name: "Banner",
  components: {},
  data() {
    return {
      baseUrl: this.getBaseUrl(),
      advList: [],
      //地址参数
      options: [],
      props: {
        value: "name",
        label: "name",
        children: "data",
      },
      //查询民宿相关参数
      selectCity: [],
      getData: "",
      homeStayParam: {
        startDate: "",
        endDate: "",
        city: "",
      },
    };
  },
  created() {
    this.getAdvList();
  },
  methods: {
    getAdvList() {
      getAdvList({ type: "2" }).then((res) => {
        this.advList = res.data;
      });
      getCitys().then((res) => {
        res.data.forEach((m) => {
          m.name = m.letter;
          this.options.push(m);
        });
      });
    },
    searchHose() {
      this.homeStayParam.city = this.selectCity[1];
      this.homeStayParam.startDate = this.getData[0];
      this.homeStayParam.endDate = this.getData[1];
      this.$router.push({ name: "homeStay", params: this.homeStayParam });
    },
  },
};
</script>

<style lang="scss" scoped>
.adv {
  img {
    /*设置图片宽度和浏览器宽度一致*/
    width: 100%;
    height: inherit;
  }
}

.search {
  position: relative;
  top: -80px;
  z-index: 999;
  display: flex;
  justify-content: center;
  height: 50px;

  .input {
    background-color: #ffffff;
    width: 700px;
    height: 50px;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;

    .city {
      flex: 6;
      line-height: 100%;
      text-align: center;
      vertical-align: middle;
      border-right: 2px;
      border-right-color: gray;
      margin-left: 5px;
    }

    .date {
      flex: auto;
      margin: 0 10px;
    }

    .bt {
      flex: 3;
      display: flex;
      justify-content: center;
      margin-right: 5px;
    }
  }
}
</style>