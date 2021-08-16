import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import theme from "@app/theme";
import { GlobalStyles } from "@app/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
