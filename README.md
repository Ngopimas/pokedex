# Pokedex

## Introduction

This Pokedex is a responsive web application that enables users to search for Pokémon using Algolia, including a language switcher to display Pokémon names in multiple languages and dynamic search features with filters.

![preview](https://github.com/Ngopimas/pokedex/assets/49529524/c3461823-434e-4380-a4af-76f513e44f19)

## Stack

- Algolia -> [Doc](https://www.algolia.com/doc/)
- React -> [Doc](https://nuxt.com/)
- Tailwindcss -> [Doc](https://tailwindcss.com/)
- Typescript -> [Doc](https://www.typescriptlang.org/)
- Vite -> [Doc](https://vitejs.dev/)

## Node Version

Used Node.js 20.12.2 for this project.

## Project

You can first clone the project:

```bash
git clone git@github.com:Ngopimas/pokedex.git
```

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```bash
VITE_ALGOLIA_INDEX_NAME=
VITE_ALGOLIA_APP_ID=
VITE_ALGOLIA_SEARCH_API_KEY=
ALGOLIA_ADMIN_API_KEY=
```

## Data

You might want to enrich your initial data with the script provided in the `scripts` folder. This script will fetch the data from the [PokeAPI](https://pokeapi.co/) and update your Algolia index.

## Development Server

Start the development server on `http://localhost:5173`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Bonus

The search bar displays your recent searches, like on YouTube or Google. To submit a search, make sure to press Enter on the query. Once you do, you’ll see it appear as a recent search.

## Credits

- Initial data enriched with [PokeAPI](https://pokeapi.co/)
- Design inspired by this [dribbble](https://dribbble.com/shots/6540871-Pokedex-App) from Saepul Nahwan and Damien Toscano.

## License

This Pokedex is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT)
