/* eslint-disable linebreak-style */
import axios from '@/plugins/axios';
import types from './actionTypes';

export default {
  setPopMovies({ commit }) {
    axios.get('/movie/popular').then((res) => {
      commit(types.SET_POP_MOVIES, { popMovies: res.data.results });
    }).catch((err) => console.error(err));
  },
  setSelectedMovie({ commit }, movieId) {
    axios.get(`/movie/${movieId}?append_to_response=videos,similar,recommendations`).then((res) => {
      console.log(res);
      commit(types.SET_SELECTED_MOVIE, { selectedMovie: res.data });
    }).catch((err) => console.error(err));
  },
};
