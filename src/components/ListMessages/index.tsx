import { Typography } from "@mui/material";
import List from "@mui/material/List";
import React, { memo } from "react";
import { getPriorityName } from "../../utils/getPriorityName";
import Message from "../Message";
import { ListMessagesContainer } from "./styles";
import Collapse from "@mui/material/Collapse";
import { TransitionGroup } from "react-transition-group";
import { IMessage, Priority } from "../../interfaces/IMessage";

type Props = {
  items: IMessage[];
  priority: Priority;
};

const ListMessages: React.FC<Props> = ({ items, priority }) => {
  const priorityName = getPriorityName(priority);

  return (
    <ListMessagesContainer data-testid="list-messages">
      <Typography
        fontSize={17}
        width="100%"
        color="#200e08"
        variant="subtitle1"
        fontWeight="bold"
        data-testid="list-messages-title"
      >
        {priorityName} Type {priority + 1}
      </Typography>
      <Typography
        component="p"
        mb={1}
        color="#200e08"
        variant="caption"
        data-testid="list-messages-count"
      >
        Count {~~items?.length}
      </Typography>

      <List>
        <TransitionGroup>
          {items.map((message) => (
            <Collapse key={message.id}>
              <Message {...message} />
            </Collapse>
          ))}
        </TransitionGroup>
      </List>
    </ListMessagesContainer>
  );
};

export default memo(ListMessages);
