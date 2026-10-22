import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './usa-date-input.twig';
import data from './usa-date-input.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-date-input.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Date Input',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
  decorators: [withGlobalWrapper],
  parameters: {
    docs: {
      description: {
        component:
          'See https://designsystem.digital.gov/components/form-controls/ and https://components.designsystem.digital.gov/components/detail/date-input.html.',
      },
    },
  },
};

const DateInput = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
export { DateInput };
