import React from "react";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import * as _var from "../styles/variables";
import { Fade } from "react-awesome-reveal";

import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

import Layout from "@/components/Layout";
import Section from "@/components/Section";
import Grid from "@/components/Home/Grid";
import Categories from "@/components/Home/Categories";
import Picture from "@/components/Picture";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Index = ({ posts, categories, toggleDarkMode, handleToggleDarkMode }) => {
  const searchParams = useSearchParams();
  const selectedCat = searchParams.get("category");

  console.log(posts);

  const handleRenderContent = (posts) => {
    const content =
      posts.length > 0 &&
      posts
        .filter((post) => {
          const categoryFilter = categories.filter((item) => {
            if (item._id === post.categories[0]._ref) {
              return item;
            }
          });
          const categoryTitle = categoryFilter[0].title.toLowerCase();

          if (categoryTitle === selectedCat) {
            return post;
          }
          if (selectedCat === "all" || selectedCat === null) {
            return post;
          }
        })
        .map(
          ({ _id, title, slug = "", mainImage, imageDescription }) =>
            slug && (
              <li key={_id} style={{ listStyle: "none" }}>
                <Link href={`/post/${encodeURIComponent(slug.current)}`}>
                  <Fade duration={500}>
                    <Picture>
                      <p>{title}</p>
                      <Image
                        src={mainImage.url}
                        width={500}
                        height={300}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={imageDescription}
                        placeholder="blur"
                        blurDataURL={mainImage.metadata.lqip}
                      />
                    </Picture>
                  </Fade>
                </Link>
              </li>
            )
        );
    return content;
  };

  return (
    <Layout
      toggleDarkMode={toggleDarkMode}
      handleToggleDarkMode={handleToggleDarkMode}
      selectedCat={selectedCat}
    >
      <Section>
        <Categories categories={categories} toggleDarkMode={toggleDarkMode} />
        <Grid>{handleRenderContent(posts)}</Grid>
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
      {
        ...,
        "mainImage": mainImage.asset->{
          url,
          metadata {
            lqip,
            blurHash,
            palette,
          }
        }
      }
    `);
  return {
    props: {
      posts,
      categories,
      revalidate: 10,
    },
  };
}

export default Index;
