import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Header from "../components/Header";
import { INITIAL_STATE, StoreProvider } from "../store";
import { storeReducer } from "../store/reducer";

beforeEach(() => {
  render(
    <StoreProvider initialState={INITIAL_STATE} reducer={storeReducer}>
      <Header />
    </StoreProvider>
  );

  const header = screen.getByTestId("header");
  expect(header).toBeInTheDocument();
});

test("renders header title", () => {
  const title = screen.getByTestId("header-title");
  expect(title).toHaveTextContent("nuffsaid.com Coding Challenge");
});

test("renders header buttons", () => {
  const stopButton = screen.getByTestId("header-stop-button");
  expect(stopButton).toBeTruthy();

  const clearButton = screen.getByTestId("header-clear-button");
  expect(clearButton).toBeTruthy();
});

test("renders 'start' after click stop button", async () => {
  const stopButton = screen.getByTestId("header-stop-button");
  fireEvent.click(stopButton);

  await waitFor(() => {
    expect(screen.getByTestId("header-stop-button")).toHaveTextContent("Start");
  });
});
