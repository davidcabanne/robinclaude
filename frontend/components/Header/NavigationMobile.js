import { useRouter } from "next/router";
import Link from "next/link";
import styled, { css } from "styled-components";
import * as _var from "../../styles/variables";

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  background: ${_var.light200};
  pointer-events: none;
  opacity: 0;
  transition: 200ms ${_var.cubicBezier};
  transition-property: background, opacity, transform;
  transition-delay: 200ms;

  ${(props) =>
    props.$toggleDarkMode &&
    css`
      background: ${_var.primary_000};
    `}

  &.active {
    pointer-events: auto;
    opacity: 1;
    transition-delay: 05ms;
  }

  & ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${_var.marginM};
    padding-top: ${_var.headerHeight};
    padding-left: 32px;
    padding-right: 32px;
  }

  & li {
    font-size: 32px;
    transition: opacity 150ms ${_var.cubicBezier};

    &:hover {
      opacity: 0.5;
    }

    & a {
      color: inherit;
      text-decoration: none;

      &.active {
        text-decoration: underline;
      }
    }
  }

  @media ${_var.device.tablet_min} {
    display: none;
  }
`;

export default function Navigation({
  selectedCat,
  toggleDarkMode,
  handleToggleMenu,
  menuActive,
}) {
  const router = useRouter();

  return (
    <Nav
      className={menuActive ? "active" : ""}
      $toggleDarkMode={toggleDarkMode}
    >
      <ul>
        <li>
          <Link
            href={`/?category=films`}
            onClick={handleToggleMenu}
            className={selectedCat === "films" ? "active" : ""}
          >
            Films
          </Link>
        </li>
        <li>
          <Link
            href={`/?category=editing`}
            onClick={handleToggleMenu}
            className={selectedCat === "editing" ? "active" : ""}
          >
            Editing
          </Link>
        </li>
        <li>
          <Link
            href={`/?category=reel`}
            onClick={handleToggleMenu}
            className={selectedCat === "reel" ? "active" : ""}
          >
            Reel
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={router.pathname == "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </Nav>
  );
}
