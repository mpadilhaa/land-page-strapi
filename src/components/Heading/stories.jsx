/* eslint-disable import/no-anonymous-default-export */
import { Heading } from "./Heading";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "não sei",
  },
  argTypes: {
    children: { type: "string" },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Dark = (args) => <Heading {...args} />;
export const Light = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: "light",
  },
};

Dark.args = {
  children: "ola",
  colorDark: false,
};
