<template>
  <div>
      <div ref="header">
            <ButtonArea>
                <Button @click="test">dialog</Button>
            </ButtonArea>

            <Cells>
                <Cell access href="#/home">
                    <CellBody>A标签跳转</CellBody>
                    <CellFooter></CellFooter>
                </Cell>
            </Cells>
      </div>
      <div class="scroll-list-content">
          <scroll 
            ref="scroll"
            :click="click"
            :data="data"
            :pullup="pullup"
            :scrollbar="scrollbar"
            @scrollToEnd="loadMore"
            >
                <ul class="content">
                    <li class="list" v-for="(item, index) in data" :key="index">{{item.name}}</li>
                </ul>
                <div class="load-more">{{loadMessage}}</div>
            </scroll>
      </div>
  </div>
</template>

<script>
import { doctors } from "@/api/data";
const lists = [
  { name: "lilei" },
  { name: "lilei" },
  { name: "lilei" },
  { name: "lilei" },
  { name: "lilei" },
  { name: "lilei" },
  { name: "lilei" },
  { name: "lilei" },
  { name: "lilei" },
  { name: "lilei" }
];

let pageSize = 0;

export default {
  data() {
    return {
      number: 0,
      click: false,
      pullup: true,
      scrollbar: true,
      data: [],
      isLoadMore: true,
      loadMessage: "加载中...",
      getHeight: null
    };
  },
  created() {
    this.loadMore();
  },
  computed: {},
  methods: {
    test() {
      var that = this;
      let $dailog = this.$dialog({
        title: "提示",
        content: "<div id='img'>是否支付？</div>",
        buttons: [
          {
            label: "取消",
            type: "default",
            onClick: function() {}
          },
          {
            label: "确定",
            type: "primary",
            onClick() {
              that.$router.push("home");
            }
          }
        ]
      });
    },
    loadMore() {
      if (pageSize < 5 && this.isLoadMore) {
        this.isLoadMore = false;
        this.loadMessage = "加载中...";

        setTimeout(() => {
          pageSize++;
          this.data = this.data.concat(lists);
          this.loadMessage = "上拉加载更多";
          this.isLoadMore = true;
        }, 500);
      } else {
        this.isLoadMore = false;
        this.loadMessage = "已经全部加载完毕";
      }
    }
  },
  mounted() {},
  components: {}
};
</script>

<style lang="scss" scoped>
@import "../../css/mixin.scss";
.scroll-list-content {
  position: relative;
  height: calc(100vh - 200px);
  margin-top: 5px;
}
.load-more {
  position: relative;
  text-align: center;
  font-size: 16px;
  padding: 10px;
  color: #666;
  i {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
}
.list {
  padding: 10px;
  text-align: center;
  font-size: 18px;
  color: #666;
  @include line1px;
}
</style>





