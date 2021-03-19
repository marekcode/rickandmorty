export interface SearchOption {
  id: number;
  selected: boolean;
  text: string;
}

export enum RowType {
  header = "TR",
  normal = "TD"
}

export enum OperationType {
  add = "add",
  remove = "remove"
}

export interface CharacterType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
  selected: boolean;
}

export interface DisplayedCharacterType {
  id?: number;
  image?: string;
  name?: string;
  species?: string;
  gender?: string;
  episode?: Array<string>;
}

export enum DisplayedCharacter {
  id = "id",
  image = "image",
  name = "name",
  species = "species",
  gender = "gender",
  episode = "episode"
}

export interface StateType {
  columns?: Array<string>;
  characters?: Array<CharacterType>;
  favoritesList?: Array<CharacterType>;
}

export interface GetterType {
  isOnFavoritesList: (id: number) => boolean;
}
