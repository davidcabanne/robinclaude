import { useSearchParams } from "next/navigation";
import Link from "next/link";
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

  & a,
  span {
    color: ${_var.primary_080};
    font-size: 16px;
  }

  & a {
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: none;

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

export default function Categories({ categories, toggleDarkMode }) {
  const searchParams = useSearchParams();
  const selectedCat = searchParams.get("category");

  const handleClasses = (categoryActive, categoryTitle, darkMode) => {
    if (darkMode === false) {
      if (categoryActive === null && categoryTitle === "All") {
        return "categoryActive";
      }
      if (categoryActive === categoryTitle.toLowerCase()) {
        return "categoryActive";
      } else {
        return "categoryInactive";
      }
    }
    if (darkMode === true) {
      if (categoryActive === null && categoryTitle === "All") {
        return "categoryDarkActive";
      }
      if (categoryActive === categoryTitle.toLowerCase()) {
        return "categoryDarkActive";
      } else {
        return "categoryDarkInactive";
      }
    }
  };

  return (
    <Container>
      <Link
        href={`?category=all`}
        className={handleClasses(selectedCat, "All", toggleDarkMode)}
      >
        All
      </Link>
      <span className={toggleDarkMode ? "active" : ""}>/</span>
      {categories.map((category) => (
        <Fragment key={category._id}>
          <Link
            href={`?category=${category.title.toLowerCase()}`}
            className={handleClasses(
              selectedCat,
              category.title,
              toggleDarkMode
            )}
          >
            {category.title}
          </Link>
          <span className={toggleDarkMode ? "active" : ""}>/</span>
        </Fragment>
      ))}
    </Container>
  );
}
