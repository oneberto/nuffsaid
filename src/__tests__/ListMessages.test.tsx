import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Header from "../components/Header";
import { INITIAL_STATE, StoreProvider } from "../store";
import { storeReducer } from "../store/reducer";
import Message from "../components/Message";
import { generateMessage } from "../utils/generateMessage";
import { ThemeProvider } from "styled-components";
import theme from "../configs/theme";
import ListMessages from "../components/ListMessages";
import AppProvider from "../AppProvider";
import { getPriorityName } from "../utils/getPriorityName";

const message = generateMessage();

beforeEach(() => {
  render(
    <AppProvider>
      <ListMessages items={[message]} priority={message.priority} />
    </AppProvider>
  );

  const listMessages = screen.getByTestId("list-messages");
  expect(listMessages).toBeInTheDocument();
});

test("renders correct title", () => {
  const priorityName = getPriorityName(message.priority);

  const title = screen.getByTestId("list-messages-title");
  expect(title).toHaveTextContent(
    `${priorityName} Type ${message.priority + 1}`
  );
});

test("renders correct count", () => {
  const title = screen.getByTestId("list-messages-count");
  expect(title).toHaveTextContent("Count 1");
});
