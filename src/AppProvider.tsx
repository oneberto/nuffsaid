import theme from "./configs/theme";
import { ThemeProvider } from "styled-components";
import { INITIAL_STATE, StoreProvider } from "./store";
import { storeReducer } from "./store/reducer";

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StoreProvider initialState={INITIAL_STATE} reducer={storeReducer}>
      {children}
    </StoreProvider>
  </ThemeProvider>
);

export default AppProvider;
