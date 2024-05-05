function Sidebar() {
  return (
    <>
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex flex-col h-full max-h-screen gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 ">
            <a
              href="/"
              className="flex items-center gap-2 font-semibold w-fit group"
            >
              <img
                src="/pokeball.png"
                alt="Pokeball icon"
                className="transition-transform duration-300 ease-out size-6 group-hover:rotate-180"
              />

              <span className="">Pokedex</span>
            </a>
          </div>
          <div className="flex flex-col flex-1 gap-2 px-4 overflow-y-scroll">
            <div>Filters</div>
          </div>
          <div className="grid items-center justify-center p-5 mt-auto border-t">
            Footer
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
