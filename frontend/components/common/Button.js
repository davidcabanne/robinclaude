import styled from "styled-components";
import * as _var from "../../styles/variables";

const Btn = styled.button`
  font-size: ${_var.marginS};
  font-weight: 600;
  width: max-content;
  padding: 12px 24px;
  border-radius: 64px;
  cursor: pointer;
  transition: opacity 200ms ${_var.cubicBezier};

  @media ${_var.device.tablet_min} {
    &:hover {
      opacity: 0.85;
    }
  }
`;

export default function Button({ children }) {
  const handleClick = (event) => {
    event.preventDefault();
    window.open("mailto:robin.claude@live.fr", "Mail");
  };

  return (
    <Btn onClick={handleClick} aria-label="">
      {children}
    </Btn>
  );
}
