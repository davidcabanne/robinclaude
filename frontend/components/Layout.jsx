import styled from "styled-components";
import * as _var from "../styles/variables";

import Header from "./header/Header";

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

export default function CommonContainer({
  children,
  toggleDarkMode,
  handleToggleDarkMode,
}) {
  return (
    <Container>
      <Header
        toggleDarkMode={toggleDarkMode}
        handleToggleDarkMode={handleToggleDarkMode}
      />
      {children}
    </Container>
  );
}
