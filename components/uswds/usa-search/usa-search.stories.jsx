import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './usa-search.twig';
import data from './usa-search.yml';
import globalData from '../../../source/00-config/storybook.global-data.yml';
import bigData from './usa-search--big.yml';
import smallData from './usa-search--small.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-search.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Search',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
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
