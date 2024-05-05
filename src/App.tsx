import { Hits, InstantSearch } from "react-instantsearch";
import { Header } from "./components/header";
import Sidebar from "./components/sidebar";
import { INDEX_NAME } from "./lib/constants";
import { searchClient } from "./lib/utils";
import Hit from "./components/hit";
import { AppProvider } from "./components/app-context";
import Pagination from "./components/ui/pagination";

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
        <AppProvider>
          <div className="grid overflow-hidden h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <Sidebar />
            <div className="flex flex-col h-full max-h-screen gap-2">
              <Header />
              <main className="flex-1 px-4 overflow-auto">
                <Hits
                  hitComponent={Hit}
                  classNames={{
                    list: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                  }}
                />
              </main>
              <div className="h-16 p-4 mt-auto border-t">
                <Pagination />
              </div>
            </div>
          </div>
        </AppProvider>
      </InstantSearch>
    </>
  );
};

export default App;
