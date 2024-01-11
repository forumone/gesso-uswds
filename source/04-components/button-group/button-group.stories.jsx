import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './button-group.twig';
import data from './button-group.yml';

const settings = {
  title: 'Components/Button Group',
  decorators: [withGlobalWrapper],
};

const Default = {
  render: args => parse(twigTemplate(args)),
  args: { ...data },
};

const Separated = {
  ...Default,
  args: {
    ...Default.args,
    is_separated: true,
  },
};

const Segmented = {
  ...Default,
  args: {
    ...Default.args,
    is_segmented: true,
  },
};

export default settings;
export { Default, Separated, Segmented };
