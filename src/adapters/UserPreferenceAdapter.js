/*
  UserPreferenceAdapter
  Acts as an adapter between the Application State module and the User
  Preferences REST service. The User Preferences REST service persists user
  preferences between sessions of the app.
  The adapter enables us to use a different persistence mechanism if desired, 
  without changing the internals of the app.
*/
const navDrawerPrefs = {};

export const UserPreferenceAdapter = {
  /* NAVIGATION DRAWER */
  loadNavDrawerUserPreferences: async function(uid) {
    uid == null;
    return {
      navDrawerPreference: "MINI_PERMANENT",
      navDrawerExpandOnHover: true,
      navDrawerDense: true,
      navDrawerRight: true
    };
  },
  saveNavDrawerUserPreferences: async function(prefs, uid) {
    if (prefs && uid) {
      navDrawerPrefs["navDrawerPreference"] = prefs;
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
