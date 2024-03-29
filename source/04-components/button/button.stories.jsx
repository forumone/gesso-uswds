import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './button.twig';
import globalData from '../../00-config/storybook.global-data.yml';
import data from './button.yml';

const settings = {
  title: 'Components/Button',
  decorators: [
    (Story, { args }) => (
      <>
        <Story />
        <Story args={{ ...args, is_button_tag: false, text: 'Link Button' }} />
        <Story args={{ ...args, is_disabled: true, text: 'Disabled Button' }} />
      </>
    ),
    withGlobalWrapper,
  ],
  argTypes: {
    icon_name: {
      options: [false, ...globalData.icons],
      control: { type: 'select' },
    },
    icon_direction: {
      options: ['up', 'right', 'down', 'left'],
      control: { type: 'select' },
    },
    icon_position: {
      options: ['before', 'after', 'both'],
      control: { type: 'select' },
    },
    icon_is_hidden: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    controls: {
      include: [
        'text',
        'is_disabled',
        'button_type',
        'modifier_classes',
        'extra_attributes',
        'icon_name',
        'icon_direction',
        'icon_position',
        'icon_label',
        'icon_is_hidden',
      ],
    },
  },
};

const Default = {
  render: args => parse(twigTemplate(args)),
  args: {
    ...globalData,
    ...data,
  },
};

const Secondary = {
  ...Default,
  args: {
    ...Default.args,
    modifier_classes: 'c-button--secondary',
  },
};

const Outline = {
  ...Default,
  args: {
    ...Default.args,
    modifier_classes: 'c-button--outline',
  },
};

const Danger = {
  ...Default,
  args: {
    ...Default.args,
    modifier_classes: 'c-button--danger',
  },
};

const Small = {
  ...Default,
  args: {
    ...Default.args,
    modifier_classes: 'c-button--small',
  },
};

const Large = {
  ...Default,
  args: {
    ...Default.args,
    modifier_classes: 'c-button--large',
  },
};

export default settings;
export { Default, Secondary, Outline, Danger, Small, Large };
