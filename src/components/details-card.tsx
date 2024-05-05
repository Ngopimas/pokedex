import { cn } from "@/lib/utils";
import { useAppState } from "./app-context";

import { SheetClose } from "@/components/ui/sheet";

import { ChevronLeft } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { Pokemon } from "@/lib/types";

function DetailsCard({ pokemon }: { pokemon: Pokemon }) {
  const { language, stats } = useAppState();
  const pokemonName = pokemon.name[language];
  return (
    <div className="container mx-auto before:w-60 before:pointer-events-none before:h-60 before:bg-gradient-to-r before:from-white/50 before:to-white/5 before:absolute before:-top-14 before:-left-28 before:rounded-xl before:rotate-[60deg]">
      <div className="grid w-full max-w-3xl gap-8 mx-auto">
        <SheetClose
          className={cn(
            buttonVariants({ size: "icon", variant: "outline" }),
            "bg-transparent"
          )}
        >
          <ChevronLeft className="w-8 h-8" />
        </SheetClose>

        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold">{pokemonName}</h1>
            <span className="text-2xl font-bold">#{pokemon.id}</span>
          </div>
          <ul className="flex items-center gap-4">
            {pokemon.type.map((type) => (
              <li
                key={type}
                className="px-4 py-1 text-sm font-semibold rounded-md bg-white/30 w-fit"
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="relative mx-auto w-fit -mb-14">
            <img
              src="/pokeball.svg"
              alt="Pokeball icon"
              className="absolute bottom-0 w-4/5 h-4/5 left-8"
            />
            <img
              src={pokemon.imageUrl}
              alt={`Picture of ${pokemonName}`}
              className="relative w-auto select-none h-60 sm:h-80"
            />
          </div>
          <div className="max-w-3xl px-8 text-black sm:px-12 py-6 bg-white rounded-lg min-h-[60%] w-full shadow-xl mx-auto">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold">Stats</h2>
              <ul className="flex flex-col gap-4">
                {Object.entries(pokemon.base).map(([key, value]) => {
                  const [_, max] = stats[key];
                  return (
                    <li
                      key={key}
                      className="flex items-center justify-between w-full gap-4 text-sm"
                    >
                      <span className="flex items-center justify-between w-full max-w-sm gap-4">
                        <p className="whitespace-nowrap text-muted-foreground">
                          {key}
                        </p>
                        <hr className="flex-1 bg-gray-100 rounded sm:hidden" />
                        <p className="text-end">{value}</p>
                      </span>
                      <progress
                        className="hidden w-full h-2 bg-gray-100 rounded-lg sm:block"
                        max={max}
                        value={value}
                        title={`${value} / ${max}`}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsCard;
