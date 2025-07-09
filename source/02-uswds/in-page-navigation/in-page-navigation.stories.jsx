import parse from 'html-react-parser';

import twigTemplate from './in-page-navigation.twig';
import data from './in-page-navigation.yml';
import globalData from '../../00-config/storybook.global-data.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/In-Page Navigation',
  parameters: {
    docs: {
      description: {
        component:
          'See https://designsystem.digital.gov/components/in-page-navigation/.',
      },
    },
  },
};

const InPageNavigation = {
  render: args => parse(twigTemplate(args)),
  args: { ...globalData, ...data },
};

export default settings;
export { InPageNavigation };
