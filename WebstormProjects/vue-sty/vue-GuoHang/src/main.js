// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'common/stylus/base.styl';
import {getCookie, delCookie} from './common/js/cookie';
// axios 配置
import axios from 'axios';
import store from './vuex/store';

Vue.config.productionTip = false;

if (!getCookie('GH_token') || getCookie('GH_token') === 'undefined') {
  router.push('/login');
}

Vue.prototype.$http = axios;
Vue.prototype.$http.defaults.headers.common['x-access-token'] = getCookie('GH_token') || '';
axios.interceptors.request.use(function (config) {
  store.commit('changeLoading', true);
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  store.commit('changeLoading', true);
  if (!response.data.code) {
    if (response.data instanceof Object) {
      response.data.code = '0000';
      response.data.data = response.data;
    } else {
      response.data = {};
      response.data.code = '0000';
    }
  }
  if (response.data.code === '0000' || response.data.code === '9012') {
    return response.data.data;
  } else if (response.data.code === '5999') {
    delCookie('GH_token');
    router.push('/login');
  } else {
    store.commit('changeHint', true);
    store.commit('changeHintClass', 'errorHint');
    store.commit('changeContent', response.data.message);
    setTimeout(function() {
      store.commit('changeHint', false);
    }, 3000);
    return response.data.message;
  }
  // Do something with response data
}, function (error) {
  store.commit('changeLoading', false);
  store.commit('changeHint', true);
  store.commit('changeHintClass', 'errorHint');
  store.commit('changeContent', '请求失败');
  setTimeout(function() {
    store.commit('changeHint', false);
  }, 1000);
  // Do something with response error
  return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
