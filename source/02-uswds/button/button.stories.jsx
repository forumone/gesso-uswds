import parse from 'html-react-parser';

import { withGlobalWrapper } from '../../../.storybook/decorators';
import twigTemplate from './button.twig';
import data from './button.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Button',
  decorators: [
    (Story, {args}) =>
      <>
        <Story />
        <Story args={{ ...args, is_button_tag: false, text: 'Link Button' }} />
        <Story args={{ ...args, is_disabled: true, text: 'Disabled Button' }} />
      </>, withGlobalWrapper],

  parameters: {
    docs: {
      description: {
        component:
          'See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--default.html.',
      },
    },
  },
};

const Default = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Default.args = { ...data };

const AccentCool = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
AccentCool.args = { ...data, modifier_classes: 'usa-button--accent-cool', };
AccentCool.parameters = {
  docs: {
    storyDescription:
      'See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--accent-cool.html.',
  },
};

const AccentWarm = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
AccentWarm.args = { ...data, modifier_classes: 'usa-button--accent-warm', };
AccentWarm.parameters = {
  docs: {
    storyDescription:
      'See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--accent-warm.html.',
  },
};

const Base = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Base.args = { ...data, modifier_classes: 'usa-button--base', };
Base.parameters = {
  docs: {
    storyDescription:
      'See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--base.html.',
  },
};

const Big = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Big.args = { ...data, modifier_classes: 'usa-button--big', };
Big.parameters = {
  docs: {
    storyDescription:
      'See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--big.html.',
  },
};

const Inverse = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Inverse.args = { ...data, modifier_classes: 'usa-button--outline usa-button--inverse', };
Inverse.parameters = {
  docs: {
    storyDescription:
      'See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--outline-inverse.html.',
  },
};

const Outline = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Outline.args = { ...data, modifier_classes: 'usa-button--outline', };
Outline.parameters = {
  docs: {
    storyDescription:
      'See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--outline.html.',
  },
};

const Secondary = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Secondary.args = { ...data, modifier_classes: 'usa-button--secondary', };
Secondary.parameters = {
  docs: {
    storyDescription:
      'See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--secondary.html.',
  },
};

const Unstyled = args =>
  parse(
    twigTemplate({
      ...args,
    })
  );
Unstyled.args = { ...data, modifier_classes: 'usa-button--unstyled', };
Unstyled.parameters = {
  docs: {
    storyDescription:
      'See https://designsystem.digital.gov/components/button/.',
  },
};

export default settings;
export {
  Default,
  AccentCool,
  AccentWarm,
  Base,
  Big,
  Inverse,
  Outline,
  Secondary,
  Unstyled,
};
