/*
  UserPreferenceAdapter
  Acts as an adapter between the Application State module and the User
  Preferences REST service. The User Preferences REST service persists user
  preferences between sessions of the app.
  The adapter enables us to use a different persistence mechanism if desired, 
  without changing the internals of the app.
*/

export const UserPreferenceAdapter = {
  /* NAVIGATION DRAWER */
  loadNavDrawerUserPreferences: async function(uid) {
    uid == null;
    return {
      navDrawerPreference: "DEFAULT_SLIDE_OUT",
      navDrawerExpandOnHover: false,
      navDrawerDense: true,
      navDrawerRight: false
    };
  },
  saveNavDrawerUserPreferences: async function(prefs, uid) {
    if (prefs && uid) {
      return null;
    }
  },
  /* THEME PREFERENCE */
  loadThemeUserPreferences: async function(uid) {
    uid == null;
    return {
      themeUserPreference: "Crisp & Dramatic"
    };
  },
  saveThemeUserPreferences: async function(pref, uid) {
    if (pref && uid) {
      return null;
    }
  }
};
