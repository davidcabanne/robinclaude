import styled from "styled-components";
import * as _var from "../styles/variables";

// STYLES
const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-top: calc(${_var.headerHeight});
  padding-bottom: ${_var.marginXL};

  @media ${_var.device.tablet_max} {
    padding-bottom: ${_var.marginL};
  }
  @media ${_var.device.mobileL_max} {
    padding-bottom: ${_var.marginM};
  }
`;

export default function Section({ children }) {
  return <Container>{children}</Container>;
}
