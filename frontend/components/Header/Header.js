import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as _var from "../../styles/variables";

import Logo from "./Logo";
import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";
import DarkMode from "./DarkMode";
import Menu from "./Menu";

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
  align-items: center;

  @media ${_var.device.tablet_max} {
    align-items: start;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${_var.marginM};

  @media ${_var.device.tablet_max} {
    margin-top: 4px;
    align-items: center;
    gap: 24px;
  }
  @media ${_var.device.mobileL_max} {
    gap: 16px;
  }
  @media ${_var.device.mobileS_max} {
    gap: 8px;
  }
`;

export default function Header({
  toggleDarkMode,
  handleToggleDarkMode,
  selectedCat,
}) {
  const [menuActive, setMenuActive] = useState(false);

  const handleToggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const body = document.body;
    if (menuActive) {
      body.classList.add("menuActive");
    } else {
      body.classList.remove("menuActive");
    }
  }, [menuActive]);

  return (
    <Container className={toggleDarkMode ? "active" : ""}>
      <Wrapper>
        <Logo />
        <Nav>
          <Navigation selectedCat={selectedCat} />
          <NavigationMobile
            selectedCat={selectedCat}
            toggleDarkMode={toggleDarkMode}
            handleToggleMenu={handleToggleMenu}
            menuActive={menuActive}
          />
          <DarkMode
            toggleDarkMode={toggleDarkMode}
            handleToggleDarkMode={handleToggleDarkMode}
          />
          <Menu
            toggleDarkMode={toggleDarkMode}
            handleToggleMenu={handleToggleMenu}
            menuActive={menuActive}
          />
        </Nav>
      </Wrapper>
    </Container>
  );
}
