import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: any) => {
  console.log("Template - args.MAPBOX - 2", args.MAPBOX);

  return <Header {...args} />;
};

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {
//     name: "Jane Doe",
//   },
// };

export const LoggedOut = Template.bind({});

console.log("Default args process.env.MAPBOX", process.env.MAPBOX);

LoggedOut.args = {
  MAPBOX: process.env.MAPBOX,
} as any;
