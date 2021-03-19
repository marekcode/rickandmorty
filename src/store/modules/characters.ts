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
  },
  getters: {
    modifiedCharacters(
      state: StateType
    ): Array<DisplayedCharacterType> | undefined {
      return (
        state.characters &&
        state.characters.map((character: CharacterType) => {
          return {
            image: character.image,
            id: character.id,
            name: character.name,
            gender: character.gender,
            species: character.species,            
            episode: character.episode
          }
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
