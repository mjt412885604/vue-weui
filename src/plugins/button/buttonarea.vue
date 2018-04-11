<template>
  <div class="weui-btn-area" :class="cls"><slot></slot></div>
</template>

<script>
export default {
  name: 'ButtonArea',
  props: {
      horizontal: {
          type: Boolean,
          default: false
      }
  },
  computed: {
      cls(){
          return this.horizontal ? 'weui-btn-area_inline' : ''
      }
  }
}
</script>

