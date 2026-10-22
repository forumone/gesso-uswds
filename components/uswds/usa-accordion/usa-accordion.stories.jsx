import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './usa-accordion.twig';
import data from './usa-accordion.yml';
import borderedData from './usa-accordion--bordered.yml';
import multiselectableData from './usa-accordion--multiselectable.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-accordion.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Accordion',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
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
