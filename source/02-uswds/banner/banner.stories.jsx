import parse from 'html-react-parser';

import twigTemplate from './banner.twig';
import data from './banner.yml';
import globalData from '../../00-config/storybook.global-data.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Banner',
  parameters: {
    docs: {
      description: {
        component: "See https://designsystem.digital.gov/components/banner/, https://components.designsystem.digital.gov/components/detail/banner.html, and https://designsystem.digital.gov/components/header/.",
      },
    },
  }
};

const Banner = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Banner.args = { ...globalData, ...data };

export default settings;
export { Banner };
