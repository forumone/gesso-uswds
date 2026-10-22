import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './usa-sidenav.twig';
import data from './usa-sidenav.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-sidenav.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Sidenav',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
  decorators: [withGlobalWrapper],
  parameters: {
    docs: {
      description: {
        component:
          'See https://designsystem.digital.gov/components/sidenav/ and https://components.designsystem.digital.gov/components/detail/sidenav--default.html.',
      },
    },
  },
};

const Sidenav = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
export { Sidenav };
