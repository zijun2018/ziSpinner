/**
*   @Project:   zi-spinner插件
*   @Author:    Zi_Jun
*   @Email:     <- zijun2030@gmail.com -->
*   @Date:      2019/4/28 17:59
*   @Note:      1) 1.0.x版本集成了10种spinner加载效果
*               2) 插件只集成单独图标spinner效果，如有外层蒙层或文字，可外层单独添加
*/


<template>
  <div :class="{
         'zi-fade-in-max': fadeIn === 'max' && !noFadeIn,
         'zi-fade-in': (fadeIn === '' || fadeIn === 'common') && !noFadeIn,
         'zi-fade-in-min': fadeIn === 'min' && !noFadeIn,
         }"
       class="zi-spinner-box"
       v-if="load.className !== ''">
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
      // spinner名称（
      // circle/
      // fading-circle/
      // wave/folding-cube/
      // three-bounce/
      // double-bounce/
      // wandering-cubes/
      // rotating-plane/
      // line-spin-fade-loader）
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

