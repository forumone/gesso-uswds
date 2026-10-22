import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './usa-input.twig';
import data from './usa-input.yml';
import dataError from './usa-input--error.yml';
import dataSuccess from './usa-input--success.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-input.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Input',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
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
