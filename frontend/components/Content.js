import styled, { keyframes } from "styled-components";
import * as _var from "../styles/variables";

const fadeIn = keyframes`
0% {
  opacity: 0;
  transform: translateY(8px);
}
100% {
  opacity: 1;
  transform: translateY(0px);

}
`;

const Container = styled.div`
  width: 100%;
  margin-top: ${_var.marginL};
  display: flex;
  flex-direction: column;
  gap: ${_var.marginS};
  opacity: 0;
  animation: ${fadeIn} 500ms ${_var.cubicBezier} forwards;
  animation-delay: 350ms;

  @media ${_var.device.tablet_max} {
    margin-top: ${_var.marginL};
  }
  @media ${_var.device.mobileL_max} {
    margin-top: ${_var.marginM};
  }
  @media ${_var.device.mobileS_max} {
    margin-top: ${_var.marginS};
  }
`;

export default function Content({ children }) {
  return <Container>{children}</Container>;
}
