import { Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Filter className="size-5" />
          <span className="sr-only">Toggle filter menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col w-screen overflow-y-scroll"
      >
        <a href="#" className="flex items-center gap-2 text-lg font-semibold">
          <img src="/pokeball.png" alt="Pokeball icon" className="size-6" />
          <span className="">Pokedex</span>
        </a>
        <div>Filters</div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
