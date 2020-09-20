import { getVehicles } from "~/api/request";

export const state = () => ({
  vehicles: [],
  isModalActive: false,
  isNightMode: false
});

export const actions = {
  async fetch({ commit }) {
    const vehicles = await getVehicles();
    commit("setVehicles", vehicles);
  }
};

export const mutations = {
  setVehicles(state, vehicles) {
    state.vehicles = vehicles;
  },
  addVehicle(state, payload) {
    state.vehicles.push({ ...payload });
    console.log(state);
  },
  toggleModal(state) {
    state.isModalActive = !state.isModalActive;
  },
  setNightMode(state) {
    state.isNightMode = !state.isNightMode;
  }
};

export const getters = {
  vehicles: s => s.vehicles
};
