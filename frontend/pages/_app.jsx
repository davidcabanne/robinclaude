import React, { useState } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import * as _var from "../styles/variables";

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
  color:  ${_var.primary_020};
  transition: color 200ms ${_var.cubicBezier};

  ${(props) =>
    props.darkMode &&
    css`
      color: ${_var.primary_080};
    `}

  overflow-x: hidden;
}

html {
  /* RESPONSIVE HEIGHT FALLBACK for iOS tool bar */
  height: -webkit-fill-available;
  scroll-behavior: smooth;
  background: white;
  transition: background 200ms ${_var.cubicBezier};

  ${(props) =>
    props.darkMode &&
    css`
      background: ${_var.dark_000};
    `}
}

a:not([class]) {
  text-decoration: none;
  text-decoration-skip-ink: auto;
}

a:visited {
    color: inherit;
}

h1, h2 {
  line-height: 0.9;
}
h3, h4 {
  line-height: 1.1;
}
h5, h6 {
  line-height: 1.2;
}

p {
  font-size: 16px;
  line-height: 1.4;
  color: ${_var.primary_040};
  transition: color 200ms ${_var.cubicBezier};

  ${(props) =>
    props.darkMode &&
    css`
      color: ${_var.primary_070};
    `}
}

input, textarea {
    font-family: 'Inter', Helvetica, sans-serif;
    background: ${_var.light200};
    transition: color, background 200ms ${_var.cubicBezier};

    ${(props) =>
      props.darkMode &&
      css`
        color: ${_var.primary_080};
        background: ${_var.primary_010};

        &::placeholder {
          color: ${_var.primary_040};
        }
      `}
  }

  input[type="submit"] {
    background: ${_var.primary_020};
    transition: background 200ms ${_var.cubicBezier};

    ${(props) =>
      props.darkMode &&
      css`
        background: ${_var.primary_020};
      `}
  }

  button {
    border: none;
    color: ${_var.primary_100};
    background: ${_var.success100};
    transition: 200ms ${_var.cubicBezier};
    transition-property: color, background;

    ${(props) =>
      props.darkMode &&
      css`
        color: ${_var.primary_010};
        background: ${_var.primary_090};
      `}
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

export default function App({ Component, pageProps, darkMode }) {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  return (
    <>
      <GlobalStyle darkMode={toggleDarkMode} />
      <Component
        {...pageProps}
        toggleDarkMode={toggleDarkMode}
        handleToggleDarkMode={handleToggleDarkMode}
      />
    </>
  );
}
