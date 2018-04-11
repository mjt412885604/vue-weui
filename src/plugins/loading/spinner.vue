<template>
  <div class="spinner-fading-circle" :style="{
      width: spinnerSize,
      height: spinnerSize
    }">
    <div v-for="n in 12" :class="['is-circle' + (n + 1)]" class="circle" :key="n"></div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      default: 35
    },
    color: {
      type: String,
      default: "#fff"
    }
  },
  created() {
    // 创建颜色体
    let styleNode = document.createElement("style");
    const css = `.circle::before{background-color: ${this.color};}`;
    styleNode.type = "text/css";
    styleNode.rel = "stylesheet";
    styleNode.appendChild(document.createTextNode(css));
    document.getElementsByTagName("head")[0].appendChild(styleNode);
  },
  computed: {
    spinnerSize() {
      return this.size + "px";
    }
  }
};
</script>

<style lang="scss">
.spinner-fading-circle {
  position: relative;
  .circle {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    &::before {
      content: " ";
      display: block;
      margin: 0 auto;
      width: 15%;
      height: 15%;
      border-radius: 50%;
      animation: loading-fading-circle 1.2s infinite ease-in-out both;
    }
    @for $i from 2 through 12 {
      &.is-circle#{$i} {
        transform: rotate(360deg / 12 * ($i - 1));
        &::before {
          animation-delay: -1.2s + 1.2s / 12 * ($i - 1);
        }
      }
    }
  }
}
@keyframes loading-fading-circle {
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
</style>


