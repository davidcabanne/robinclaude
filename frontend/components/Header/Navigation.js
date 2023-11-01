import Link from "next/link";
import styled from "styled-components";
import * as _var from "../../styles/variables";

const Nav = styled.nav`
  & ul {
    display: flex;
    gap: ${_var.marginM};
  }
  & li {
    transition: opacity 150ms ${_var.cubicBezier};

    &:hover {
      opacity: 0.5;
    }
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <ul>
        <li>
          <Link href="/">Projects</Link>
        </li>
        <li>
          <Link href="/">Editing</Link>
        </li>
        <li>
          <Link href="/">Reel</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </Nav>
  );
}
