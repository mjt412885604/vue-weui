<template>
<div class="loading-box" @touchmove.stop.prevent>
  <div class="loading-content" :class="{'minWidth': message.length>0}">
      <spinner class="loading-spinner"/>
      <p class="text" v-show="message">{{message}}</p>
  </div>
</div>
</template>

<script>
import spinner from "./spinner";
export default {
  data() {
    return {
      message: ""
    };
  },
  components: {
    spinner
  }
};
</script>

<style lang="scss" scoped>
@import "../../css/function.scss";
.loading-box {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  .loading-content {
    max-width: 150px;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    &.minWidth {
      min-width: 102px;
    }
    .loading-spinner {
      margin: 0 auto;
    }
    .text {
      color: #fff;
      font-size: pxToRem(14px);
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-top: 15px;
    }
  }
}
</style>


