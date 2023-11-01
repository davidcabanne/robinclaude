import styled from "styled-components";
import * as _var from "../../styles/variables";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${_var.marginXS};
`;

export default function Group({ children }) {
  return <Container>{children}</Container>;
}
