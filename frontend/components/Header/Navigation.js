import { useRouter } from "next/router";
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

    & a {
      color: inherit;
      text-decoration: none;

      &.active {
        text-decoration: underline;
      }
    }
  }

  @media ${_var.device.tablet_max} {
    display: none;
  }
`;

export default function Navigation({ selectedCat }) {
  const router = useRouter();

  const handleRouter = (url) => {
    if (router.pathname !== "/") {
      router.push(`/${url}`);
    }
    return url;
  };

  return (
    <Nav>
      <ul>
        <li>
          <Link
            onClick={() => handleRouter(`?category=projects`)}
            href={`?category=projects`}
            className={selectedCat === "projects" ? "active" : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleRouter(`?category=editing`)}
            href={`?category=editing`}
            className={selectedCat === "editing" ? "active" : ""}
          >
            Editing
          </Link>
        </li>
        <li>
          <Link
            onClick={() => handleRouter(`?category=reel`)}
            href={`?category=reel`}
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
