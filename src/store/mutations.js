/* eslint-disable linebreak-style */
import types from './actionTypes';

export default {
  [types.SET_POP_MOVIES](state, payload) {
    state.popMovies = payload.popMovies;
    state.loading = false;
  },
  [types.SET_SELECTED_MOVIE](state, payload) {
    state.selectedMovie = payload.selectedMovie;
    state.loading = false;
  },
  [types.REQUESTING_DATA](state) {
    state.loading = true;
  },
  [types.SET_SEARCH_RESULT](state, payload) {
    state.searchResult = payload.searchResult;
    state.loading = false;
  },
};
