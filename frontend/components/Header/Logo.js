import Link from "next/link";
import styled from "styled-components";
import * as _var from "../../styles/variables";

const Container = styled.span`
  transition: opacity 150ms ${_var.cubicBezier};

  @media ${_var.device.tablet_min} {
    &:hover {
      opacity: 0.7;
    }
  }
`;

const Font = styled.span`
  font-size: ${_var.marginM};

  @media ${_var.device.tablet_max} {
    font-size: ${_var.marginM};
  }
`;

const Jobs = styled.p`
  margin-left: 2px;
`;

export default function Logo() {
  return (
    <Link href="/">
      <Container>
        <Font>Robin Claude</Font>
        <Jobs>Director / Editor</Jobs>
      </Container>
    </Link>
  );
}
