import Image from "next/image";
import * as _var from "../../styles/variables";

import Layout from "@/components/Layout";
import Section from "@/components/Section";
import Group from "@/components/contact/Group";
import Footer from "@/components/contact/Footer";
import Title from "@/components/contact/Title";
import Button from "@/components/common/Button";

import instagram from "../../public/images/instagram.svg";
import vimeo from "../../public/images/vimeo.svg";

const Contact = ({ toggleDarkMode, handleToggleDarkMode }) => {
  return (
    <Layout
      toggleDarkMode={toggleDarkMode}
      handleToggleDarkMode={handleToggleDarkMode}
    >
      <Section>
        <Title toggleDarkMode={toggleDarkMode}>Get in touch</Title>
        <Group>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: `${_var.marginM}`,
            }}
          >
            <p>
              I am a filmmaker based in Bordeaux, France. I have extensive
              experience with both digital and film formats. I have traveled all
              over the world and worked on hundreds of projects, from large to
              small and everything in between.
            </p>
            <p>Please reach out if you are interested in collaborating!</p>
            <Button>Email me!</Button>
            <Footer>
              <p>You can also watch my stuffs on</p>
              <a
                href="https://vimeo.com/robinclaude"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={vimeo}
                  alt="Check my videos on Vimeo"
                  height={24}
                  width={60}
                />
              </a>
              <p>and</p>
              <a
                href="https://www.instagram.com/robinclaude_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={instagram}
                  alt="Follow me on Instagram"
                  height={20}
                  width={20}
                  style={{ height: "20px", width: "20px" }}
                />
              </a>
            </Footer>
          </div>
          <Image
            src="https://cdn.sanity.io/images/7oc2w4sf/production/7218f89863829051a0acc1d6a619c8c981dbed09-2048x1366.jpg"
            priority={true}
            width={2048}
            height={1366}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={50}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAABBf/EACUQAAEEAQIFBQAAAAAAAAAAAAIBAwQRAAUhBgcTMUESIkJRcv/EABUBAQEAAAAAAAAAAAAAAAAAAAEE/8QAHBEAAgICAwAAAAAAAAAAAAAAAAEDEQISEzFR/9oADAMBAAIRAxEAPwDOb2pwhkReEdOU0iwaMzTdHD83gBdiRIseB0wM0FCO62VfGDe0lseIYk8nXHHOqikh7+rDywYkcxJQkwNF7+67LWKksjyhVeJdHZKJDVb6NfntljVgt/EjFPq8sdifjZ//2Q=="
            alt="Robin Claude holding a camera"
          />
        </Group>
      </Section>
    </Layout>
  );
};

export default Contact;
