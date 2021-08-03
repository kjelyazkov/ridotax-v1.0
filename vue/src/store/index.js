import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import profile from "./modules/profile";
import cars from "./modules/cars";
import fees from "./modules/fees";

export default createStore({
  state: {
    loading: false,
  },
  mutations: {
    LOADING(state, payload) {
      state.loading = payload;
    }
  },
  actions: {},
  modules: {
    auth: auth,
    profile: profile,
    cars: cars,
    fees: fees,
  },
  plugins: [createPersistedState()]
});
