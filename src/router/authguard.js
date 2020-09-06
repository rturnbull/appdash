import store from "@/store/index";

export default (to, from, next) => {
  next("/signin");
  if (store.getters["Auth/user"]) {
    next();
  } else {
    next("/signin");
  }
};
