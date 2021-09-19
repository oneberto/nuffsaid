import React from "react";
import { render, screen } from "@testing-library/react";
import Message from "../components/Message";
import { generateMessage } from "../utils/generateMessage";
import { ThemeProvider } from "styled-components";
import theme from "../configs/theme";
import { getColorByPriority } from "../utils/getColorByPriority";

const currentMessage = generateMessage();

beforeEach(() => {
  render(
    <ThemeProvider theme={theme}>
      <Message {...currentMessage} />
    </ThemeProvider>
  );

  const message = screen.getByTestId("message");
  expect(message).toBeInTheDocument();
});

test("renders correct message title", () => {
  const title = screen.getByTestId("message-title");
  expect(title).toHaveTextContent(currentMessage.message);
});

test("renders correct message color", () => {
  const message = screen.getByTestId("message");

  expect(message).toHaveStyle(
    `background-color: ${getColorByPriority(currentMessage.priority)}`
  );
});

test("renders clear button", () => {
  const button = screen.getByTestId("message-clear-button");

  expect(button).toBeInTheDocument();
});
