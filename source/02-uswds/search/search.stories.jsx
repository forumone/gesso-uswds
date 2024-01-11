import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './search.twig';
import data from './search.yml';
import globalData from '../../00-config/storybook.global-data.yml';
import bigData from './search--big.yml';
import smallData from './search--small.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Search',
  decorators: [withGlobalWrapper],
  parameters: {
    docs: {
      description: {
        component:
          'See https://designsystem.digital.gov/components/search/ and https://components.designsystem.digital.gov/components/detail/search--default.html.',
      },
    },
  },
};

const Default = {
  render: args => parse(twigTemplate(args)),
  args: { ...globalData, ...data },
};

const BigSearch = {
  ...Default,
  args: { ...globalData, ...bigData },
};

const SmallSearch = {
  ...Default,
  args: { ...globalData, ...smallData },
};

export default settings;
export { Default, BigSearch, SmallSearch };
