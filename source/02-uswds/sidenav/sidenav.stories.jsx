import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './sidenav.twig';
import data from './sidenav.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Sidenav',
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
