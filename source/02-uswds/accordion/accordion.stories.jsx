import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './accordion.twig';
import data from './accordion.yml';
import borderedData from './accordion--bordered.yml';
import multiselectableData from './accordion--multiselectable.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Accordion',
  decorators: [withGlobalWrapper],
  parameters: {
    docs: {
      description: {
        component:
          'See https://designsystem.digital.gov/components/accordion/ and https://components.designsystem.digital.gov/components/detail/accordion--default.html.',
      },
    },
  },
};

const Default = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

const Bordered = {
   ...Default,
   args: {
    ...borderedData,
   },
   parameters: {
    docs: {
      storyDescription:
        'See https://designsystem.digital.gov/components/accordion/ and https://components.designsystem.digital.gov/components/detail/accordion--bordered.html.',
    },
  },
};

const Multiselectable = {
  ...Default,
  args: {
   ...multiselectableData,
  },
  parameters: {
    docs: {
      storyDescription:
        'See https://designsystem.digital.gov/components/accordion/ and https://components.designsystem.digital.gov/components/detail/accordion--multiselectable.html.',
    },
  },
};

export default settings;
export { Default, Bordered, Multiselectable };
