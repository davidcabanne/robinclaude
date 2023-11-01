import styled from "styled-components";
import * as _var from "../styles/variables";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & p {
    position: absolute;
    pointer-events: none;
    color: ${_var.primary_100};
    font-size: 32px;
    text-align: center;
    padding: ${_var.marginS};

    @media ${_var.device.tablet_max} {
      font-size: 16px;
      padding: ${_var.marginXS};
    }
  }

  & img {
    width: 100%;
    height: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 2px;
  }
`;

export default function Picture({ children }) {
  return <Container>{children}</Container>;
}
