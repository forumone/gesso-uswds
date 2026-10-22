import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './usa-radio.twig';
import data from './usa-radio.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-radio.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Radio Button',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
  decorators: [withGlobalWrapper],
  parameters: {
    docs: {
      description: {
        component:
          'See [https://designsystem.digital.gov/components/form-controls/]() and [https://components.designsystem.digital.gov/components/detail/radio-buttons.html]().',
      },
    },
  },
};

const RadioButton = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
export { RadioButton };
