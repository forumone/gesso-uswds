import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './tag-link.twig';
import data from './tag-link.yml';
import './tag-link.source.scss';
import componentInfo from './tag-link.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'Components/Tag Link',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
  decorators: [withGlobalWrapper],
};

const TagLink = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

export default settings;
export { TagLink };
