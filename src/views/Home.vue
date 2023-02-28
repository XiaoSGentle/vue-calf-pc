<template>
  <div class="home-con">
    <header-nav></header-nav>
    <banner />
    <div>
      <!-- 首页列表 -->
      <div>
        <!--攻略头条-->
        <div class="content">
          <div class="head">
            <div class="text">攻略头条</div>
            <div class="more">
              <router-link :to="{ path: '/article/strategy/list/1' }">
                查看更多<i class="el-icon-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="article">
            <div class="strategy" v-for="(item, key) in strategyList" :key="key" @click="goArticalDetial(item.id)">
              <el-image class="cover" :src="item.cover" fit="fit"></el-image>
              <div class="title">{{ item.title }}</div>
              <div class="subTitle">
                <div style="display: flex; align-items: center">
                  <el-avatar :size="20" :src="item.author ? item.author.avatar : ''"></el-avatar>
                  {{ item.author ? item.author.nickName : "匿名用户" }}
                </div>
                <div>
                  <i class="el-icon-star-on"></i>{{ item.goodNum }}
                  <i class="el-icon-s-comment"></i>{{ item.commentNum }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="
                                                                                            width: 1000xp;
                                                                                            display: flex;
                                                                                            justify-content: center;
                                                                                            height: 600px;
                                                                                          ">
          <div>
            <div class="content-left">
              <div class="head">
                <div class="text">精华游记</div>
                <div class="more">
                  <router-link :to="{ path: '/article/strategy/list/2' }">
                    查看更多<i class="el-icon-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="content-left">
              <div class="article-left">
                <div class="strategy" v-for="(item, key) in youjiList" :key="key" @click="goArticalDetial(item.id)">
                  <el-image class="cover" :src="item.cover" fit="fit"></el-image>
                  <div class="title">{{ item.title }}</div>
                  <div class="subTitle">
                    <div style="display: flex; align-items: center">
                      <el-avatar :size="20" :src="item.author ? item.author.avatar : ''"></el-avatar>
                      {{ item.author ? item.author.nickName : "匿名用户" }}
                    </div>
                    <div>
                      <i class="el-icon-star-on"></i>{{ item.goodNum }}
                      <i class="el-icon-s-comment"></i>{{ item.commentNum }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="content-left">
              <div class="head">
                <div class="text">推荐笔记</div>
                <div class="more">
                  <router-link :to="{ path: '/article/strategy/list/4' }">
                    查看更多<i class="el-icon-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="content-left">
              <div class="article-left">
                <div class="strategy" v-for="(item, key) in noteList" :key="key" @click="goArticalDetial(item.id)">
                  <el-image class="cover" :src="item.cover" fit="fit"></el-image>
                  <div class="title">{{ item.title }}</div>
                  <div class="subTitle">
                    <div style="display: flex; align-items: center">
                      <el-avatar :size="20" :src="item.author ? item.author.avatar : ''"></el-avatar>
                      {{ item.author ? item.author.nickName : "匿名用户" }}
                    </div>
                    <div>
                      <i class="el-icon-star-on"></i>{{ item.goodNum }}
                      <i class="el-icon-s-comment"></i>{{ item.commentNum }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 浮动添加按钮 -->
      <div>
        <div class="u-abso u-h-70 u-w-70 tick">

          <el-button class=" u-h-70 u-w-70 fr" type="primary" icon="el-icon-edit" circle @click="goAdd()"></el-button>


        </div>
      </div>
    </div>
    <y-footer></y-footer>

  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import { getArticleList } from "@/api/cms/article";
export default {
  name: "Home",
  components: {
    Banner,
  },
  data() {
    return {
      baseUrl: this.getBaseUrl(),
      strategyList: [],
      youjiList: [],
      noteList: [],
    };
  },
  created() {
    this.getStrategyList();
  },
  methods: {
    getStrategyList() {
      let query = {
        pageNum: 1,
        pageSize: 4,
        category: "1",
        orderByColumn: "read_num",
        isAsc: "desc",
      };
      let query1 = {
        pageNum: 1,
        pageSize: 4,
        category: "2",
        orderByColumn: "read_num",
        isAsc: "desc",
      };
      let query2 = {
        pageNum: 1,
        pageSize: 4,
        category: "4",
        orderByColumn: "read_num",
        isAsc: "desc",
      };
      getArticleList(query).then((res) => {
        this.strategyList = res.rows;
        this.strategyList.forEach((item) => {
          item.cover = this.baseUrl + item.cover;
        });
      });
      getArticleList(query1).then((res) => {
        this.youjiList = res.rows;
        this.youjiList.forEach((item) => {
          item.cover = this.baseUrl + item.cover;
        });
      });
      getArticleList(query2).then((res) => {
        this.noteList = res.rows;
        this.noteList.forEach((item) => {
          item.cover = this.baseUrl + item.cover;
        });
      });
    },
    goArticalDetial(id) {
      this.$router.push({ path: "/article/strategy/detial/" + id });
    },
    goAdd() {
      this.$router.push({ path: "/article/strategy/add" });
    }
  },
};
</script>

<style lang="scss" scoped>
.tick {

  z-index: 999;
  right: 100px;
  bottom: 20px;
}

.home-con {
  background-color: #f5f5f5;

  .clearfix:before,
  .clearfix:after {
    content: "";
    display: table;
  }

  .clearfix:after {
    clear: both;
  }
}

.content {
  display: flex;
  justify-content: center;

  .head {
    padding-top: 30px;
    width: 1000px;
    display: flex;
    justify-content: space-between;
    color: #707070;

    .text {
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
    }

    .more {
      font-size: 15px;
      line-height: 30px;
    }
  }
}

.content-left {
  display: flex;
  justify-content: center;

  .head {
    padding-top: 30px;
    width: 500px;
    display: flex;
    justify-content: space-between;
    color: #707070;

    .text {
      font-weight: bold;
      font-size: 20px;
      line-height: 30px;
    }

    .more {
      font-size: 15px;
      line-height: 30px;
    }
  }
}

.article-left {
  display: flex;
  width: 500px;
  flex-wrap: wrap;

  .strategy {
    background-color: #ffffff;
    width: 240px;
    height: 240px;
    margin-right: 10px;

    .cover {
      width: 100%;
      height: 150px;
    }

    .title {
      width: 100%;
      padding: 10px 5px 10px 5px;
      border-bottom: 1px solid #f4f4f4;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .subTitle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 40px;
      color: #707070;
      font-size: 15px;
      padding: 0px 5px 0px 5px;
    }
  }
}

.article {
  display: flex;
  width: 1000px;

  .strategy {
    background-color: #ffffff;
    width: 240px;
    height: 240px;
    margin-right: 10px;

    .cover {
      width: 100%;
      height: 150px;
    }

    .title {
      width: 100%;
      padding: 10px 5px 10px 5px;
      border-bottom: 1px solid #f4f4f4;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .subTitle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 40px;
      color: #707070;
      font-size: 15px;
      padding: 0px 5px 0px 5px;
    }
  }
}
</style>