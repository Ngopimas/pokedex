import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch";
import { APP_ID, INDEX_NAME, SEARCH_API_KEY } from "./lib/constants";

const searchClient = algoliasearch(APP_ID, SEARCH_API_KEY);

const App = () => {
  return (
    <>
      <InstantSearch
        future={{
          preserveSharedStateOnUnmount: false,
        }}
        searchClient={searchClient}
        indexName={INDEX_NAME}
      >
        <div className="grid overflow-hidden h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <div>Sidebar</div>

          <div className="flex flex-col h-full max-h-screen gap-2">
            <div>Header</div>
            <main className="flex-1 px-4 overflow-auto">
              <p>Content</p>
            </main>
            <div className="p-4 mt-auto border-t">
              <div>Footer</div>
            </div>
          </div>
        </div>
      </InstantSearch>
    </>
  );
};

export default App;
