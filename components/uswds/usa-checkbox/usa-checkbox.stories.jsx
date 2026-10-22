import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './usa-checkbox.twig';
import data from './usa-checkbox.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-checkbox.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Checkbox',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
  decorators: [withGlobalWrapper],
  parameters: {
    docs: {
      description: {
        component:
          'See https://designsystem.digital.gov/components/form-controls/ and https://components.designsystem.digital.gov/components/detail/checkboxes.html.',
      },
    },
  },
};

const Checkbox = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
export { Checkbox };
