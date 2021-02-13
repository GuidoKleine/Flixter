import Vue from 'vue';
import Vuex from 'vuex';
import showsServices from '@/services/showsServices';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shows: [],
    genres: [
      {
        id: String,
        genreArray: Array,
      },
    ],
  },

  getters: {
    getShows: (state) => state.shows,
    getGenres: (state) => state.genres,
  },

  mutations: {
    SET_SHOWS(state, data) {
      state.shows = data;
    },
    SET_GENRES(state, data) {
      state.genres = data;
    },
  },

  actions: {
    async setShows({ commit }) {
      const data = await showsServices.getAllShows();
      commit('SET_SHOWS', data);
    },
    async setGenres({ commit }) {
      let returnArray = [];
      this.state.shows.forEach((element) => {
        returnArray = returnArray.concat(element.genres);
      });
      const data = returnArray.filter((item, index) => (returnArray.indexOf(item) === index));
      commit('SET_GENRES', data);
    },
  },
});
