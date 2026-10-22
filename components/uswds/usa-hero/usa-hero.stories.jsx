import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './usa-hero.twig';
import data from './usa-hero.yml';
import '../../../source/01-global/uswds/uswds.es6';
import './usa-hero.source.scss';
import componentInfo from './usa-hero.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Hero',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
  decorators: [withGlobalWrapper],
  parameters: {
    docs: {
      description: {
        component:
          'See https://components.designsystem.digital.gov/components/detail/hero.html.',
      },
    },
  },
};

const Default = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

const Right = {
  ...Default,
  args: {
    ...data,
    modifier_classes: 'has-content-right',
  },
};

export default settings;
export { Default, Right };
