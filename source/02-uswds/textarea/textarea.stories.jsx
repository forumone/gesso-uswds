import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './textarea.twig';
import data from './textarea.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Text Area',
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
