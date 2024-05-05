import { PokemonHit } from "@/lib/types";
import { cn, getBackgroundColor } from "@/lib/utils";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BasicCard } from "./basic-card";
import DetailsCard from "./details-card";

interface HitProps {
  hit: PokemonHit;
}

function Hit(props: HitProps) {
  const pokemon = props.hit;
  const typeColor = getBackgroundColor(pokemon.type[0]);
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <span>
            <BasicCard pokemon={pokemon} />
          </span>
        </SheetTrigger>
        <SheetContent
          className={cn(
            "flex flex-col w-screen overflow-auto text-white font-bold",
            typeColor
          )}
        >
          <DetailsCard pokemon={pokemon} />
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Hit;
