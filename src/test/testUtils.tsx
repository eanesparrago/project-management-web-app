import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import { FunctionComponent, ReactElement } from "react";

export function renderWithTheme(ui: ReactElement, { ...options } = {}) {
  const Wrapper: FunctionComponent = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };

  return render(ui, { wrapper: Wrapper, ...options });
}

export * from "@testing-library/react";

export { renderWithTheme as render };

export { default as userEvent } from "@testing-library/user-event";
