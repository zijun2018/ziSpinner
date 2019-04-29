/**
*   @Project:   zi-spinner主
*   @Author:    Zi_Jun
*   @Email:     <- zijun2030@gmail.com -->
*   @Date:      2019/4/28 17:59
*   @Note:
*/


<template>
  <div :class="{
         'zi-fade-in-max': fadeIn === 'max' && !noFadeIn,
         'zi-fade-in': (fadeIn === '' || fadeIn === 'common') && !noFadeIn,
         'zi-fade-in-min': fadeIn === 'min' && !noFadeIn,
         }"
       class="zi-spinner-box">
    <div :class="spinnerName"
         :style="spinnerStyle"
         class="zi-spinner">
      <div :key="i" v-for="i in load.divCount"></div>
    </div>
  </div>
</template>

<script>
  import SPINNERS from './js/spinners'

  export default {
    name: "ziSpinner",

    props: {
      // spinner名称
      name: {
        type: String,
        default: 'circle',
      },
      // spinner颜色值
      color: {
        type: String,
        default: '#999',
      },
      // spinner宽度
      width: {
        type: String,
        default: '',
      },
      // spinner高度
      height: {
        type: String,
        default: '',
      },
      // 是否不需要淡入，默认淡入
      noFadeIn: {
        type: Boolean,
        default: false,
      },
      // 淡入效果类型，max/common/min 2s/1s/0.5s 默认0.5s
      fadeIn: {
        type: String,
        default: 'min',
      },
      // 自定义样式
      className: {
        type: String,
        default: '',
      }
    },

    computed: {
      // 组件名称，自动添加插件前缀
      spinnerName() {
        return `zi-${this.name}`
      },

      // 计算props传递的几个属性
      spinnerStyle() {
        let width = this.width ? `width: ${this.width};` : '';
        let height = this.height ? `height: ${this.height};` : '';
        let color = this.color ? `color: ${this.color};` : '';
        return (width + height + color);
      },

      // 初始化不同类型对应的数据对象
      load() {
        const SPINNER = SPINNERS[this.name];
        if (SPINNER) {
          return SPINNER;
        } else {
          return {
            className: '',
            divCount: 0
          }
        }
      }
    },
  }
</script>

<style scoped>
  @import "css/index.css";
</style>

