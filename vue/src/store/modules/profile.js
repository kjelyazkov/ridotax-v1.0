import api from "../../services/api";

export default {
  namespaced: true,
  state: {
    name: null,
    email: null
  },
  mutations: {
    SET_PROFILE(state, payload) {
      state.name = payload.name;
      state.email = payload.email;
    },
    RESET_PROFILE(state) {
      state.name = null,
        state.email = null
    }
  },
  actions: {
    async get({ commit }) {
      commit("LOADING", true, { root: true });
      const profile = await api.profile();
      commit("SET_PROFILE", profile.data);
      commit("LOADING", false, { root: true });
    }
  },
}