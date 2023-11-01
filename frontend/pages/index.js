import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import * as _var from "../styles/variables";
import { Fade } from "react-awesome-reveal";

import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

import Layout from "../components/Layout";
import Section from "@/components/Section";
import Picture from "@/components/Picture";

const Grid = styled.ul`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${_var.marginL};

  @media ${_var.device.tablet_max} {
    grid-template-columns: 1fr;
    gap: ${_var.marginL};
  }
`;

const Categories = styled.div`
  width: 100%;
  display: flex;
  gap: ${_var.marginXS};
  padding-top: ${_var.marginM};
  padding-bottom: ${_var.marginM};
  z-index: 800;

  & button,
  span {
    font-size: 16px;
    color: #b5b5b5;
  }

  & button {
    background: none;
    border: none;
    cursor: pointer;

    &.active {
      color: black;
    }
    @media ${_var.device.tablet_min} {
      &:hover {
        color: rgb(150, 150, 150);
      }
    }
  }

  & span:last-child {
    display: none;
  }
`;

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Index = ({ posts, categories }) => {
  const [categoryActive, setCategoryActive] = useState("All");

  const handleCategoryActive = (event, category) => {
    setCategoryActive(category);
  };

  return (
    <Layout>
      <Section>
        <Categories>
          <button
            onClick={(event) => handleCategoryActive(event, "All")}
            className={categoryActive === "All" ? "active" : ""}
          >
            All
          </button>
          <span>/</span>
          {categories.map((category) => (
            <>
              <button
                key={category._id}
                onClick={(event) => handleCategoryActive(event, category._id)}
                className={categoryActive === category._id ? "active" : ""}
              >
                {category.title}
              </button>
              <span key={category._rev}>/</span>
            </>
          ))}
        </Categories>
        <Grid>
          {/* <Fade cascade duration={100}> */}
          {posts.length > 0 &&
            posts
              .filter((post) => {
                if (post.categories[0]._ref === categoryActive) {
                  return post;
                }
                if (categoryActive === "All") {
                  return post;
                }
              })
              .map(
                ({ _id, title, slug = "", mainImage, category }) =>
                  slug && (
                    <li key={_id}>
                      <Link href={`/post/${encodeURIComponent(slug.current)}`}>
                        <Fade duration={500}>
                          <Picture>
                            <Image
                              src={urlFor(mainImage).url()}
                              width={500}
                              height={300}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              alt={title}
                            />
                          </Picture>
                        </Fade>
                      </Link>
                    </li>
                  )
              )}
          {/* </Fade> */}
        </Grid>
      </Section>
    </Layout>
  );
};

export async function getStaticProps() {
  const categories = await client.fetch(groq`
  *[_type == "category"]
`);

  const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);
  return {
    props: {
      posts,
      categories,
    },
  };
}

export default Index;
