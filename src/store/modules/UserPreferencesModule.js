"use strict";
const namespaced = true;
import { UserPreferenceAdapter } from "@/adapters/UserPreferenceAdapter.js";
const state = {
  userPreferences: {
    navDrawerPreference: "Foo"
  }
};
const getters = {
  navDrawerUserPref: state => state.userPreferences.navDrawerPreference
};

const mutations = {
  setUserPreferences(state, value) {
    state.userPreferences = value;
  }
};

const actions = {
  async loadUserPreferences({ commit }, uid) {
    try {
      const userPrefs = await UserPreferenceAdapter.loadUserPreferences(uid);
      if (userPrefs) {
        commit("setUserPreferences", userPrefs);
      }
    } catch (error) {
      commit(
        "setAlert",
        { type: "error", message: error.message },
        { root: true }
      );
    }
  }
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
};
