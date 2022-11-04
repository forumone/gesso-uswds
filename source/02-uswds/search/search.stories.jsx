import parse from 'html-react-parser';

import twigTemplate from './search.twig';
import data from './search.yml';
import globalData from '../../00-config/storybook.global-data.yml';
import bigData from './search--big.yml';
import smallData from './search--small.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Search',
  parameters: {
    docs: {
      description: {
        component: "See https://designsystem.digital.gov/components/search/ and https://components.designsystem.digital.gov/components/detail/search--default.html.",
      },
    },
  }
};

const Default = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Default.args = { ...globalData, ...data };

const BigSearch = args => (
  parse(twigTemplate({
    ...args,
  }))
);
BigSearch.args = { ...globalData, ...bigData };

const SmallSearch = args => (
  parse(twigTemplate({
    ...args,
  }))
);
SmallSearch.args = { ...globalData,...smallData };

export default settings;
export { Default, BigSearch, SmallSearch };
