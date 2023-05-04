import { screen } from "@testing-library/react";
import App from "./App";
import { renderTheme } from "../../styles/render-theme";

test("renders learn react link", () => {
  renderTheme(<App />);

  const headingContainer = screen.getByRole("heading", {
    name: "hello world",
    // eslint-disable-next-line testing-library/no-node-access
  }).parentElement;

  expect(headingContainer).toHaveStyleRule("background", "red");
});
