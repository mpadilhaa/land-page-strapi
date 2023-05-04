/* eslint-disable no-undef */
import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { Heading } from "./Heading";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "styled-components";

describe("<Heading />", () => {
  it("should render with default values", () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      "font-size": theme.fonts.sizes.xlarge,
      "text-transform": "none",
    });
  });

  it("should render with white color", () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it("should rendercorrect heading size", () => {
    const { rerender } = renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      "font-size": theme.fonts.sizes.small,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">texto</Heading>
      </ThemeProvider>
    );

    expect(screen.getByRole("heading", { name: "texto" })).toHaveStyle({
      "font-size": theme.fonts.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">texto</Heading>
      </ThemeProvider>
    );

    expect(screen.getByRole("heading", { name: "texto" })).toHaveStyle({
      "font-size": theme.fonts.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">texto</Heading>
      </ThemeProvider>
    );

    expect(screen.getByRole("heading", { name: "texto" })).toHaveStyle({
      "font-size": theme.fonts.sizes.xhuge,
    });
  });

  it("should render correct font size when mobile", () => {
    renderTheme(<Heading size="huge">texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyleRule("font-size", theme.fonts.sizes.xlarge, {
      media: theme.media.medium,
    });
  });

  it("should render with uppercase letters", () => {
    renderTheme(<Heading uppercase>texto</Heading>);
    const heading = screen.getByRole("heading", { name: "texto" });

    expect(heading).toHaveStyle({
      "text-transform": "uppercase",
    });
  });
});
