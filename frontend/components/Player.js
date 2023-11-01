import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import * as _var from "../styles/variables";

const fadeIn = keyframes`
0% {
  opacity: 0;
  transform: translateY(8px);
}
100% {
  opacity: 1;
  transform: translateY(0px);

}
`;

const Container = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  display: flex;
  justify-content: center;
  align-items: center;

  & iframe {
    display: block;
    border: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  &.loaded {
    & iframe {
      animation: ${fadeIn} 500ms ${_var.cubicBezier} forwards;
    }
  }
`;

const loadingFade = keyframes`
0% {
  opacity: 0;
}
50% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`;

const Loading = styled.p`
  position: absolute;

  animation: ${loadingFade} 1000ms ${_var.cubicBezier} infinite;
`;

export default function Player({ src }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleOnLoad = (event) => {
    event ? setIsLoaded(true) : "";
  };

  return (
    <Container className={isLoaded ? "loaded" : ""}>
      {src ? (
        <iframe
          src={src}
          width="1280"
          height="720"
          allow="autoplay; fullscreen; picture-in-picture"
          onLoad={(event) => {
            handleOnLoad(event);
          }}
          style={{
            background: src ? "transparent" : `${_var.primary_090}`,
          }}
        ></iframe>
      ) : (
        <p>Loading...</p>
      )}
      {!isLoaded && <Loading>Loading...</Loading>}
    </Container>
  );
}
