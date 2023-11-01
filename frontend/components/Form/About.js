import styled from "styled-components";
import * as _var from "../../styles/variables";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${_var.marginM};
  padding-top: ${_var.marginM};

  & h1 {
    font-size: 64px;
  }
  & p {
    max-width: 75ch;
  }
`;

export default function About({ children }) {
  return <Container>{children}</Container>;
}
