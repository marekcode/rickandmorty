import { CharacterType } from "../types";

export function getFavoritesCharacters(): Array<CharacterType> {
  return JSON.parse(localStorage.getItem("characters") || "[]");
}
