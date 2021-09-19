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
import { getColorByPriority } from "../utils/getColorByPriority";

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

test("renders correct number of messages", () => {
  const messageElement = screen.getByTestId("message");
  expect(messageElement).toBeInTheDocument();
  expect(screen.getAllByTestId("message")).toHaveLength(1);
});

test("renders correct message", () => {
  const messageElement = screen.getByTestId("message");
  expect(messageElement).toBeInTheDocument();

  const messageTitle = screen.getByTestId("message-title");
  expect(messageTitle).toHaveTextContent(message.message);

  expect(messageElement).toHaveStyle(
    `background-color: ${getColorByPriority(message.priority)}`
  );
});
