import moment from "moment-timezone";
import type { AppProps } from "next/app";
import { FC } from "react";
import { PrimaryHead } from "../components/PrimaryHead";
import { DeafultFooter } from "./layouts/DefaultFooter";
import { DefaultHeader } from "./layouts/DefaultHeader";
import { GlobalStyle } from "./styles";

export const App: FC<AppProps> = ({ Component, pageProps }) => {
  /// Set default timezone to the application.
  moment.tz.setDefault("America/Sao_Paulo");

  return (
    <>
      <PrimaryHead />
      <GlobalStyle />
      <DefaultHeader />
      <Component {...pageProps} />
      <DeafultFooter />
    </>
  );
};
