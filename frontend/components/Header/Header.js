import styled from "styled-components";
import * as _var from "../../styles/variables";

import Logo from "./Logo";
import Navigation from "./Navigation";

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900;
  ${_var.responsiveMargins}
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: ${_var.marginM} 0px;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <Navigation />
      </Wrapper>
    </Container>
  );
}
