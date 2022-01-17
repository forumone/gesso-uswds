import parse from 'html-react-parser';

import twigTemplate from './logo.twig';
import data from './logo.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Logo',
};

const Logo = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Logo.args = { ...data };

export default settings;
export { Logo };
