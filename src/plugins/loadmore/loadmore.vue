<template>
  <div class="weui-loadmore" :class="cls">
        <i class="weui-loading" v-if="isLoading"></i>
        <span class="weui-loadmore__tips" v-html="msg"></span>
    </div>
</template>

<script>
export default {
  name: "Loadmore",
  props: {
    message: String,
    loading: {
      type: Boolean,
      default: true
    },
    showLine: {
      type: Boolean,
      default: false
    },
    showBot: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isLoading() {
      if (this.showLine || this.showBot) {
        return false;
      } else {
        return this.loading;
      }
    },
    cls() {
      if (this.showLine) {
        return "weui-loadmore_line";
      } else if (this.showBot) {
        return "weui-loadmore_line weui-loadmore_dot";
      }
    },
    msg(){
        if(this.showLine){
            return this.message || '暂无数据'
        } else if(this.showBot) {
            return ''
        } else {
            return this.message || '正在加载'
        }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../css/colors.scss";
.weui-loadmore {
  color: $defaultColor;
  .weui-loadmore__tips{
      background-color: transparent;
  }
}
</style>


