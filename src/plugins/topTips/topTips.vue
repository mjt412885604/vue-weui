<template>
    <div class="weui-toptips" :class="['weui-toptips_' + type]" v-html="content"></div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      type: "error",
      visible: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../css/colors.scss";
.weui-toptips {
  display: block;
  a {
    color: #fff;
  }
}

.weui-toptips_error {
  background-color: $redColor;
}

.weui-toptips_warn {
  background-color: $yellowColor;
}

.weui-success {
  background-color: $greenColor;
}
.topTips-fade-enter-active,
.topTips-fade-leave-active {
  transition: transform 0.3s;
}
.topTips-fade-leave-to,
.topTips-fade-enter {
}
</style>


