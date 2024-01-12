import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './logo.twig';
import data from './logo.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Logo',
  decorators: [withGlobalWrapper],
};

const Logo = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
export { Logo };
