// import { Inter } from "next/font/google";

import { createGlobalStyle } from "styled-components";
import * as _var from "../styles/variables";

// const inter = Inter({ subsets: ["latin"] });

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

ul,
li,
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  width: 100vw;
  /* RESPONSIVE HEIGHT FALLBACK for iOS tool bar */
  min-height: 100vh;
  min-height: 100dvh;
  min-height: -webkit-fill-available;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Inter', Helvetica, sans-serif;
  font-size: 16px;
  overflow-x: hidden;
}

html {
  /* RESPONSIVE HEIGHT FALLBACK for iOS tool bar */
  height: -webkit-fill-available;
  scroll-behavior: smooth;
  background: white;
}

a:not([class]) {
  text-decoration: none;
  text-decoration-skip-ink: auto;
}

a:visited {
    color: inherit;
}

p {
  font-size: 16px;
  line-height: 1.4;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
