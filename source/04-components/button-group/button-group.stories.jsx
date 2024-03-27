import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import buttonGroupTemplate from './button-group.twig';
import buttonGroupItemTemplate from './button-group-item.twig';
import data from './button-group.yml';

const settings = {
  title: 'Components/Button Group',
  decorators: [withGlobalWrapper],
};

const Default = {
  render: args => {
    const buttonGroupItems = (args.button_group_data || data.button_group_data)
      .map(item => buttonGroupItemTemplate({ ...args, ...item }))
      .join('');

    return parse(
      buttonGroupTemplate({
        button_group_items: buttonGroupItems,
        ...args,
      })
    );
  },
  args: { ...data },
};

const Base = {
  ...Default,
  args: {
    ...Default.args,
    button_modifier_classes: 'c-button--base',
  },
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
export { Default, Base, Separated, Segmented };
