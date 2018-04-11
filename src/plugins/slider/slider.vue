<template>
  <div ref="slider" class="weui-slider" :class="disabledCls">  
      <slot name="min"></slot>
          <div class="weui-slider__inner"> 
              <div class="weui-slider__track" :style="{width: progress}"></div> 
              <div class="weui-slider__handler" :style="{left: progress}"></div> 
        </div> 
        <slot name="max"></slot>
    </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    value: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 0
    }
  },
  created(){
      this.max = this.max > 100 ? 100 : this.max
  },
  data() {
    return {
      handlerStartPos: 0
    };
  },
  computed: {
    progress() {
      return this.value + "%";
    },
    disabledCls(){
        return this.disabled ? 'disabledCls' : '';
    }
  },
  methods: {
    getHandlerPos() {
      let pos = getComputedStyle(this.slderHandler).left;
      if (/%/.test(pos)) {
        pos = this.totalWidth * parseFloat(pos) / this.max;
      } else {
        pos = parseFloat(pos);
      }
      return pos;
    },
    setHandler(distance) {
      let dist, // handler的目标位置
        percent; // 所在位置的百分比

      if (this.step > 0) {
        let stepWidth = this.totalWidth * this.step / 100;
        distance = Math.round(distance / stepWidth) * stepWidth;
      }
      dist = this.handlerStartPos + distance;
      dist = dist < 0 ? 0 : dist > this.totalWidth ? this.totalWidth : dist;

      return this.max * dist / this.totalWidth;
    },
    touchstart(evt) {
      if (this.disabled) return;
      this.handlerStartPos = this.getHandlerPos();
      this.handlerStartX = evt.changedTouches[0].clientX;
    },
    touchmove(evt) {
      if (this.disabled) return;
      evt.preventDefault();
      let value = this.setHandler(
        evt.targetTouches[0].clientX - this.handlerStartX
      );
      this.$emit("input", Math.round(value));
    },
    touchend(evt) {
      if (this.disabled) return;
    }
  },
  mounted() {
    this.slderHandler = this.$refs.slider.querySelector(
      ".weui-slider__handler"
    );

    let totalWidth = this.$refs.slider.querySelector(".weui-slider__inner");
    this.totalWidth = parseInt(getComputedStyle(totalWidth).width) * (this.max / 100);

    this.slderHandler.addEventListener("touchstart", this.touchstart, false);
    this.slderHandler.addEventListener("touchmove", this.touchmove, false);
    this.slderHandler.addEventListener("touchend", this.touchend, false);
  }
};
</script>

<style lang="scss">
@import '../../css/colors.scss';
.weui-slider{
    display: flex;
    align-items: center;
    position: relative;
    .slot{
        padding: 0 15px;
    }
    .weui-slider__inner{
        flex: 1;
    }
    &.disabledCls{
        .weui-slider__track{
            background-color: $themeHover;
        }
        .weui-slider__handler{
            background-color: #e9e9e9;
        }
    }
}
</style>


