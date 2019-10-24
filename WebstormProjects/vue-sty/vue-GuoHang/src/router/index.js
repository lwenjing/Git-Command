import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/login/login';
import Home from '@/pages/home/home';

import elePosNumberBill from '@/pages/invoice/ele/positiveNumberBill';
import eleNegitiveNumberBill from '@/pages/invoice/ele/negativeNumberBill';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/login',
      name: '登录',
      component: Login,
      hidden: true
    },
    {
      path: '/',
      name: '主页',
      component: Home,
      children: [
        {
          path: '/ele.positiveNumber.bill',
          name: '电票正数开具',
          component: elePosNumberBill
        },
        {
          path: '/ele.negativeNumber.bill',
          name: '电票负数数开具',
          component: eleNegitiveNumberBill
        }
      ]
    }
  ]
});
