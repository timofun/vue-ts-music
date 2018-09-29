import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
// import fastclick from 'fastclick';
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false;

// fastclick.FastClick.attach(document.body)

Vue.use(VueLazyload, {
  loading: require('common/image/default.png'),
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
