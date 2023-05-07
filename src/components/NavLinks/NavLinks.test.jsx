/* eslint-disable testing-library/no-node-access */
import { screen } from "@testing-library/react";
import { NavLinks } from ".";
import { renderTheme } from "../../styles/render-theme";
import { theme } from "../../styles/theme";
import mock from "./mock";

describe("<NavLinks />", () => {
  it("should render links", () => {
    renderTheme(<NavLinks links={mock}>Children</NavLinks>);
    expect(screen.getAllByRole("link")).toHaveLength(mock.length);
  });

  it("should render not links", () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/link/i)).toHaveLength(0);
  });

  it("should match snapshot", () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should test style", () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getByText(/link5/i).parentElement).toHaveStyleRule(
      "flex-flow",
      "column wrap",
      {
        media: theme.media.medium,
      }
    );
  });
});
