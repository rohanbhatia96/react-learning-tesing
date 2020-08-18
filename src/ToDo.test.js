import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TodoApp } from "./ToDo";

test("TODO heading present (check from ToDo Component)", () => {
  render(<TodoApp />);
  expect(screen.getByText("TODO")).toBeInTheDocument();
});

test("Check label for todo app", () => {
  render(<TodoApp />);
  expect(screen.getByLabelText("What needs to be done?")).not.toBeNull();
});

test("Check button click", () => {
  const { getByText, getByLabelText } = render(<TodoApp />);
  const input = getByLabelText("What needs to be done?");
  fireEvent.change(input, {
    target: { value: "Rohan Bhatia" },
  });
  fireEvent.click(getByText("Add #1"));
  //no need to wrap around expect as get by text will throw an error anyway if text is not found
  getByText("Rohan Bhatia");
});
