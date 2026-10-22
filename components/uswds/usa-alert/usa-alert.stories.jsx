import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './usa-alert.twig';
import data from './usa-alert.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-alert.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Alert',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
  decorators: [
    (Story, { args }) => (
      <>
        <Story />
        <Story args={{ ...args, title: false }} />
      </>
    ),
    withGlobalWrapper,
  ],
  parameters: {
    docs: {
      description: {
        component:
          'See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--default.html.',
      },
    },
  },
};

const Default = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

const Error = {
  ...Default,
  args: {
    ...Default.args,
    modifier_classes: 'usa-alert--error',
    title: 'Error status',
    role: 'alert',
  },
  parameters: {
    docs: {
      storyDescription:
        'See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--error.html.',
    },
  },
};

const Info = {
  ...Default,
  args: {
    ...Default.args,
    modifier_classes: 'usa-alert--info',
    title: 'Informative status',
  },
  parameters: {
    docs: {
      storyDescription:
        'See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--default.html.',
    },
  },
};

const NoIcon = {
  ...Default,
  args: {
    ...Default.args,
    modifier_classes: 'usa-alert--no-icon usa-alert--info',
    title: 'Informative status',
  },
  parameters: {
    docs: {
      storyDescription:
        'See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--no-icon.html.',
    },
  },
};

const Slim = {
  ...Default,
  args: {
    ...Default.args,
    modifier_classes: 'usa-alert--slim usa-alert--info',
    title: 'Informative status',
  },
  parameters: {
    docs: {
      storyDescription:
        'See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--slim.html.',
    },
  },
};

const Success = {
  ...Default,
  args: {
    ...Default.args,
    modifier_classes: 'usa-alert--success',
    title: 'Success status',
  },
  parameters: {
    docs: {
      storyDescription:
        'See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--success.html.',
    },
  },
};

const Warning = {
  ...Default,
  args: {
    ...Default.args,
    modifier_classes: 'usa-alert--warning',
    title: 'Warning status',
  },
  parameters: {
    docs: {
      storyDescription:
        'See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--warning.html.',
    },
  },
};

export default settings;
export { Default, Error, Info, NoIcon, Slim, Success, Warning };
