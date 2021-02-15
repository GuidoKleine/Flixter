import Vue from 'vue';
import Vuex from 'vuex';
import showsServices from '@/services';

Vue.use(Vuex);

export const cleanState = {
  shows: [],
  genres: [],
  show: [],
  searchOverlay: false,
  searchedShows: [],
};

export const getters = {
  getShows: (state) => state.shows,
  getGenres: (state) => state.genres,
  getSingleShowInfo: (state) => state.show,
  getSearchOverlay: (state) => state.searchOverlay,
  getSearchedShows: (state) => state.searchedShows,
};

export const mutations = {
  SET_SHOWS(state, data) {
    state.shows = data;
  },
  SET_GENRES(state, data) {
    state.genres = data;
  },
  SET_SHOW(state, data) {
    state.show = data;
  },
  SET_SEARCHOVERLAY(state, data) {
    state.searchOverlay = data;
  },
  SET_SEARCHEDSHOWS(state, data) {
    state.searchedShows = data;
  },
};

export const actions = {
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
  async setSearchOverlay({ commit }, boolean) {
    commit('SET_SEARCHOVERLAY', boolean);
  },
  async setSearchedShows({ commit }, searchQuery) {
    const data = await showsServices.getSearchedQuery(searchQuery);
    commit('SET_SEARCHEDSHOWS', data);
  },
};

export default new Vuex.Store({
  state: cleanState,
  getters,
  mutations,
  actions,
});
