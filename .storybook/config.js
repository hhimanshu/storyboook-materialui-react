import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react'
import { muiTheme } from "storybook-addon-material-ui";
import { theme } from "../src/theme";

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
addDecorator(muiTheme([theme]));
