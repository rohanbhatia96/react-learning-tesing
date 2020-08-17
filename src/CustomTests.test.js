import pizzas from "./data.json";

test("The data is correct", () => {
  expect(pizzas).toMatchSnapshot();
  expect(pizzas.map((pizza) => pizza.name)).toEqual([
    "Chicago Pizza",
    "Neapolitan Pizza",
    "New York Pizza",
    "Sicilian Pizza",
  ]);
});
