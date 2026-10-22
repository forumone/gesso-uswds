import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './usa-tag.twig';
import data from './usa-tag.yml';
import bigData from './usa-tag--big.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-tag.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Tag',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
  decorators: [withGlobalWrapper],
  parameters: {
    docs: {
      description: {
        component:
          'See https://designsystem.digital.gov/components/tag/ and https://components.designsystem.digital.gov/components/detail/labels--default.html.',
      },
    },
  },
};

const Default = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

const BigTag = {
  ...Default,
  args: { ...bigData },
  parameters: {
    docs: {
      storyDescription:
        'See https://designsystem.digital.gov/components/tag/ and https://components.designsystem.digital.gov/components/detail/labels--big.html.',
    },
  },
};

export default settings;
export { Default, BigTag };
