import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './usa-select.twig';
import data from './usa-select.yml';
import groupsData from './usa-select--groups.yml';
import groupsTwigTemplate from '../usa-select-groups/usa-select-groups.twig';
import '../../../source/01-global/uswds/uswds.es6';
import componentInfo from './usa-select.component.yml';
import getArgTypesFromComponent from '../../../.storybook/getArgTypesFromComponent.js';

const settings = {
  title: 'USWDS/Select',
  argTypes: {
    ...getArgTypesFromComponent(componentInfo),
  },
  decorators: [withGlobalWrapper],
};

const Default = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

const GroupsSelect = {
  render: args => parse(groupsTwigTemplate(args)),
  args: { ...groupsData },
};

export default settings;
export { Default, GroupsSelect };
