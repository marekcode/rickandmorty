import {
  CharacterType,
  StateType,
  DisplayedCharacterType,
  DisplayedCharacter
} from "@/types";
import Vue from "vue";
import Vuex, { ActionContext } from "vuex";
import { getCharacter } from "rickmortyapi";

Vue.use(Vuex);

export default {
  state: {
    characters: [],
    properties: ["image", "id", "name", "gender", "species", "episode"]
  },
  getters: {
    modifiedCharacters(
      state: StateType
    ): Array<DisplayedCharacterType> | undefined {
      return (
        state.characters &&
        state.characters.map((character: CharacterType) => {
          const acc: DisplayedCharacterType = {};
          const person =
            state.properties &&
            state.properties.reduce(
              (
                newCharacter: DisplayedCharacterType,
                property: keyof typeof DisplayedCharacter
              ) => {
                const newPropertyValue = {
                  property: character[property]
                };
                newCharacter = {
                  ...newCharacter,
                  ...newPropertyValue
                };
                return newCharacter;
              },
              acc
            );

          return person as DisplayedCharacterType;
        })
      );
    }
  },
  mutations: {
    async initCharactersList(state: StateType) {
      const chars = await getCharacter();
      state.characters = chars.results;
    }
  },
  actions: {
    getAllCharacters(context: ActionContext<StateType, StateType>): void {
      context.commit("initCharactersList");
    }
  },
  modules: {}
};
