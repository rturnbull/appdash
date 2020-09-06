/*
  UserPreferenceAdapter
  Acts as an adapter between the Application State module and the User
  Preferences REST service. The User Preferences REST service persists user
  preferences between sessions of the app.
  Like an API. 
*/
export const UserPreferenceAdapter = {
  loadUserPreferences: async function(uid) {
    uid == null;
    return {
      navDrawerPreference: "DEFAULT_PERMANENT"
    };
  }
};
