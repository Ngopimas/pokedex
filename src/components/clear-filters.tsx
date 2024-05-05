import { useClearRefinements } from "react-instantsearch";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";

export function ClearFilters() {
  const { refine, canRefine } = useClearRefinements();

  return (
    <Button disabled={!canRefine} variant="outline" size="sm" onClick={refine}>
      <Trash className="mr-2 size-4" />
      Clear filters
    </Button>
  );
}
