import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import algoliasearch from "algoliasearch/lite";
import { APP_ID, SEARCH_API_KEY } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const searchClient = algoliasearch(APP_ID, SEARCH_API_KEY);
