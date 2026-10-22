import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './usa-fieldset.twig';
import data from './usa-fieldset.yml';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-fieldset.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Fieldset',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
  decorators: [withGlobalWrapper],
};

const Fieldset = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
export { Fieldset };
