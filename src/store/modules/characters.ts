import { CharacterType } from "@/types";
import Vue from "vue";
import Vuex from "vuex";
import { getCharacter } from "rickmortyapi";

Vue.use(Vuex);

export default ({
  state: {
    characters: [],
    properties: ["image", "id", "name", "gender", "species", "episode"]
  },
  getters: {
    getBaseUrl(state) {
      return state.baseUrl;
    },
    modifiedCharacters(state): Array<CharacterType>{
      return state.characters.map((character: CharacterType) => {
        const person = state.properties.reduce((newCharacter: Record<string, string>, property: string) => {
          newCharacter[property] = character[property];
          return newCharacter;
        }, {});

        return person as CharacterType;
      });
    }
  },
  mutations: {
    async initCharactersList(state) {
      const chars = await getCharacter();
      state.characters = chars.results;
    }
  },
  actions: {
    getAllCharacters({ commit }): void {
      console.log('getall')
      commit("initCharactersList");
    },
  },
  modules: {}
});
