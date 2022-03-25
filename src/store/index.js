import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import news from "./news";

export default new Vuex.Store({
  state: {
    loading: false,
  },
  getters: {
    getLoadingStatus(state) {
      return state.loading;
    },
  },
  mutations: {
    toggleLoading(state) {
      state.loading = !state.loading;
    },
  },
  actions: {},
  modules: {
    news,
  },
});
