import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './navbar.twig';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Nav Bar',
  decorators: [withGlobalWrapper],
  parameters: {
    docs: {
      description: {
        component: 'Part of the USWDS Header component.',
      },
    },
  },
};


const NavBar = {
  render: args => parse(twigTemplate(args)),
};

export default settings;
export { NavBar };
