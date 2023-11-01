import React from "react";
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

    &.categoryActive {
      color: ${_var.primary_020};
    }
    &.categoryInactive {
      color: ${_var.primary_070};
    }

    &.categoryDarkActive {
      color: ${_var.primary_070};
    }
    &.categoryDarkInactive {
      color: ${_var.primary_020};
    }

    @media ${_var.device.tablet_min} {
      &:hover {
        color: ${_var.primary_050};
      }
    }
  }

  & span {
    margin-left: 4px;

    &.active {
      color: ${_var.primary_020};
    }
  }

  & span:last-child {
    display: none;
  }
`;

export default function Categories({
  categories,
  categoryActive,
  handleCategoryActive,
  toggleDarkMode,
}) {
  const handleClasses = (categoryActive, categoryId, darkMode) => {
    if (darkMode === false) {
      if (categoryActive === categoryId) {
        return "categoryActive";
      } else {
        return "categoryInactive";
      }
    }
    if (darkMode === true) {
      if (categoryActive === categoryId) {
        return "categoryDarkActive";
      } else {
        return "categoryDarkInactive";
      }
    }
  };

  return (
    <Container>
      <button
        onClick={() => handleCategoryActive("All")}
        className={handleClasses(categoryActive, "All", toggleDarkMode)}
      >
        All
      </button>
      <span className={toggleDarkMode ? "active" : ""}>/</span>
      {categories.map((category) => (
        <Fragment key={category._id}>
          <button
            onClick={() => handleCategoryActive(category._id)}
            className={handleClasses(
              categoryActive,
              category._id,
              toggleDarkMode
            )}
          >
            {category.title}
          </button>
          <span className={toggleDarkMode ? "active" : ""}>/</span>
        </Fragment>
      ))}
    </Container>
  );
}
