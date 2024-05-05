import { Pagination as InstantSearchPagination } from "react-instantsearch";
import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";

function Pagination() {
  return (
    <InstantSearchPagination
      showLast
      padding={2}
      classNames={{
        root: "flex justify-center gap-4",
        selectedItem: "bg-primary text-primary-foreground rounded-md",
        disabledItem: "text-gray-300",
        list: "flex gap-1 flex-wrap",
        link: cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "bg-transparent hover:bg-muted/90 hover:font-semibold"
        ),
      }}
    />
  );
}

export default Pagination;
