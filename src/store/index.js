import Vue from 'vue';
import Vuex from 'vuex';
import showsServices from '@/services/showsServices';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shows: [],
  },

  getters: {
    shows: (state) => state.shows,
  },

  mutations: {
    SET_SHOWS(state, shows) {
      state.shows = shows;
    },
  },

  actions: {
    async setShows({ commit }) {
      const data = await showsServices.getAllShows();
      commit('SET_SHOWS', data);
    },
  },
});
