import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    popMovies: [],
    fetching: false,
    selectedMovie: {},
    searchResult: [],
    searchResultQtt: 0,
    searchPageQtt: 0,
    error: false,
  },
  mutations: {
    ...mutations,
  },
  actions: {
    ...actions,
  },
  modules: {
  },
  getters: {
    popMovies(state) {
      return state.popMovies;
    },
  },
});
