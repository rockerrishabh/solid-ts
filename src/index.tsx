/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";

const APP_NAME = "Solid Ts";
const APP_DESCRIPTION = "Solid Ts";

render(
  () => (
    <>
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="application-name" content={APP_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="mask-icon" href="/mask-icon.svg" color="#FFFFFF" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <App />
    </>
  ),
  document.getElementById("root") as HTMLElement
);
