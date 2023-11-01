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

  animation: ${fadeIn} 1000ms ${_var.cubicBezier} forwards;

  & iframe {
    display: block;
    border: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

export default function Player({ src }) {
  return (
    <Container style={{ background: src ? "transparent" : "#e6e8ef" }}>
      {src ? (
        <iframe
          src={src}
          width="1280"
          height="720"
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
      ) : (
        <p>The video you are looking does not exist</p>
      )}
    </Container>
  );
}
