import Vue from 'vue';
import * as Vuex from 'vuex';

import player from './modules/player'
import * as getters from './getters';
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    player,
  },
  getters,
  // strict: debug,  // 加了严格模式动态挂载路由会报错，但不影响功能
  plugins: debug ? [createLogger()] : [],
});
