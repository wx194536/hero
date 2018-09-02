//基于webpack的开发，是基于模块化的开发

import Vue from 'vue';
import App from './App.vue';

//导入全局的CSS样式
import 'bootstrap/dist/css/bootstrap.css';
//导入CSS样式
import './assets/index.css';

new Vue({
  el: '#app',
  render: h => h(App)
});
