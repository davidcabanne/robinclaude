import * as _var from "../../styles/variables";

import Layout from "@/components/Layout";
import Section from "@/components/Section";
import Group from "@/components/contact/Group";
import Footer from "@/components/contact/Footer";
import Title from "@/components/contact/Title";
import Button from "@/components/common/Button";

const Contact = ({ toggleDarkMode, handleToggleDarkMode }) => {
  return (
    <Layout
      toggleDarkMode={toggleDarkMode}
      handleToggleDarkMode={handleToggleDarkMode}
    >
      <Section>
        <Title>Get in touch</Title>
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
            <Footer>
              <Button>Email me!</Button>
              <a
                href="https://vimeo.com/robinclaude"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vimeo
              </a>
              <a
                href="https://www.instagram.com/robinclaude_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </Footer>
          </div>
          <img
            src="https://cdn.sanity.io/images/7oc2w4sf/production/ae1209f6112e4f671b93abe207a9454d92d0bbfc-3601x2433.jpg"
            style={{ filter: "grayscale(1)" }}
          />
        </Group>
      </Section>
    </Layout>
  );
};

export default Contact;
