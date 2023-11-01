import styled from "styled-components";
import * as _var from "../styles/variables";

import Header from "./Header/Header";

// STYLES
const Container = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  ${_var.responsiveMargins}

  &.active {
    overflow: hidden;
  }
`;

export default function CommonContainer({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}
