<template>
  <button
  v-if="!link"
  class="weui-btn"
  :class="[btnClass, btnDisabled, btnLoading, btnSize]"
  @click="handleClick"
  :disabled="isDisabled"
  >
      <i class="weui-loading" v-if="loading"></i>
      <slot></slot>
  </button>
  <a
  v-else
  class="weui-btn"
  :class="[btnClass, btnDisabled, btnLoading, btnSize]"
  @click="handleClick"
  :disabled="isDisabled"
  :href="getHref"
  >
      <i class="weui-loading" v-if="loading"></i>
      <slot></slot>
  </a>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: String,
    href: String,
    plain: {
      type: Boolean,
      default: false
    },
    link: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    mini: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClass() {
      if (this.type) {
        return this.plain
          ? `weui-btn_plain-${this.type}`
          : `weui-btn_${this.type}`;
      } else {
        return this.plain ? "weui-btn_plain-default" : "weui-btn_default";
      }
    },
    btnDisabled() {
      return this.disabled
        ? this.plain ? "weui-btn_plain-disabled" : "weui-btn_disabled"
        : "";
    },
    isDisabled() {
      return this.disabled || this.loading ? true : false;
    },
    btnLoading() {
      return this.loading
        ? this.disabled
          ? "weui-btn_disabled"
          : "weui-btn_loading weui-btn_disabled"
        : "";
    },
    btnSize() {
      return this.mini ? "weui-btn_mini" : "";
    },
    getHref() {
      return this.href && this.link ? this.href : "javascript:;";
    }
  },
  methods: {
    handleClick() {
      if (this.href && this.link) return;
      this.$emit("click", arguments);
    }
  }
};
</script>

<style lang="scss">
.weui-btn_mini {
  vertical-align: middle;
}
</style>


