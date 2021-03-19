import { CharacterType, OperationType, StateType } from "../../types";
import { getFavoritesCharacters } from "../helper";
import { ActionContext } from "vuex";

export default {
  state: {
    favoritesList: [] as Array<CharacterType>
  },
  getters: {
    isOnFavoritesList: (state: StateType) => (id: number): boolean => {
      return Boolean(
        state.favoritesList &&
          state.favoritesList.find(
            (character: CharacterType) => character.id === id
          )
      );
    }
  },
  mutations: {
    initFavoritesList(state: StateType): void {
      state.favoritesList = getFavoritesCharacters();
    },
    updateFavoritesList: (state: StateType) => (
      character: CharacterType,
      operation: OperationType
    ): void => {
      if (operation === OperationType.add && state.favoritesList) {
        state.favoritesList.push(character);
      }

      if (operation === OperationType.remove) {
        const newFav =
          state.favoritesList &&
          state.favoritesList.filter(
            (person: CharacterType) => person.id !== character.id
          );
        state.favoritesList = newFav;
      }

      localStorage.setItem("characters", JSON.stringify(state.favoritesList));
    }
  },
  actions: {
    initFavorites: (context: ActionContext<StateType, StateType>): void => {
      context.commit("initFavoritesList");
    },
    updateFavorites: (context: ActionContext<StateType, StateType>) => (
      character: CharacterType,
      operation: OperationType
    ): void => {
      const contain = context.getters.isOnFavoritesList(character.id);
      if (
        (contain && operation === OperationType.remove) ||
        (!contain && operation === OperationType.add)
      ) {
        context.commit("updateFavoritesList", { character, operation });
      }
    }
  },
  modules: {}
};
