/* eslint-disable linebreak-style */
import axios from '@/plugins/axios';
import types from './actionTypes';

export default {

  setPopMovies({ commit }) {
    commit(types.REQUESTING_DATA);

    axios.get('/movie/popular').then((res) => {
      commit(types.SET_POP_MOVIES, { popMovies: res.data.results });
    }).catch((err) => console.error(err));
  },

  setSelectedMovie({ commit }, movieId) {
    commit(types.REQUESTING_DATA);

    axios.get(`/movie/${movieId}?append_to_response=videos,similar,recommendations`).then((res) => {
      commit(types.SET_SELECTED_MOVIE, { selectedMovie: res.data });
    }).catch((err) => console.error(err));
  },

  setSearchResult({ commit }, { query, page }) {
    commit(types.REQUESTING_DATA);
    axios.get(`/search/movie?query=${query}&page=${page}`).then((res) => {
      commit(types.SET_SEARCH_RESULT, {
        searchResult: res.data,
      });
    }).catch((err) => { console.log(err); });
  },
};
