import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "@material-ui/core/Button";
import { muiTheme } from "storybook-addon-material-ui";
import { theme } from "../src/theme";

storiesOf("Button", module)
  .addDecorator(muiTheme([theme]))
  .add("with text", () => (
    <Button color={"primary"} variant={"contained"} onClick={action("clicked")}>
      Primary Contained Button
    </Button>
  ))
  .add("with some emoji", () => (
    <Button variant={"outlined"} color={"secondary"} onClick={action("clicked")}>
      Secondary Outlined Button
    </Button>
  ));
