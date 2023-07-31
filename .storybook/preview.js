import '../resources/app/styles/critical.scss'
import '../resources/app/styles/main.scss'
import '../resources/app/styles/utility/animations.scss'

import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}