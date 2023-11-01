import styled from "styled-components";
import * as _var from "../styles/variables";

const Container = styled.div`
  & img {
    width: 100%;
    height: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 2px;
  }
`;

export default function Picture({ children }) {
  return <Container>{children}</Container>;
}
