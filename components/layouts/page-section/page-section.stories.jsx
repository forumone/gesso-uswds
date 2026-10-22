import parse from 'html-react-parser';

import twigTemplate from './page-section.twig';
import data from './page-section.yml';
import './page-section.source.scss';
import componentInfo from './page-section.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'Layouts/Page Section',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
};

const PageSection = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
export { PageSection };
