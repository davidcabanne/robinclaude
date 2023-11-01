import { Fragment } from "react";

import styled from "styled-components";
import * as _var from "../../styles/variables";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: ${_var.marginXS};
  padding-top: ${_var.marginM};
  padding-bottom: ${_var.marginM};
  z-index: 800;

  & button,
  span {
    color: ${_var.primary_080};
    font-size: 16px;
  }

  & button {
    background: none;
    border: none;
    cursor: pointer;

    &.active {
      color: ${_var.primary_000};
    }
    @media ${_var.device.tablet_min} {
      &:hover {
        color: ${_var.primary_050};
      }
    }
  }

  & span {
    margin-left: 4px;
  }

  & span:last-child {
    display: none;
  }
`;

export default function Categories({
  categories,
  categoryActive,
  handleCategoryActive,
}) {
  return (
    <Container>
      <button
        onClick={() => handleCategoryActive("All")}
        className={categoryActive === "All" ? "active" : ""}
      >
        All
      </button>
      <span>/</span>
      {categories.map((category) => (
        <Fragment key={category._id}>
          <button
            onClick={() => handleCategoryActive(category._id)}
            className={categoryActive === category._id ? "active" : ""}
          >
            {category.title}
          </button>
          <span>/</span>
        </Fragment>
      ))}
    </Container>
  );
}
