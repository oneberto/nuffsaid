import { ListItem, Typography } from "@mui/material";
import React, { memo, useCallback, useMemo } from "react";
import { MessageClearButton } from "./styles";
import { useStore } from "../../store";
import { storeActions } from "../../store/reducer";
import { getColorByPriority } from "../../utils/getColorByPriority";
import { IMessage } from "../../interfaces/IMessage";

const Message: React.FC<IMessage> = (props) => {
  const { priority, message: text } = props;

  const [, dispatch] = useStore();

  const handleClickClear = useCallback(() => {
    dispatch(storeActions.clearMessage(props));
  }, [dispatch, props]);

  const bgcolor = useMemo(() => getColorByPriority(priority), [priority]);

  return (
    <ListItem
      sx={{
        bgcolor,
        borderRadius: 1,
        boxShadow: 1,
        mb: 1,
        flexDirection: "column",
      }}
      data-testid="message"
    >
      <Typography
        fontWeight="light"
        fontSize={12}
        component="p"
        mb={1}
        width="100%"
        color="#200e08"
        data-testid="message-title"
      >
        {text}
      </Typography>

      <MessageClearButton
        variant="text"
        size="small"
        onClick={handleClickClear}
        data-testid="message-clear-button"
      >
        Clear
      </MessageClearButton>
    </ListItem>
  );
};

export default memo(Message);
