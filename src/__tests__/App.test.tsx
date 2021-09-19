import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { INITIAL_STATE, StoreProvider } from "../store";
import { storeReducer } from "../store/reducer";

beforeEach(() => {
  render(
    <StoreProvider initialState={INITIAL_STATE} reducer={storeReducer}>
      <App />
    </StoreProvider>
  );

  const container = screen.getByTestId("container");
  expect(container).toBeInTheDocument();
});

test("renders app header", () => {
  const header = screen.getByTestId("header");
  expect(header).toBeTruthy();
});

test("renders app lists", () => {
  const listError = screen.getByTestId("list-error");
  expect(listError).toBeTruthy();

  const listWarning = screen.getByTestId("list-warning");
  expect(listWarning).toBeTruthy();

  const listInfo = screen.getByTestId("list-info");
  expect(listInfo).toBeTruthy();
});
