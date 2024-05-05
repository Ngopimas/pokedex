import { RefinementList, RefinementListProps } from "react-instantsearch";

export function FiltersList(props: RefinementListProps) {
  return (
    <RefinementList
      searchable={true}
      showMore={true}
      classNames={{
        root: "space-y-1",
        list: "space-y-1",
        label: "flex items-center gap-2 w-fit",
        checkbox: "size-4 accent-primary",
        count: "text-muted-foreground text-sm",
        showMore: "text-muted-foreground",
      }}
      {...props}
    />
  );
}
