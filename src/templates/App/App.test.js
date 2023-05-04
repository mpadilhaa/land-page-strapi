import { screen } from "@testing-library/react";
import App from "./App";
import { renderTheme } from "../../styles/render-theme";

describe("<Home />", () => {
  it("should render home", () => {
    renderTheme(<App />);
  });
});
