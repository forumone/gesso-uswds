import parse from 'html-react-parser';

import twigTemplate from './navbar.twig';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Nav Bar',
  parameters: {
    docs: {
      description: {
        component: "Part of the USWDS Header component.",
      },
    },
  }
};

const NavBar = args => (
  parse(twigTemplate({
    ...args,
  }))
);

export default settings;
export { NavBar };
