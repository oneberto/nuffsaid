import theme from "./configs/theme";
import { ThemeProvider } from "styled-components";
import { INITIAL_STATE, State, StoreProvider } from "./store";
import { storeReducer } from "./store/reducer";

const AppProvider: React.FC<{ initialState?: State }> = ({
  children,
  initialState = INITIAL_STATE,
}) => (
  <ThemeProvider theme={theme}>
    <StoreProvider initialState={initialState} reducer={storeReducer}>
      {children}
    </StoreProvider>
  </ThemeProvider>
);

export default AppProvider;
