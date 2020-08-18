import React from "react";
import { render, screen } from "@testing-library/react";
import { TodoApp } from "./ToDo";

test("TODO heading present (check from ToDo Component)", () => {
  render(<TodoApp />);
  expect(screen.getByText("TODO")).toBeInTheDocument();
});

test("Check label for todo app", () => {
  render(<TodoApp />);
  expect(screen.getByLabelText("What needs to be done?")).not.toBeNull();
});
