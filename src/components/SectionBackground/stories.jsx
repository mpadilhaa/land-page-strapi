/* eslint-disable import/no-anonymous-default-export */
import { SectionBackground } from ".";

export default {
  title: "SectionBackground",
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          asperiores omnis voluptatibus blanditiis atque. Corrupti voluptates,
          accusantium alias iste odit odio voluptatem facilis obcaecati quod
          repudiandae nam perferendis tempore aperiam?
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: "" },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
