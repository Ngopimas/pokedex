import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import algoliasearch from "algoliasearch/lite";
import { POKEMON_TYPES_COLORS } from "./constants";

const APP_ID = import.meta.env.VITE_ALGOLIA_APP_ID;
const SEARCH_API_KEY = import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY;
export const searchClient = algoliasearch(APP_ID, SEARCH_API_KEY);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getBackgroundColor = (type: string | undefined) => {
  const pokemonType = type || "default";
  return POKEMON_TYPES_COLORS[pokemonType.toLowerCase()];
};

export const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
