import parse from 'html-react-parser';

import twigTemplate from './header.twig';
import data from './header.yml';
import extendedData from './header--extended.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Header',
  parameters: {
    docs: {
      description: {
        component: "See https://designsystem.digital.gov/components/header/ and https://components.designsystem.digital.gov/components/detail/header--default.html.",
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

const Extended = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Extended.args = { ...extendedData };
Extended.parameters = {
  docs: {
    storyDescription: "See https://designsystem.digital.gov/components/header/ and https://components.designsystem.digital.gov/components/detail/header--extended.html.",
  },
};

export default settings;
export { Default, Extended };
