import parse from 'html-react-parser';

import twigTemplate from './section.twig';
import data from './section.yml';
import darkData from './section--dark.yml';
import lightData from './section--light.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Section',
};

const Default = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

const DarkSection = {
  ...Default,
  args: { ...darkData },
};

const LightSection = {
  ...Default,
  args: { ...lightData },
};

export default settings;
export { Default, DarkSection, LightSection };
