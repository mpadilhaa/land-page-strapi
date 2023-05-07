/* eslint-disable import/no-anonymous-default-export */
import { TextComponent } from ".";

export default {
  title: "TextComponent",
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
     Inventore modi, vero obcaecati suscipit voluptatum eligendi veniam.
      Beatae veniam ullam libero dignissimos rerum eum cum similique atque,
       expedita dicta pariatur voluptate!`,
  },
  argTypes: {
    children: { type: "string" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
