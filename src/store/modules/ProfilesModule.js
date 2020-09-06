/* 
    Profiles VUEX Module
    @/store/modules/ProfilesModule.js
*/

"use strict";
const namespaced = true;
import { ProfileAdapter } from "@/adapters/ProfileAdapter.js";

const state = {
  profiles: []
};

const getters = {
  profiles: state => state.profiles,
  getProfileByUid: function(state, uid) {
    for (let profile of state.profiles) {
      if (profile.uid === uid) {
        return profile;
      }
    }
  }
};
const mutations = {
  addProfile(state, payload) {
    state.profiles.push(payload);
  }
};
const actions = {
  async createProfile({ commit }, payload) {
    const pid = await ProfileAdapter.createProfile(payload);
    if (pid) {
      payload["pid"] = pid;
      commit("addProfile", payload);
      commit("setUserCache", null, { root: true });
    }
  },
  async loadProfile({ commit }, user) {
    try {
      const profile = await ProfileAdapter.loadProfile(user.uid);
      if (profile) {
        commit("addProfile", profile);
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
  actions,
  mutations
};
