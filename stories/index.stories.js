import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Button from "@material-ui/core/Button";

storiesOf('Button', module)
  .add('with text', () => <Button color={"primary"} variant={"contained"} onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button variant={"outlined"} color={"primary"} onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
