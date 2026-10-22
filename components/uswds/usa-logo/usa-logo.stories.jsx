import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './usa-logo.twig';
import data from './usa-logo.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-logo.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Logo',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
  decorators: [withGlobalWrapper],
};

const Logo = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
export { Logo };
