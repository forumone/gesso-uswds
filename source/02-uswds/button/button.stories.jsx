import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './button.twig';
import data from './button.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Button',
  decorators: [
    (Story, {args}) =>
      <>
        <Story />
        <Story args={{ ...args, is_button_tag: false, text: 'Link Button' }} />
        <Story args={{ ...args, is_disabled: true, text: 'Disabled Button' }} />
      </>, withGlobalWrapper],

  parameters: {
    docs: {
      description: {
        component:
          'See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--default.html.',
      },
    },
  },
};

const Default = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

const AccentCool = {
  ...Default,
  args: {
    ...Default.args,
    modifier_classes: 'usa-button--accent-cool',
  },
  parameters: {
    docs: {
     storyDescription:
       'See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--accent-cool.html.',
    },
  },
};

const AccentWarm = {
  ...Default,
  args: {
    ...Default.args,
    modifier_classes: 'usa-button--accent-warm',
  },
  parameters: {
    docs: {
      storyDescription:
       'See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--accent-warm.html.',
    },
  },
};

const Base = {
  ...Default,
  args: {
    ...Default.args,
    modifier_classes: 'usa-button--base',
  },
  parameters: {
    docs: {
      storyDescription:
        'See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--base.html.',
    },
  },
};

const Big = {
  ...Default,
  args: {
    ...Default.args,
    modifier_classes: 'usa-button--big',
  },
  parameters: {
    docs: {
      storyDescription:
        'See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--big.html.',
    },
  },
};

const Inverse = {
  ...Default,
  args: {
    ...Default.args,
    modifier_classes: 'usa-button--outline usa-button--inverse',
  },
  parameters: {
    docs: {
      storyDescription:
        'See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--outline-inverse.html.',
    },
  },
};

const Outline = {
  ...Default,
  args: {
    ...Default.args,
    modifier_classes: 'usa-button--outline',
  },
  parameters: {
    docs: {
      storyDescription:
        'See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--outline.html.',
    },
  },
};

const Secondary = {
  ...Default,
  args: {
    ...Default.args,
    modifier_classes: 'usa-button--secondary',
  },
  parameters: {
    docs: {
      storyDescription:
        'See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--secondary.html.',
    },
  },
};

const Unstyled = {
  ...Default,
  args: {
    ...Default.args,
    modifier_classes: 'usa-button--unstyled',
  },
  parameters: {
    docs: {
      storyDescription:
        'See https://designsystem.digital.gov/components/button/.',
    },
  },
};

export default settings;
export {
  Default,
  AccentCool,
  AccentWarm,
  Base,
  Big,
  Inverse,
  Outline,
  Secondary,
  Unstyled,
};
