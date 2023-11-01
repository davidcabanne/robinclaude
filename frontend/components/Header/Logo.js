import Link from "next/link";
import styled from "styled-components";
import * as _var from "../../styles/variables";

const Font = styled.div`
  font-size: ${_var.marginL};
  transition: opacity 150ms ${_var.cubicBezier};

  @media ${_var.device.tablet_max} {
    font-size: ${_var.marginM};
  }
  @media ${_var.device.tablet_min} {
    &:hover {
      opacity: 0.7;
    }
  }
`;

export default function Logo() {
  return (
    <Link href="/">
      <Font>Robin Claude</Font>
    </Link>
  );
}
