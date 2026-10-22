import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './usa-summary-box.twig';
import data from './usa-summary-box.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-summary-box.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Summary Box',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
  decorators: [withGlobalWrapper],
  parameters: {
    docs: {
      description: {
        component:
          'See https://designsystem.digital.gov/components/summary-box/.',
      },
    },
  },
};

const SummaryBox = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
export { SummaryBox };
