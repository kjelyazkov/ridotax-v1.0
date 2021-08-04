import api from "./../../services/api";
export default {
  namespaced: true,
  state: {
    cars: []
  },
  mutations: {
    SET_CARS(state, payload) {
      state.cars = payload;
    },
    ADD_NEW_CAR(state, payload) {
      state.cars.push(payload);
    },
    UPDATE_CAR(state, payload) {
      var index = state.cars.findIndex(car => car.id == payload.id);
      state.cars[index] = payload;
    }
  },
  actions: {
    async list({ commit }) {
      commit("LOADING", true, { root: true });
      const cars = await api.getCars();
      commit("SET_CARS", cars.data);
      commit("LOADING", false, { root: true });
    },
    async store({ commit }, payload) {
      commit("LOADING", true, { root: true });
      const newCar = await api.storeCar(payload);
      commit("ADD_NEW_CAR", newCar.data);
      commit("LOADING", false, { root: true });
    },
    async update({ commit }, payload) {
      commit("LOADING", true, { root: true });
      const newCar = await api.updateCar(payload);
      commit("UPDATE_CAR", newCar.data.data);
      commit("LOADING", false, { root: true });
    }
  },
  getters: {
    showOne: (state) => (id) => {
      return state.cars.find(car => car.id == id);
    }
  }
}