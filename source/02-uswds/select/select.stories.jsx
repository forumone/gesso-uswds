import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './select.twig';
import data from './select.yml';
import groupsData from './select--groups.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Select',
  decorators: [withGlobalWrapper],
};

const Default = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

const GroupsSelect = {
  ...Default,
  args: { ...groupsData },
};

export default settings;
export { Default, GroupsSelect };
