import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import {theme} from '../styles/theme';

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <ColorModeScript/>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
