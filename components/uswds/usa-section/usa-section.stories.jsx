import parse from 'html-react-parser';

import twigTemplate from './usa-section.twig';
import data from './usa-section.yml';
import darkData from './usa-section--dark.yml';
import lightData from './usa-section--light.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-section.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Section',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
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
