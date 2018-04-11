<template>
  <div class="weui-cell" :class="{'weui-cell_access': access}" v-if="!href" @click="onClick">
      <slot></slot>  
  </div>
  <a class="weui-cell" :class="{'weui-cell_access': access}"  @click="onClick" :href="href ? href : 'javascript:;'" v-else>
      <slot></slot>  
  </a>
</template>

<script>
export default {
  name: "Cell",
  props: {
    href: String,
    access: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(e) {
      if (!this.href) {
        this.$emit("click", arguments);
      }
    }
  }
};
</script>

