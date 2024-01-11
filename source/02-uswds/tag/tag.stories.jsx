import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './tag.twig';
import data from './tag.yml';
import bigData from './tag--big.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Tag',
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
