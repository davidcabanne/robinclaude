import Link from "next/link";
import styled from "styled-components";
import * as _var from "../../styles/variables";

const Container = styled.span`
  position: relative;
  z-index: 998;
  transition: opacity 150ms ${_var.cubicBezier};

  @media ${_var.device.tablet_min} {
    &:hover {
      opacity: 0.7;
    }
  }
`;

const Font = styled.span`
  font-size: ${_var.marginM};
  font-weight: 800;
  text-transform: uppercase;

  @media ${_var.device.tablet_max} {
    font-size: ${_var.marginM};
  }
  @media ${_var.device.mobileS_max} {
    font-size: 24px;
  }
`;

const Jobs = styled.p`
  margin-left: 2px;
  font-weight: 600;

  @media ${_var.device.mobileS_max} {
    font-size: 14px;
  }
`;

export default function Logo() {
  return (
    <Link href="/">
      <Container>
        <Font>Robin Claude</Font>
        <Jobs>Director &amp; Editor</Jobs>
      </Container>
    </Link>
  );
}
