import React, {
  useState,
  forwardRef,
  useEffect,
  useRef,
  useCallback,
  memo,
} from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import _get from "lodash/get";
import { useStore } from "../../store";

const Alert = forwardRef((props: any, ref: any) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Snack = () => {
  const [{ errors = [] }] = useStore();
  const [open, setOpen] = useState(true);
  const oldMessage = useRef<string>();

  const lastErrorMessage = _get(errors, "[0].message");

  const handleClose = useCallback(
    (_: React.SyntheticEvent<any>, reason: SnackbarCloseReason) => {
      if (reason === "clickaway") {
        return;
      }

      setOpen(false);
    },
    []
  );

  useEffect(() => {
    if (oldMessage.current === lastErrorMessage || !lastErrorMessage) {
      return;
    }

    oldMessage.current = lastErrorMessage;

    setOpen(true);
  }, [lastErrorMessage]);

  if (!lastErrorMessage) {
    return null;
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {lastErrorMessage}
      </Alert>
    </Snackbar>
  );
};

export default memo(Snack);
