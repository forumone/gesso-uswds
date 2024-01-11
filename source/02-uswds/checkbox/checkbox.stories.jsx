import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './checkbox.twig';
import data from './checkbox.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Checkbox',
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
