import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './fieldset.twig';
import data from './fieldset.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Fieldset',
  decorators: [withGlobalWrapper],
};

const Fieldset = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
export { Fieldset };
