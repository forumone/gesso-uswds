import parse from 'html-react-parser';

import twigTemplate from './alert.twig';
import data from './alert.yml';
import errorData from './alert--error.yml';
import infoData from './alert--info.yml';
import noIconData from './alert--no-icon.yml';
import slimData from './alert--slim.yml';
import successData from './alert--success.yml';
import warningData from './alert--warning.yml';
import '../uswds.es6';

const settings = {
  title: 'USWDS/Alert',
  parameters: {
    docs: {
      description: {
        component: "See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--default.html.",
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

const Error = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Error.args = { ...errorData };
Error.parameters = {
  docs: {
    storyDescription: "See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--error.html.",
  },
};

const Info = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Info.args = { ...infoData };
Info.parameters = {
  docs: {
    storyDescription: "See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--default.html.",
  },
};

const NoIcon = args => (
  parse(twigTemplate({
    ...args,
  }))
);
NoIcon.args = { ...noIconData };
NoIcon.parameters = {
  docs: {
    storyDescription: "See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--no-icon.html.",
  },
};

const Slim = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Slim.args = { ...slimData };
Slim.parameters = {
  docs: {
    storyDescription: "See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--slim.html.",
  },
};

const Success = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Success.args = { ...successData };
Success.parameters = {
  docs: {
    storyDescription: "See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--success.html.",
  },
};

const Warning = args => (
  parse(twigTemplate({
    ...args,
  }))
);
Warning.args = { ...warningData };
Warning.parameters = {
  docs: {
    storyDescription: "See https://designsystem.digital.gov/components/alert/ and https://components.designsystem.digital.gov/components/detail/alerts--warning.html.",
  },
};

export default settings;
export { Default, Error, Info, NoIcon, Slim, Success, Warning };
