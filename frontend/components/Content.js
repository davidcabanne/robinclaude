import styled from "styled-components";
import * as _var from "../styles/variables";

const Container = styled.div`
  width: 100%;
  margin-top: ${_var.marginXL};
  display: flex;
  flex-direction: column;
  gap: ${_var.marginS};
`;

export default function Content({ children }) {
  return <Container>{children}</Container>;
}
