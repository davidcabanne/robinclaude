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
  padding-bottom: ${_var.marginXXL};
`;

export default function Section({ children }) {
  return <Container>{children}</Container>;
}
