import { PokemonHit } from "@/lib/types";
import { BasicCard } from "./basic-card";

interface HitProps {
  hit: PokemonHit;
}

function Hit(props: HitProps) {
  const pokemon = props.hit;
  return <BasicCard pokemon={pokemon} />;
}

export default Hit;
