import { Hit } from "instantsearch.js";
import { AVAILABLE_LANGUAGES } from "./constants";

export type Pokemon = {
  id: number;
  name: {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
  };
  type: string[];
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    "Sp. Attack": number;
    "Sp. Defense": number;
    Speed: number;
  };
  game_versions: string[];
  imageUrl: string;
  image: string;
};

export type PokemonHit = Hit<Pokemon>;

export type PokemonNameLanguages = (typeof AVAILABLE_LANGUAGES)[number];
