import { useForm } from "react-hook-form";

import * as _var from "../../styles/variables";

import Layout from "@/components/Layout";
import Section from "@/components/Section";
import About from "@/components/Form/About";
import Form from "@/components/Form/Form";
import Fields from "@/components/Form/Fields";
import Group from "@/components/Form/Group";
import Label from "@/components/Form/Label";
import Error from "@/components/Form/Error";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("firstName")); // watch input value by passing the name of it

  return (
    <Layout>
      <Section>
        <About>
          <h1>Get in touch</h1>
          <p>
            I am a filmmaker based in Bordeaux, France. I have extensive
            experience with both digital and film formats. I have traveled all
            over the world and worked on hundreds of projects, from large to
            small and everything in between.
            <br />
            <br />
            Please reach out if you are interested in collaborating!
          </p>
        </About>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Fields>
            <Group>
              <Label>First Name</Label>
              <input
                placeholder="First Name"
                {...register("firstName", { required: true })}
              />
              <Error error={errors.firstName} />
            </Group>
            <Group>
              <Label>Last Name</Label>
              <input
                placeholder="Last Name"
                {...register("lastName", { required: true })}
              />
              <Error error={errors.lastName} />
            </Group>
          </Fields>
          <Fields>
            <Group>
              <Label>Phone</Label>
              <input placeholder="Phone" {...register("phone")} />
              <Error error={errors.phone} />
            </Group>
            <Group>
              <Label>Email</Label>
              <input
                placeholder="Email"
                type="email"
                {...register("email", { required: true })}
              />
              <Error error={errors.email} />
            </Group>
          </Fields>
          <input type="submit" />
        </Form>
      </Section>
    </Layout>
  );
};

export default Contact;
