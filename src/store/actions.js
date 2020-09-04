/* eslint-disable linebreak-style */
import axios from '@/plugins/axios';
import types from './actionTypes';

export default {
  setPopMovies({ commit }) {
    axios.get('/movie/popular').then((res) => {
      commit(types.SET_POP_MOVIES, { popMovies: res.data.results });
    }).catch((err) => console.error(err));
  },
};
