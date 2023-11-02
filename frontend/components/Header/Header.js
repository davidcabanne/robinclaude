import styled from "styled-components";
import * as _var from "../../styles/variables";

import Logo from "./Logo";
import Navigation from "./Navigation";
import DarkMode from "./DarkMode";

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-bottom: 1px solid ${_var.primary_090};
  z-index: 900;
  ${_var.responsiveMargins}
  transition: 200ms ${_var.cubicBezier};
  transition-property: background, border-bottom;

  &.active {
    background: ${_var.dark_000};
    border-bottom: 1px solid ${_var.primary_010};
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: ${_var.marginM} 0px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${_var.marginM};
  margin-bottom: 6px;
`;

export default function Header({
  toggleDarkMode,
  handleToggleDarkMode,
  selectedCat,
}) {
  return (
    <Container className={toggleDarkMode ? "active" : ""}>
      <Wrapper>
        <Logo />
        <Nav>
          <Navigation selectedCat={selectedCat} />
          <DarkMode
            toggleDarkMode={toggleDarkMode}
            handleToggleDarkMode={handleToggleDarkMode}
          />
        </Nav>
      </Wrapper>
    </Container>
  );
}
