import parse from 'html-react-parser';

import twigTemplate from './button.twig';
import data from './button.yml';
import accentCoolData from './button--accent-cool.yml';
import accentWarmData from './button--accent-warm.yml';
import baseData from './button--base.yml';
import bigData from './button--big.yml';
import inverseData from './button--inverse.yml';
import outlineData from './button--outline.yml';
import secondaryData from './button--secondary.yml';
import unstyledData from './button--unstyled.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Button',
  parameters: {
    docs: {
      description: {
        component: "See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--default.html.",
      },
    },
  }
};

const Default = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Default.args = { ...data };

const AccentCool = args => (
  parse(twigTemplate({
    ...args,
  }))
);
AccentCool.args = { ...accentCoolData };
AccentCool.parameters = {
  docs: {
    storyDescription: "See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--accent-cool.html.",
  },
};

const AccentWarm = args => (
  parse(twigTemplate({
    ...args,
  }))
);
AccentWarm.args = { ...accentWarmData };
AccentWarm.parameters = {
  docs: {
    storyDescription: "See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--accent-warm.html.",
  },
};

const Base = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Base.args = { ...baseData };
Base.parameters = {
  docs: {
    storyDescription: "See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--base.html.",
  },
};

const Big = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Big.args = { ...bigData };
Big.parameters = {
  docs: {
    storyDescription: "See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--big.html.",
  },
};

const Inverse = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Inverse.args = { ...inverseData };
Inverse.parameters = {
  docs: {
    storyDescription: "See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--outline-inverse.html.",
  },
};

const Outline = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Outline.args = { ...outlineData };
Outline.parameters = {
  docs: {
    storyDescription: "See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--outline.html.",
  },
};

const Secondary = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Secondary.args = { ...secondaryData };
Secondary.parameters = {
  docs: {
    storyDescription: "See https://designsystem.digital.gov/components/button/ and https://components.designsystem.digital.gov/components/detail/buttons--secondary.html.",
  },
};

const Unstyled = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Unstyled.args = { ...unstyledData };
Unstyled.parameters = {
  docs: {
    storyDescription: "See https://designsystem.digital.gov/components/button/.",
  },
};

export default settings;
export { Default, AccentCool, AccentWarm, Base, Big, Inverse, Outline, Secondary, Unstyled };
