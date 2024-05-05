export const INDEX_NAME = import.meta.env.VITE_ALGOLIA_INDEX_NAME;
export const APP_ID = import.meta.env.VITE_ALGOLIA_APP_ID;
export const SEARCH_API_KEY = import.meta.env.VITE_ALGOLIA_SEARCH_API_KEY;
export const INSTANT_SEARCH_QUERY_SUGGESTIONS = "pokedex_query_suggestions";
export const PREFERED_LANGUAGE_KEY = "ALGOLIA__preferedLanguage";
export const DEFAULT_LANGUAGE_KEY = "english";
export const AVAILABLE_LANGUAGES = [
  "english",
  "japanese",
  "chinese",
  "french",
] as const;

export const POKEMON_TYPES_COLORS = {
  default: "bg-slate-500",
  normal: "bg-gray-500",
  fire: "bg-red-500",
  water: "bg-blue-500",
  electric: "bg-yellow-500",
  grass: "bg-green-500",
  ice: "bg-teal-500",
  fighting: "bg-red-700",
  poison: "bg-purple-500",
  ground: "bg-yellow-700",
  flying: "bg-blue-300",
  psychic: "bg-pink-500",
  bug: "bg-green-600",
  rock: "bg-gray-700",
  ghost: "bg-indigo-700",
  dragon: "bg-orange-500",
  dark: "bg-gray-900",
  steel: "bg-gray-600",
  fairy: "bg-pink-300",
} as { [key: string]: string };
