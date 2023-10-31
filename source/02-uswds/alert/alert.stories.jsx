import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './alert.twig';
import data from './alert.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Alert',
  decorators: [
    (Story, {args}) =>
      <>
        <Story />
        <Story args={{ ...args, title: false }} />
      </>, withGlobalWrapper],
  parameters: {
    docs: {
      description: {
        component:
          'See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--default.html.',
      },
    },
  },
};

const Default = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Default.args = { ...data };

const Error = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Error.args = { ...data, modifier_classes: 'usa-alert--error', title: 'Error status', role: 'alert'  };
Error.parameters = {
  docs: {
    storyDescription:
      'See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--error.html.',
  },
};

const Info = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Info.args = { ...data, modifier_classes: 'usa-alert--info', title: 'Informative status' };
Info.parameters = {
  docs: {
    storyDescription:
      'See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--default.html.',
  },
};

const NoIcon = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
NoIcon.args = { ...data, modifier_classes: 'usa-alert--no-icon usa-alert--info', title: 'Informative status' };
NoIcon.parameters = {
  docs: {
    storyDescription:
      'See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--no-icon.html.',
  },
};

const Slim = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Slim.args = { ...data, modifier_classes: 'usa-alert--slim usa-alert--info', title: 'Informative status' };
Slim.parameters = {
  docs: {
    storyDescription:
      'See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--slim.html.',
  },
};

const Success = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Success.args = { ...data, modifier_classes: 'usa-alert--success', title: 'Success status' };
Success.parameters = {
  docs: {
    storyDescription:
      'See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--success.html.',
  },
};

const Warning = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Warning.args = { ...data, modifier_classes: 'usa-alert--warning', title: 'Warning status' };
Warning.parameters = {
  docs: {
    storyDescription:
      'See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--warning.html.',
  },
};

export default settings;
export { Default, Error, Info, NoIcon, Slim, Success, Warning };
