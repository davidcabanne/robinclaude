import Link from "next/link";
import styled from "styled-components";
import * as _var from "../../styles/variables";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: ${_var.marginXS};
  padding-top: ${_var.marginM};
  padding-bottom: ${_var.marginM};
  z-index: 800;

  & a {
    color: #b5b5b5;

    & span {
      transition: color 100ms ${_var.cubicBezier};
    }

    & svg {
      fill: #b5b5b5;
      height: 12px;
      stroke: #b5b5b5;
      stroke-width: 16;
      margin-right: ${_var.marginXS};
      transform: rotate(180deg);
      transition: color, stroke 100ms ${_var.cubicBezier};
    }

    @media ${_var.device.tablet_min} {
      &:hover {
        & span {
          color: black;
        }
        & svg {
          fill: black;
          stroke: black;
        }
      }
    }
  }
`;

export default function Back({}) {
  return (
    <Container>
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 512 376.83"
        >
          <path
            fillRule="nonzero"
            d="M355.12 372.7a12.026 12.026 0 0 1-17.09 1.06c-5-4.47-5.46-12.2-1.04-17.25l136.05-155.82H12.15c-6.71 0-12.15-5.5-12.15-12.28 0-6.77 5.44-12.27 12.15-12.27h460.9L336.99 20.32c-4.42-5.05-3.96-12.78 1.04-17.25 5.01-4.47 12.66-4 17.09 1.05l153.67 176c4.17 4.55 4.33 11.64.17 16.39L355.12 372.7z"
          />
        </svg>
        <span>Back to home</span>
      </Link>
    </Container>
  );
}
