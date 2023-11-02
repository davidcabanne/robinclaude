import styled from "styled-components";
import * as _var from "../../styles/variables";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  gap: ${_var.marginM};
`;

export default function Footer({ children }) {
  return <Container>{children}</Container>;
}
