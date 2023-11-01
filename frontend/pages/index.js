import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as _var from "../styles/variables";
import { Fade } from "react-awesome-reveal";

import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

import Layout from "../components/Layout";
import Section from "@/components/Section";
import Grid from "@/components/Home/Grid";
import Categories from "@/components/Home/Categories";
import Picture from "@/components/Picture";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Index = ({ posts, categories }) => {
  const [categoryActive, setCategoryActive] = useState("All");

  const handleCategoryActive = (category) => {
    setCategoryActive(category);
  };

  return (
    <Layout>
      <Section>
        <Categories
          categories={categories}
          categoryActive={categoryActive}
          handleCategoryActive={handleCategoryActive}
        />
        <Grid>
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
                ({ _id, title, slug = "", mainImage }) =>
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
