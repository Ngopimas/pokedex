import {
  createElement,
  Fragment,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { render } from "react-dom";

import { SearchClient } from "algoliasearch/lite";
import { BaseItem } from "@algolia/autocomplete-core";
import { autocomplete, AutocompleteOptions } from "@algolia/autocomplete-js";
import { createLocalStorageRecentSearchesPlugin } from "@algolia/autocomplete-plugin-recent-searches";
import { createQuerySuggestionsPlugin } from "@algolia/autocomplete-plugin-query-suggestions";
import { usePagination, useSearchBox } from "react-instantsearch";

import { debounce } from "@algolia/autocomplete-shared";

import "@algolia/autocomplete-theme-classic";
import { INSTANT_SEARCH_QUERY_SUGGESTIONS } from "@/lib/constants";

type AutocompleteProps = Partial<AutocompleteOptions<BaseItem>> & {
  searchClient: SearchClient;
  className?: string;
};

type SetInstantSearchUiStateOptions = {
  query: string;
  category?: string;
};

export function Autocomplete({
  searchClient,
  className,
  ...autocompleteProps
}: AutocompleteProps) {
  const autocompleteContainer = useRef<HTMLDivElement>(null);

  const { query, refine: setQuery } = useSearchBox();
  const { refine: setPage } = usePagination();

  const [instantSearchUiState, setInstantSearchUiState] =
    useState<SetInstantSearchUiStateOptions>({ query });

  const plugins = useMemo(() => {
    const recentSearches = createLocalStorageRecentSearchesPlugin({
      key: "instantsearch",
      limit: 3,
      transformSource({ source }) {
        return {
          ...source,
          onSelect({ item }) {
            setInstantSearchUiState({ query: item.label });
          },
        };
      },
    });

    const querySuggestions = createQuerySuggestionsPlugin({
      searchClient,
      indexName: INSTANT_SEARCH_QUERY_SUGGESTIONS,
      getSearchParams() {
        return recentSearches.data!.getAlgoliaSearchParams({
          hitsPerPage: 6,
        });
      },
      transformSource({ source }) {
        return {
          ...source,
          sourceId: "querySuggestionsPlugin",
          onSelect({ item }) {
            setInstantSearchUiState({ query: item.query });
          },
          getItems(params) {
            if (!params.state.query) {
              return [];
            }

            return source.getItems(params);
          },
        };
      },
    });

    return [recentSearches, querySuggestions];
  }, []);

  const debouncedSetInstantSearchUiState = debounce(
    setInstantSearchUiState,
    300
  );

  useEffect(() => {
    setQuery(instantSearchUiState.query);
    setPage(0);
  }, [instantSearchUiState]);

  useEffect(() => {
    if (!autocompleteContainer.current) {
      return;
    }

    const autocompleteInstance = autocomplete({
      ...autocompleteProps,
      container: autocompleteContainer.current,
      initialState: { query },
      onReset() {
        setInstantSearchUiState({ query: "" });
      },
      onSubmit({ state }) {
        setInstantSearchUiState({ query: state.query });
      },
      onStateChange({ prevState, state }) {
        if (prevState.query !== state.query) {
          debouncedSetInstantSearchUiState({
            query: state.query,
          });
        }
      },
      plugins,

      renderer: {
        createElement,
        Fragment,
        // @ts-expect-error: render is marked as deprecated but it's still used in the docs.
        render,
      },
    });

    return () => autocompleteInstance.destroy();
  }, [plugins]);

  return <div className={className} ref={autocompleteContainer} />;
}
