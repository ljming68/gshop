<template>
  <div class="type-nav">
    <div class="container">
      <div
        @mouseenter="currentIndex = 0;isShowFirst=true"
        @mouseleave="currentIndex = -1;isShowFirst=false"
      >
        <h2 class="all">全部商品分类</h2>
        <transition name="slide">
          <div class="sort" v-show="isShowFirst">
            <div class="all-sort-list2" @click="toSearch3" @mouseleave="currentIndex = -1">
              <div
                class="item"
                v-for="(c1,index) in categoryList"
                :key="c1.categoryId"
                :class="{active:currentIndex===index}"
                @mouseenter="showSubList(index) "
              >
                <h3>
                  <!-- <a href="">{{c1.categoryName}}</a> -->
                  <!-- 方法一 -->
                  <!-- <router-link :to="`/search?categoryId=${c1.categoryId}&categoryName=${c1.categoryName}`">{{c1.categoryName}}</router-link> -->
                  <!-- 方法二 -->
                  <!-- <a href="javascript:" @click="toSearch($event,c1)">{{c1.categoryName}}</a> -->
                  <!-- 方法三 -->
                  <a
                    href="javascript:"
                    :data-categoryName="c1.categoryName"
                    :data-categoryId="c1.categoryId"
                  >{{c1.categoryName}}</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                      <dt>
                        <!-- <a href="">{{c2.categoryName}}</a> -->
                        <a
                          href="javascript:"
                          :data-categoryName="c2.categoryName"
                          :data-categoryId="c2.categoryId"
                        >{{c2.categoryName}}</a>
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a href>{{c3.categoryName}}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import _ from 'lodash'
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      isShowFirst: false
    };
  },

  created() {
    const path = this.$route.path;
    // console.log(path);
    if (path === "/home") {
      this.isShowFirst = true;
    }
  },

  computed: {
    //   categoryList(){
    //       return this.$store.state.home.categoryList
    //   }

    // 使用mapstate
    // ...mapState(['categoryList'])  // 不可以 this.$store.state.categoryList
    ...mapState({
      categoryList: state => state.home.categoryList
    })
  },

  methods: {
    toSearch(event, c1) {
      this.$router.push(
        `/search?categoryId=${c1.categoryId}&categoryName=${c1.categoryName}`
      );
    },

    toSearch3(event) {
      let target = event.target;
      //   console.log(target.dir)   错误写法
      // console.dir(target)

      if (target.tagName.toUpperCase() === "A") {
        let { categoryid, categoryname } = target.dataset;
        let query = { categoryid, categoryname };
        //   console.log(query)
        this.$router.push({
          name: "search",
          query,
          params:this.$route.params
        });
      }
    },
    //   节流
    showSubList: throttle(function(index) {
      //
      this.currentIndex = index;
    }, 200)
  }
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

    //   指定过渡样式
        &.slide-enter-active, &.slide-leave-active{
            transition: all 0.5s;
        }
    //  指定隐藏时的样式
        &.slide-enter, &.slide-leave-to{
            opacity: 0;
            height: 0;
        }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.active {
            background-color: #ccc;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
