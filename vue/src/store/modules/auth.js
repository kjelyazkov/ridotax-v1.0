import api from "./../../services/api";
export default {
  namespaced: true,
  state: {
    token: null,
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    }
  },
  actions: {
    async register({ commit }, credentials) {
      commit("LOADING", true, { root: true });
      await api.register(credentials);
      commit("LOADING", false, { root: true });
    },
    async login({ commit }, credentials) {
      commit("LOADING", true, { root: true });
      const token = await api.login(credentials);
      commit("SET_TOKEN", token.data.token);
      commit("LOADING", false, { root: true });
    },
    async logout({ commit }) {
      commit("LOADING", true, { root: true });
      await api.logout();
      commit("SET_TOKEN", null);
      commit("profile/RESET_PROFILE", null, { root: true });
      commit("LOADING", false, { root: true });
    },
  },
}