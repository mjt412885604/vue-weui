<template>
  <div>
      <Swiper 
      class="swiper"
      ref="slide" 
      :autoPlay="true" 
      :showDot="true" 
      :speed="300">
          <div v-for="(item, index) in items[1]" :key="index">
            <a :href="item.linkUrl">
              <img :src="item.picUrl">
            </a>
          </div>
    </Swiper>
      <ButtonArea>
          <Button type="primary" :loading="isLoading" @click="showPicker">{{pickerText}}</Button>
            <Button type="warn" @click="actionSheetClick">actionSheet</Button>
            <Button @click="$toast('hello toast')" plain>toast</Button>
            <Button @click="$toast({
                message: 'hello toast',
                icon: 1
            })" plain type="primary">toast success</Button>
            <Button @click="$toast({
                message: 'hello toast',
                icon: 2
            })" type="warn">toast warn</Button>
            <Button @click="$toast({
                message: 'hello toast',
                icon: 3
            })">toast error</Button>
            <Button @click="$dialog('hello toast')">dialog</Button>
      </ButtonArea>
      <Cells>
          <Cell access @click="cellClick">
              <Cell-header><i class="iconfont icon-search font-18 m-r-10"></i></Cell-header>
              <Cell-body>抖音</Cell-body>
              <Cell-footer><Badge message="99+"/></Cell-footer>
          </Cell>
          <Cell access @click="cellClick">
              <Cell-header><i class="iconfont icon-error font-18 m-r-10"></i></Cell-header>
              <Cell-body>火山小视频</Cell-body>
              <Cell-footer><Badge dot/></Cell-footer>
          </Cell>
          <Cell>
              <Cell-body><i class="iconfont font-18 m-r-10 color-theme" :class="['icon-'+(checked ? 'selected' : 'not_Selected')]"></i></Cell-body>
              <Cell-footer>
                    <span class="font-16 color-theme p-r-10" :class="['color-'+ (checked ? 'theme' : 'default2')]">{{checked ? '是' : '否'}}</span>
                  <CheckBox v-model="checked"/>
            </Cell-footer>
          </Cell>
        </Cells> 
        <ButtonArea>
            <Flex>
                <flex-item>
                    <Button mini @click="hide" link>hide</Button>
                </flex-item>    
                <flex-item>
                    <Button @click="test">hide</Button>
                </flex-item> 
            </Flex>    
        </ButtonArea>

        <Slider v-model="sliderValue1"/> 
        <Slider v-model="sliderValue2" :max="80" :min="5" disabled/>
        <Loadmore/>
        <button-area>
            <Progress class="p-10" v-show="isHide" :value="progress" @close="progressClose" :close="false"/>
            <Button @click="upfile" type="primary">上传</Button>    
        </button-area>
      <picker 
        @select="handleSelect" 
        :selected-index="selectedIndex"
        ref="picker" 
        :data="pickerData"
        ></picker>
  </div>
</template>

<script>
let data2 = [
  {
    label: "输出",
    value: "a"
  },
  {
    label: "控制",
    value: "b"
  },
  {
    label: "核心",
    value: "c"
  },
  {
    label: "爆发",
    value: "d"
  },
  {
    label: "辅助",
    value: "e"
  },
  {
    label: "打野",
    value: "f"
  },
  {
    label: "逃生",
    value: "g"
  },
  {
    label: "先手",
    value: "h"
  }
];

let data3 = [
  {
    label: "梅肯",
    value: "s"
  },
  {
    label: "秘法鞋",
    value: "ss"
  },
  {
    label: "假腿",
    value: "sss"
  },
  {
    label: "飞鞋",
    value: "ssss"
  },
  {
    label: "辉耀",
    value: "sssss"
  },
  {
    label: "金箍棒",
    value: "ssssss"
  }
];

const items = [
  [
    {
      linkUrl: "http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE",
      picUrl:
        "http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg",
      id: 11351
    },
    {
      linkUrl:
        "https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2197820&g_f=shoujijiaodian",
      picUrl:
        "http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg",
      id: 11372
    }
  ],
  [
    {
      linkUrl: "http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz",
      picUrl:
        "http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg",
      id: 11378
    },
    {
      linkUrl: "https://y.qq.com/msa/218/0_4085.html",
      picUrl:
        "http://y.gtimg.cn/music/photo_new/T003R720x288M000001s0BXx3Zxcwb.jpg",
      id: 11375
    },
    {
      linkUrl:
        "https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2195876&g_f=shoujijiaodian",
      picUrl:
        "http://y.gtimg.cn/music/photo_new/T003R720x288M000002cwng4353HKz.jpg",
      id: 11287
    }
  ]
];

export default {
  data() {
    return {
      pickerData: [data3],
      selectedIndex: [0],
      isLoading: false,
      sliderValue1: 10,
      sliderValue2: 50,
      progress: 20,
      isHide: true,
      checked: true,
      items,
      pickerText: 'picker 单列'
    };
  },
  computed: {},
  watch: {
    progress(val) {
      if (val >= 100) {
        this.isHide = false;
        this.progress = 0;
        clearInterval(this.timer);
      }
    },
    checked(val) {
      console.log(val);
    }
  },
  methods: {
    hide() {
      this.isLoading = false;
    },
    test() {
      let loading = this.$loading();
      let timer = setTimeout(() => {
        clearTimeout(timer);
        loading.hide();
      }, 2000);
    },
    upfile() {
      this.isHide = true;
      this.timer = setInterval(() => {
        this.progress++;
      }, 10);
    },
    progressClose() {
      this.isHide = false;
    },
    cellClick() {
    },
    showPicker() {
      let picker = this.$refs.picker;
      picker.show();
      this.isLoading = true;
    },
    handleSelect(res) {
      this.pickerText = res[0].label
    },
    actionSheetClick() {
      this.$actionSheet({
        menus: [
          {
            label: "男",
            onClick: function() {
              this.$topTips("1111");
            }
          },
          {
            label: "女",
            onClick: function() {}
          },
          {
            label: "人妖",
            onClick: function() {}
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper{
    margin-bottom: 10px;
}
</style>


