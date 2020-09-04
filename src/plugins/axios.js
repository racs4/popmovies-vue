import Vue from 'vue';
import axios from 'axios';
import { API_KEY, API_URL } from '@/config';

axios.defaults.baseURL = API_URL;
axios.defaults.params = {};
axios.defaults.params.api_key = API_KEY;

Vue.use({
  install() {
    Vue.prototype.$http = axios;
  },
});

export default axios;
