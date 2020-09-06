/* 
  ProfileAdapter 
  Acts as an adapter between the ProfilesModule and the Profile REST service.
  Like an API. 
*/
export const ProfileAdapter = {
  createProfile: async function(payload) {
    return payload;
  },
  loadProfile: async function(uid) {
    uid == null;
    return {
      uid: "pROtbEkeMVXsbuQ2o1EPptYRRez2",
      name: "Douglas Green",
      email: "dg@example.com",
      pid: 1
    };
  }
};
