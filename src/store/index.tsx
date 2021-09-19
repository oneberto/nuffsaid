import { createContext, useContext, useReducer } from "react";
import { IAction } from "../interfaces/IAction";
import { IMessage } from "../interfaces/IMessage";
import { storeReducer } from "./reducer";

export const INITIAL_STATE = {
  errors: [] as IMessage[],
  infos: [] as IMessage[],
  warnings: [] as IMessage[],
  isStopped: false,
};

export type State = typeof INITIAL_STATE;

export const Store = createContext<[State, React.Dispatch<IAction>]>([
  INITIAL_STATE,
  () => null,
]);

export const useStore = () => useContext(Store);

type ProviderProps = {
  initialState: State;
  reducer: typeof storeReducer;
};

export const StoreProvider: React.FC<ProviderProps> = ({
  children,
  reducer,
  initialState,
}) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
  );
};
