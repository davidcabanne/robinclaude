import styled from "styled-components";
import * as _var from "../../styles/variables";

const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${_var.marginM};
  padding-top: ${_var.marginXXL};

  @media ${_var.device.tablet_max} {
    padding-top: ${_var.marginXL};
  }

  & input {
    font-size: 16px;
    font-weight: 500;
    padding: 10px ${_var.marginS};
    border: none;
    background: ${_var.light200};
    border-radius: 2px;
    outline: 2px solid rgba(0, 0, 0, 0);

    &:focus {
      outline: 2px solid ${_var.primary_010};
    }
  }

  & input[type="submit"] {
    font-weight: 600;
    width: max-content;
    color: ${_var.light200};
    background: ${_var.primary_000};
    padding: ${_var.marginXS} ${_var.marginS};
    border-radius: 64px;
    cursor: pointer;

    @media ${_var.device.tablet_min} {
      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

export default function Form({ children, onSubmit }) {
  return <Container onSubmit={onSubmit}>{children}</Container>;
}
