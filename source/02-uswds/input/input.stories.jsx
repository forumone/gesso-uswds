import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './input.twig';
import data from './input.yml';
import dataError from './input--error.yml';
import dataSuccess from './input--success.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Input',
  decorators: [withGlobalWrapper],
  parameters: {
    docs: {
      description: {
        component:
          'See https://designsystem.digital.gov/components/form-controls/ and https://components.designsystem.digital.gov/components/detail/text-input.html.',
      },
    },
  },
};

const Default = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

const ErrorInput = {
  ...Default,
  args: {
    ...dataError,
  },
};

const SuccessInput = {
  ...Default,
  args: {
    ...dataSuccess,
  },
};

export default settings;
export { Default, ErrorInput, SuccessInput };
