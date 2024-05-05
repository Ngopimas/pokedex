import { Pokemon } from "@/lib/types";

import { cn, getBackgroundColor } from "@/lib/utils";
import { useAppState } from "./app-context";

export function BasicCard({ pokemon }: { pokemon: Pokemon }) {
  const { language } = useAppState();
  const pokemonName = pokemon.name[language];
  const typeColor = getBackgroundColor(pokemon.type[0]);

  return (
    <div
      className={cn(
        "relative p-8 overflow-hidden text-white shadow-lg group rounded-xl aspect-square hover:cursor-pointer",
        typeColor
      )}
      title={`View details of ${pokemonName}`}
    >
      <div className="absolute font-bold transition-all duration-300 ease-out top-4 right-6 text-gray-800/30 group-hover:text-white">
        <span>#{pokemon.id}</span>
      </div>
      <p className="text-2xl font-bold tracking-wider">
        <span>{pokemonName}</span>
      </p>
      <ul className="flex flex-col gap-3 mt-4">
        {pokemon.type.map((type) => (
          <li
            key={type}
            className="px-4 py-1 text-sm font-semibold rounded-md bg-white/30 w-fit"
          >
            {type}
          </li>
        ))}
      </ul>
      <img
        src="/pokeball.svg"
        alt="Pokeball icon"
        className="absolute transition-transform duration-300 ease-out size-44 -right-3 -bottom-8 group-hover:rotate-45"
      />
      <img
        className="absolute w-auto h-40 transition-transform duration-100 ease-out bottom-1 right-1 group-hover:scale-110"
        src={pokemon.imageUrl}
        alt={`Picture of ${pokemonName}`}
      />
    </div>
  );
}
