<template>
  <span class="weui-badge" :class="cls" :style="presetStyle">{{msg}}</span>
</template>

<script>
const presetStyles = {
  default: {},
  header: {
    position: "absolute",
    top: "-.4em",
    right: "-.4em"
  },
  body: {
    marginLeft: "5px"
  },
  footer: {
    marginLeft: "5px",
    marginRight: "5px"
  }
};
export default {
  name: "Badge",
  props: {
    preset: {
      type: String,
      default: "default"
    },
    dot: {
      type: Boolean,
      default: false
    },
    message: String
  },
  computed: {
    cls() {
      return this.dot ? "weui-badge_dot" : "";
    },
    msg() {
      return this.dot ? "" : this.message;
    },
    presetStyle() {
      return presetStyles[this.preset];
    }
  }
};
</script>

