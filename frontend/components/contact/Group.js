import styled from "styled-components";
import * as _var from "../../styles/variables";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(384px, 1fr));
  gap: ${_var.marginXL};
  padding-top: ${_var.marginM};

  @media ${_var.device.tablet_max} {
    grid-template-columns: 1fr;
    gap: ${_var.marginXL};
  }

  & img {
    width: 100%;
  }
`;

export default function Group({ children }) {
  return <Container>{children}</Container>;
}
