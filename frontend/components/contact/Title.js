import styled from "styled-components";
import * as _var from "../../styles/variables";

const H1 = styled.h1`
  width: 100%;
  font-size: 64px;
  padding-top: ${_var.marginL};
  padding-bottom: ${_var.marginM};
  border-bottom: 1px solid ${_var.primary_090};

  @media ${_var.device.tablet_max} {
    font-size: clamp(40px, 8vw, 64px);
  }
`;

export default function Title({ children }) {
  return <H1>{children}</H1>;
}
