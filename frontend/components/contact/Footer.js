import styled from "styled-components";
import * as _var from "../../styles/variables";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: end;
  flex-wrap: wrap;
  gap: ${_var.marginXS};
  padding-top: ${_var.marginM};
  padding-bottom: ${_var.marginM};

  & a {
    display: flex;
    justify-content: center;
    align-items: end;
    gap: ${_var.marginXS};
    margin-bottom: 4px;
  }
`;

export default function Footer({ children }) {
  return <Container>{children}</Container>;
}
