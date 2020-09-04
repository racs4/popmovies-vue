/* eslint-disable linebreak-style */
import types from './actionTypes';

export default {
  [types.SET_POP_MOVIES](state, payload) {
    state.popMovies = payload.popMovies;
  },
  [types.SET_SELECTED_MOVIE](state, payload) {
    state.selectedMovie = payload.selectedMovie;
  },
};
