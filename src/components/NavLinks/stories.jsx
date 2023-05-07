/* eslint-disable import/no-anonymous-default-export */
import { NavLinks } from ".";
import links from "./mock";

export default {
  title: "NavLinks",
  component: NavLinks,
  args: {
    links: links,
  },
  argTypes: null,
};

export const Template = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
