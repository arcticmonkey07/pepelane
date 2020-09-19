import { getVehicles } from "~/api/request";

export const state = () => ({
  vehicles: [],
  isModalActive: false,
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
    let vehicles = state.vehicles.concat(payload);
    state.vehicles = vehicles;
    console.log(state);
  },
  showModal(state) {
    state.isModalActive = true;
  },
  hideModal(state) {
    state.isModalActive = false;
  }
};

export const getters = {
  vehicles: s => s.vehicles
};
