import React from "react";
import { render, screen } from "@testing-library/react";
import AppProvider from "../AppProvider";
import Snack from "../components/Snack";
import { INITIAL_STATE } from "../store";
import faker from "faker";
import { v4 as uuid } from "uuid";
import { Priority } from "../interfaces/IMessage";

const errorMessage = {
  id: uuid(),
  message: faker.lorem.sentence(),
  priority: Priority.Error,
};

beforeEach(() => {
  render(
    <AppProvider initialState={{ ...INITIAL_STATE, errors: [errorMessage] }}>
      <Snack />
    </AppProvider>
  );
});

test("renders snack bar", () => {
  const snackElement = screen.getByTestId("snack");
  expect(snackElement).toBeInTheDocument();
});

test("renders correct snack title", () => {
  const title = screen.getByTestId("snack-title");
  expect(title).toHaveTextContent(errorMessage.message);
});
