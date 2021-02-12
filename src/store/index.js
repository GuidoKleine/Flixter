import Vue from 'vue';
import Vuex from 'vuex';
import showsServices from '@/services/showsServices';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shows: [],
    genres: [],
  },

  getters: {
    getShows: (state) => state.shows,
    getGenres: (state) => {
      state.shows.forEach((element) => {
        console.log(element.genres);
      });
    },
  },

  mutations: {
    SET_SHOWS(state, shows) {
      state.shows = shows;
    },
    SET_GENRES(state, genres) {
      state.genres = genres;
    },
  },

  actions: {
    async setShows({ commit }) {
      const data = await showsServices.getAllShows();
      commit('SET_SHOWS', data);
    },
    async setGenres({ commit }) {
      const genres = await showsServices.getGenres;
      commit('SET_GENRES', genres);
    },
  },
});
