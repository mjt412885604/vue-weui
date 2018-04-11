<template>
    <transition name="dialog-fade">
        <div ref="dialog" class="weui-dialog-box" v-show="visible" @click.self="handleWrapperClick" :class="className" @touchmove.stop.prevent>
            <div class="weui-dialog">
                <div class="weui-dialog__hd" v-if="title"><strong class="weui-dialog__title" v-html="title"></strong></div>
                <div class="weui-dialog__bd" v-html="content"><slot></slot></div>
                <div class="weui-dialog__ft" v-if="buttons">
                    <a v-for="(btn, index) in buttons" :key="index" href="javascript:;" class="weui-dialog__btn" :class="[' weui-dialog__btn_' + btn.type]" @click="btnClick(btn.onClick)">{{btn.label}}</a>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: "dialog-box",
  props: {
    title: String,
    content: String,
    className: String,
    closeOnClickModal: {
      type: Boolean,
      default: false
    },
    beforeClose: Function,
    buttons: {
      type: Array
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    btnClick(callback) {
      if (typeof this.beforeClose == "function") {
        this.beforeClose(this.handleClose);
      } else {
        if (callback.call(this) !== false) this.handleClose();
      }
    },
    handleWrapperClick() {
      if (this.closeOnClickModal) {
        this.handleClose();
      }
    },
    handleClose() {
      this.close();
    }
  },
  watch: {
    visible(val) {}
  }
};
</script>

<style lang="scss">
@import "../../css/colors.scss";
.weui-dialog-box {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: $maskColor;
  .weui-dialog {
    transform-origin: 0 0;
  }
}

.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.2s;
}

.dialog-fade-enter,
.dialog-fade-leave-to {
  opacity: 0;
}
</style>


