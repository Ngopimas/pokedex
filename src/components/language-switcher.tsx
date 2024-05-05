import {
  AVAILABLE_LANGUAGES,
  DEFAULT_LANGUAGE_KEY,
  PREFERED_LANGUAGE_KEY,
} from "@/lib/constants";
import { PokemonNameLanguages } from "@/lib/types";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";

import { Trigger } from "@radix-ui/react-select";
import { Languages } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { capitalize } from "@/lib/utils";
import { useAppDispatch } from "./app-context";

export function LanguageSwitcher() {
  const dispatch = useAppDispatch();
  const [preferedLanguage, setPreferedLanguage] =
    useState<string>(DEFAULT_LANGUAGE_KEY);

  // Load the prefered language from localStorage
  useEffect(() => {
    const preferedLanguage = localStorage.getItem(PREFERED_LANGUAGE_KEY);
    if (preferedLanguage) {
      setPreferedLanguage(JSON.parse(preferedLanguage));
      dispatch({
        type: "SET_LANGUAGE",
        payload: JSON.parse(preferedLanguage),
      });
    }
  }, []);

  const handleLanguageChange = (value: PokemonNameLanguages) => {
    localStorage.setItem(PREFERED_LANGUAGE_KEY, JSON.stringify(value));
    dispatch({ type: "SET_LANGUAGE", payload: value });
    setPreferedLanguage(value);
  };

  return (
    <Select
      defaultValue={DEFAULT_LANGUAGE_KEY}
      value={preferedLanguage}
      onValueChange={handleLanguageChange}
    >
      <Trigger
        className={buttonVariants({
          variant: "outline",
          size: "icon",
        })}
      >
        <Languages className="size-4" />
      </Trigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Display Pokemon's name in:</SelectLabel>
          {AVAILABLE_LANGUAGES.map((language) => (
            <SelectItem key={language} value={language}>
              {capitalize(language)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
