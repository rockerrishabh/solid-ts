/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import App from "./App";

render(
  () => (
    <>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>My Awesome App</title>
        <meta name="description" content="My Awesome App description" />
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
