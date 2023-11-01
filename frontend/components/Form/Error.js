import styled from "styled-components";
import * as _var from "../../styles/variables";

const Container = styled.div`
  opacity: 0;
  &.active {
    opacity: 1;
  }
`;

const Notification = styled.span`
  color: ${_var.danger};
`;

export default function Error({ error, errorMessage }) {
  return (
    <Container className={error ? "active" : ""}>
      <Notification>
        {errorMessage ? errorMessage : "This field is required"}
      </Notification>
    </Container>
  );
}
