import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

export default {
  state: {
    images: [],
    races: [],
    currentRace: null,
    categories: [],
    currentCategory: null
  },
  mutations,
  actions,
  getters
};
