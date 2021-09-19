import React, { useCallback, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { IMessage, Priority } from "./interfaces/IMessage";
import ListMessages from "./components/ListMessages";
import { useStore } from "./store";
import { storeActions } from "./store/reducer";
import generateMessage from "./Api";
import Header from "./components/Header";
import Snack from "./components/Snack";
import { blankFunction } from "./utils/blankFunction";

const App: React.FC<{}> = () => {
  const [{ errors, infos, warnings, isStopped }, dispatch] = useStore();

  const handleAddMessage = useCallback(
    (message: IMessage) => dispatch(storeActions.addMessage(message)),
    [dispatch]
  );

  useEffect(() => {
    const cleanUp = isStopped
      ? blankFunction
      : generateMessage((message: IMessage) => {
          handleAddMessage(message);
        });
    return cleanUp;
  }, [handleAddMessage, isStopped]);

  return (
    <>
      <Snack />
      <Header />
      <Container data-testid="container">
        <Grid container spacing={2}>
          <Grid item xs={4} data-testid="list-error">
            <ListMessages items={errors} priority={Priority.Error} />
          </Grid>
          <Grid item xs={4} data-testid="list-warning">
            <ListMessages items={warnings} priority={Priority.Warning} />
          </Grid>

          <Grid item xs={4} data-testid="list-info">
            <ListMessages items={infos} priority={Priority.Info} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
