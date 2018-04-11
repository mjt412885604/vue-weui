<template>
  <input class="weui-switch" :checked="value" type="checkbox" @change="changeChecked" />
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeChecked(evt) {
      this.$emit("change", evt);
      this.$emit("input", evt.target.checked);
    }
  }
};
</script>
<style lang="scss" scoped>
.weui-switch {
  vertical-align: middle;
}
</style>


