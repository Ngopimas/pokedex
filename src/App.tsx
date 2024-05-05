import { InstantSearch } from "react-instantsearch";
import { Header } from "./components/header";
import Sidebar from "./components/sidebar";
import { INDEX_NAME } from "./lib/constants";
import { searchClient } from "./lib/utils";

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
          <Sidebar />
          <div className="flex flex-col h-full max-h-screen gap-2">
            <Header />
            <main className="flex-1 px-4 overflow-auto">
              <p>Content</p>
            </main>
            <div className="h-16 p-4 mt-auto border-t">
              <div>Footer</div>
            </div>
          </div>
        </div>
      </InstantSearch>
    </>
  );
};

export default App;
