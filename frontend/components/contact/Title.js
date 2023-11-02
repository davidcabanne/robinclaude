import styled from "styled-components";
import * as _var from "../../styles/variables";

const H1 = styled.h1`
  font-size: 64px;
  padding-top: ${_var.marginM};

  @media ${_var.device.tablet_max} {
    font-size: clamp(40px, 8vw, 64px);
  }
`;

export default function Title({ children }) {
  return <H1>{children}</H1>;
}
