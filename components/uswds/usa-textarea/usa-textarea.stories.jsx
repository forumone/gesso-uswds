import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './usa-textarea.twig';
import data from './usa-textarea.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-textarea.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Text Area',
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

const TextArea = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
export { TextArea };
