import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ClearFilters } from "./clear-filters";
import { FiltersList } from "./ui/filters-list";
import RangeSlider from "./ui/range-slider";

const filters = [
  {
    id: "types",
    label: "Types",
    children: [
      {
        id: "type",
        attribute: "type",
        props: {
          searchablePlaceholder: "Search for a pokemon type",
        },
        component: FiltersList,
      },
    ],
  },
  {
    id: "versions",
    label: "Game Versions",
    children: [
      {
        id: "game_versions",
        attribute: "gameVersions",
        props: {
          searchablePlaceholder: "Search for a game version",
        },
        component: FiltersList,
      },
    ],
  },
  {
    id: "stats",
    label: "Stats",
    children: [
      {
        id: "attack",
        attribute: "base.Attack",
        label: "Attack",
        component: RangeSlider,
      },
      {
        id: "defense",
        attribute: "base.Defense",
        label: "Defense",
        component: RangeSlider,
      },
      {
        id: "hp",
        attribute: "base.HP",
        label: "HP",
        component: RangeSlider,
      },
      {
        id: "sp_attack",
        attribute: "base.Sp. Attack",
        label: "Special Attack",
        component: RangeSlider,
      },
      {
        id: "sp_defense",
        attribute: "base.Sp. Defense",
        label: "Special Defense",
        component: RangeSlider,
      },
      {
        id: "speed",
        attribute: "base.Speed",
        label: "Speed",
        component: RangeSlider,
      },
    ],
  },
];

export function FiltersMenu() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium">Filters</h3>
        <ClearFilters />
      </div>

      <Accordion
        type="multiple"
        defaultValue={filters.map((filter) => filter.id)}
      >
        {filters.map((filter) => {
          return (
            <AccordionItem key={filter.id} value={filter.id}>
              <AccordionTrigger>
                <h4 className="flex items-center justify-between">
                  <span>{filter.label}</span>
                </h4>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {filter.children.map((child) => {
                    const {
                      id,
                      attribute,
                      component,
                      label,
                      props = {},
                    } = child as Record<string, any>;
                    const Component = component;
                    return (
                      <div key={id}>
                        {label && (
                          <label
                            htmlFor={id}
                            className="block mb-2 font-medium"
                          >
                            {label}
                          </label>
                        )}
                        <Component id={id} attribute={attribute} {...props} />
                      </div>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}
