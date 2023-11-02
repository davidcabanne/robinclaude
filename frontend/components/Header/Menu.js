import styled, { css } from "styled-components";
import * as _var from "../../styles/variables";

const Container = styled.button`
  display: none;
  width: 24px;
  background: none;
  cursor: pointer;
  z-index: 999;

  & span {
    width: 100%;
    height: 2px;
    background: ${_var.primary_010};
    transition: 100ms ${_var.cubicBezier};
    transition-property: background, opacity, transform;

    ${(props) =>
      props.$toggleDarkMode &&
      css`
        background: ${_var.primary_090};
      `}
  }

  &.active {
    & span:first-child {
      transform: translateY(8px) rotate(45deg);
    }
    & span:nth-child(2) {
      opacity: 0;
    }
    & span:last-child {
      transform: translateY(-8px) rotate(-45deg);
    }
  }

  @media ${_var.device.tablet_max} {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`;

export default function Menu({ toggleDarkMode, handleToggleMenu, menuActive }) {
  return (
    <Container
      onClick={handleToggleMenu}
      className={menuActive ? "active" : ""}
      $toggleDarkMode={toggleDarkMode}
    >
      <span></span>
      <span></span>
      <span></span>
    </Container>
  );
}
