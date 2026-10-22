import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './usa-navbar.twig';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-navbar.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Nav Bar',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
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
