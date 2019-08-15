import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import { addDecorator } from '@storybook/react'
import { muiTheme } from "storybook-addon-material-ui";
import { theme } from "../src/theme";
import '../src/index.css';

// automatically import all files ending in *.stories.js
const req = requireContext('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
addDecorator(muiTheme([theme]));
