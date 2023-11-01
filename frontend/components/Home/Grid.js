import styled from "styled-components";
import * as _var from "../../styles/variables";

const Ul = styled.ul`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${_var.marginL};

  @media ${_var.device.tablet_max} {
    grid-template-columns: 1fr;
    gap: ${_var.marginL};
  }
`;

export default function Grid({ children }) {
  return <Ul>{children}</Ul>;
}
