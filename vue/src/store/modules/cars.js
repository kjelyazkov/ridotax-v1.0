import api from "./../../services/api";

export default {
  namespaced: true,
  state: {
    cars: []
  },
  mutations: {
    SET_CARS(state, payload) {
      state.cars = payload;
    }
  },
  actions: {
    async list({ commit }) {
      commit("LOADING", true, { root: true });
      const cars = await api.getCars();
      commit("SET_CARS", cars.data);
      commit("LOADING", false, { root: true });
    }
  },
}