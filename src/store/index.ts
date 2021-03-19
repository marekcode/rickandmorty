import Vue from "vue";
import Vuex from "vuex";
import Characters from "./modules/characters";
import Favorites from "./modules/favorites";

Vue.use(Vuex);

export const store = new Vuex.Store({
  devtools: true,
  state: {
    columns: [
      "Photo",
      "Character ID",
      "Name",
      "Gender",
      "Species",
      "Last Eposode",
      "Add To Favorites"
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    character: Characters,
    favorites: Favorites
  }
});

export default store;
