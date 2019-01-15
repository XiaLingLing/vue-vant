// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {PullRefresh ,Dialog, Loading ,NavBar , Tabbar, TabbarItem } from 'vant';
Vue.use(PullRefresh).use(Dialog).use(Loading).use(NavBar).use(Tabbar).use(TabbarItem);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
