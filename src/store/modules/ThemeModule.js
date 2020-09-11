/* 
    Theme VUEX Module
    @/store/modules/ThemeModule.js

    We acknowledge Canva for the color schemes 
    https://www.canva.com/learn/100-color-combinations/

*/

"use strict";
const namespaced = true;

const state = {
  themes: [
    {
      name: "Default Theme",
      primary: "#003b46",
      secondary: "#66a5ad",
      accent: "#07575b",
      info: "#c4dfe6",
      error: "#FF5252",
      success: "#4CAF50",
      warning: "#FFC107",
      active: true,
      default: true
    },
    {
      name: "Subdued & Professional",
      primary: "#336b87",
      secondary: "#90afc5",
      accent: "#763626",
      error: "#FF5252",
      info: "#2a3132",
      success: "#4CAF50",
      warning: "#FFC107",
      active: false
    },
    {
      name: "Crisp & Dramatic",
      primary: "#505160",
      secondary: "#aebd38",
      accent: "#598234",
      info: "#68829e",
      error: "#FF5252",
      success: "#4CAF50",
      warning: "#FFC107",
      active: false
    },
    {
      name: "Refreshing & Pretty",
      primary: "#5bc8ac",
      secondary: "#e6d72a",
      accent: "#f18d9e",
      info: "#98dbc6",
      error: "#FF5252",
      success: "#4CAF50",
      warning: "#FFC107",
      active: false
    },
    {
      name: "Fresh & Energetic",
      primary: "#34675c",
      secondary: "#b3c100",
      accent: "#b7b8b6",
      info: "#4cb5f5",
      error: "#FF5252",
      success: "#4CAF50",
      warning: "#FFC107",
      active: false
    },
    {
      name: "Bright & Tropical",
      primary: "#f52549",
      secondary: "#fa6775",
      accent: "#9bc01c",
      info: "#ffd64d",
      error: "#FF5252",
      success: "#4CAF50",
      warning: "#FFC107",
      active: false
    },
    {
      name: "Berry Blues",
      primary: "#283655",
      secondary: "#4d648d",
      accent: "#1e1f26",
      info: "#283655",
      error: "#FF5252",
      success: "#4CAF50",
      warning: "#FFC107",
      active: false
    }
  ]
};

const getters = {
  themes: state => state.themes,

  activeTheme: state => {
    for (var theme of state.themes) {
      if (theme.active) {
        return theme;
      }
    }
  },

  defaultTheme: state => {
    for (var theme of state.themes) {
      if (theme.default) {
        return theme;
      }
    }
  }
};

const mutations = {
  setActiveTheme(state, themeName) {
    for (var i = 0; i < state.themes.length; i++) {
      var theme = state.themes[i];
      if (theme.name == themeName) {
        state.themes[i].active = true;
      } else {
        if (state.themes[i].active == true) {
          state.themes[i].active = false;
        }
      }
    }
  }
};

const actions = {};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
