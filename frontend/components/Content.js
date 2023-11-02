import styled from "styled-components";
import * as _var from "../styles/variables";

const Container = styled.div`
  width: 100%;
  margin-top: ${_var.marginL};
  display: flex;
  flex-direction: column;
  gap: ${_var.marginS};

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
