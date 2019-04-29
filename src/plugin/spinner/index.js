/**
 *   @Project:   spinner首页文件
 *   @Author:    Zi_Jun
 *   @Email:     <- zijun2030@gmail.com -->
 *   @Date:      2019/4/29 10:03
 *   @Note:
 */

import ZiSpinner from './ZiSpinner';

ZiSpinner.install = Vue => {
  Vue.component(ZiSpinner.name, ZiSpinner); // 注册组件
};

export default ZiSpinner;

