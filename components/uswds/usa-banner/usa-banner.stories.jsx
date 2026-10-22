import parse from 'html-react-parser';

import twigTemplate from './usa-banner.twig';
import data from './usa-banner.yml';
import globalData from '../../../source/00-config/storybook.global-data.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-banner.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Banner',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
  parameters: {
    docs: {
      description: {
        component:
          'See https://designsystem.digital.gov/components/banner/, https://components.designsystem.digital.gov/components/detail/banner.html, and https://designsystem.digital.gov/components/header/.',
      },
    },
  },
};

const Banner = {
  render: args => parse(twigTemplate(args)),
  args: { ...globalData, ...data },
};

export default settings;
export { Banner };
