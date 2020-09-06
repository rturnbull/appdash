"use strict";
const namespaced = true;

const state = {
  navDrawer: {
    navDrawerStaticSettings: {
      clipped: true,
      dense: true,
      right: false,
      absolute: true,
      color: "secondary",
      colorOptions: ["primary", "secondary", "accent"],
      miniVariantWidth: "60",
      dark: false
    },
    navDrawerUserSettings: {
      name: "DEFAULT_SLIDE_OUT",
      value: false,
      mini: false,
      expandOnHover: false,
      permanent: false,
      temporary: true,
      hideOverlay: null
    },
    navDrawerOptions: [
      {
        name: "DEFAULT_SLIDE_OUT",
        value: false,
        mini: false,
        expandOnHover: false,
        permanent: false,
        temporary: true,
        hideOverlay: null
      },
      {
        name: "DEFAULT_PERMANENT",
        value: false,
        mini: false,
        expandOnHover: false,
        permanent: true,
        temporary: false,
        hideOverlay: null
      },
      {
        name: "MINI_SLIDE_OUT",
        value: false,
        mini: true,
        expandOnHover: true,
        permanent: false,
        temporary: true
      },
      {
        name: "MINI_PERMANENT",
        value: false,
        mini: true,
        expandOnHover: true,
        permanent: true,
        temporary: null,
        hideOverlay: null
      }
    ]
  }
};
const getters = {
  navDrawer: state => state.navDrawer.navDrawerUserSettings.drawer,
  navDrawerStaticSettings: state => state.navDrawer.navDrawerStaticSettings,
  navDrawerUserSettings: state => state.navDrawer.navDrawerUserSettings,
  navDrawerOptions: state => state.navDrawer.navDrawerOptions
};
const mutations = {
  setNavDrawer(state, value) {
    state.navDrawer.navDrawerUserSettings.drawer = value;
  },
  setNavDrawerSettings(state, value) {
    state.navDrawer.navDrawerSettings = value;
  },
  setNavDrawerPreference(state, value) {
    state.navDrawer.navDrawerPreference = value;
  },
  setNavDrawerUserSettings(state, value) {
    state.navDrawer.navDrawerUserSettings = value;
  }
};
const actions = {
  applyNavDrawerUserPreference: function({ commit }, pref) {
    let options = state.navDrawer.navDrawerOptions;
    for (let i = 0; i < options.length; i++) {
      if (options[i].name === pref) {
        commit("setNavDrawerUserSettings", options[i]);
        break;
      }
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
