import styled from "styled-components";
import * as _var from "../../styles/variables";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(384px, 1fr));
  gap: ${_var.marginXL};
  padding-top: ${_var.marginL};

  @media ${_var.device.tablet_max} {
    grid-template-columns: 1fr;
    gap: ${_var.marginL};
  }
  @media ${_var.device.mobileL_max} {
    gap: ${_var.marginM};
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function Group({ children }) {
  return <Container>{children}</Container>;
}
