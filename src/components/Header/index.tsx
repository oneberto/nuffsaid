import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { memo, useCallback } from "react";
import { useStore } from "../../store";
import { storeActions } from "../../store/reducer";

const Header: React.FC = () => {
  const [{ isStopped = false }, dispatch] = useStore();

  const handleClickClear = useCallback(() => {
    dispatch(storeActions.clearAll());
  }, [dispatch]);

  const handleClickStop = useCallback(() => {
    dispatch(storeActions.toggleStop());
  }, [dispatch]);

  return (
    <Stack data-testid="header" alignItems="center" mb={5} spacing={1}>
      <Box borderBottom="1px solid #909090" width="100%">
        <Typography
          data-testid="header-title"
          component="h1"
          mb={1}
          color="#000"
          fontSize={17}
        >
          nuffsaid.com Coding Challenge
        </Typography>
      </Box>
      <Box display="flex">
        <Button
          sx={{ mr: 1 }}
          variant="contained"
          color="info"
          type="button"
          size="small"
          onClick={handleClickStop}
          data-testid="header-stop-button"
        >
          {isStopped ? "Start" : "Stop"}
        </Button>

        <Button
          variant="contained"
          color="info"
          type="button"
          size="small"
          onClick={handleClickClear}
          data-testid="header-clear-button"
        >
          Clear
        </Button>
      </Box>
    </Stack>
  );
};

export default memo(Header);
