import Link from "next/link";
import styled from "styled-components";
import * as _var from "../../styles/variables";

const Font = styled.div`
  font-size: ${_var.marginL};
`;

export default function Logo() {
  return (
    <Link href="/">
      <Font>Robin Claude</Font>
    </Link>
  );
}
