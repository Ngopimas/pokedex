import { searchClient } from "@/lib/utils";
import { Autocomplete } from "./autocomplete";
import { LanguageSwitcher } from "./language-switcher";
import MobileMenu from "./mobile-menu";

export function Header() {
  return (
    <header className="flex h-14 items-center gap-6 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <MobileMenu />
      <div className="flex-1 w-full">
        <Autocomplete
          searchClient={searchClient}
          placeholder="Search for a pokemon"
          detachedMediaQuery="none"
          openOnFocus
        />
      </div>
      <LanguageSwitcher />
    </header>
  );
}
