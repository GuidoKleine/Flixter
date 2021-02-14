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
    show: [],
    search: false,
  },

  getters: {
    getShows: (state) => state.shows,
    getGenres: (state) => state.genres,
    getSingleShowInfo: (state) => state.show,
    getSearch: (state) => state.search,
  },

  mutations: {
    SET_SHOWS(state, data) {
      state.shows = data;
    },
    SET_GENRES(state, data) {
      state.genres = data;
    },
    SET_SHOW(state, data) {
      state.show = data;
    },
    SET_SEARCH(state, data) {
      state.search = data;
    },
  },

  actions: {
    async setShows({ commit }) {
      const data = await showsServices.getAllShows();
      data.sort((currValue, nextValue) => (
        currValue.rating.average < nextValue.rating.average ? 1 : -1));
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
    async setShowInfo({ commit }, showId) {
      const data = await showsServices.getSingleShow(showId);
      commit('SET_SHOW', data);
    },
    setSearch({ commit }, boolean) {
      commit('SET_SEARCH', boolean);
    },
  },
});
