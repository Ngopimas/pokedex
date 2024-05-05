import { DEFAULT_LANGUAGE_KEY } from "@/lib/constants";
import { PokemonNameLanguages } from "@/lib/types";
import { ReactNode, createContext, useContext, useReducer } from "react";

// Actions types
type SetLanguageAction = {
  type: "SET_LANGUAGE";
  payload: PokemonNameLanguages;
};

// Actions payloads
type Action = { type: "UNKNOWN_ACTION" } | SetLanguageAction;

type AppState = {
  language: PokemonNameLanguages;
  stats: {
    HP: [number, number];
    Attack: [number, number];
    Defense: [number, number];
    "Sp. Attack": [number, number];
    "Sp. Defense": [number, number];
    Speed: [number, number];
    [key: string]: [number, number];
  };
};

const AppContext = createContext<AppState | null>(null);
const AppDispatchContext = createContext<((action: Action) => void) | null>(
  null
);

const initialState: AppState = {
  language: DEFAULT_LANGUAGE_KEY,
  stats: {
    HP: [1, 255],
    Attack: [5, 181],
    Defense: [5, 230],
    "Sp. Attack": [10, 173],
    "Sp. Defense": [20, 230],
    Speed: [5, 160],
  },
};

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_LANGUAGE": {
      return { ...state, language: action.payload };
    }
    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

export function useAppState(): AppState {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppState must be used within an AppProvider");
  }
  return context;
}

export function useAppDispatch(): (action: Action) => void {
  const dispatch = useContext(AppDispatchContext);
  if (dispatch === null) {
    throw new Error("useAppDispatch must be used within an AppProvider");
  }
  return dispatch;
}
