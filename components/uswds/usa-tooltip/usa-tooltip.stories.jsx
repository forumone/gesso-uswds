import React from 'react';
import ReactDOMServer from 'react-dom/server';
import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './usa-tooltip.twig';
import data from './usa-tooltip.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-tooltip.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Tooltip',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
  decorators: [
    (Story, { args }) => (
      <>
        <div class="u-spaced-5-above">
          <Story />
        </div>
        <div class="u-spaced-5-above">
          <Story
            args={{ ...args, tooltip_position: 'top', text: 'Show on Top' }}
          />
        </div>
        <div class="u-spaced-5-above">
          <Story
            args={{ ...args, tooltip_position: 'right', text: 'Show on Right' }}
          />
        </div>
        <div class="u-spaced-5-above">
          <Story
            args={{
              ...args,
              tooltip_position: 'bottom',
              text: 'Show on Bottom',
            }}
          />
        </div>
        <div class="u-spaced-5-above">
          <Story
            args={{ ...args, tooltip_position: 'left', text: 'Show on Left' }}
          />
        </div>
      </>
    ),
    withGlobalWrapper,
  ],
  parameters: {
    docs: {
      description: {
        component: 'See https://designsystem.digital.gov/components/tooltip/.',
      },
    },
  },
};

const Tooltip = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
export { Tooltip };
