import algoliasearch from "algoliasearch";
import "dotenv/config";

const ADMIN_API_KEY = process.env.ALGOLIA_ADMIN_API_KEY;
const APP_ID = process.env.VITE_ALGOLIA_APP_ID;
const INDEX_NAME = process.env.VITE_ALGOLIA_INDEX_NAME;

const searchClient = algoliasearch(APP_ID, ADMIN_API_KEY);
const index = searchClient.initIndex(INDEX_NAME);

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const fetchPokemonData = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.json();
};

const handleError = (id = "", error = "") => {
  console.error(id, JSON.stringify(error, null, 2));
};

const enrichPokemonData = async ({ id, objectID }) => {
  try {
    const pokemonData = await fetchPokemonData(id);
    const gameVersions = pokemonData.game_indices.map(({ version }) =>
      capitalize(version.name)
    );
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    return { gameVersions, imageUrl, objectID };
  } catch (error) {
    handleError(`enrichPokemonData: ${objectID}`, error);
    return null;
  }
};

const enrichPokedex = async () => {
  try {
    let hits = [];
    await index.browseObjects({
      query: "",
      attributesToRetrieve: ["id"],
      batch: (batch) => {
        hits = hits.concat(batch);
      },
    });
    const enrichedData = await Promise.all(hits.map(enrichPokemonData));
    await index.partialUpdateObjects(enrichedData);
    console.log(
      `${enrichedData.length} records enriched and updated successfully.`
    );
  } catch (error) {
    handleError("enrichPokedex", error);
  }
};

enrichPokedex();
