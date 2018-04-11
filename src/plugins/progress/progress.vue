<template>
  <div class="weui-progress">
    <div class="weui-progress__bar">
        <div class="weui-progress__inner-bar js_progress" :style="{width: value + '%'}"></div>
    </div>
    <a href="javascript:;" class="weui-progress__opr" v-if="close" @click="onClose"> 
        <i class="weui-icon-cancel"></i>
    </a>
    </div>
</template>

<script>
export default {
  name: "Progress",
  props: {
    close: {
      type: Boolean,
      default: true
    },
    value: Number
  },
  methods: {
    onClose() {
      this.$emit("close");
    }
  }
};
</script>

