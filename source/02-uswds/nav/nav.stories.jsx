import parse from 'html-react-parser';

import twigTemplate from './nav.twig';
import data from './nav.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Nav',
};

const Nav = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Nav.args = { ...data };

export default settings;
export { Nav };
