<template>
  <transition name="toast-fade">
      <div v-show="visible" :class="position" class="toast-box" @touchmove.stop.prevent>
          <div class="toast-message">
            <div class="toast-icon" v-if="iconClass"><i class="iconfont" :class="iconClass"></i></div>
            <p v-html="message"></p>
          </div>
      </div>
  </transition>
</template>

<script>
export default {
  props: {
    position: String,
    message: "",
    icon: String
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    iconClass() {
      return this.icon ? "icon-" + this.icon : null;
    }
  }
};
</script>

<style lang="scss">
@import "../../css/colors.scss";
@import "../../css/function.scss";
.toast-box {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  .toast-message {
    word-wrap: break-word;
    padding: 12px 15px;
    color: #fff;
    border-radius: 3px;
    font-size: pxToRem(15px);
    max-width: 80%;
    background-color: rgba(0, 0, 0, 0.7);
    text-align: center;
    a {
      color: #fff;
    }
    .toast-icon {
      font-size: 0;
      width: 90px;
      margin: 0 auto;
      i {
        font-size: 46px;
        &.icon-warn{
            color: $yellowColor;
        }
        &.icon-error{
            color: $redColor;
        }
      }
    }
  }
}
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: opacity 0.2s;
}

.toast-fade-leave-to {
  opacity: 0;
}
</style>


