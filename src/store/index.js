import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  //state为状态数据，触发action，mutations会去改变state的值，getters对外提拱state的值。
  state: {
    domain: 'http://dev.ccp.msxiaodai.com',
    isLeftHiden: false,
    tabname: "hetong", //默认打开的是基本信息
  },
  mutations: {
    Tabname(state, platform) {
      state.tabname = platform
    }
  },
  actions: {
    settabname({
      commit
    }, platform) {
      commit('Tabname', platform)
    }
  },
  getters: {
    gettabname: (state) => state.tabname
  }
})
