import styled from "styled-components";
import * as _var from "../../styles/variables";

const Ul = styled.ul`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${_var.marginM};
  list-style: none;

  & li {
    list-style: none;
  }

  @media ${_var.device.tablet_max} {
    grid-template-columns: 1fr;
    gap: ${_var.marginM};
  }

  @media ${_var.device.mobileS_max} {
    gap: ${_var.marginS};
  }

  @media ${_var.device.tablet_min} {
    & li > a > div > div {
      position: relative;

      &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: ${_var.primary_010};
        opacity: 0;
        pointer-events: none;
        transition: opacity 150ms ${_var.cubicBezier};
        transition-delay: 100ms;
      }

      & p {
        opacity: 0;
        transform: translateY(8px) scale(0.97);
        z-index: 100;
        transition: 150ms ${_var.cubicBezier};
        transition-property: opacity, transform;
        transition-delay: 0ms;
      }

      &:hover {
        &::after {
          opacity: 0.5;
          transition: opacity 150ms ${_var.cubicBezier};
        }
        & p {
          opacity: 1;
          transform: translateY(0px) scale(1);
          transition: 150ms ${_var.cubicBezier};
          transition-property: opacity, transform;
          transition-delay: 150ms;
        }
      }
    }
  }
`;

export default function Grid({ children }) {
  return <Ul>{children}</Ul>;
}
