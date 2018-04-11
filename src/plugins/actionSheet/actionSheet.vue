<template>
  <transition name="actionSheet-fade">
      <div class="actionSheet-box" v-show="visible" @touchmove.stop.prevent @click="handleWrapperClick">
        <div class="weui-actionsheet">
            <div class="weui-actionsheet__title" v-if="title" @click.stop>
                <div class="weui-actionsheet__title-text" v-html="title"></div>
            </div>
            <div class="weui-actionsheet__menu">
                <div class="weui-actionsheet__cell" v-for="( menu, index) in menus" :key="index"  @click.stop="btnClick(menu.onClick)">{{menu.label}}</div>
            </div>
            <div class="weui-actionsheet__action">
                <div class="weui-actionsheet__cell" v-for="( action, index) in actions" :key="index" @click.stop="btnClick(action.onClose)">{{action.label}}</div>
            </div>
        </div>
      </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: String,
    menus: {
      type: Array,
      default: function(){
          return []
      }
    },
    actions: {
      type: Array,
      default: function(){
          return []
      }
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    btnClick(callback) {
      typeof callback == 'function' && callback.call(this);
      this.close();
    },
    handleWrapperClick() {
      this.close();
    }
  }
};
</script>

<style lang="scss">
@import "../../css/colors.scss";
.actionSheet-box {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: $maskColor;
  .weui-actionsheet {
    transform: none;
  }
}
.actionSheet-fade-enter-active,
.actionSheet-fade-leave-active {
  transition: opacity 0.3s;
  .weui-actionsheet {
    transition: transform 0.3s;
  }
}

.actionSheet-fade-enter,
.actionSheet-fade-leave-to {
  opacity: 0;
  .weui-actionsheet {
    transform: translate3d(0, 100%, 0);
  }
}
</style>


