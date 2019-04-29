/**
 *   @Project:   多个插件统一导出
 *   @Author:    Zi_Jun
 *   @Email:     <- zijun2030@gmail.com -->
 *   @Date:      2019/4/29 10:07
 *   @Note:
 */

import ZiSpinner from './plugin/spinner/index';

const components = {
  ZiSpinner,
};

// script标签方式映入
const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
};

// 支持使用标签方式引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ZiSpinner,
}
