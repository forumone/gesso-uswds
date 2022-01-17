import parse from 'html-react-parser';

import twigTemplate from './section.twig';
import data from './section.yml';
import darkData from './section--dark.yml';
import lightData from './section--light.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Section',
};

const Default = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Default.args = { ...data };

const DarkSection = args => (
  parse(twigTemplate({
    ...args,
  }))
);
DarkSection.args = { ...darkData };

const LightSection = args => (
  parse(twigTemplate({
    ...args,
  }))
);
LightSection.args = { ...lightData };

export default settings;
export { Default, DarkSection, LightSection };
