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

test("Mock implementation of a basic function", () => {
  const mock = jest.fn(() => "I'm a mock function");
  expect(mock()).toBe("I'm a mock function");
  mock();
  expect(mock).toHaveBeenCalledTimes(2);
});
