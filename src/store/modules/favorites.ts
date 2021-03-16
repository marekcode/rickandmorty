import { CharacterType, OperationType } from "../../types";
import { getFavoritesCharacters } from "../helper"
import character from "./characters";

export default ({
  state: {
    favoritesList: [] as Array<CharacterType>
  },
  getters: {
    isOnFavoritesList: (state) => (id) => {
      return Boolean(state.favoritesList.find((character: CharacterType) => character.id === id));
    }
  },
  mutations: {
    initFavoritesList(state): void {
      state.favoritesList = getFavoritesCharacters();
    },
    updateFavoritesList(state, { character, operation }): void {
      if (operation === OperationType.add) {
        state.favoritesList.push(character);
      }

      if (operation === OperationType.remove) {
        const newFav = state.favoritesList.filter((person: CharacterType) => person.id !== character.id);
        state.favoritesList = newFav;
      }

      localStorage.setItem("characters", JSON.stringify(state.favoritesList));
    }
  },
  actions: {
    initFavorites({ commit }): void {
      commit("initFavoritesList");
    },
    updateFavorites({ commit, getters }, { character, operation }): void {
      const contain = getters.isOnFavoritesList(character.id);
      if (contain && operation === OperationType.remove || !contain && operation === OperationType.add) {
        commit("updateFavoritesList", { character, operation });
      }
    }
  },
  modules: {}
});
